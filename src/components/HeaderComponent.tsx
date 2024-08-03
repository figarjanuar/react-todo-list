import { useTodosContext } from "../lib/hooks"

export default function HeaderComponent() {
  const { totalCompletedTodos, totalTodos } = useTodosContext()

  return (
    <header className="flex justify-between items-center px-3 col-[1/3] row-[1/2] bg-slate-200 border-b">
      <img src="https://bytegrad.com/course-assets/react-nextjs/dots.png" />

      <p>
        <strong>{
          totalCompletedTodos
        }</strong> / { totalTodos } todos completed
      </p>
    </header>
  )
}
