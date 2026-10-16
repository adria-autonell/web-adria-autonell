import type { L } from '../i18n'
import type { Pending } from './pending'

/*
 * Textos personales. Todo sale de información confirmada por Adrià.
 * Lo que no está confirmado es `pending(...)` y no se publica.
 */

const t = (ca: string, es: string, en: string): L => ({ ca, es, en })

export const hero = {
  eyebrow: t('Quadern de treball · estudiant d’ASIX', 'Cuaderno de trabajo · estudiante de ASIX', 'Working notebook · systems administration student'),
  lead: t(
    'Estudio Administració de Sistemes Informàtics en Xarxa (ASIX) a l’Escorial Vic i treballo desenvolupant amb Flutter i Java a Sivicom Engineering. A Barcelona Drone Center vaig desenvolupar una aplicació per controlar i monitoritzar drons en temps real, vinculada a l’XPRIZE Wildfire.',
    'Estudio Administración de Sistemas Informáticos en Red (ASIX) en Escorial Vic y trabajo desarrollando con Flutter y Java en Sivicom Engineering. En Barcelona Drone Center desarrollé una aplicación para controlar y monitorizar drones en tiempo real, vinculada al XPRIZE Wildfire.',
    'I’m studying Network Systems Administration (ASIX, a two-year higher vocational degree) at Escorial Vic and work as a developer with Flutter and Java at Sivicom Engineering. At Barcelona Drone Center I built an app to control and monitor drones in real time, linked to XPRIZE Wildfire.',
  ),
  /** Frase personal derivada de sus respuestas («me gusta aprender haciendo, entender cómo funcionan las tecnologías»). */
  motto: t(
    'Aprenc fent: primer vull entendre com funciona una cosa, després la munto.',
    'Aprendo haciendo: primero quiero entender cómo funciona algo, después lo monto.',
    'I learn by doing: first I want to understand how something works, then I build it.',
  ),
}

export interface StatusRow {
  label: L
  value: L
}

export const status: StatusRow[] = [
  {
    label: t('Estudiant', 'Estudiando', 'Studying'),
    value: t('CFGS ASIX · Escorial Vic · des de 2025', 'CFGS ASIX · Escorial Vic · desde 2025', 'ASIX higher VET · Escorial Vic · since 2025'),
  },
  {
    label: t('Treballant', 'Trabajando', 'Working'),
    value: t('Sivicom Engineering · Flutter i Java', 'Sivicom Engineering · Flutter y Java', 'Sivicom Engineering · Flutter & Java'),
  },
  {
    label: t('Construint', 'Construyendo', 'Building'),
    value: t('Aquesta web', 'Esta web', 'This website'),
  },
  {
    label: t('Següent pas', 'Siguiente paso', 'Next step'),
    value: t('Preparar-me per a Enginyeria Informàtica', 'Prepararme para Ingeniería Informática', 'Preparing for a Computer Engineering degree'),
  },
]

