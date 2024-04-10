"use client"

import toast from "react-hot-toast"

import { ToDoSchema } from "@/validators/todo-schema"
import { addTodo } from "@/server-actions/add-todo"


export default function ToDoForm() {
  const clientAction = async (formData: FormData) => {
    const todo = {
      content: formData.get("todo"),
      id: 15,
    }


    // client-side validation
    // const result = ToDoSchema.safeParse(todo);
    // if (!result.success) {
    //   // console.log(result.error.issues);

    //   let errorMessage = "";

    //   result.error.format();

    //   result.error.issues.forEach((issue) => {
    //     errorMessage += issue.message + ". \n"
    //   })

    //   toast.error(errorMessage);
    //   return;
    // } 

    // server-action
    const response= await addTodo(todo);
    if(response?.error) {
      toast.error(response.error);
      return;
    }
    toast.success("Added data")
  }


  return (
    <form
      action={clientAction}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
      }}
    >
      <label htmlFor="todo">
        Enter new todo
      </label>

      <input
        type="text"
        name="todo"
        placeholder="Add a todo..."
        style={{
          padding: "0.5rem 1rem",
          borderRadius: "10px",
          backgroundColor: "white",
          color: "black",
        }}
      />

      <button
        type="submit"
        style={{
          padding: "0.5rem 1rem",
          borderRadius: "10px",
          backgroundColor: "whitesmoke",
          color: "black",
          cursor: "pointer",
        }}
      >
        Add todo
      </button>
    </form>
  )
}
