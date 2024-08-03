import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import AddTodoFormComponent from "./AddTodoFormComponent";
import ButtonComponent from "./ButtonComponent";

export default function SidebarComponent() {
  const { login, register, logout, isAuthenticated, isLoading, user } = useKindeAuth();

  function isLoggedIn() {
    return (<>
      <p>Logged in as  {user?.email}</p>
      <ButtonComponent onClick={logout} type="secondary">Log out</ButtonComponent>
    </>)
  }

  function isNotLoggedIn() {
    return (<>
      <ButtonComponent onClick={login} type="secondary">Log in</ButtonComponent>
      <ButtonComponent onClick={register} type="secondary">Register</ButtonComponent>
    </>)
  }

  return (
    <section className="col-[2/3] row-[2/3] border-l px-6 pt-4 pb-7 flex flex-col">
      <AddTodoFormComponent />

      <div className="mt-auto flex flex-col gap-2">
        {isLoading ? null :isAuthenticated 
          ? isLoggedIn()
          : isNotLoggedIn()}
      </div>
    </section>
  )
}
