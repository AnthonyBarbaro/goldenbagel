"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronDown, Clock3, Loader2, MapPin, ShieldCheck } from "lucide-react";
import { useEffect, useState, type ChangeEvent } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/Button";
import { primaryLocation } from "@/config/site";
import { createOrder, type FulfillmentType, type OrderResponse } from "@/lib/api";
import type { CartItem } from "@/lib/cart";
import { getAvailableImmediatePickupOptions, getNextOpenMessage, getNextOpenPickupOptions, isStoreOpenNow } from "@/lib/hours";

function phoneDigits(value: string) {
  const digits = value.replace(/\D/g, "");
  return digits.length === 11 && digits.startsWith("1") ? digits.slice(1) : digits;
}

const checkoutSchema = z.object({
  fulfillmentType: z.literal("pickup"),
  firstName: z.string().trim().min(1, "Enter your first name.").max(80, "Keep your first name under 80 characters."),
  lastName: z.string().trim().min(1, "Enter your last name.").max(80, "Keep your last name under 80 characters."),
  phone: z.string().trim().refine((value) => phoneDigits(value).length === 10, "Enter a 10-digit phone number."),
  email: z.string().trim().email("Enter a valid email.").max(254, "Enter a shorter email."),
  pickupTime: z.string().min(1, "Choose a pickup time."),
  notes: z.string().max(500).optional()
});

export type CheckoutFormValues = z.infer<typeof checkoutSchema>;

type CheckoutFormProps = {
  items: CartItem[];
  subtotalCents: number;
  onComplete: (order: OrderResponse) => void;
};

type PickupStoreStatus = {
  acceptingImmediatePickup: boolean;
  message: string;
  immediatePickupOptions: string[];
  scheduledPickupOptions: string[];
};

type SavedCheckoutCustomer = Pick<CheckoutFormValues, "firstName" | "lastName" | "phone" | "email">;

const SAVED_CHECKOUT_CUSTOMER_KEY = "goldenbagel.checkoutCustomer.v1";
const emptyScheduledPickupOptions: string[] = [];

function formatCurrency(cents: number) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(cents / 100);
}

function formatPhoneNumber(value: string) {
  const rawDigits = value.replace(/\D/g, "");
  const digits = (rawDigits.length > 10 && rawDigits.startsWith("1") ? rawDigits.slice(1) : rawDigits).slice(0, 10);

  if (digits.length <= 3) {
    return digits;
  }

  if (digits.length <= 6) {
    return `${digits.slice(0, 3)}-${digits.slice(3)}`;
  }

  return `${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6)}`;
}

function getPickupStoreStatus() {
  const immediatePickupOptions = getAvailableImmediatePickupOptions(primaryLocation.hours, primaryLocation.timezone);
  const storeOpen = isStoreOpenNow(primaryLocation.hours, primaryLocation.timezone);

  return {
    acceptingImmediatePickup: immediatePickupOptions.length > 0,
    message:
      immediatePickupOptions.length > 0
        ? getNextOpenMessage(primaryLocation.hours, primaryLocation.timezone)
        : storeOpen
          ? "Today’s pickup window is full"
          : getNextOpenMessage(primaryLocation.hours, primaryLocation.timezone),
    immediatePickupOptions,
    scheduledPickupOptions: getNextOpenPickupOptions(primaryLocation.hours, primaryLocation.timezone)
  };
}

function readSavedCheckoutCustomer(): SavedCheckoutCustomer | null {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    const raw = window.localStorage.getItem(SAVED_CHECKOUT_CUSTOMER_KEY);

    if (!raw) {
      return null;
    }

    const saved = JSON.parse(raw) as Partial<SavedCheckoutCustomer>;

    if (
      typeof saved.firstName !== "string" ||
      typeof saved.lastName !== "string" ||
      typeof saved.phone !== "string" ||
      typeof saved.email !== "string"
    ) {
      return null;
    }

    return {
      firstName: saved.firstName,
      lastName: saved.lastName,
      phone: formatPhoneNumber(saved.phone),
      email: saved.email
    };
  } catch {
    return null;
  }
}

