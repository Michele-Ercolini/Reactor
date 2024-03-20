import { RouterProvider } from "react-router-dom"
import router from "./router"
import { DarkContextProvider } from "./Contexts/Contexts"
import { UserContextProvider } from "./Contexts/Contexts"

function App() {

  return (
    <>
      <UserContextProvider>
        <DarkContextProvider>
          <RouterProvider router={router} />
        </DarkContextProvider>
      </UserContextProvider>
    </>
  )
}

export default App
