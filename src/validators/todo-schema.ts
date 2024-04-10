import { z } from "zod";

export const ToDoSchema = z.object({
    id: z
      .number()
      .optional(),
    content: z
      .string()
      .trim()
      .min(1, {
        message: "Must be atleast 1 char"
      })
      .max(100, {
        message: "Must be atmost 100 chars"
      })
  })