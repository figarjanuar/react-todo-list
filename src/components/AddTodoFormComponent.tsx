import { useState } from "react";
import ButtonComponent from "./ButtonComponent";
import { useTodosContext } from "../lib/hooks";

export default function AddTodoFormComponent() {
  const { handleAddTodo } = useTodosContext()

  const [todoText, setTodoText] = useState("")
  
  return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault()
        handleAddTodo(todoText)
        setTodoText("")
      }}>
        <h2 className="font-medium text-gray-900">Add a todo</h2>
        <input
          type="text"
          className="h-12 border border-black/10 my-2 text-[14px] block w-full p-4 rounded-md "
          value={todoText}
          onChange={(e) => {
            setTodoText(e.target.value)
          }}
        />
        <ButtonComponent>Add to list</ButtonComponent>
      </form>
    </div>
  )
}
