import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './index.css'
import { Login } from './pages/Login/Login.tsx'
import { Profile } from './pages/Profile/Profile.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />
  },
  {
    path: "/profile",
    element: <Profile />
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
