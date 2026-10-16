import { Outlet, useLocation } from 'react-router'
import { LangContext, splitPath } from '../i18n'
import { ui } from '../i18n/ui'
import { useRouteEffects } from '../hooks/useRouteEffects'
import { Header } from './Header'
import { Footer } from './Footer'

/** Estructura común: proporciona el idioma de la URL, cabecera, contenido y pie. */
export function Layout() {
  const { lang } = splitPath(useLocation().pathname)
  useRouteEffects()

  return (
    <LangContext.Provider value={lang}>
      <div id="top" className="flex min-h-dvh flex-col">
        <a
          href="#main"
          className="sr-only z-[70] rounded-sm bg-ink px-4 py-2 text-paper focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
        >
          {ui.skip[lang]}
        </a>
        <Header />
        <main id="main" tabIndex={-1} className="flex-1 outline-none">
          <Outlet />
        </main>
        <Footer />
      </div>
    </LangContext.Provider>
  )
}
