import { z,ZodType } from "zod";
import { FormItems } from "../types";

export const BasicPersonalFormSchema:ZodType<Partial<FormItems>> = z.object({
  name: z.string().min(1, { message: "This field is required" }),
  email: z.string().min(1, { message: "This field is required" }),
  phone: z.string().min(1, { message: "This field is required" }),
});
