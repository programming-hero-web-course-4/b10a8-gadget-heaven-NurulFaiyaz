import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import Statistics from "./Components/Statistics"
import Dashboard from "./Components/Dashboard"
import Layout from "./Components/Layout"
import Home from "./Components/Home"
import Gadget from "./Components/Gadget"


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout></Layout>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('../category.json'),
        children: [
          {
            path: '/',
            element: <Gadget></Gadget>,
            loader: ()=> fetch('../productData.json')
          },
          {
            path: '/gadget/:smart',
            element: <Gadget></Gadget>,
            loader: ()=> fetch('../productData.json')
          }
        ]
        
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
