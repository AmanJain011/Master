import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import Register from './pages/Register/Register.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/register',
        element: <Register/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
