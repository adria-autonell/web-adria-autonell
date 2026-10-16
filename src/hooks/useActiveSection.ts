import { useEffect, useState } from 'react'

/**
 * Devuelve el id de la sección que ocupa la franja central de la pantalla.
 * Usa IntersectionObserver (sin escuchar el evento scroll): la franja va del 40 % al 55 %
 * de la altura, así una sección cuenta como activa cuando su contenido está a la vista
 * y no cuando solo asoma el borde.
 */
export function useActiveSection(ids: readonly string[], enabled: boolean) {
  const [active, setActive] = useState<string | null>(null)

  useEffect(() => {
    if (!enabled) {
      setActive(null)
      return
    }
    const elements = ids.map((id) => document.getElementById(id)).filter((el): el is HTMLElement => el !== null)
    if (!elements.length) return

    const visible = new Set<string>()
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.add(entry.target.id)
          else visible.delete(entry.target.id)
        }
        // Si dos secciones tocan la franja a la vez, gana la que va primero en el documento.
        setActive(ids.find((id) => visible.has(id)) ?? null)
      },
      { rootMargin: '-40% 0px -45% 0px' },
    )
    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [ids, enabled])

  return active
}
