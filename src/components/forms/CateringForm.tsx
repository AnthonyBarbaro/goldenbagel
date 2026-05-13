"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { CalendarDays, Check, Clock3, Loader2, PackageCheck, Printer, Sparkles, Users } from "lucide-react";
import { useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import type { UseFormRegisterReturn } from "react-hook-form";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Toast } from "@/components/ui/Toast";
import { submitPublicForm } from "@/lib/api";
import { classNames } from "@/lib/format";
import { cateringSchema, type CateringFormValues } from "@/lib/validation";

type SelectOption = {
  value: string;
  title: string;
  text: string;
};

const guestRanges: SelectOption[] = [
  { value: "5-6 guests", title: "5-6", text: "Small tray" },
  { value: "10-12 guests", title: "10-12", text: "Team breakfast" },
  { value: "15-20 guests", title: "15-20", text: "Office spread" },
  { value: "25-35 guests", title: "25-35", text: "Party table" },
  { value: "40+ guests", title: "40+", text: "Big crowd" }
];

const traySizes: SelectOption[] = [
  { value: "Half dozen mixed bagels", title: "Half dozen", text: "Easy starter tray" },
  { value: "Baker's dozen mixed bagels", title: "Baker's dozen", text: "Classic group order" },
  { value: "Baker's nosh box", title: "Nosh box", text: "Bagels plus spreads" },
  { value: "Custom tray count", title: "Custom", text: "Tell us the count" }
];

const bagelStyles: SelectOption[] = [
  { value: "Sliced, not toasted", title: "Sliced", text: "Fast to serve" },
  { value: "Toasted and sliced", title: "Toasted", text: "Ready to grab" },
  { value: "Whole bagels", title: "Whole", text: "Cafe-style tray" },
  { value: "Pre-spread bagels", title: "Pre-spread", text: "No assembly needed" }
];

const creamCheeseStyles: SelectOption[] = [
  { value: "Tubs on the side", title: "Tubs", text: "Best for groups" },
  { value: "Individual portions", title: "Portions", text: "Clean and quick" },
  { value: "Pre-spread", title: "Pre-spread", text: "Ready to serve" },
  { value: "Cafe choice", title: "Cafe choice", text: "Let us balance it" }
];

const timePresets = [
  { value: "07:00", label: "7:00 AM" },
  { value: "08:00", label: "8:00 AM" },
  { value: "09:00", label: "9:00 AM" },
  { value: "10:30", label: "10:30 AM" },
  { value: "12:00", label: "12:00 PM" },
  { value: "14:00", label: "2:00 PM" }
];

const bagelFlavors = [
  "Plain",
  "Everything",
  "Asiago",
  "Sesame",
  "Onion",
  "Poppy",
  "Cinnamon Raisin",
  "Blueberry",
  "Chocolate-Chip",
  "Jalapeno-Cheese",
  "Rainbow",
  "Assorted by cafe"
];

const creamCheeseFlavors = [
  "Plain",
  "Jalapeno",
  "Veggie",
  "Garlic Chive",
  "Spinach Artichoke",
  "Strawberry",
  "Pecan Raisin",
  "Non Dairy",
  "Assorted by cafe"
];

const extras = ["Coffee traveler", "Smoothies", "Sandwich tray", "Salad bowl", "Napkins/utensils", "Label dietary items"];

