import { createContext, useContext } from 'react'

export const LANGS = ['ca', 'es', 'en'] as const
export type Lang = (typeof LANGS)[number]
export const DEFAULT_LANG: Lang = 'ca'

/** Un texto en los tres idiomas. Todo el contenido de la web usa este tipo. */
export type L = Record<Lang, string>

export const isLang = (value: string | undefined): value is Lang =>
  LANGS.includes(value as Lang)

/** Idiomas que llevan prefijo en la URL. El catalán, idioma por defecto, vive en la raíz. */
export const PREFIXED_LANGS: readonly Lang[] = LANGS.filter((l) => l !== DEFAULT_LANG)

/** Ruta pública de una página en un idioma: ("ca", "/privacy") → "/privacy"; ("es", "") → "/es". */
export const localePath = (lang: Lang, path = '') =>
  lang === DEFAULT_LANG ? path || '/' : `/${lang}${path}`

/** Separa idioma y ruta: "/es/privacy" → { lang: "es", path: "/privacy" }; "/privacy" → { lang: "ca", … }. */
export function splitPath(pathname: string): { lang: Lang; path: string } {
  const clean = pathname.replace(/\/+$/, '')
  const [, first, ...rest] = clean.split('/')
  if (first !== DEFAULT_LANG && isLang(first)) {
    return { lang: first, path: rest.length ? `/${rest.join('/')}` : '' }
  }
  return { lang: DEFAULT_LANG, path: clean }
}

export const LANG_NAMES: Record<Lang, string> = {
  ca: 'Català',
  es: 'Castellano',
  en: 'English',
}

export const OG_LOCALES: Record<Lang, string> = {
  ca: 'ca_ES',
  es: 'es_ES',
  en: 'en_GB',
}

export const LangContext = createContext<Lang>(DEFAULT_LANG)

export const useLang = () => useContext(LangContext)

/** Devuelve una función que elige la traducción del idioma activo. */
export function useTx() {
  const lang = useLang()
  return (text: L) => text[lang]
}

export function formatDate(iso: string, lang: Lang, withDay = false) {
  return new Intl.DateTimeFormat(lang, {
    year: 'numeric',
    month: withDay ? 'long' : 'short',
    ...(withDay ? { day: 'numeric' } : {}),
    timeZone: 'UTC',
  }).format(new Date(iso))
}
