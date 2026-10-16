import { Link, useLocation } from 'react-router'
import { LANGS, LANG_NAMES, localePath, splitPath, useLang, useTx } from '../i18n'
import { ui } from '../i18n/ui'
import { getMeta } from '../seo'

/** Enlaces a la misma página en los otros idiomas. */
export function LangSwitch() {
  const lang = useLang()
  const tx = useTx()
  const { pathname } = useLocation()
  // En una página inexistente no hay equivalente en otro idioma: se enlaza a la portada.
  const path = getMeta(pathname).noindex ? '' : splitPath(pathname).path

  return (
    <nav aria-label={tx(ui.nav.language)}>
      <ul className="flex items-center font-mono text-xs">
        {LANGS.map((l) => (
          <li key={l}>
            <Link
              to={localePath(l, path)}
              hrefLang={l}
              lang={l}
              aria-current={l === lang ? 'true' : undefined}
              aria-label={`${l.toUpperCase()} · ${LANG_NAMES[l]}`}
              className={`inline-flex min-h-11 min-w-9 items-center justify-center uppercase transition-colors ${
                l === lang ? 'text-ink underline decoration-minio decoration-2 underline-offset-4' : 'text-ink-3 hover:text-ink'
              }`}
            >
              {l}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
