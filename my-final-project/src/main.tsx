import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Overview from './pages/Overview.tsx'
import Contacts from './pages/Contacts.tsx'
import Favorites from './pages/Favorites.tsx'
import { Provider } from 'react-redux'
import store from './store/store.ts'

const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <Navigate to="/overview" />
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
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
