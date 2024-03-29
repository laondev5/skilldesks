import * as z from "zod";

export const FormSchema = z
  .object({
    fullname: z.string().min(1, "Fullname is required").max(100),
    email: z.string().min(1, "Email is required").email("Invalid email"),
    password: z
      .string()
      .min(1, "Password is required")
      .min(8, "Password must have than 8 characters"),
    confirmPassword: z.string().min(1, "Password confirmation is required"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Password do not match",
  });

// export const RegistrationFormValues = z.infer(RegistrationFormSchema);
// export const RegistrationFormErrors = ZodError.create(RegistrationFormSchema);
