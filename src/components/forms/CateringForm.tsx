"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { CalendarDays, Loader2, Printer } from "lucide-react";
import { useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import type { UseFormRegisterReturn } from "react-hook-form";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Textarea } from "@/components/ui/Textarea";
import { Toast } from "@/components/ui/Toast";
import { submitPublicForm } from "@/lib/api";
import { cateringSchema, type CateringFormValues } from "@/lib/validation";

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

function CheckboxGroup({
  legend,
  options,
  error,
  registration
}: {
  legend: string;
  options: string[];
  error?: string;
  registration: UseFormRegisterReturn;
}) {
  return (
    <fieldset className="rounded-[1.5rem] bg-cream p-4">
      <legend className="mb-3 text-sm font-black text-charcoal">{legend}</legend>
      <div className="grid gap-2 sm:grid-cols-2">
        {options.map((option) => (
          <label key={option} className="flex min-h-11 cursor-pointer items-center gap-3 rounded-2xl bg-white px-3 text-sm font-bold text-espresso/82">
            <input type="checkbox" value={option} className="h-4 w-4 accent-honey" {...registration} />
            <span>{option}</span>
          </label>
        ))}
      </div>
      {error && <p className="mt-2 text-xs font-bold text-red-700">{error}</p>}
    </fieldset>
  );
}

function buildCloverTicket(values: Partial<CateringFormValues>) {
  return [
    "CLOVER CATERING TICKET",
    `Event: ${values.eventType || "event type needed"}`,
    `Date/time: ${values.eventDate || "date needed"} at ${values.eventTime || "time needed"}`,
    `Guests: ${values.guestCount || "guest count needed"}`,
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
    formState: { errors, isSubmitting }
  } = useForm<CateringFormValues>({
    resolver: zodResolver(cateringSchema),
    defaultValues: {
      fulfillment: "pickup",
      bagelFlavors: [],
      creamCheeseFlavors: [],
      extras: [],
      honeypot: ""
    }
  });

  const watchedValues = useWatch({ control });
  const cloverTicketSummary = buildCloverTicket(watchedValues);

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
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 rounded-[2rem] bg-white p-6 shadow-soft">
      {toast && <Toast type={toast.type} message={toast.message} />}
      <input type="text" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" {...register("honeypot")} />

      <div className="flex items-center gap-3 rounded-[1.5rem] bg-charcoal p-4 text-white">
        <Printer aria-hidden="true" className="shrink-0 text-honey" size={24} />
        <div>
          <h2 className="font-black">Clover catering ticket</h2>
          <p className="mt-1 text-sm text-white/70">Pick the tray, flavors, and prep style. The request is formatted for Clover order notes and kitchen printing.</p>
        </div>
      </div>

      <section className="space-y-4">
        <h3 className="flex items-center gap-2 text-lg font-black text-charcoal">
          <CalendarDays aria-hidden="true" size={20} />
          Event details
        </h3>
        <div className="grid gap-4 sm:grid-cols-2">
          <Input label="Name" error={errors.name?.message} {...register("name")} />
          <Input label="Phone" error={errors.phone?.message} {...register("phone")} />
        </div>
        <Input label="Email" type="email" error={errors.email?.message} {...register("email")} />
        <Select label="Event type" error={errors.eventType?.message} {...register("eventType")}>
          <option value="">Choose one</option>
          <option value="Office meeting">Office meeting</option>
          <option value="Birthday party">Birthday party</option>
          <option value="Baby shower">Baby shower</option>
          <option value="School or team event">School or team event</option>
          <option value="Weekend brunch">Weekend brunch</option>
          <option value="Other large order">Other large order</option>
        </Select>
        <div className="grid gap-4 sm:grid-cols-3">
          <Input label="Event date" type="date" error={errors.eventDate?.message} {...register("eventDate")} />
          <Input label="Ready time" type="time" error={errors.eventTime?.message} {...register("eventTime")} />
          <Input label="Guest count" type="number" min={1} error={errors.guestCount?.message} {...register("guestCount")} />
        </div>
        <Select label="Fulfillment" error={errors.fulfillment?.message} {...register("fulfillment")}>
          <option value="pickup">Pickup at cafe</option>
          <option value="delivery-inquiry">Ask about delivery/setup</option>
        </Select>
      </section>

      <section className="space-y-4">
        <h3 className="text-lg font-black text-charcoal">Bagel tray</h3>
        <Select label="Tray size" error={errors.bagelTraySize?.message} {...register("bagelTraySize")}>
          <option value="">Choose one</option>
          <option value="Half dozen mixed bagels">Half dozen mixed bagels</option>
          <option value="Baker's dozen mixed bagels">Baker&apos;s dozen mixed bagels</option>
          <option value="Baker's nosh box">Baker&apos;s nosh box</option>
          <option value="Custom tray count">Custom tray count</option>
        </Select>
        <CheckboxGroup legend="Bagel flavors" options={bagelFlavors} error={errors.bagelFlavors?.message} registration={register("bagelFlavors")} />
        <Select label="Bagel style" error={errors.bagelStyle?.message} {...register("bagelStyle")}>
          <option value="">Choose one</option>
          <option value="Sliced, not toasted">Sliced, not toasted</option>
          <option value="Toasted and sliced">Toasted and sliced</option>
          <option value="Whole bagels">Whole bagels</option>
          <option value="Pre-spread bagels">Pre-spread bagels</option>
          <option value="Cafe choice">Cafe choice</option>
        </Select>
      </section>

      <section className="space-y-4">
        <h3 className="text-lg font-black text-charcoal">Cream cheese and extras</h3>
        <CheckboxGroup
          legend="Cream cheese flavors"
          options={creamCheeseFlavors}
          error={errors.creamCheeseFlavors?.message}
          registration={register("creamCheeseFlavors")}
        />
        <Select label="Cream cheese style" error={errors.creamCheeseStyle?.message} {...register("creamCheeseStyle")}>
          <option value="">Choose one</option>
          <option value="Tubs on the side">Tubs on the side</option>
          <option value="Individual portions">Individual portions</option>
          <option value="Pre-spread">Pre-spread</option>
          <option value="Cafe choice">Cafe choice</option>
        </Select>
        <CheckboxGroup legend="Add-ons" options={extras} error={errors.extras?.message} registration={register("extras")} />
      </section>

      <Textarea label="Dietary notes" error={errors.dietaryNotes?.message} {...register("dietaryNotes")} />
      <Textarea label="Anything else for the Clover ticket?" error={errors.message?.message} {...register("message")} />

      <div className="rounded-[1.5rem] border border-charcoal/10 bg-cream p-4">
        <h3 className="text-sm font-black uppercase tracking-[0.16em] text-toast">Print preview</h3>
        <pre className="mt-3 whitespace-pre-wrap font-sans text-sm leading-6 text-espresso/78">{cloverTicketSummary}</pre>
      </div>

      <Button type="submit" disabled={isSubmitting} className="w-full">
        {isSubmitting && <Loader2 aria-hidden="true" className="animate-spin" size={18} />}
        Send Catering Ticket
      </Button>
    </form>
  );
}
