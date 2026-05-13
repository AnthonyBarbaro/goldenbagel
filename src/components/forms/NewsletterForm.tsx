"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/Button";
import { Toast } from "@/components/ui/Toast";
import { submitPublicForm } from "@/lib/api";
import { newsletterSchema, type NewsletterFormValues } from "@/lib/validation";

export function NewsletterForm() {
  const [toast, setToast] = useState<{ type: "success" | "error"; message: string } | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<NewsletterFormValues>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: { source: "website", honeypot: "" }
  });

  async function onSubmit(values: NewsletterFormValues) {
    try {
      const response = await submitPublicForm("/newsletter", values);
      setToast({ type: "success", message: response.message });
      reset();
    } catch (error) {
      setToast({ type: "error", message: error instanceof Error ? error.message : "Unable to submit right now." });
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md space-y-3">
      <input type="hidden" {...register("source")} />
      <input type="text" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" {...register("honeypot")} />
      <div className="flex gap-2">
        <label className="sr-only" htmlFor="newsletter-email">
          Email address
        </label>
        <input
          id="newsletter-email"
          type="email"
          placeholder="you@example.com"
          className="min-h-12 flex-1 rounded-full border border-white/20 bg-white px-5 text-charcoal shadow-inner"
          {...register("email")}
        />
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting && <Loader2 aria-hidden="true" className="animate-spin" size={18} />}
          Join
        </Button>
      </div>
      {errors.email && <p className="text-sm font-bold text-honey">{errors.email.message}</p>}
      {toast && <Toast type={toast.type} message={toast.message} />}
    </form>
  );
}