function updateSavedCheckoutCustomer(values: CheckoutFormValues, rememberCustomer: boolean) {
  try {
    if (!rememberCustomer) {
      window.localStorage.removeItem(SAVED_CHECKOUT_CUSTOMER_KEY);
      return true;
    }

    window.localStorage.setItem(
      SAVED_CHECKOUT_CUSTOMER_KEY,
      JSON.stringify({
        firstName: values.firstName.trim(),
        lastName: values.lastName.trim(),
        phone: formatPhoneNumber(values.phone),
        email: values.email.trim()
      } satisfies SavedCheckoutCustomer)
    );
    return true;
  } catch {
    return false;
  }
}

const inputClassName =
  "mt-2 min-h-12 w-full rounded-xl border border-charcoal/10 bg-white px-4 text-base text-charcoal outline-none transition focus:border-honey focus:ring-4 focus:ring-honey/20";

export function CheckoutForm({ items, subtotalCents, onComplete }: CheckoutFormProps) {
  const [error, setError] = useState("");
  const [storageNotice, setStorageNotice] = useState("");
  const [storeStatus, setStoreStatus] = useState<PickupStoreStatus | null>(null);
  const [rememberCustomer, setRememberCustomer] = useState(false);
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors, isSubmitting }
  } = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      fulfillmentType: "pickup",
      pickupTime: ""
    }
  });
  const pickupStatusKnown = storeStatus !== null;
  const pickupOpen = storeStatus?.acceptingImmediatePickup ?? false;
  const pickupStatusMessage = storeStatus?.message || "Checking pickup hours...";
  const immediatePickupOptions = storeStatus?.immediatePickupOptions || emptyScheduledPickupOptions;
  const scheduledPickupOptions = storeStatus?.scheduledPickupOptions || emptyScheduledPickupOptions;
  const firstScheduledPickupTime = scheduledPickupOptions[0] || "";
  const canSubmitOrder = pickupStatusKnown && (pickupOpen || scheduledPickupOptions.length > 0);
  const phoneInput = register("phone");

  useEffect(() => {
    const savedCustomer = readSavedCheckoutCustomer();

    if (!savedCustomer) {
      return;
    }

    setValue("firstName", savedCustomer.firstName);
    setValue("lastName", savedCustomer.lastName);
    setValue("phone", savedCustomer.phone);
    setValue("email", savedCustomer.email);
    const rememberFrame = window.requestAnimationFrame(() => setRememberCustomer(true));

    return () => window.cancelAnimationFrame(rememberFrame);
  }, [setValue]);

  useEffect(() => {
    const updateStoreStatus = () => setStoreStatus(getPickupStoreStatus());
    const interval = window.setInterval(updateStoreStatus, 60_000);

    updateStoreStatus();
    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!pickupStatusKnown) {
      return;
    }

    const currentPickupTime = getValues("pickupTime");

    if (!pickupOpen) {
      if (!scheduledPickupOptions.includes(currentPickupTime)) {
        setValue("pickupTime", firstScheduledPickupTime, { shouldValidate: true });
      }

      return;
    }

    if (!immediatePickupOptions.includes(currentPickupTime)) {
      setValue("pickupTime", "ASAP", { shouldValidate: true });
    }
  }, [firstScheduledPickupTime, getValues, immediatePickupOptions, pickupOpen, pickupStatusKnown, scheduledPickupOptions, setValue]);

  function applyEmailDomain(domain: "@gmail.com" | "@yahoo.com") {
    const currentEmail = getValues("email").trim();
    const localPart = currentEmail.split("@")[0];

    if (!localPart) {
      document.getElementById("checkout-email")?.focus();
      return;
    }

    setValue("email", `${localPart}${domain}`, {
      shouldDirty: true,
      shouldValidate: true
    });
  }

  function handlePhoneChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.value = formatPhoneNumber(event.target.value);
    void phoneInput.onChange(event);
  }

  async function onSubmit(values: CheckoutFormValues) {
    setError("");

    if (!pickupStatusKnown) {
      setError("Checking pickup hours. Please try again in a moment.");
      return;
    }

    try {
      if (!updateSavedCheckoutCustomer(values, rememberCustomer)) {
        setStorageNotice("Your details could not be saved on this device, but you can still continue.");
      }

      const order = await createOrder({
        cartItems: items,
        fulfillmentType: values.fulfillmentType as FulfillmentType,
        customer: {
          name: `${values.firstName.trim()} ${values.lastName.trim()}`.trim(),
          phone: formatPhoneNumber(values.phone),
          email: values.email.trim()
        },
        pickupTime: values.pickupTime.trim(),
        notes: values.notes?.trim()
      });
      onComplete(order);
    } catch (caughtError) {
      setError(caughtError instanceof Error ? caughtError.message : "Something went wrong.");
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      aria-busy={isSubmitting}
      className="space-y-4 rounded-[1.25rem] border border-charcoal/10 bg-white p-3 pb-[calc(6rem+env(safe-area-inset-bottom))] shadow-soft sm:space-y-5 sm:rounded-[1.5rem] sm:p-5 lg:sticky lg:top-24"
    >
      <input type="hidden" value="pickup" {...register("fulfillmentType")} />

      <div className="rounded-2xl bg-charcoal p-4 text-white">
        <div className="flex flex-col gap-3 min-[380px]:flex-row min-[380px]:items-center min-[380px]:justify-between">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.16em] text-honey">Estimated subtotal</p>
            <p className="mt-1 text-xs font-bold text-white/65">Taxes and tips appear on payment.</p>
          </div>
          <p className="text-2xl font-black min-[380px]:text-right">{formatCurrency(subtotalCents)}</p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-black text-charcoal sm:text-2xl">Pickup Details</h2>
        <p className="mt-1 text-sm font-bold text-espresso/72">A few details, then Clover handles secure payment.</p>
      </div>

      <div className="grid gap-2 rounded-2xl border border-honey/35 bg-sesame/35 p-4 text-sm font-bold text-charcoal sm:grid-cols-2">
        <span className="flex items-start gap-2">
          <MapPin aria-hidden="true" className="mt-0.5 shrink-0 text-toast" size={17} />
          2744 Fletcher Pkwy
        </span>
        <span className="flex items-start gap-2 sm:justify-end">
          <Clock3 aria-hidden="true" className="mt-0.5 shrink-0 text-toast" size={17} />
          {pickupStatusMessage}
        </span>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-sm font-bold text-charcoal">
          First name
          <input
            className={inputClassName}
            autoComplete="given-name"
            aria-invalid={Boolean(errors.firstName)}
            aria-describedby={errors.firstName ? "checkout-first-name-error" : undefined}
            {...register("firstName")}
          />
          {errors.firstName && (
            <span id="checkout-first-name-error" className="mt-1 block text-xs text-red-700">
              {errors.firstName.message}
            </span>
          )}
        </label>
        <label className="text-sm font-bold text-charcoal">
          Last name
          <input
            className={inputClassName}
            autoComplete="family-name"
            aria-invalid={Boolean(errors.lastName)}
            aria-describedby={errors.lastName ? "checkout-last-name-error" : undefined}
            {...register("lastName")}
          />
          {errors.lastName && (
            <span id="checkout-last-name-error" className="mt-1 block text-xs text-red-700">
              {errors.lastName.message}
            </span>
          )}
        </label>
      </div>

      <label className="block text-sm font-bold text-charcoal">
        Phone
        <input
          type="tel"
          inputMode="numeric"
          className={inputClassName}
          autoComplete="tel"
          placeholder="619-464-2243"
          maxLength={16}
          aria-invalid={Boolean(errors.phone)}
          aria-describedby={errors.phone ? "checkout-phone-error" : undefined}
          {...phoneInput}
          onChange={handlePhoneChange}
        />
        {errors.phone && (
          <span id="checkout-phone-error" className="mt-1 block text-xs text-red-700">
            {errors.phone.message}
          </span>
        )}
      </label>

      <div>
        <label htmlFor="checkout-email" className="block text-sm font-bold text-charcoal">
          Email
        </label>
        <input
          id="checkout-email"
          type="email"
          inputMode="email"
          className={inputClassName}
          autoComplete="email"
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "checkout-email-error" : undefined}
          {...register("email")}
        />
        <div className="mt-2 grid grid-cols-2 gap-2">
          {(["@gmail.com", "@yahoo.com"] as const).map((domain) => (
            <button
              key={domain}
              type="button"
              onClick={() => applyEmailDomain(domain)}
              className="min-h-11 rounded-full border border-charcoal/10 bg-cream px-3 text-sm font-black text-charcoal transition hover:bg-sesame focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-honey"
            >
              {domain}
            </button>
          ))}
        </div>
        {errors.email && (
          <span id="checkout-email-error" className="mt-1 block text-xs text-red-700">
            {errors.email.message}
          </span>
        )}
      </div>

      <label className="flex items-start gap-3 rounded-xl border border-charcoal/10 bg-cream/55 p-3 text-sm font-bold text-charcoal">
        <input
          type="checkbox"
          checked={rememberCustomer}
          onChange={(event) => setRememberCustomer(event.target.checked)}
          className="mt-1 h-4 w-4 rounded border-charcoal/20 accent-honey"
        />
        <span>
          Remember my info
          <span className="mt-1 block text-xs font-semibold leading-5 text-espresso/70">Saved on this device for faster checkout.</span>
        </span>
      </label>

      <label className="block text-sm font-bold text-charcoal">
        Pickup time
        <span className="relative block">
          <select
            className={`${inputClassName} appearance-none pr-12`}
            disabled={!pickupStatusKnown}
            aria-invalid={Boolean(errors.pickupTime)}
            aria-describedby={errors.pickupTime ? "checkout-pickup-time-error" : undefined}
            {...register("pickupTime")}
          >
            {!pickupStatusKnown ? (
              <option value="">Checking pickup hours...</option>
            ) : pickupOpen ? (
              <>
                {immediatePickupOptions.map((pickupTime) => (
                  <option key={pickupTime} value={pickupTime}>
                    {pickupTime}
                  </option>
                ))}
              </>
            ) : scheduledPickupOptions.length > 0 ? (
              scheduledPickupOptions.map((pickupTime) => (
                <option key={pickupTime} value={pickupTime}>
                  {pickupTime}
                </option>
              ))
            ) : (
              <option value="">Next pickup time unavailable</option>
            )}
          </select>
          <ChevronDown
            aria-hidden="true"
            className="pointer-events-none absolute right-4 top-1/2 mt-1 -translate-y-1/2 text-espresso/70"
            size={20}
          />
        </span>
        {errors.pickupTime && (
          <span id="checkout-pickup-time-error" className="mt-1 block text-xs text-red-700">
            {errors.pickupTime.message}
          </span>
        )}
        {pickupStatusKnown && !pickupOpen && (
          <span className="mt-2 block text-xs font-bold text-toast">
            {pickupStatusMessage}. Pick a scheduled time for the next open day.
          </span>
        )}
      </label>

      <label className="block text-sm font-bold text-charcoal">
        Notes
        <textarea
          className="mt-2 min-h-24 w-full rounded-xl border border-charcoal/10 bg-white px-4 py-3 text-charcoal outline-none transition focus:border-honey focus:ring-4 focus:ring-honey/20"
          placeholder="Optional"
          maxLength={500}
          {...register("notes")}
        />
      </label>

      {storageNotice && <p className="rounded-2xl bg-sesame/45 p-3 text-sm font-bold text-espresso/75">{storageNotice}</p>}
      {error && (
        <p role="alert" className="rounded-2xl bg-red-50 p-3 text-sm font-bold text-red-800">
          {error}
        </p>
      )}

      <p className="text-center text-xs font-bold text-espresso/70">Prices are rechecked, then you review and pay on Clover.</p>

      <div className="fixed inset-x-0 bottom-[calc(4.5rem+env(safe-area-inset-bottom))] z-40 border-t border-charcoal/10 bg-white/96 px-4 py-3 shadow-[0_-12px_28px_rgba(32,24,20,0.10)] backdrop-blur-xl sm:static sm:mx-0 sm:border-0 sm:bg-transparent sm:p-0 sm:shadow-none">
        <Button type="submit" disabled={isSubmitting || items.length === 0 || !canSubmitOrder} className="w-full">
          {isSubmitting && <Loader2 aria-hidden="true" className="animate-spin" size={18} />}
          {!isSubmitting && <ShieldCheck aria-hidden="true" size={18} />}
          {isSubmitting ? "Preparing secure checkout…" : "Continue to Clover"}
        </Button>
      </div>
    </form>
  );
}
