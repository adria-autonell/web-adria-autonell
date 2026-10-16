import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router'
import { getMeta } from '../seo'

/**
 * Efectos al navegar en el cliente:
 * - Actualiza <title>, la meta description y el atributo lang.
 * - Lleva a la sección del hash o al principio de la página.
 * - Mueve el foco al contenido principal para lectores de pantalla.
 * En la primera carga no hace nada: el HTML prerenderizado ya trae todo eso.
 * Excepción: la 404 se genera en catalán pero se sirve en cualquier URL (también /es/…),
 * así que sus metadatos sí se ajustan al idioma de la URL desde el principio.
 */
export function useRouteEffects() {
  const location = useLocation()
  const first = useRef(true)

  useEffect(() => {
    const isFirst = first.current
    first.current = false
    if (isFirst && document.getElementById('root')?.dataset.page !== '404') return

    const meta = getMeta(location.pathname)
    document.title = meta.title
    document.documentElement.lang = meta.lang
    document.querySelector('meta[name="description"]')?.setAttribute('content', meta.description)
    if (isFirst) return

    const target = location.hash ? document.getElementById(decodeURIComponent(location.hash.slice(1))) : null
    if (target) {
      target.scrollIntoView()
      target.focus({ preventScroll: true })
    } else {
      window.scrollTo(0, 0)
      document.getElementById('main')?.focus({ preventScroll: true })
    }
  }, [location.pathname, location.hash, location.key])
}
