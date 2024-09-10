import Navbar from './Components/Navbar'
import { Outlet } from 'react-router-dom'
import './App.css'
import { motion } from 'framer-motion'
import MenuHide from './Components/MenuHide'

function App() {


  return (
    <motion.div className=' min-h-screen'

      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}>
      <MenuHide />
      <Navbar />

      <Outlet />
    </motion.div>
  )
}

export default App
