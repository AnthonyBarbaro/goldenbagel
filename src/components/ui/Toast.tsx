import { CheckCircle2, CircleAlert } from "lucide-react";
import { classNames } from "@/lib/format";

type ToastProps = {
  type: "success" | "error";
  message: string;
};

export function Toast({ type, message }: ToastProps) {
  const Icon = type === "success" ? CheckCircle2 : CircleAlert;

  return (
    <div
      role="status"
      className={classNames(
        "flex items-start gap-3 rounded-2xl p-4 text-sm font-bold",
        type === "success" ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"
      )}
    >
      <Icon aria-hidden="true" className="mt-0.5 shrink-0" size={18} />
      <span>{message}</span>
    </div>
  );
}
