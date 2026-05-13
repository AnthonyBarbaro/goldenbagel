"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/Button";
import { createOrder, type FulfillmentType, type OrderResponse } from "@/lib/api";
import type { CartItem } from "@/lib/cart";

const checkoutSchema = z.object({
  fulfillmentType: z.enum(["pickup", "delivery"]),
  name: z.string().min(2, "Enter your name."),
  phone: z.string().min(7, "Enter a phone number."),
  email: z.string().email("Enter a valid email."),
  pickupTime: z.string().min(1, "Choose a pickup time."),
  notes: z.string().max(500).optional()
});

export type CheckoutFormValues = z.infer<typeof checkoutSchema>;

type CheckoutFormProps = {
  items: CartItem[];
  onComplete: (order: OrderResponse) => void;
};

export function CheckoutForm({ items, onComplete }: CheckoutFormProps) {
  const [error, setError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      fulfillmentType: "pickup",
      pickupTime: "ASAP"
    }
  });

  async function onSubmit(values: CheckoutFormValues) {
    setError("");

    try {
      const order = await createOrder({
        cartItems: items,
        fulfillmentType: values.fulfillmentType as FulfillmentType,
        customer: {
          name: values.name,
          phone: values.phone,
          email: values.email
        },
        pickupTime: values.pickupTime,
        notes: values.notes
      });
      onComplete(order);
    } catch (caughtError) {
      setError(caughtError instanceof Error ? caughtError.message : "Something went wrong.");
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 rounded-[2rem] bg-white p-5 shadow-soft sm:p-6">
      <fieldset>
        <legend className="mb-3 text-sm font-black uppercase tracking-[0.16em] text-toast">Fulfillment</legend>
        <div className="grid grid-cols-2 gap-2 rounded-full bg-cream p-1">
          {(["pickup", "delivery"] as const).map((type) => (
            <label key={type} className="cursor-pointer">
              <input type="radio" value={type} className="peer sr-only" {...register("fulfillmentType")} />
              <span className="flex min-h-11 items-center justify-center rounded-full text-sm font-black capitalize text-charcoal peer-checked:bg-honey peer-checked:shadow-sm">
                {type}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-sm font-bold text-charcoal">
          Name
          <input className="mt-2 min-h-12 w-full rounded-2xl border border-charcoal/10 px-4" {...register("name")} />
          {errors.name && <span className="mt-1 block text-xs text-red-700">{errors.name.message}</span>}
        </label>
        <label className="text-sm font-bold text-charcoal">
          Phone
          <input className="mt-2 min-h-12 w-full rounded-2xl border border-charcoal/10 px-4" {...register("phone")} />
          {errors.phone && <span className="mt-1 block text-xs text-red-700">{errors.phone.message}</span>}
        </label>
      </div>

      <label className="block text-sm font-bold text-charcoal">
        Email
        <input type="email" className="mt-2 min-h-12 w-full rounded-2xl border border-charcoal/10 px-4" {...register("email")} />
        {errors.email && <span className="mt-1 block text-xs text-red-700">{errors.email.message}</span>}
      </label>

      <label className="block text-sm font-bold text-charcoal">
        Pickup time
        <select className="mt-2 min-h-12 w-full rounded-2xl border border-charcoal/10 px-4" {...register("pickupTime")}>
          <option value="ASAP">ASAP</option>
          <option value="15 minutes">15 minutes</option>
          <option value="30 minutes">30 minutes</option>
          <option value="45 minutes">45 minutes</option>
          <option value="60 minutes">60 minutes</option>
        </select>
        {errors.pickupTime && <span className="mt-1 block text-xs text-red-700">{errors.pickupTime.message}</span>}
      </label>

      <label className="block text-sm font-bold text-charcoal">
        Order notes
        <textarea className="mt-2 min-h-28 w-full rounded-2xl border border-charcoal/10 px-4 py-3" {...register("notes")} />
      </label>

      {error && <p className="rounded-2xl bg-red-50 p-3 text-sm font-bold text-red-800">{error}</p>}

      <Button type="submit" disabled={isSubmitting || items.length === 0} className="w-full">
        {isSubmitting && <Loader2 aria-hidden="true" className="animate-spin" size={18} />}
        Checkout
      </Button>
    </form>
  );
}