function RadioCardGroup({
  legend,
  options,
  selected,
  error,
  registration
}: {
  legend: string;
  options: SelectOption[];
  selected?: string;
  error?: string;
  registration: UseFormRegisterReturn;
}) {
  return (
    <fieldset>
      <legend className="text-sm font-black uppercase tracking-[0.18em] text-toast">{legend}</legend>
      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        {options.map((option) => {
          const active = selected === option.value;

          return (
            <label
              key={option.value}
              className={classNames(
                "group relative flex min-h-24 cursor-pointer flex-col justify-between rounded-[1.35rem] border p-4 transition duration-200",
                "motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-lift",
                active ? "border-honey bg-honey/24 shadow-lift" : "border-charcoal/10 bg-white shadow-soft"
              )}
            >
              <input type="radio" value={option.value} className="sr-only" {...registration} />
              <span className="flex items-start justify-between gap-3">
                <span>
                  <span className="block text-xl font-black text-charcoal">{option.title}</span>
                  <span className="mt-1 block text-sm font-bold text-espresso/68">{option.text}</span>
                </span>
                <span
                  className={classNames(
                    "flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition",
                    active ? "border-charcoal bg-charcoal text-white" : "border-charcoal/15 bg-cream text-transparent"
                  )}
                >
                  <Check aria-hidden="true" size={15} />
                </span>
              </span>
            </label>
          );
        })}
      </div>
      {error && <p className="mt-2 text-xs font-bold text-red-700">{error}</p>}
    </fieldset>
  );
}

function CheckboxCardGroup({
  legend,
  options,
  selectedValues,
  error,
  registration
}: {
  legend: string;
  options: string[];
  selectedValues?: string[];
  error?: string;
  registration: UseFormRegisterReturn;
}) {
  return (
    <fieldset>
      <legend className="text-sm font-black uppercase tracking-[0.18em] text-toast">{legend}</legend>
      <div className="mt-3 flex flex-wrap gap-2">
        {options.map((option) => {
          const active = selectedValues?.includes(option);

          return (
            <label
              key={option}
              className={classNames(
                "cursor-pointer rounded-full border px-4 py-3 text-sm font-black transition duration-200",
                "motion-safe:hover:-translate-y-0.5",
                active ? "border-charcoal bg-charcoal text-white shadow-soft" : "border-charcoal/10 bg-white text-espresso/76 hover:bg-cream"
              )}
            >
              <input type="checkbox" value={option} className="sr-only" {...registration} />
              {option}
            </label>
          );
        })}
      </div>
      {error && <p className="mt-2 text-xs font-bold text-red-700">{error}</p>}
    </fieldset>
  );
}

function buildCloverTicket(values: Partial<CateringFormValues>) {
  return [
    "CLOVER CATERING TICKET",
    `Date/time: ${values.eventDate || "date needed"} at ${values.eventTime || "time needed"}`,
    `Guests: ${values.guestCount || "guest range needed"}`,
    `Fulfillment: ${values.fulfillment || "pickup"}`,
    `Bagels: ${values.bagelTraySize || "tray needed"} | ${(values.bagelFlavors || []).join(", ") || "flavors needed"}`,
    `Bagel style: ${values.bagelStyle || "style needed"}`,
    `Cream cheese: ${(values.creamCheeseFlavors || []).join(", ") || "flavors needed"} | ${values.creamCheeseStyle || "style needed"}`,
    `Extras: ${(values.extras || []).join(", ") || "none"}`,
    values.dietaryNotes ? `Dietary: ${values.dietaryNotes}` : "",
    values.message ? `Notes: ${values.message}` : ""
  ]
    .filter(Boolean)
    .join("\n");
}

