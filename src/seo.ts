import { DEFAULT_LANG, LANGS, OG_LOCALES, localePath, splitPath, type L, type Lang } from './i18n'
import { site } from './data/site'
import { projects, getProject } from './data/projects'

export interface PageMeta {
  lang: Lang
  title: string
  description: string
  /** Ruta canónica sin idioma, p. ej. "/projects/portfolio" o "" para inicio. */
  path: string
  noindex?: boolean
}

const titles = {
  home: {
    ca: 'Adrià Autonell — Trajectòria, projectes i aprenentatge',
    es: 'Adrià Autonell — Trayectoria, proyectos y aprendizaje',
    en: 'Adrià Autonell — Path, projects and learning',
  },
  privacy: {
    ca: 'Política de privacitat — Adrià Autonell',
    es: 'Política de privacidad — Adrià Autonell',
    en: 'Privacy policy — Adrià Autonell',
  },
  legal: {
    ca: 'Avís legal — Adrià Autonell',
    es: 'Aviso legal — Adrià Autonell',
    en: 'Legal notice — Adrià Autonell',
  },
  notFound: {
    ca: 'Pàgina no trobada — Adrià Autonell',
    es: 'Página no encontrada — Adrià Autonell',
    en: 'Page not found — Adrià Autonell',
  },
} satisfies Record<string, L>

const descriptions = {
  home: {
    ca: 'Web personal de l’Adrià Autonell, estudiant d’ASIX: la seva trajectòria, els projectes que ha desenvolupat, com el control de drons en temps real, i el que està aprenent.',
    es: 'Web personal de Adrià Autonell, estudiante de ASIX: su trayectoria, los proyectos que ha desarrollado, como el control de drones en tiempo real, y lo que está aprendiendo.',
    en: 'Personal website of Adrià Autonell, systems administration student: career path, projects such as real-time drone control, and what I’m learning now.',
  },
  privacy: {
    ca: 'Quines dades tracta aquesta web personal, per a què i com pots exercir els teus drets.',
    es: 'Qué datos trata esta web personal, para qué y cómo puedes ejercer tus derechos.',
    en: 'What data this personal website processes, why, and how to exercise your rights.',
  },
  legal: {
    ca: 'Informació legal i condicions d’ús de la web personal d’Adrià Autonell.',
    es: 'Información legal y condiciones de uso de la web personal de Adrià Autonell.',
    en: 'Legal information and terms of use for Adrià Autonell’s personal website.',
  },
  notFound: {
    ca: 'Aquesta pàgina no existeix.',
    es: 'Esta página no existe.',
    en: 'This page does not exist.',
  },
} satisfies Record<string, L>

/** Rutas públicas (sin prefijo de idioma) que se prerenderizan y entran en el sitemap. */
export const publicPaths = ['', ...projects.map((p) => `/projects/${p.slug}`), '/privacy', '/legal']

export function getMeta(pathname: string): PageMeta {
  const { lang, path } = splitPath(pathname)
  const rest = path.split('/').slice(1)
  const page = (key: keyof typeof titles): PageMeta => ({
    lang,
    title: titles[key][lang],
    description: descriptions[key][lang],
    path,
    noindex: key === 'notFound',
  })

  if (path === '') return page('home')
  if (path === '/privacy') return page('privacy')
  if (path === '/legal') return page('legal')
  const project = rest[0] === 'projects' && rest.length === 2 ? getProject(rest[1]) : undefined
  if (project) {
    return {
      lang,
      title: `${project.name[lang]} — Adrià Autonell`,
      description: project.summary[lang],
      path,
    }
  }
  return page('notFound')
}

/** URL absoluta: ("ca", "") → https://adria-autonell.com/ · ("es", "/privacy") → https://adria-autonell.com/es/privacy */
export const urlFor = (lang: Lang, path: string) => `${site.url}${localePath(lang, path)}`

/** Etiquetas <head> como HTML. Lo usa el prerender; en el cliente basta con title y description. */
export function headTags(meta: PageMeta): string {
  const esc = (s: string) =>
    s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  const canonical = urlFor(meta.lang, meta.path)
  const image = `${site.url}/og/og-${meta.lang}.png`
  const tags = [
    `<title>${esc(meta.title)}</title>`,
    `<meta name="description" content="${esc(meta.description)}" />`,
    `<meta name="author" content="${site.name}" />`,
  ]
  if (meta.noindex) {
    tags.push('<meta name="robots" content="noindex" />')
  } else {
    tags.push(`<link rel="canonical" href="${canonical}" />`)
    for (const l of LANGS) tags.push(`<link rel="alternate" hreflang="${l}" href="${urlFor(l, meta.path)}" />`)
    tags.push(`<link rel="alternate" hreflang="x-default" href="${urlFor(DEFAULT_LANG, meta.path)}" />`)
  }
  tags.push(
    `<meta property="og:type" content="${meta.path.startsWith('/projects/') ? 'article' : 'website'}" />`,
    `<meta property="og:site_name" content="${site.name}" />`,
    `<meta property="og:title" content="${esc(meta.title)}" />`,
    `<meta property="og:description" content="${esc(meta.description)}" />`,
    `<meta property="og:url" content="${canonical}" />`,
    `<meta property="og:locale" content="${OG_LOCALES[meta.lang]}" />`,
    ...LANGS.filter((l) => l !== meta.lang).map(
      (l) => `<meta property="og:locale:alternate" content="${OG_LOCALES[l]}" />`,
    ),
    `<meta property="og:image" content="${image}" />`,
    '<meta property="og:image:width" content="1200" />',
    '<meta property="og:image:height" content="630" />',
    `<meta property="og:image:alt" content="${esc(ogAlt[meta.lang])}" />`,
    '<meta name="twitter:card" content="summary_large_image" />',
    `<meta name="twitter:title" content="${esc(meta.title)}" />`,
    `<meta name="twitter:description" content="${esc(meta.description)}" />`,
    `<meta name="twitter:image" content="${image}" />`,
  )
  return tags.join('\n    ')
}

const ogAlt: L = {
  ca: 'Logotip d’Adrià Autonell i el seu nom en tipografia serif sobre fons crema. Estudiant d’ASIX: sistemes i desenvolupament.',
  es: 'Logotipo de Adrià Autonell y su nombre en tipografía serif sobre fondo crema. Estudiante de ASIX: sistemas y desarrollo.',
  en: 'Adrià Autonell’s logo and name in serif type on a cream background. Systems administration student: systems and development.',
}

/** Datos estructurados schema.org (Person) para la página de inicio. */
export function personJsonLd(lang: Lang) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: site.name,
    url: urlFor(lang, ''),
    jobTitle: { ca: 'Estudiant d’ASIX', es: 'Estudiante de ASIX', en: 'Systems administration student' }[lang],
    address: { '@type': 'PostalAddress', addressLocality: 'Castellterçol', addressRegion: 'Catalunya', addressCountry: 'ES' },
    sameAs: [site.links.linkedin, site.links.github].filter((link): link is string => typeof link === 'string'),
  }
}