export const about = {
  paragraphs: [
    t(
      'Soc l’Adrià, visc a Castellterçol i estudio el Cicle Formatiu de Grau Superior en Administració de Sistemes Informàtics en Xarxa (ASIX) a l’Escorial Vic. Abans vaig fer el Grau Mitjà en Sistemes Microinformàtics i Xarxes (SMX) a l’Institut Lliçà d’Amunt.',
      'Soy Adrià, vivo en Castellterçol y estudio el Ciclo Formativo de Grado Superior en Administración de Sistemas Informáticos en Red (ASIX) en Escorial Vic. Antes cursé el Grado Medio en Sistemas Microinformáticos y Redes (SMX) en el Institut Lliçà d’Amunt.',
      'I’m Adrià. I live in Castellterçol, near Barcelona, and I’m studying Network Systems Administration (ASIX) at Escorial Vic. Before that I completed the intermediate vocational degree in Microcomputer Systems and Networks (SMX) at Institut Lliçà d’Amunt.',
    ),
    t(
      'De petit no entenia com funcionava tot el que m’envoltava, i volia aprendre com funcionava el sistema sencer.',
      'De pequeño no entendía cómo funcionaba todo lo que me rodeaba, y quería aprender cómo funcionaba el sistema entero.',
      'As a kid I didn’t understand how everything around me worked, and I wanted to learn how the whole system fitted together.',
    ),
    t(
      'Vaig començar amb les pràctiques del Grau Mitjà com a tècnic informàtic a l’Institut Escola Castellterçol: manteniment d’ordinadors, xarxa i programari. Després vaig treballar per compte meu a Gestión Integrada, implantant Microsoft Dynamics NAV amb informes automatitzats i formularis web.',
      'Empecé con las prácticas del Grado Medio como técnico informático en el Institut Escola Castellterçol: mantenimiento de ordenadores, red y software. Después trabajé por mi cuenta en Gestión Integrada, implantando Microsoft Dynamics NAV con informes automatizados y formularios web.',
      'I started with my SMX work placement as an IT technician at Institut Escola Castellterçol: maintaining computers, the network and software. Then I worked independently at Gestión Integrada, rolling out Microsoft Dynamics NAV with automated reports and web forms.',
    ),
    t(
      'A Barcelona Drone Center, de juny de 2025 a gener de 2026, vaig desenvolupar pel meu compte una aplicació per controlar i monitoritzar drons en temps real, dins d’un projecte vinculat a l’XPRIZE Wildfire. Teníem menys de quatre mesos per tenir-ho a punt.',
      'En Barcelona Drone Center, de junio de 2025 a enero de 2026, desarrollé por mi cuenta una aplicación para controlar y monitorizar drones en tiempo real, dentro de un proyecto vinculado al XPRIZE Wildfire. Teníamos menos de cuatro meses para tenerlo listo.',
      'At Barcelona Drone Center, from June 2025 to January 2026, I built on my own an app to control and monitor drones in real time, as part of a project linked to XPRIZE Wildfire. We had less than four months to get it ready.',
    ),
    t(
      'Des del gener de 2026 treballo a Sivicom Engineering: frontend amb Flutter, backend amb Java, bases de dades SQL i sistemes Linux.',
      'Desde enero de 2026 trabajo en Sivicom Engineering: frontend con Flutter, backend con Java, bases de datos SQL y sistemas Linux.',
      'Since January 2026 I’ve been working at Sivicom Engineering: Flutter on the frontend, Java on the backend, SQL databases and Linux systems.',
    ),
    t(
      'El que més m’agrada és el desenvolupament de programari i l’administració de servidors. M’agrada aprendre fent i entendre com funcionen les tecnologies per dins.',
      'Lo que más disfruto es el desarrollo de software y la administración de servidores. Me gusta aprender haciendo y entender cómo funcionan las tecnologías por dentro.',
      'What I enjoy most is software development and server administration. I like learning by doing and understanding how technologies work under the hood.',
    ),
    t(
      'Quan m’encallo, m’aturo a pensar alternatives i busco fonts fiables. Si no n’hi ha prou, demano ajuda als meus superiors: l’objectiu és trobar la millor solució i aprendre’n.',
      'Cuando me atasco, me paro a pensar alternativas y busco fuentes fiables. Si no es suficiente, pido ayuda a mis superiores: el objetivo es encontrar la mejor solución y aprender de ella.',
      'When I get stuck, I stop to think through alternatives and look for reliable sources. If that isn’t enough, I ask my seniors for help: the goal is to find the best solution and learn from it.',
    ),
    t(
      'En els pròxims mesos em vull preparar per estudiar Enginyeria Informàtica, sense deixar l’administració de sistemes ni les infraestructures.',
      'En los próximos meses quiero prepararme para estudiar Ingeniería Informática, sin dejar la administración de sistemas ni las infraestructuras.',
      'Over the coming months I want to prepare to study Computer Engineering at university, without leaving systems administration and infrastructure behind.',
    ),
  ] satisfies L[],
  /** Preguntas que solo Adrià puede responder. Se muestran en desarrollo, nunca en producción. */
  open: [] as Pending[],
  note: {
    title: t('Fundació Impulsa', 'Fundació Impulsa', 'Fundació Impulsa'),
    body: t(
      'Des del 2023 formo part del seu programa d’acompanyament, que m’ha donat formació en presentació professional i confiança.',
      'Desde 2023 formo parte de su programa de acompañamiento, que me ha dado formación en presentación profesional y confianza.',
      'Since 2023 I’ve been part of their mentoring programme, which has given me training in professional presentation and confidence.',
    ),
    href: 'https://www.fundacioimpulsa.org/',
  },
}

export interface Language {
  name: L
  level: L
}

export const languages: Language[] = [
  { name: t('Català', 'Catalán', 'Catalan'), level: t('Natiu', 'Nativo', 'Native') },
  { name: t('Castellà', 'Castellano', 'Spanish'), level: t('Natiu', 'Nativo', 'Native') },
  { name: t('Anglès', 'Inglés', 'English'), level: t('B1 · preparant el B2', 'B1 · preparando el B2', 'B1 · working towards B2') },
]
