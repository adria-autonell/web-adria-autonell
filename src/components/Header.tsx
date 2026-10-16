import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router'
import { Menu, X } from 'lucide-react'
import { localePath, splitPath, useLang, useTx } from '../i18n'
import { ui } from '../i18n/ui'
import { homeSections, navSections } from '../data/sections'
import { useActiveSection } from '../hooks/useActiveSection'
import { LangSwitch } from './LangSwitch'
import { InfraToggle } from './InfraToggle'

const sectionIds = homeSections.map((s) => s.id)

export function Header() {
  const lang = useLang()
  const tx = useTx()
  const location = useLocation()
  const [open, setOpen] = useState(false)
  const isHome = splitPath(location.pathname).path === ''
  const active = useActiveSection(sectionIds, isHome)
  const current = homeSections.find((s) => s.id === active)

  // Cierra el menú móvil al navegar o al pulsar Escape.
  useEffect(() => setOpen(false), [location.key])
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const links = navSections.map(({ id, number }) => {
    const isActive = id === active
    return (
      <li key={id}>
        <Link
          to={{ pathname: localePath(lang), hash: `#${id}` }}
          aria-current={isActive ? 'location' : undefined}
          className={`group relative inline-flex min-h-11 items-center gap-1.5 text-sm whitespace-nowrap transition-colors ${
            isActive ? 'text-ink' : 'text-ink-2 hover:text-ink'
          }`}
        >
          <span aria-hidden="true" className={`font-mono text-[0.6875rem] ${isActive ? 'text-minio' : 'text-ink-3'}`}>
            {number}
          </span>
          {tx(ui.nav[id])}
          {/* Marca de sección activa: una línea de minio bajo el enlace, sin cambiar el ancho del texto. */}
          <span
            aria-hidden="true"
            className={`absolute inset-x-0 bottom-2 h-0.5 origin-left bg-minio transition-transform duration-200 motion-reduce:transition-none ${
              isActive ? 'scale-x-100' : 'scale-x-0'
            }`}
          />
        </Link>
      </li>
    )
  })

  return (
    <header data-component="Header" className="sticky top-0 z-50 border-b border-rule bg-paper">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        <div className="flex min-w-0 items-center gap-3">
          <Link to={localePath(lang)} className="flex shrink-0 items-center gap-2.5 rounded-sm" aria-label={`Adrià Autonell — ${tx(ui.home)}`}>
            <img src="/images/brand/logo-68.webp" width={34} height={34} alt="" className="size-[34px]" />
            <span translate="no" className="hidden font-serif text-lg font-medium tracking-tight sm:inline lg:hidden">
              Adrià Autonell
            </span>
          </Link>
          {/* En móvil, en lugar del índice completo, solo la sección en la que estás. */}
          {current && (
            <p aria-hidden="true" className="meta truncate lg:hidden">
              <span className="text-minio">{current.number}</span> — {tx(ui.nav[current.id])}
            </p>
          )}
        </div>

        <nav aria-label={tx(ui.nav.label)} className="hidden lg:block">
          <ul className="flex items-center gap-5 xl:gap-6">{links}</ul>
        </nav>

        <div className="flex shrink-0 items-center gap-1 sm:gap-3">
          <InfraToggle />
          <div className="hidden sm:block">
            <LangSwitch />
          </div>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-sm text-ink lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
            <span className="sr-only">{tx(ui.nav.menu)}</span>
          </button>
        </div>
      </div>

      <div id="mobile-menu" hidden={!open} className="border-t border-rule bg-paper lg:hidden">
        <nav aria-label={tx(ui.nav.label)} className="mx-auto max-w-6xl px-4 pt-2 pb-4 sm:px-6">
          <ul className="grid grid-cols-2 gap-x-6">{links}</ul>
          <div className="mt-2 border-t border-rule pt-2 sm:hidden">
            <LangSwitch />
          </div>
        </nav>
      </div>
    </header>
  )
}
