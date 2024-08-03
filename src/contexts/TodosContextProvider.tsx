import React, { createContext, useEffect, useState } from "react";
import { Todo } from "../lib/type";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

type TodosContextProps = {
  children: React.ReactNode
}

type TodosContextType = {
  todos: Todo[];
  totalTodos: number;
  totalCompletedTodos: number;
  handleAddTodo: (todoText: string) => void
  handleToggleTodo: (id: number) => void
  handleDeleteTodo: (id: number) => void
}

export const TodosContext = createContext<TodosContextType | null>(null)

const initialTodos = () => {
  const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      return JSON.parse(savedTodos)
    } else {
      return []
    }
}

export default function TodosContextProvider({ children }: TodosContextProps) {
  const { isAuthenticated } = useKindeAuth();
  
  // states
  const [todos, setTodos] = useState<Todo[]>(initialTodos);

  // derived state
  const totalTodos = todos.length;
  const totalCompletedTodos = todos.filter((todo) => todo.isCompleted).length

  // event handlers / actions
  const handleAddTodo = (todoText: string) => {
    if (todos.length >= 3 && !isAuthenticated) {
      alert('Please login to add more todo');
      return;
    }

    setTodos(prev => [
      ...prev, 
      {
        id: prev.length+1,
        text: todoText,
        isCompleted: false
      }
    ])
  }
  const handleToggleTodo = (id: number) => {
    setTodos(
      todos.map((v) => {
        if(v.id === id) {
          return { ...v, isCompleted: !v.isCompleted }
        }
        return v
      })
    )
  }
  const handleDeleteTodo = (id: number) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  }

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos]);

  return (
    <TodosContext.Provider
      value={{
        todos,
        totalTodos,
        totalCompletedTodos,
        handleAddTodo,
        handleToggleTodo,
        handleDeleteTodo
      }}>{ children }</TodosContext.Provider>
  )
}
