import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import { App } from './App'
import './styles/index.css'

const root = document.getElementById('root')!
const app = (
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)

// Las páginas prerenderizadas se hidratan. La 404 puede servirse en cualquier URL,
// así que su HTML no tiene por qué coincidir con la ruta: se renderiza de nuevo.
if (root.firstElementChild && root.dataset.page !== '404') hydrateRoot(root, app)
else createRoot(root).render(app)
