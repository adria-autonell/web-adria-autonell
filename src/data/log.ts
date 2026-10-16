import type { L } from '../i18n'
import type { Pending } from './pending'

/** «Ara mateix aprenent»: nota breve que Adrià actualiza cuando cambia de foco. */
export const nowLearning: { text: L; updated: string } | Pending = {
  text: {
    ca: 'Em preparo per començar Enginyeria Informàtica mentre acabo ASIX i treballo amb Flutter i Java.',
    es: 'Me preparo para empezar Ingeniería Informática mientras termino ASIX y trabajo con Flutter y Java.',
    en: 'Preparing to start a Computer Engineering degree while I finish ASIX and work with Flutter and Java.',
  },
  updated: '2026-10-16',
}

/** Errores que enseñaron algo. Solo experiencias reales de Adrià. */
export const lessons: { title: L; body: L }[] | Pending = [
  {
    title: {
      ca: 'El primer desplegament automàtic va fallar',
      es: 'El primer despliegue automático falló',
      en: 'The first automatic deploy failed',
    },
    body: {
      ca: 'Vaig vincular Cloudflare amb GitHub donant per fet que el desplegament automàtic funcionaria sol. No va ser així: el projecte no tenia configuració pròpia, l’eina va intentar endevinar-la i el build fallava. Em va ensenyar a entendre què passa entre un push i la web publicada, i que la configuració del desplegament ha de viure al repositori, no dependre del que suposi l’eina.',
      es: 'Vinculé Cloudflare con GitHub dando por hecho que el despliegue automático funcionaría solo. No fue así: el proyecto no tenía configuración propia, la herramienta intentó adivinarla y el build fallaba. Me enseñó a entender qué pasa entre un push y la web publicada, y que la configuración del despliegue debe vivir en el repositorio, no depender de lo que suponga la herramienta.',
      en: 'I connected Cloudflare to GitHub assuming automatic deploys would just work. They didn’t: the project had no configuration of its own, the tool tried to guess one and the build failed. It taught me to understand what happens between a push and the live site, and that deployment config belongs in the repository, not in whatever the tool assumes.',
    },
  },
]

export interface ChangelogEntry {
  version: string
  date: string
  changes: L[]
}

/** Registro de cambios de la web. Lo más reciente primero. */
export const changelog: ChangelogEntry[] = [
  {
    version: '1.0.0',
    date: '2026-10-17',
    changes: [
      {
        ca: 'Primera versió pública a adria-autonell.com, en català, castellà i anglès.',
        es: 'Primera versión pública en adria-autonell.com, en catalán, castellano e inglés.',
        en: 'First public release at adria-autonell.com, in Catalan, Spanish and English.',
      },
      {
        ca: 'Trajectòria, concursos de programació i el projecte de control de drons de Barcelona Drone Center.',
        es: 'Trayectoria, concursos de programación y el proyecto de control de drones de Barcelona Drone Center.',
        en: 'Career path, programming contests and the Barcelona Drone Center drone-control project.',
      },
      {
        ca: 'Índex que marca la secció on ets i mode «Veure la infraestructura».',
        es: 'Índice que marca la sección en la que estás y modo «Ver la infraestructura».',
        en: 'A section index that tracks where you are, and the “Show the infrastructure” mode.',
      },
    ],
  },
]
