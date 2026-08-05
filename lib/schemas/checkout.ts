import { z } from "zod";

export const checkoutSchema = z.object({
  email: z.string().min(1, "Email is required").email("Enter a valid email address"),
  fullName: z.string().min(2, "Enter your full name"),
  cardNumber: z
    .string()
    .min(1, "Card number is required")
    .regex(/^[\d\s]{13,19}$/, "Enter a valid card number"),
  expiry: z
    .string()
    .min(1, "Expiry is required")
    .regex(/^(0[1-9]|1[0-2])\/\d{2}$/, "Use MM/YY format"),
  cvc: z
    .string()
    .min(1, "CVC is required")
    .regex(/^\d{3,4}$/, "Enter a valid CVC"),
  country: z.string().min(1, "Select a country"),
});

export type CheckoutFormValues = z.infer<typeof checkoutSchema>;
