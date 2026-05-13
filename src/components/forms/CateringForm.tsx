"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft, ArrowRight, Check, Clock3, Coffee, Loader2, PackageCheck, Printer, Sparkles, Trophy } from "lucide-react";
import { useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import type { FieldErrors, UseFormRegisterReturn } from "react-hook-form";
import type { ReactNode } from "react";
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

type Stage = {
  title: string;
  label: string;
  text: string;
  complete: boolean;
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

function StagePanel({
  eyebrow,
  title,
  text,
  children
}: {
  eyebrow: string;
  title: string;
  text: string;
  children: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden rounded-[1.75rem] border border-charcoal/10 bg-cream p-5 shadow-soft">
      <div className="absolute right-5 top-5 hidden h-16 w-16 rounded-full bg-honey/30 sm:block" aria-hidden="true">
        <span className="absolute inset-4 rounded-full bg-cream" />
      </div>
      <p className="text-sm font-black uppercase tracking-[0.2em] text-toast">{eyebrow}</p>
      <h3 className="mt-3 max-w-xl font-serif text-4xl font-black leading-tight text-charcoal">{title}</h3>
      <p className="mt-3 max-w-2xl text-sm font-bold leading-6 text-espresso/68">{text}</p>
      <div className="mt-6 space-y-6">{children}</div>
    </section>
  );
}

function SummaryLine({ label, value }: { label: string; value?: string }) {
  return (
    <div className="rounded-2xl bg-white/8 p-3">
      <p className="text-[0.68rem] font-black uppercase tracking-[0.16em] text-white/48">{label}</p>
      <p className="mt-1 text-sm font-black text-white">{value || "Not picked yet"}</p>
    </div>
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
  const [activeStage, setActiveStage] = useState(0);
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
  const stages: Stage[] = [
    {
      title: "Time",
      label: "Level 1",
      text: "Set the drop",
      complete: Boolean(watchedValues.eventDate && watchedValues.eventTime && watchedValues.guestCount)
    },
    {
      title: "Tray",
      label: "Level 2",
      text: "Pick the board",
      complete: Boolean(watchedValues.bagelTraySize && selectedBagelFlavors.length > 0)
    },
    {
      title: "Spread",
      label: "Level 3",
      text: "Choose flavors",
      complete: Boolean(watchedValues.bagelStyle && watchedValues.creamCheeseStyle && selectedCreamCheeseFlavors.length > 0)
    },
    {
      title: "Boosts",
      label: "Level 4",
      text: "Add power-ups",
      complete: Boolean(watchedValues.fulfillment)
    },
    {
      title: "Send",
      label: "Final",
      text: "Lock it in",
      complete: Boolean(watchedValues.name && watchedValues.phone && watchedValues.email)
    }
  ];
  const selectedFlavorCount = selectedBagelFlavors.length + selectedCreamCheeseFlavors.length;
  const ticketScore = completedSteps * 200 + selectedFlavorCount * 25 + selectedExtras.length * 40;
  const activeStageData = stages[activeStage];
  const canGoBack = activeStage > 0;
  const canGoNext = activeStage < stages.length - 1;

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

  function onInvalid(formErrors: FieldErrors<CateringFormValues>) {
    if (formErrors.eventDate || formErrors.eventTime || formErrors.guestCount) {
      setActiveStage(0);
    } else if (formErrors.bagelTraySize || formErrors.bagelFlavors) {
      setActiveStage(1);
    } else if (formErrors.bagelStyle || formErrors.creamCheeseStyle || formErrors.creamCheeseFlavors) {
      setActiveStage(2);
    } else if (formErrors.fulfillment) {
      setActiveStage(3);
    } else {
      setActiveStage(4);
    }

    setToast({ type: "error", message: "Finish the highlighted level, then send the catering ticket." });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit, onInvalid)} className="overflow-hidden rounded-[2rem] bg-white shadow-soft">
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
        <div className="space-y-5">
          <div className="rounded-[1.5rem] border border-charcoal/10 bg-white p-3 shadow-soft">
            <div className="grid grid-cols-5 gap-2" role="tablist" aria-label="Catering builder levels">
              {stages.map((stage, index) => {
                const active = activeStage === index;

                return (
                  <button
                    key={stage.title}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => setActiveStage(index)}
                    className={classNames(
                      "min-h-20 rounded-[1.15rem] border p-2 text-left transition duration-200",
                      "focus-visible:outline focus-visible:outline-4 focus-visible:outline-honey",
                      active ? "border-charcoal bg-charcoal text-white shadow-lift" : "border-charcoal/10 bg-cream text-charcoal hover:bg-honey/20"
                    )}
                  >
                    <span className="flex items-center justify-between gap-2">
                      <span className="text-[0.63rem] font-black uppercase tracking-[0.12em] opacity-70">{stage.label}</span>
                      <span
                        className={classNames(
                          "flex h-5 w-5 items-center justify-center rounded-full",
                          stage.complete ? "bg-honey text-charcoal" : active ? "bg-white/12 text-white/45" : "bg-white text-charcoal/30"
                        )}
                      >
                        <Check aria-hidden="true" size={12} />
                      </span>
                    </span>
                    <span className="mt-2 block text-sm font-black leading-tight">{stage.title}</span>
                    <span className="mt-1 hidden text-[0.7rem] font-bold opacity-70 sm:block">{stage.text}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="rounded-[1.5rem] bg-honey/20 p-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-toast">{activeStageData.label}</p>
                <p className="mt-1 text-xl font-black text-charcoal">{activeStageData.title}: {activeStageData.text}</p>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-black text-charcoal shadow-soft">
                <Trophy aria-hidden="true" size={17} className="text-toast" />
                {ticketScore} pts
              </div>
            </div>
          </div>

          {activeStage === 0 && (
            <StagePanel eyebrow="Level 1" title="Choose the drop time and party size." text="Start with when the tray should be ready, then pick the guest range that feels closest.">
              <div className="grid gap-4 sm:grid-cols-2">
                <Input label="Pickup date" type="date" error={errors.eventDate?.message} {...register("eventDate")} />
                <Input label="Exact pickup time" type="time" error={errors.eventTime?.message} {...register("eventTime")} />
              </div>
              <div>
                <p className="flex items-center gap-2 text-sm font-black text-charcoal">
                  <Clock3 aria-hidden="true" size={16} />
                  Quick time tiles
                </p>
                <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
                  {timePresets.map((time) => (
                    <button
                      key={time.value}
                      type="button"
                      onClick={() => setValue("eventTime", time.value, { shouldDirty: true, shouldValidate: true })}
                      className={classNames(
                        "min-h-14 rounded-[1rem] border px-4 py-2 text-sm font-black transition motion-safe:hover:-translate-y-1",
                        watchedValues.eventTime === time.value
                          ? "border-charcoal bg-charcoal text-white shadow-lift"
                          : "border-charcoal/10 bg-white text-espresso/76 hover:bg-honey/20"
                      )}
                    >
                      {time.label}
                    </button>
                  ))}
                </div>
              </div>
              <RadioCardGroup
                legend="Party size"
                options={guestRanges}
                selected={watchedValues.guestCount}
                error={errors.guestCount?.message}
                registration={register("guestCount")}
              />
            </StagePanel>
          )}

          {activeStage === 1 && (
            <StagePanel eyebrow="Level 2" title="Build the bagel board." text="Pick the tray base, then stack the bagel flavors customers will see on the ticket.">
              <RadioCardGroup
                legend="Tray setup"
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
            </StagePanel>
          )}

          {activeStage === 2 && (
            <StagePanel eyebrow="Level 3" title="Set the spread strategy." text="Choose how the bagels should be prepped, then pick the cream cheese flavors.">
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
            </StagePanel>
          )}

          {activeStage === 3 && (
            <StagePanel eyebrow="Level 4" title="Add power-ups and pickup style." text="Add extras, choose fulfillment, and leave any dietary notes the cafe should see.">
              <CheckboxCardGroup legend="Bonus add-ons" options={extras} selectedValues={selectedExtras} registration={register("extras")} />
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  { value: "pickup", title: "Pickup at cafe", text: "Fastest and simplest", icon: PackageCheck },
                  { value: "delivery-inquiry", title: "Ask about delivery", text: "For larger catering orders", icon: Coffee }
                ].map((option) => {
                  const active = watchedValues.fulfillment === option.value;
                  const Icon = option.icon;

                  return (
                    <label
                      key={option.value}
                      className={classNames(
                        "cursor-pointer rounded-[1.25rem] border p-4 transition motion-safe:hover:-translate-y-1",
                        active ? "border-honey bg-honey/24 shadow-lift" : "border-charcoal/10 bg-white shadow-soft"
                      )}
                    >
                      <input type="radio" value={option.value} className="sr-only" {...register("fulfillment")} />
                      <span className="flex items-center gap-3">
                        <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-charcoal text-honey">
                          <Icon aria-hidden="true" size={20} />
                        </span>
                        <span>
                          <span className="block font-black text-charcoal">{option.title}</span>
                          <span className="mt-1 block text-sm font-bold text-espresso/68">{option.text}</span>
                        </span>
                      </span>
                    </label>
                  );
                })}
              </div>
              {errors.fulfillment?.message && <p className="text-xs font-bold text-red-700">{errors.fulfillment.message}</p>}
              <Textarea label="Dietary notes" error={errors.dietaryNotes?.message} {...register("dietaryNotes")} />
            </StagePanel>
          )}

          {activeStage === 4 && (
            <StagePanel eyebrow="Final level" title="Send the Clover-ready ticket." text="Add contact details and final notes so the cafe can review the build.">
              <div className="grid gap-4 sm:grid-cols-3">
                <Input label="Name" error={errors.name?.message} {...register("name")} />
                <Input label="Phone" error={errors.phone?.message} {...register("phone")} />
                <Input label="Email" type="email" error={errors.email?.message} {...register("email")} />
              </div>
              <Textarea label="Special notes for the ticket" error={errors.message?.message} {...register("message")} />
              <Button type="submit" disabled={isSubmitting} className="w-full">
                {isSubmitting && <Loader2 aria-hidden="true" className="animate-spin" size={18} />}
                Send Catering Ticket
              </Button>
            </StagePanel>
          )}

          <div className="flex items-center justify-between gap-3 rounded-[1.5rem] border border-charcoal/10 bg-white p-3 shadow-soft">
            <button
              type="button"
              disabled={!canGoBack}
              onClick={() => setActiveStage((stage) => Math.max(stage - 1, 0))}
              className="inline-flex min-h-12 items-center gap-2 rounded-full px-4 text-sm font-black text-charcoal transition hover:bg-cream disabled:cursor-not-allowed disabled:opacity-40"
            >
              <ArrowLeft aria-hidden="true" size={17} />
              Back
            </button>
            <button
              type="button"
              disabled={!canGoNext}
              onClick={() => setActiveStage((stage) => Math.min(stage + 1, stages.length - 1))}
              className="inline-flex min-h-12 items-center gap-2 rounded-full bg-charcoal px-5 text-sm font-black text-white shadow-soft transition hover:bg-espresso disabled:cursor-not-allowed disabled:opacity-40"
            >
              Next level
              <ArrowRight aria-hidden="true" size={17} />
            </button>
          </div>
        </div>

        <aside className="space-y-5 lg:sticky lg:top-28 lg:self-start">
          <div className="overflow-hidden rounded-[1.5rem] bg-charcoal text-white shadow-lift">
            <div className="bg-honey p-5 text-charcoal">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.18em]">Catering score</p>
                  <p className="mt-1 text-4xl font-black">{ticketScore}</p>
                </div>
                <Trophy aria-hidden="true" size={46} />
              </div>
            </div>
            <div className="grid gap-3 p-5">
              <SummaryLine label="Drop" value={watchedValues.eventDate && watchedValues.eventTime ? `${watchedValues.eventDate} at ${watchedValues.eventTime}` : undefined} />
              <SummaryLine label="Guests" value={watchedValues.guestCount} />
              <SummaryLine label="Tray" value={watchedValues.bagelTraySize} />
              <SummaryLine label="Bagel flavors" value={selectedBagelFlavors.join(", ")} />
              <SummaryLine label="Cream cheese" value={selectedCreamCheeseFlavors.join(", ")} />
              <SummaryLine label="Extras" value={selectedExtras.join(", ")} />
            </div>
          </div>

          <div className="rounded-[1.5rem] border border-charcoal/10 bg-white p-5 shadow-soft">
            <h3 className="flex items-center gap-2 text-sm font-black uppercase tracking-[0.16em] text-toast">
              <Sparkles aria-hidden="true" size={17} />
              Unlocks
            </h3>
            <div className="mt-4 grid gap-2">
              {stages.map((stage) => (
                <div key={stage.title} className="flex items-center justify-between rounded-2xl bg-cream px-3 py-2 text-sm font-black text-charcoal">
                  <span>{stage.title}</span>
                  <span className={stage.complete ? "text-toast" : "text-charcoal/35"}>{stage.complete ? "Ready" : "Open"}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[1.5rem] border border-charcoal/10 bg-charcoal p-5 text-white shadow-soft">
            <h3 className="flex items-center gap-2 text-sm font-black uppercase tracking-[0.16em] text-honey">
              <Printer aria-hidden="true" size={17} />
              Clover print preview
            </h3>
            <pre className="mt-3 whitespace-pre-wrap font-sans text-sm leading-6 text-white/78">{cloverTicketSummary}</pre>
          </div>
        </aside>
      </div>
    </form>
  );
}
