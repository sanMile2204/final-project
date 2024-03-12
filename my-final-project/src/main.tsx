import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Overview from './pages/Overview.tsx'
import Contacts from './pages/Contacts.tsx'
import Favorites from './pages/Favorites.tsx'

const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <Overview/>
      },
      {
        path: '/overview',
        element: <Overview/>
      },
      {
        path: '/contacts',
        element: <Contacts/>
      },
      {
        path: '/favorites',
        element: <Favorites/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
