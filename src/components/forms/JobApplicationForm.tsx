"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { FileText, Loader2, Upload } from "lucide-react";
import type { ChangeEvent } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Toast } from "@/components/ui/Toast";
import { submitPublicForm } from "@/lib/api";
import { classNames } from "@/lib/format";
import { jobApplicationSchema, type JobApplicationFormValues } from "@/lib/validation";

const availabilityDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const maxResumeSize = 2_000_000;

type ResumeUpload = NonNullable<JobApplicationFormValues["resume"]>;

export function JobApplicationForm() {
  const [toast, setToast] = useState<{ type: "success" | "error"; message: string } | null>(null);
  const [resume, setResume] = useState<ResumeUpload | undefined>();
  const [resumeError, setResumeError] = useState("");
  const [loadingResume, setLoadingResume] = useState(false);
  const [resumeInputKey, setResumeInputKey] = useState(0);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<JobApplicationFormValues>({
    resolver: zodResolver(jobApplicationSchema),
    defaultValues: { availability: [], honeypot: "" }
  });

  function clearResume() {
    setResume(undefined);
    setResumeError("");
    setResumeInputKey((key) => key + 1);
  }

  function handleResumeChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    setResume(undefined);
    setResumeError("");

    if (!file) {
      return;
    }

    if (file.size > maxResumeSize) {
      setResumeError("Use a resume file under 2 MB.");
      return;
    }

    setLoadingResume(true);
    const reader = new FileReader();

    reader.onload = () => {
      setResume({
        fileName: file.name,
        contentType: file.type || "application/octet-stream",
        size: file.size,
        dataUrl: String(reader.result || "")
      });
      setLoadingResume(false);
    };

    reader.onerror = () => {
      setResumeError("Unable to attach that file. Try another resume.");
      setLoadingResume(false);
    };

    reader.readAsDataURL(file);
  }

  async function onSubmit(values: JobApplicationFormValues) {
    if (resumeError || loadingResume) {
      return;
    }

    try {
      const response = await submitPublicForm("/job-application", { ...values, resume });
      setToast({ type: "success", message: response.message });
      reset();
      clearResume();
    } catch (error) {
      setToast({ type: "error", message: error instanceof Error ? error.message : "Unable to submit right now." });
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 rounded-[2rem] bg-white p-6 shadow-soft">
      {toast && <Toast type={toast.type} message={toast.message} />}
      <input type="text" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" {...register("honeypot")} />
      <div className="grid gap-4 sm:grid-cols-2">
        <Input label="Name" autoComplete="name" error={errors.name?.message} {...register("name")} />
        <Input label="Phone" autoComplete="tel" error={errors.phone?.message} {...register("phone")} />
      </div>
      <Input label="Email" type="email" autoComplete="email" error={errors.email?.message} {...register("email")} />

      <fieldset>
        <legend className="text-sm font-bold text-charcoal">Days available, 7 AM to 3 PM</legend>
        <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
          {availabilityDays.map((day) => (
            <label key={day} className="cursor-pointer">
              <input type="checkbox" value={day} className="peer sr-only" {...register("availability")} />
              <span
                className={classNames(
                  "flex min-h-11 items-center justify-center rounded-full bg-cream px-3 text-sm font-black text-charcoal ring-1 ring-charcoal/10 transition",
                  "peer-checked:bg-honey peer-checked:ring-honey"
                )}
              >
                {day.slice(0, 3)}
              </span>
            </label>
          ))}
        </div>
        {errors.availability && <span className="mt-2 block text-xs font-bold text-red-700">{errors.availability.message}</span>}
      </fieldset>

      <label className="block text-sm font-bold text-charcoal">
        Resume
        <span className="mt-2 flex min-h-14 cursor-pointer items-center justify-between gap-3 rounded-2xl border border-dashed border-charcoal/20 bg-cream px-4 text-charcoal transition hover:border-honey">
          <span className="flex min-w-0 items-center gap-3">
            {resume ? <FileText aria-hidden="true" className="shrink-0 text-toast" size={20} /> : <Upload aria-hidden="true" className="shrink-0 text-toast" size={20} />}
            <span className="truncate text-sm font-black">{loadingResume ? "Attaching resume..." : resume?.fileName || "Attach resume, optional"}</span>
          </span>
          {resume ? (
            <button
              type="button"
              onClick={(event) => {
                event.preventDefault();
                clearResume();
              }}
              className="rounded-full bg-white px-3 py-1 text-xs font-black text-charcoal shadow-soft"
            >
              Remove
            </button>
          ) : null}
        </span>
        <input
          key={resumeInputKey}
          type="file"
          name="resume"
          accept=".pdf,.doc,.docx,.txt"
          className="sr-only"
          onChange={handleResumeChange}
        />
        {resumeError && <span className="mt-2 block text-xs font-bold text-red-700">{resumeError}</span>}
      </label>

      <Textarea
        label="Message"
        placeholder="Anything we should know before scheduling an interview?"
        error={errors.message?.message}
        {...register("message")}
      />
      <Button type="submit" disabled={isSubmitting || loadingResume || Boolean(resumeError)}>
        {(isSubmitting || loadingResume) && <Loader2 aria-hidden="true" className="animate-spin" size={18} />}
        Send Info
      </Button>
    </form>
  );
}
