import type { L } from '../i18n'
import type { Pending } from './pending'

export type TimelineKind = 'study' | 'work' | 'growth'

export interface TimelineEntry {
  kind: TimelineKind
  /** Texto libre ya traducido o pendiente. Si falta o está pendiente, en producción no se muestra fecha. */
  date?: L | Pending
  title: L
  org: string | Pending
  /** Web oficial de la organización, si se enlaza. */
  href?: string
  body: L
  /** Tecnologías o herramientas concretas (nombres propios, no se traducen). */
  tools?: string[]
  /** Si toda la entrada está sin confirmar, no se publica. */
  draft?: Pending
}

/** Del más antiguo al más reciente. */
export const timeline: TimelineEntry[] = [
  {
    kind: 'study',
    date: { ca: '2023 — 2025', es: '2023 — 2025', en: '2023 — 2025' },
    title: {
      ca: 'CFGM Sistemes Microinformàtics i Xarxes (SMX)',
      es: 'CFGM Sistemas Microinformáticos y Redes (SMX)',
      en: 'Intermediate VET in Microcomputer Systems and Networks (SMX)',
    },
    org: 'Institut Lliçà d’Amunt · Edifici Sant Baldiri',
    body: {
      ca: 'La base: sistemes informàtics, xarxes i suport tècnic.',
      es: 'La base: sistemas informáticos, redes y soporte técnico.',
      en: 'The foundations: computer systems, networks and technical support.',
    },
  },
  {
    kind: 'growth',
    date: { ca: '2023 — 2026', es: '2023 — 2026', en: '2023 — 2026' },
    title: {
      ca: 'Programa d’acompanyament',
      es: 'Programa de acompañamiento',
      en: 'Mentoring programme',
    },
    org: 'Fundació Impulsa',
    href: 'https://www.fundacioimpulsa.org/',
    body: {
      ca: 'Un programa que m’ha acompanyat durant els estudis, amb formació en presentació professional i, sobretot, confiança per fer el pas següent.',
      es: 'Un programa que me ha acompañado durante los estudios, con formación en presentación profesional y, sobre todo, confianza para dar el siguiente paso.',
      en: 'A programme that has supported me through my studies, with training in professional presentation and, above all, the confidence to take the next step.',
    },
  },
  {
    kind: 'work',
    title: {
      ca: 'Tècnic informàtic · pràctiques del CFGM SMX',
      es: 'Técnico informático · prácticas del CFGM SMX',
      en: 'IT technician · SMX work placement',
    },
    org: 'Institut Escola Castellterçol',
    body: {
      ca: 'Manteniment dels ordinadors i de la xarxa, actualització de tot el programari i elaboració de documents ofimàtics.',
      es: 'Mantenimiento de los ordenadores y de la red, actualización de todo el software y elaboración de documentos ofimáticos.',
      en: 'Computer and network maintenance, keeping all software up to date and producing office documents.',
    },
  },
  {
    kind: 'work',
    date: { ca: '2024 — 2025 · 6 mesos', es: '2024 — 2025 · 6 meses', en: '2024 — 2025 · 6 months' },
    title: {
      ca: 'Implantació de Microsoft Dynamics NAV',
      es: 'Implantación de Microsoft Dynamics NAV',
      en: 'Microsoft Dynamics NAV implementation',
    },
    org: 'Gestión Integrada',
    body: {
      ca: 'Implementació i configuració de Microsoft Dynamics NAV (Navision) per optimitzar processos empresarials, amb informes automatitzats i formularis web per a la plataforma.',
      es: 'Implementación y configuración de Microsoft Dynamics NAV (Navision) para optimizar procesos empresariales, con informes automatizados y formularios web para la plataforma.',
      en: 'Implemented and configured Microsoft Dynamics NAV (Navision) to streamline business processes, with automated reports and web forms for the platform.',
    },
    tools: ['Microsoft Dynamics NAV'],
  },
  {
    kind: 'work',
    date: { ca: 'juny 2025 — gener 2026', es: 'junio 2025 — enero 2026', en: 'June 2025 — January 2026' },
    title: {
      ca: 'Control i monitorització de drons · XPRIZE Wildfire',
      es: 'Control y monitorización de drones · XPRIZE Wildfire',
      en: 'Drone control & monitoring · XPRIZE Wildfire',
    },
    org: 'Barcelona Drone Center',
    href: 'https://www.barcelonadronecenter.com/',
    body: {
      ca: 'Pràctiques duals i feina a temps parcial. Vaig desenvolupar una aplicació per controlar i monitoritzar drons en temps real, integrant serveis externs mitjançant APIs, en un projecte vinculat a l’XPRIZE Wildfire. També dades amb MySQL i serveis amb Docker sobre Linux.',
      es: 'Prácticas duales y trabajo a tiempo parcial. Desarrollé una aplicación para controlar y monitorizar drones en tiempo real, integrando servicios externos mediante APIs, en un proyecto vinculado al XPRIZE Wildfire. También datos con MySQL y servicios con Docker sobre Linux.',
      en: 'Dual-training internship, then part-time. I built an app to control and monitor drones in real time, integrating external services through APIs, in a project linked to XPRIZE Wildfire. Also data in MySQL and services with Docker on Linux.',
    },
    tools: ['React', 'JavaScript', 'Supabase', 'MySQL', 'Docker', 'Linux'],
  },
  {
    kind: 'study',
    date: { ca: '2025 — ara', es: '2025 — actualidad', en: '2025 — present' },
    title: {
      ca: 'CFGS Administració de Sistemes Informàtics en Xarxa (ASIX)',
      es: 'CFGS Administración de Sistemas Informáticos en Red (ASIX)',
      en: 'Higher VET in Network Systems Administration (ASIX)',
    },
    org: 'Escorial Vic',
    body: {
      ca: 'Administració, configuració i manteniment de sistemes informàtics i xarxes.',
      es: 'Administración, configuración y mantenimiento de sistemas informáticos y redes.',
      en: 'Administration, configuration and maintenance of computer systems and networks.',
    },
  },
  {
    kind: 'work',
    date: { ca: 'gener 2026 — ara', es: 'enero 2026 — actualidad', en: 'January 2026 — present' },
    title: {
      ca: 'Desenvolupament frontend i backend',
      es: 'Desarrollo frontend y backend',
      en: 'Frontend & backend development',
    },
    org: 'Sivicom Engineering, SL',
    body: {
      ca: 'Frontend amb Flutter, backend amb Java, bases de dades SQL i treball sobre sistemes Linux.',
      es: 'Frontend con Flutter, backend con Java, bases de datos SQL y trabajo sobre sistemas Linux.',
      en: 'Frontend in Flutter, backend in Java, SQL databases and day-to-day work on Linux systems.',
    },
    tools: ['Flutter', 'Java', 'SQL', 'Linux'],
  },
]
