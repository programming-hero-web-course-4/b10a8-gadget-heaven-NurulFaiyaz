import {
createBrowserRouter,
RouterProvider,
} from "react-router-dom"
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from "./Components/Home"
import Products from "./Components/Products"


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [(
      {
        path: '/',
        element: <Products></Products>
        
      }
    )]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
