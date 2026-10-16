import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from 'react'

const STORAGE_KEY = 'infra-mode'

const InfraContext = createContext<{ on: boolean; toggle: () => void }>({ on: false, toggle: () => {} })

/**
 * Estado del modo «Ver la infraestructura».
 * Se guarda en localStorage solo como comodidad (preferencia pedida por la persona,
 * exenta de consentimiento). Si el almacenamiento no está disponible, simplemente no se recuerda.
 */
export function InfraProvider({ children }: { children: ReactNode }) {
  // Siempre empieza apagado para que el HTML prerenderizado y la hidratación coincidan.
  const [on, setOn] = useState(false)

  useEffect(() => {
    try {
      if (localStorage.getItem(STORAGE_KEY) === '1') setOn(true)
    } catch {
      /* almacenamiento bloqueado: se ignora */
    }
  }, [])

  useEffect(() => {
    document.documentElement.toggleAttribute('data-infra', on)
  }, [on])

  const toggle = useCallback(() => {
    setOn((prev) => {
      const next = !prev
      try {
        localStorage.setItem(STORAGE_KEY, next ? '1' : '0')
      } catch {
        /* se ignora */
      }
      return next
    })
  }, [])

  return <InfraContext.Provider value={{ on, toggle }}>{children}</InfraContext.Provider>
}

export const useInfraMode = () => useContext(InfraContext)
