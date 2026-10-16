import type { Pending } from './pending'

/**
 * Datos globales de la web. Para cambiar un enlace o publicar el correo,
 * sustituye el `pending(...)` por el valor real.
 */
export const site = {
  name: 'Adrià Autonell',
  url: (import.meta.env.VITE_SITE_URL || 'https://adria-autonell.com').replace(/\/$/, ''),
  version: '1.0.0',
  updated: '2026-10-17',
  location: 'Castellterçol, Catalunya',
  links: {
    linkedin: 'https://www.linkedin.com/in/adriaautonell',
    github: 'https://github.com/adria-autonell' as string | Pending,
    email: 'adria.autonell@proton.me' as string | Pending,
    /** Repositorio de esta web, cuando esté publicado */
    repo: 'https://github.com/adria-autonell/web-adria-autonell' as string | Pending,
  },
}
