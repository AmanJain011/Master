import { Outlet } from "react-router-dom"
import './App.css'
import { Toaster } from "react-hot-toast"

const App = () => {
  return (
    <>
    <Toaster
      position="top-right"
      toastOptions={{
        success:{
          iconTheme:{
            primary: '#4aee88'
          }
        }
      }}
    />
    <Outlet/>
    </>
  )
}

export default App