export function CateringForm() {
  const [toast, setToast] = useState<{ type: "success" | "error"; message: string } | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    control,
    setValue,
    formState: { errors, isSubmitting }
  } = useForm<CateringFormValues>({
    resolver: zodResolver(cateringSchema),
    defaultValues: {
      fulfillment: "pickup",
      guestCount: "",
      bagelFlavors: [],
      creamCheeseFlavors: [],
      extras: [],
      honeypot: ""
    }
  });

  const watchedValues = useWatch({ control });
  const selectedBagelFlavors = watchedValues.bagelFlavors || [];
  const selectedCreamCheeseFlavors = watchedValues.creamCheeseFlavors || [];
  const selectedExtras = watchedValues.extras || [];
  const cloverTicketSummary = buildCloverTicket(watchedValues);
  const completedSteps = [
    watchedValues.eventDate && watchedValues.eventTime,
    watchedValues.guestCount,
    watchedValues.bagelTraySize && selectedBagelFlavors.length > 0,
    watchedValues.bagelStyle && watchedValues.creamCheeseStyle && selectedCreamCheeseFlavors.length > 0,
    watchedValues.name && watchedValues.phone && watchedValues.email
  ].filter(Boolean).length;
  const progressPercent = (completedSteps / 5) * 100;

  async function onSubmit(values: CateringFormValues) {
    try {
      const response = await submitPublicForm("/catering", {
        ...values,
        cloverTicketSummary: buildCloverTicket(values)
      });
      setToast({ type: "success", message: response.message });
      reset();
    } catch (error) {
      setToast({ type: "error", message: error instanceof Error ? error.message : "Unable to submit right now." });
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="overflow-hidden rounded-[2rem] bg-white shadow-soft">
      {toast && (
        <div className="p-5 pb-0">
          <Toast type={toast.type} message={toast.message} />
        </div>
      )}
      <input type="text" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" {...register("honeypot")} />

      <div className="relative overflow-hidden bg-charcoal p-6 text-white">
        <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full border border-honey/40" aria-hidden="true" />
        <div
          className="absolute right-10 top-7 hidden h-20 w-20 rounded-full bg-honey shadow-lift motion-safe:animate-[float_4s_ease-in-out_infinite] sm:block"
          aria-hidden="true"
        >
          <span className="absolute inset-5 rounded-full bg-charcoal" />
          <span className="absolute left-5 top-3 h-3 w-5 rounded-full bg-white/35" />
        </div>
        <div className="relative flex items-center gap-3">
          <Printer aria-hidden="true" className="shrink-0 text-honey" size={25} />
          <div>
            <h2 className="text-2xl font-black">Build your catering run</h2>
            <p className="mt-1 text-sm text-white/70">Tap the cards. Your Clover ticket fills itself in.</p>
          </div>
        </div>
        <div className="relative mt-5">
          <div className="flex items-center justify-between text-xs font-black uppercase tracking-[0.16em] text-white/70">
            <span>Ticket progress</span>
            <span>{completedSteps}/5 ready</span>
          </div>
          <div className="mt-2 h-3 overflow-hidden rounded-full bg-white/12">
            <div className="h-full rounded-full bg-honey transition-all duration-500" style={{ width: `${progressPercent}%` }} />
          </div>
        </div>
      </div>

      <div className="grid gap-6 p-5 lg:grid-cols-[1fr_0.78fr] lg:p-6">
        <div className="space-y-8">
          <section className="rounded-[1.5rem] bg-cream p-4">
            <h3 className="flex items-center gap-2 text-lg font-black text-charcoal">
              <CalendarDays aria-hidden="true" size={20} />
              Pick date and pickup time
            </h3>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <Input label="Pickup date" type="date" error={errors.eventDate?.message} {...register("eventDate")} />
              <Input label="Exact pickup time" type="time" error={errors.eventTime?.message} {...register("eventTime")} />
            </div>
            <div className="mt-4">
              <p className="flex items-center gap-2 text-sm font-black text-charcoal">
                <Clock3 aria-hidden="true" size={16} />
                Quick times
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {timePresets.map((time) => (
                  <button
                    key={time.value}
                    type="button"
                    onClick={() => setValue("eventTime", time.value, { shouldDirty: true, shouldValidate: true })}
                    className={classNames(
                      "rounded-full border px-4 py-2 text-sm font-black transition motion-safe:hover:-translate-y-0.5",
                      watchedValues.eventTime === time.value
                        ? "border-charcoal bg-charcoal text-white shadow-soft"
                        : "border-charcoal/10 bg-white text-espresso/76 hover:bg-honey/20"
                    )}
                  >
                    {time.label}
                  </button>
                ))}
              </div>
            </div>
          </section>

          <RadioCardGroup
            legend="Choose party size"
            options={guestRanges}
            selected={watchedValues.guestCount}
            error={errors.guestCount?.message}
            registration={register("guestCount")}
          />

          <RadioCardGroup
            legend="Choose the bagel setup"
            options={traySizes}
            selected={watchedValues.bagelTraySize}
            error={errors.bagelTraySize?.message}
            registration={register("bagelTraySize")}
          />

          <CheckboxCardGroup
            legend="Bagel flavor picks"
            options={bagelFlavors}
            selectedValues={selectedBagelFlavors}
            error={errors.bagelFlavors?.message}
            registration={register("bagelFlavors")}
          />

          <div className="grid gap-6 xl:grid-cols-2">
            <RadioCardGroup
              legend="Bagel prep"
              options={bagelStyles}
              selected={watchedValues.bagelStyle}
              error={errors.bagelStyle?.message}
              registration={register("bagelStyle")}
            />
            <RadioCardGroup
              legend="Cream cheese style"
              options={creamCheeseStyles}
              selected={watchedValues.creamCheeseStyle}
              error={errors.creamCheeseStyle?.message}
              registration={register("creamCheeseStyle")}
            />
          </div>

          <CheckboxCardGroup
            legend="Cream cheese flavor picks"
            options={creamCheeseFlavors}
            selectedValues={selectedCreamCheeseFlavors}
            error={errors.creamCheeseFlavors?.message}
            registration={register("creamCheeseFlavors")}
          />

          <CheckboxCardGroup legend="Bonus add-ons" options={extras} selectedValues={selectedExtras} registration={register("extras")} />
        </div>

        <aside className="space-y-5 lg:sticky lg:top-28 lg:self-start">
          <div className="rounded-[1.5rem] border border-charcoal/10 bg-cream p-5">
            <h3 className="flex items-center gap-2 text-lg font-black text-charcoal">
              <Users aria-hidden="true" size={20} />
              Contact
            </h3>
            <div className="mt-4 space-y-4">
              <Input label="Name" error={errors.name?.message} {...register("name")} />
              <Input label="Phone" error={errors.phone?.message} {...register("phone")} />
              <Input label="Email" type="email" error={errors.email?.message} {...register("email")} />
            </div>
          </div>

          <div className="rounded-[1.5rem] border border-charcoal/10 bg-white p-5 shadow-soft">
            <h3 className="flex items-center gap-2 text-lg font-black text-charcoal">
              <PackageCheck aria-hidden="true" size={20} />
              Fulfillment
            </h3>
            <div className="mt-4 grid gap-3">
              {[
                { value: "pickup", title: "Pickup at cafe", text: "Fastest and simplest" },
                { value: "delivery-inquiry", title: "Ask about delivery", text: "For larger catering orders" }
              ].map((option) => {
                const active = watchedValues.fulfillment === option.value;

                return (
                  <label
                    key={option.value}
                    className={classNames(
                      "cursor-pointer rounded-[1.25rem] border p-4 transition",
                      active ? "border-honey bg-honey/20" : "border-charcoal/10 bg-cream"
                    )}
                  >
                    <input type="radio" value={option.value} className="sr-only" {...register("fulfillment")} />
                    <span className="block font-black text-charcoal">{option.title}</span>
                    <span className="mt-1 block text-sm font-bold text-espresso/68">{option.text}</span>
                  </label>
                );
              })}
            </div>
            {errors.fulfillment?.message && <p className="mt-2 text-xs font-bold text-red-700">{errors.fulfillment.message}</p>}
          </div>

          <Textarea label="Dietary notes" error={errors.dietaryNotes?.message} {...register("dietaryNotes")} />
          <Textarea label="Special notes for the ticket" error={errors.message?.message} {...register("message")} />

          <div className="rounded-[1.5rem] border border-charcoal/10 bg-charcoal p-5 text-white shadow-soft">
            <h3 className="flex items-center gap-2 text-sm font-black uppercase tracking-[0.16em] text-honey">
              <Sparkles aria-hidden="true" size={17} />
              Clover print preview
            </h3>
            <pre className="mt-3 whitespace-pre-wrap font-sans text-sm leading-6 text-white/78">{cloverTicketSummary}</pre>
          </div>

          <Button type="submit" disabled={isSubmitting} className="w-full">
            {isSubmitting && <Loader2 aria-hidden="true" className="animate-spin" size={18} />}
            Send Catering Ticket
          </Button>
        </aside>
      </div>
    </form>
  );
}
