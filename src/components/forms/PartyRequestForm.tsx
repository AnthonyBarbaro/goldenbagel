"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Textarea } from "@/components/ui/Textarea";
import { Toast } from "@/components/ui/Toast";
import { submitPublicForm } from "@/lib/api";
import { partyRequestSchema, type PartyRequestFormValues } from "@/lib/validation";

export function PartyRequestForm() {
  const [toast, setToast] = useState<{ type: "success" | "error"; message: string } | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<PartyRequestFormValues>({
    resolver: zodResolver(partyRequestSchema),
    defaultValues: { honeypot: "" }
  });

  async function onSubmit(values: PartyRequestFormValues) {
    try {
      const response = await submitPublicForm("/party-request", values);
      setToast({ type: "success", message: response.message });
      reset();
    } catch (error) {
      setToast({ type: "error", message: error instanceof Error ? error.message : "Unable to submit right now." });
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 rounded-[2rem] bg-white p-6 shadow-soft">
      {toast && <Toast type={toast.type} message={toast.message} />}
      <input type="text" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" {...register("honeypot")} />
      <div className="grid gap-4 sm:grid-cols-2">
        <Input label="Name" error={errors.name?.message} {...register("name")} />
        <Input label="Phone" error={errors.phone?.message} {...register("phone")} />
      </div>
      <Input label="Email" type="email" error={errors.email?.message} {...register("email")} />
      <Select label="Event type" error={errors.eventType?.message} {...register("eventType")}>
        <option value="">Choose one</option>
        <option value="Birthday party">Birthday party</option>
        <option value="Baby shower">Baby shower</option>
        <option value="Office function">Office function</option>
        <option value="Private event">Private event</option>
        <option value="Other">Other</option>
      </Select>
      <div className="grid gap-4 sm:grid-cols-3">
        <Input label="Desired date" type="date" error={errors.eventDate?.message} {...register("eventDate")} />
        <Input label="Desired time" type="time" error={errors.eventTime?.message} {...register("eventTime")} />
        <Input label="Guest count" type="number" min={1} error={errors.guestCount?.message} {...register("guestCount")} />
      </div>
      <Textarea label="Special requests" error={errors.requests?.message} {...register("requests")} />
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting && <Loader2 aria-hidden="true" className="animate-spin" size={18} />}
        Send Party Request
      </Button>
    </form>
  );
}
