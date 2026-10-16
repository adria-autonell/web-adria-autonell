import { Link } from 'react-router'
import { ArrowLeft } from 'lucide-react'
import { LANGS, localePath, useLang, useTx } from '../i18n'
import { ui } from '../i18n/ui'

/** 404. Muestra el mensaje en el idioma activo y una línea en los otros dos. */
export function NotFound() {
  const lang = useLang()
  const tx = useTx()
  return (
    <div className="mx-auto grid min-h-[70vh] max-w-6xl content-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-12 lg:px-8">
      <div className="lg:col-span-8">
        <p className="meta text-minio">{tx(ui.notFound.code)}</p>
        <h1 className="mt-4 text-[clamp(2.5rem,7vw,5rem)] leading-[1] font-medium tracking-tight">
          {tx(ui.notFound.title)}
        </h1>
        <p className="mt-6 max-w-xl text-lg text-ink-2">{tx(ui.notFound.body)}</p>
        <Link
          to={localePath(lang)}
          className="group mt-10 inline-flex min-h-11 items-center gap-2 rounded-sm bg-ink px-5 py-2.5 text-sm font-semibold text-paper transition-colors hover:bg-minio-deep"
        >
          <ArrowLeft aria-hidden="true" className="size-4 transition-transform group-hover:-translate-x-0.5" />
          {tx(ui.notFound.back)}
        </Link>
      </div>
      <ul className="meta space-y-2 self-end lg:col-span-4">
        {LANGS.filter((l) => l !== lang).map((l) => (
          <li key={l} lang={l}>
            <Link className="link" to={localePath(l)} hrefLang={l}>
              {ui.notFound.title[l]} → {ui.notFound.back[l]}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
