import DeleteButtonComponent from "./DeleteButtonComponent";
import { useTodosContext } from "../lib/hooks";

export default function TodoListComponent() {
  const { todos, handleToggleTodo } = useTodosContext()

  return (
    <ul className="overflow-x-auto">
      {todos.length === 0 && 
        <li className="h-full flex items-center justify-center font-semibold">Start by adding todo</li>
      }

      {todos.map((todo) => 
        <li 
          onClick={() => { handleToggleTodo(todo.id) }}
          key={todo.id}
          className={`flex justify-between items-center border-b py-4 px-2 cursor-pointer`}
        >
          <span 
            className={`${todo.isCompleted ? 'line-through text-gray-200' : ''}`}
          >
            {todo.text}
          </span>
          <DeleteButtonComponent id={todo.id} />
        </li>
      )}
    </ul>
  )
}