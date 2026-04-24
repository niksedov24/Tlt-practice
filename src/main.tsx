import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"

import { store } from "./app/store"
import "./index.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Layout } from "./components/layout"
import { Hero } from "./pages/Hero"
import { Catalog } from "./pages/Catalog"
import { Library } from "./pages/Biblioteka"
import Cabinet from "./pages/Cabinet"
import CabinetTeacher from "./pages/CabinetTeacher"


const container = document.getElementById("root")

if (container) {
  const root = createRoot(container)

  const router = createBrowserRouter([
    {
      path: "/auth",
      element: <h1>Auth</h1>
    },
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <Hero />
        },
        {
          path: "/catalog",
          element: <Catalog />
        },
        {
          path: "/library",
          element: <Library />
        },
        {
          path: "/cabinet",
          element: <Cabinet />
        },
        {
          path: "/cabinetTeacher",
          element: <CabinetTeacher />
        },
      ]
    },

  ])

  root.render(
    <StrictMode>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </StrictMode>,
  )
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file.",
  )
}
