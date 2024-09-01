import Navbar from './Components/Navbar'
import { Outlet } from 'react-router-dom'
import './App.css'

function App() {


  return (
    <div className=' min-h-screen bg-blue-950'>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default App
