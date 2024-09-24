import Navbar from './Components/Navbar'
import { Outlet } from 'react-router-dom'
import './App.css'
import { motion } from 'framer-motion'
import MenuHide from './Components/MenuHide'
import Footer from './Components/Footer'
import BojanD from './Components/BojanD'
import ScrollToTop from './Components/ScrollToTop'
import ScrollTop from './Components/ScrollTop'
import MiniMenu from './Components/MiniMenu'
function App() {


  return (
    <motion.div className=' min-h-screen'

      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}>
      <MiniMenu />
      <MenuHide />
      <ScrollTop />
      <Navbar />
      <ScrollToTop />
      <Outlet />
      <Footer />
      <BojanD />
    </motion.div>
  )
}

export default App
