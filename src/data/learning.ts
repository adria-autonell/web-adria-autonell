import type { L } from '../i18n'
import type { Pending } from './pending'

export type LearningState = 'real' | 'project' | 'practising' | 'deepen'

export interface LearningGroup {
  state: LearningState
  label: L
  hint: L
  items: (L | string)[] | Pending
  /** Elementos pendientes que se añadirán al grupo cuando Adrià los confirme. */
  todo?: Pending
}

export const learning: LearningGroup[] = [
  {
    state: 'real',
    label: {
      ca: 'Ho he fet en un entorn real',
      es: 'Lo he hecho en un entorno real',
      en: 'Done it in a real job',
    },
    hint: {
      ca: 'Sivicom · Barcelona Drone Center · Gestión Integrada',
      es: 'Sivicom · Barcelona Drone Center · Gestión Integrada',
      en: 'Sivicom · Barcelona Drone Center · Gestión Integrada',
    },
    items: [
      'Flutter',
      'Java',
      'React',
      'JavaScript',
      'SQL',
      'MySQL',
      'Supabase',
      'Docker',
      'Linux',
      'Microsoft Dynamics NAV',
      { ca: 'Manteniment d’equips i xarxa', es: 'Mantenimiento de equipos y red', en: 'Hardware & network maintenance' },
      { ca: 'Gestió d’usuaris', es: 'Gestión de usuarios', en: 'User management' },
      { ca: 'Suport tècnic', es: 'Soporte técnico', en: 'Technical support' },
      { ca: 'Informes automatitzats', es: 'Informes automatizados', en: 'Automated reports' },
    ],
  },
  {
    state: 'project',
    label: {
      ca: 'Ho faig servir en projectes',
      es: 'Lo utilizo en proyectos',
      en: 'Using it in projects',
    },
    hint: { ca: 'Aquesta web', es: 'Esta web', en: 'This website' },
    items: ['TypeScript', 'Vite', 'Tailwind CSS', 'Cloudflare Workers'],
  },
  {
    state: 'practising',
    label: { ca: 'Estic practicant', es: 'Estoy practicando', en: 'Practising' },
    hint: { ca: 'ASIX i feina', es: 'ASIX y trabajo', en: 'ASIX & work' },
    items: [
      { ca: 'Administració de sistemes d’empresa', es: 'Administración de sistemas de empresa', en: 'Business systems administration' },
      { ca: 'Xarxes', es: 'Redes', en: 'Networking' },
      { ca: 'Servidors', es: 'Servidores', en: 'Servers' },
      { ca: 'Escalabilitat', es: 'Escalabilidad', en: 'Scalability' },
      { ca: 'Rendiment i disponibilitat', es: 'Rendimiento y disponibilidad', en: 'Performance & availability' },
    ],
  },
  {
    state: 'deepen',
    label: { ca: 'Vull aprofundir-hi', es: 'Quiero profundizar', en: 'Want to go deeper' },
    hint: { ca: 'Següent pas', es: 'Siguiente paso', en: 'Next step' },
    items: [
      { ca: 'Arquitectura de projectes grans', es: 'Arquitectura de proyectos grandes', en: 'Architecture of large projects' },
      { ca: 'Sistemes escalables', es: 'Sistemas escalables', en: 'Scalable systems' },
      { ca: 'Viabilitat tècnica', es: 'Viabilidad técnica', en: 'Technical feasibility' },
      { ca: 'Infraestructures informàtiques', es: 'Infraestructuras informáticas', en: 'IT infrastructure' },
      { ca: 'Enginyeria Informàtica', es: 'Ingeniería Informática', en: 'Computer Engineering degree' },
    ],
  },
]
