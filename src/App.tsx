import HeaderComponent from "./components/HeaderComponent"
import HeadingComponent from "./components/HeadingComponent"
import SidebarComponent from "./components/SidebarComponent"
import TodoListComponent from "./components/TodoListComponent"

function App(): JSX.Element {
  return (
    <div className="flex justify-center items-center font-sans bg-slate-400 min-h-screen flex-col">
      <HeadingComponent />

      <main className="relative w-[972px] h-[646px] bg-white rounded-md shadow-md grid grid-cols-[7fr_4fr] grid-rows-[60px_1fr] overflow-hidden">
        <HeaderComponent />
        <TodoListComponent />
        <SidebarComponent />
      </main>

      <footer></footer>
    </div>
  )
}

export default App
