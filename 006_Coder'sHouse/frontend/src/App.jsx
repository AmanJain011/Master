import './App.css'
import {Outlet} from 'react-router-dom'
import Navigation from './components/shared/Navigation/Navigation'

const App = () => {
  return (
    <>
    <Navigation/>
    <Outlet/>
    </>
  )
}

export default App