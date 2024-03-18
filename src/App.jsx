import { RouterProvider } from "react-router-dom"
import router from "./router"
import { DarkContextProvider } from "./Context/Context"

function App() {

  return (
    <>
      <DarkContextProvider>
        <RouterProvider router={router} />
      </DarkContextProvider>
    </>
  )
}

export default App
