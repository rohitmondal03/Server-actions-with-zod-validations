"use server"

import { revalidatePath } from "next/cache";
import { z } from "zod";

import {ToDoSchema} from "@/validators/todo-schema"


export const addTodo = async (formData: unknown) => {
  // z.infer<typeof ToDoSchema>
  const result = ToDoSchema.safeParse(formData);
    if (!result.success) {
      let errorMessage = "";
      result.error.format();

      result.error.issues.forEach((issue) => {
        errorMessage += issue.message + ". \n"
      })

      return {
        error: errorMessage,
      }
    } 

  revalidatePath("/")
}