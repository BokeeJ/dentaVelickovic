import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Pocetna from './Pages/Pocetna'
import Galerija from './Pages/Galerija'
import Kontakt from './Pages/Kontakt'
import Tim from './Pages/Tim'
import Usluge from './Pages/Usluge'
import Izbeljivanje from './Pages/Izbeljivanje.jsx'
import Preventiva from './Pages/Preventiva'
import Lecenje from './Pages/Lecenje.jsx'
import Protetika from './Pages/Protetika.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Pocetna />,

      },
      {
        path: '/galerija',
        element: <Galerija />,
      },
      {
        path: '*',
        element: <h1>Page not found</h1>,
      },
      {
        path: '/kontakt',
        element: <Kontakt />
      },
      {
        path: '/tim',
        element: <Tim />,
      },
      {
        path: '/usluge',
        element: <Usluge />,
      },
      {
        path: '/izbeljivanje',
        element: <Izbeljivanje />,
      },
      {
        path: '/preventiva',
        element: <Preventiva />,
      },
      {
        path: '/lecenje',
        element: <Lecenje />,
      },
      {
        path: '/protetika',
        element: <Protetika />,
      }
    ],
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
