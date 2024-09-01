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
      }
    ],
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
