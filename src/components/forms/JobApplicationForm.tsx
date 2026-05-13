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
import { jobApplicationSchema, type JobApplicationFormValues } from "@/lib/validation";

export function JobApplicationForm() {
  const [toast, setToast] = useState<{ type: "success" | "error"; message: string } | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<JobApplicationFormValues>({
    resolver: zodResolver(jobApplicationSchema),
    defaultValues: { honeypot: "" }
  });

  async function onSubmit(values: JobApplicationFormValues) {
    try {
      const response = await submitPublicForm("/job-application", values);
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
      <Select label="Position" error={errors.position?.message} {...register("position")}>
        <option value="">Choose one</option>
        <option value="Counter team">Counter team</option>
        <option value="Kitchen team">Kitchen team</option>
        <option value="Barista">Barista</option>
        <option value="Shift lead">Shift lead</option>
        <option value="General interest">General interest</option>
      </Select>
      <Textarea label="Availability" error={errors.availability?.message} {...register("availability")} />
      <Textarea label="Experience" error={errors.experience?.message} {...register("experience")} />
      <Textarea label="Message" error={errors.message?.message} {...register("message")} />
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting && <Loader2 aria-hidden="true" className="animate-spin" size={18} />}
        Apply Online
      </Button>
    </form>
  );
}
