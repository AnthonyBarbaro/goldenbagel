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
import { cateringSchema, type CateringFormValues } from "@/lib/validation";

export function CateringForm() {
  const [toast, setToast] = useState<{ type: "success" | "error"; message: string } | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<CateringFormValues>({
    resolver: zodResolver(cateringSchema),
    defaultValues: { honeypot: "" }
  });

  async function onSubmit(values: CateringFormValues) {
    try {
      const response = await submitPublicForm("/catering", values);
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
      <div className="grid gap-4 sm:grid-cols-3">
        <Input label="Event date" type="date" error={errors.eventDate?.message} {...register("eventDate")} />
        <Input label="Event time" type="time" error={errors.eventTime?.message} {...register("eventTime")} />
        <Input label="Guest count" type="number" min={1} error={errors.guestCount?.message} {...register("guestCount")} />
      </div>
      <Select label="Catering needs" error={errors.cateringType?.message} {...register("cateringType")}>
        <option value="">Choose one</option>
        <option value="Bagel trays">Bagel trays</option>
        <option value="Breakfast meeting">Breakfast meeting</option>
        <option value="Sandwiches and salads">Sandwiches and salads</option>
        <option value="Custom event">Custom event</option>
      </Select>
      <Textarea label="Message" error={errors.message?.message} {...register("message")} />
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting && <Loader2 aria-hidden="true" className="animate-spin" size={18} />}
        Request Catering
      </Button>
    </form>
  );
}
