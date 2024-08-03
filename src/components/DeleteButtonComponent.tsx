import React from 'react';
import { useTodosContext } from '../lib/hooks';

type DeleteButtonProps = {
  id: number
}

export default function DeleteButtonComponent({ id }: DeleteButtonProps) {
  const { handleDeleteTodo } = useTodosContext()
  
  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {    
    e.stopPropagation()
    handleDeleteTodo(id)
  }

  return (
    <button onClick={handleDelete}>❌</button>
  )
}