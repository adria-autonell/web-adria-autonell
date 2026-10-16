import type { L } from '../i18n'
import type { Pending } from './pending'

export interface ProjectImage {
  /** Ruta base en /public sin sufijo: se sirven `-800` y `-1600` en AVIF y WebP. */
  src: string
  width: number
  height: number
  alt: L
  /** Enquadre opcional en la página del proyecto (recorta con object-fit, sin deformar). */
  heroClass?: string
}

export interface ProjectLink {
  label: L
  href: string
  /** "primary" se muestra como botón principal. */
  primary?: boolean
}

/** Un bloque de la página de un proyecto: párrafo, lista o lista numerada (o pendiente). */
export interface ProjectSection {
  title: L
  intro?: L
  items?: L[]
  ordered?: boolean
  outro?: L
  pending?: Pending
}

export interface Project {
  slug: string
  name: L
  kind: L
  status: L
  year: string
  summary: L
  stack: string[]
  links: ProjectLink[]
  image?: ProjectImage
  sections: ProjectSection[]
}

const t = (ca: string, es: string, en: string): L => ({ ca, es, en })

export const projects: Project[] = [
  {
    slug: 'barcelona-drone-center',
    name: t('Control i monitorització de drons', 'Control y monitorización de drones', 'Real-time drone control and monitoring'),
    kind: t('Projecte professional · Barcelona Drone Center', 'Proyecto profesional · Barcelona Drone Center', 'Professional project · Barcelona Drone Center'),
    status: t('XPRIZE Wildfire', 'XPRIZE Wildfire', 'XPRIZE Wildfire'),
    year: '2025',
    summary: t(
      'Aplicació web per controlar i monitoritzar drons en temps real, vinculada a la participació de Barcelona Drone Center a l’XPRIZE Wildfire.',
      'Aplicación web para controlar y monitorizar drones en tiempo real, vinculada a la participación de Barcelona Drone Center en el XPRIZE Wildfire.',
      'A web app to control and monitor drones in real time, linked to Barcelona Drone Center’s entry in XPRIZE Wildfire.',
    ),
    stack: ['React', 'JavaScript', 'Supabase', 'APIs'],
    image: {
      src: '/images/projects/barcelona-drone-center',
      width: 1600,
      height: 1200,
      heroClass: 'aspect-[16/9] object-cover object-[50%_72%]',
      alt: t(
        'L’Adrià, amb els braços creuats i una samarreta de BCN Drone Center, davant del rètol de l’empresa en una paret de gespa artificial.',
        'Adrià, con los brazos cruzados y una camiseta de BCN Drone Center, delante del rótulo de la empresa en una pared de césped artificial.',
        'Adrià, arms crossed and wearing a BCN Drone Center T-shirt, in front of the company sign on an artificial-grass wall.',
      ),
    },
    links: [
      { label: t('Web de Barcelona Drone Center', 'Web de Barcelona Drone Center', 'Barcelona Drone Center website'), href: 'https://www.barcelonadronecenter.com/' },
      { label: t('XPRIZE Wildfire', 'XPRIZE Wildfire', 'XPRIZE Wildfire'), href: 'https://www.xprize.org/competitions/wildfire' },
      {
        label: t('AeroWatch a les semifinals', 'AeroWatch en las semifinales', 'AeroWatch reaches the semifinals'),
        href: 'https://www.barcelonadronecenter.com/blog/2025/07/25/xprize-semifinals/',
      },
    ],
    sections: [
      {
        title: t('El repte', 'El reto', 'The challenge'),
        intro: t(
          'XPRIZE Wildfire és una competició internacional de la fundació XPRIZE per desenvolupar tecnologia contra els incendis forestals. Barcelona Drone Center hi participa com a co-líder del consorci AeroWatch, i el projecte en què vaig treballar estava vinculat a aquesta participació. L’objectiu era una solució informàtica per monitoritzar, controlar i gestionar drons en temps real.',
          'XPRIZE Wildfire es una competición internacional de la fundación XPRIZE para desarrollar tecnología contra los incendios forestales. Barcelona Drone Center participa como colíder del consorcio AeroWatch, y el proyecto en el que trabajé estaba vinculado a esa participación. El objetivo era una solución informática para monitorizar, controlar y gestionar drones en tiempo real.',
          'XPRIZE Wildfire is an international XPRIZE Foundation competition to develop technology against wildfires. Barcelona Drone Center takes part as co-lead of the AeroWatch consortium, and the project I worked on was linked to that entry. The goal was a software solution to monitor, control and manage drones in real time.',
        ),
      },
      {
        title: t('La meva aportació', 'Mi aportación', 'My contribution'),
        intro: t(
          'Vaig desenvolupar pel meu compte un programa que permetia:',
          'Desarrollé por mi cuenta un programa que permitía:',
          'I built, on my own, a program that could:',
        ),
        items: [
          t('Controlar drons.', 'Controlar drones.', 'Control drones.'),
          t('Monitoritzar-los en temps real.', 'Monitorizarlos en tiempo real.', 'Monitor them in real time.'),
          t(
            'Gestionar la informació i les operacions relacionades amb els drons.',
            'Gestionar la información y las operaciones relacionadas con los drones.',
            'Manage the information and operations related to the drones.',
          ),
          t('Integrar serveis externs mitjançant APIs.', 'Integrar servicios externos mediante APIs.', 'Integrate external services through APIs.'),
        ],
        outro: t(
          'També vaig contribuir a la coordinació tècnica amb altres participants i empreses.',
          'También contribuí a la coordinación técnica con otros participantes y empresas.',
          'I also helped with technical coordination with other participants and companies.',
        ),
      },
      {
        title: t('Com funciona la solució', 'Cómo funciona la solución', 'How the solution works'),
        intro: t(
          'El resultat final de l’equip va ser una aplicació web per visualitzar i monitoritzar drons en temps real. Un dels escenaris era la detecció d’incendis, en què el sistema permetia que un dron:',
          'El resultado final del equipo fue una aplicación web para visualizar y monitorizar drones en tiempo real. Uno de los escenarios era la detección de incendios, en el que el sistema permitía que un dron:',
          'The team’s final result was a web app to view and monitor drones in real time. One scenario was wildfire detection, in which the system let a drone:',
        ),
        ordered: true,
        items: [
          t('Rebés la informació d’un incendi detectat.', 'Recibiera la información de un incendio detectado.', 'Receive information about a detected fire.'),
          t('Es dirigís de manera autònoma cap a la zona.', 'Se dirigiera de forma autónoma hacia la zona.', 'Fly autonomously to the area.'),
          t('Executés el comportament programat.', 'Ejecutara el comportamiento programado.', 'Carry out its programmed behaviour.'),
          t('Tornés de manera autònoma a la base.', 'Regresara de forma autónoma a su base.', 'Return autonomously to base.'),
        ],
      },
      {
        title: t('Tecnologies i decisions', 'Tecnologías y decisiones', 'Technologies and decisions'),
        items: [
          t(
            'React per a la interfície web: arquitectura de components, facilitat de manteniment, un ecosistema ampli i adequat per a interfícies dinàmiques que s’actualitzen contínuament.',
            'React para la interfaz web: arquitectura de componentes, facilidad de mantenimiento, un ecosistema amplio y adecuado para interfaces dinámicas que se actualizan continuamente.',
            'React for the web interface: component architecture, easy maintenance, a broad ecosystem and a good fit for dynamic, constantly updating interfaces.',
          ),
          t(
            'Supabase per a la base de dades i els serveis associats: implementació ràpida, integració senzilla i agilitat durant el desenvolupament, amb un volum de dades relativament contingut i uns terminis d’entrega exigents.',
            'Supabase para la base de datos y los servicios asociados: implementación rápida, integración sencilla y agilidad durante el desarrollo, con un volumen de datos relativamente contenido y unos plazos de entrega exigentes.',
            'Supabase for the database and related services: quick to set up, easy to integrate and agile during development, with a fairly modest data volume and tight deadlines.',
          ),
          t(
            'APIs per integrar els sistemes i serveis d’altres empreses del projecte i coordinar les diferents peces tècniques.',
            'APIs para integrar los sistemas y servicios de otras empresas del proyecto y coordinar las distintas piezas técnicas.',
            'APIs to integrate the systems and services of other companies in the project and coordinate the technical pieces.',
          ),
        ],
      },
      {
        title: t('La dificultat principal', 'La dificultad principal', 'The main difficulty'),
        intro: t('El temps. Teníem menys de quatre mesos per:', 'El tiempo. Teníamos menos de cuatro meses para:', 'Time. We had less than four months to:'),
        items: [
          t('Organitzar l’equip.', 'Organizar al equipo.', 'Organise the team.'),
          t('Definir el funcionament.', 'Definir el funcionamiento.', 'Define how it would work.'),
          t('Coordinar les diferents parts.', 'Coordinar las distintas partes.', 'Coordinate the different parts.'),
          t('Integrar les APIs.', 'Integrar las APIs.', 'Integrate the APIs.'),
          t('Desenvolupar l’aplicació.', 'Desarrollar la aplicación.', 'Build the application.'),
          t('Preparar el resultat final.', 'Preparar el resultado final.', 'Prepare the final result.'),
        ],
      },
      {
        title: t('Què vaig aprendre', 'Qué aprendí', 'What I learned'),
        items: [
          t(
            'A organitzar-me i prioritzar amb un termini molt ajustat.',
            'A organizarme y priorizar con un plazo muy ajustado.',
            'How to organise myself and prioritise against a very tight deadline.',
          ),
          t(
            'A desenvolupar sota pressió sense perdre de vista com encaixa cada peça en el conjunt.',
            'A desarrollar bajo presión sin perder de vista cómo encaja cada pieza en el conjunto.',
            'How to build under pressure without losing sight of how each piece fits the whole.',
          ),
        ],
      },
    ],
  },
  {
    slug: 'portfolio',
    name: t('Aquesta web', 'Esta web', 'This website'),
    kind: t('Projecte personal', 'Proyecto personal', 'Personal project'),
    status: t('v1.0.0', 'v1.0.0', 'v1.0.0'),
    year: '2026',
    summary: t(
      'La meva web personal: qui soc, què he fet i com treballo. En tres idiomes, sense galetes i amb la infraestructura a la vista.',
      'Mi web personal: quién soy, qué he hecho y cómo trabajo. En tres idiomas, sin cookies y con la infraestructura a la vista.',
      'My personal website: who I am, what I’ve done and how I work. In three languages, cookie-free and with its infrastructure on show.',
    ),
    stack: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS 4', 'React Router', 'Cloudflare Workers', 'Playwright'],
    image: {
      src: '/images/projects/portfolio',
      width: 1600,
      height: 1000,
      alt: t(
        'Aquesta web amb el mode «Veure la infraestructura» activat: la retícula de 12 columnes superposada, la trajectòria amb etiquetes de tecnologies i una nota tècnica sobre el component Timeline.',
        'Esta web con el modo «Ver la infraestructura» activado: la retícula de 12 columnas superpuesta, la trayectoria con etiquetas de tecnologías y una nota técnica sobre el componente Timeline.',
        'This site with “Show the infrastructure” turned on: the 12-column grid overlaid, the career timeline with technology tags and a technical note on the Timeline component.',
      ),
    },
    links: [
      { label: t('Visitar la web', 'Visitar la web', 'Visit the website'), href: 'https://adria-autonell.com/', primary: true },
      { label: t('Veure el codi a GitHub', 'Ver el código en GitHub', 'View the code on GitHub'), href: 'https://github.com/adria-autonell/web-adria-autonell' },
    ],
    sections: [
      {
        title: t('Per què la vaig crear', 'Por qué la creé', 'Why I built it'),
        intro: t(
          'Volia un lloc propi on explicar qui soc, què he fet i com treballo, més enllà d’un currículum. I volia que la mateixa web fos un projecte real, publicat i amb les decisions documentades.',
          'Quería un sitio propio donde explicar quién soy, qué he hecho y cómo trabajo, más allá de un currículum. Y quería que la propia web fuera un proyecto real, publicado y con las decisiones documentadas.',
          'I wanted a place of my own to explain who I am, what I’ve done and how I work, beyond a CV. And I wanted the site itself to be a real, published project with its decisions documented.',
        ),
      },
      {
        title: t('Com està organitzada', 'Cómo está organizada', 'How it’s organised'),
        items: [
          t(
            'Contingut separat del disseny: tots els textos, en tres idiomes, viuen a src/data.',
            'Contenido separado del diseño: todos los textos, en tres idiomas, viven en src/data.',
            'Content kept apart from design: every text, in three languages, lives in src/data.',
          ),
          t(
            'Components reutilitzables (components/), seccions de la portada (sections/) i pàgines (pages/).',
            'Componentes reutilizables (components/), secciones de la portada (sections/) y páginas (pages/).',
            'Reusable components (components/), home sections (sections/) and pages (pages/).',
          ),
          t(
            'Cada pàgina es prerenderitza en HTML estàtic durant el build i React la hidrata al navegador. Així els cercadors i les previsualitzacions d’enllaços veuen el contingut real.',
            'Cada página se prerenderiza en HTML estático durante el build y React la hidrata en el navegador. Así los buscadores y las vistas previas de enlaces ven el contenido real.',
            'Every page is prerendered to static HTML at build time and hydrated by React in the browser, so search engines and link previews see the real content.',
          ),
        ],
      },
      {
        title: t('Decisions de disseny', 'Decisiones de diseño', 'Design decisions'),
        items: [
          t(
            'Concepte de «quadern de treball»: paper crema, tinta i un sol color d’accent, el vermell mini.',
            'Concepto de «cuaderno de trabajo»: papel crema, tinta y un solo color de acento, el rojo minio.',
            'A “working notebook” concept: cream paper, ink and a single accent colour, red lead.',
          ),
          t(
            'Tres tipografies amb rols fixos: Newsreader per als títols, IBM Plex Sans per al text i IBM Plex Mono per a les dates i les etiquetes.',
            'Tres tipografías con roles fijos: Newsreader para los títulos, IBM Plex Sans para el texto e IBM Plex Mono para fechas y etiquetas.',
            'Three typefaces with fixed roles: Newsreader for headings, IBM Plex Sans for text and IBM Plex Mono for dates and labels.',
          ),
          t(
            'Un índex que marca la secció on ets mentre fas scroll.',
            'Un índice que marca la sección en la que estás mientras haces scroll.',
            'A navigation index that highlights the section you’re in as you scroll.',
          ),
          t(
            'El mode «Veure la infraestructura», que superposa la retícula i explica com està muntada la web.',
            'El modo «Ver la infraestructura», que superpone la retícula y explica cómo está montada la web.',
            'The “Show the infrastructure” mode, which overlays the grid and explains how the site is built.',
          ),
        ],
      },
      {
        title: t('Accessibilitat', 'Accesibilidad', 'Accessibility'),
        items: [
          t('Contrastos comprovats segons WCAG 2.2 AA (mínim de 4,9:1 en el text).', 'Contrastes comprobados según WCAG 2.2 AA (mínimo de 4,9:1 en el texto).', 'Contrast checked against WCAG 2.2 AA (at least 4.9:1 for text).'),
          t(
            'Navegació completa amb teclat, enllaç per saltar al contingut i focus sempre visible.',
            'Navegación completa con teclado, enlace para saltar al contenido y foco siempre visible.',
            'Full keyboard navigation, a skip link and an always-visible focus ring.',
          ),
          t('aria-current a l’índex de seccions i al selector d’idioma.', 'aria-current en el índice de secciones y en el selector de idioma.', 'aria-current on the section index and the language switcher.'),
          t('Animacions desactivades amb prefers-reduced-motion.', 'Animaciones desactivadas con prefers-reduced-motion.', 'Animations disabled under prefers-reduced-motion.'),
          t('Textos alternatius a totes les imatges informatives.', 'Textos alternativos en todas las imágenes informativas.', 'Alt text on every informative image.'),
        ],
      },
      {
        title: t('Seguretat i rendiment', 'Seguridad y rendimiento', 'Security and performance'),
        items: [
          t('Sense galetes, analítica ni peticions a tercers.', 'Sin cookies, analítica ni peticiones a terceros.', 'No cookies, analytics or third-party requests.'),
          t(
            'Capçaleres de seguretat amb una CSP estricta: cap script ni estil inline.',
            'Cabeceras de seguridad con una CSP estricta: ningún script ni estilo inline.',
            'Security headers with a strict CSP: no inline scripts or styles.',
          ),
          t(
            'Imatges en AVIF i WebP amb dimensions explícites, i tipografies allotjades a la mateixa web.',
            'Imágenes en AVIF y WebP con dimensiones explícitas, y tipografías alojadas en la propia web.',
            'AVIF and WebP images with explicit dimensions, and self-hosted fonts.',
          ),
        ],
      },
      {
        title: t('Proves', 'Pruebas', 'Testing'),
        items: [
          t(
            'Playwright a 375, 768 i 1440 px: navegació, índex actiu, enllaços, teclat i consola del navegador.',
            'Playwright a 375, 768 y 1440 px: navegación, índice activo, enlaces, teclado y consola del navegador.',
            'Playwright at 375, 768 and 1440 px: navigation, active index, links, keyboard and browser console.',
          ),
          t(
            'Lighthouse per mesurar rendiment, accessibilitat, bones pràctiques i SEO.',
            'Lighthouse para medir rendimiento, accesibilidad, buenas prácticas y SEO.',
            'Lighthouse to measure performance, accessibility, best practices and SEO.',
          ),
          t(
            'Scripts propis que comproven enllaços trencats i contrastos.',
            'Scripts propios que comprueban enlaces rotos y contrastes.',
            'Custom scripts that check for broken links and colour contrast.',
          ),
        ],
      },
      {
        title: t('Dificultats tècniques', 'Dificultades técnicas', 'Technical difficulties'),
        items: [
          t(
            'Hidratar pàgines prerenderitzades sense desajustos, sobretot la 404, que es pot servir a qualsevol URL.',
            'Hidratar páginas prerenderizadas sin desajustes, sobre todo la 404, que puede servirse en cualquier URL.',
            'Hydrating prerendered pages without mismatches, especially the 404, which can be served at any URL.',
          ),
          t(
            'Mantenir una CSP estricta obliga a evitar atributs style i scripts injectats.',
            'Mantener una CSP estricta obliga a evitar atributos style y scripts inyectados.',
            'Keeping a strict CSP means avoiding style attributes and injected scripts.',
          ),
          t(
            'El primer desplegament a Cloudflare fallava: sense configuració, Wrangler modificava el build de Vite. Es va resoldre amb un wrangler.jsonc explícit.',
            'El primer despliegue en Cloudflare fallaba: sin configuración, Wrangler modificaba el build de Vite. Se resolvió con un wrangler.jsonc explícito.',
            'The first Cloudflare deploy failed: without a config, Wrangler altered the Vite build. An explicit wrangler.jsonc fixed it.',
          ),
          t(
            'Les animacions lligades al scroll deixaven invisibles les seccions fora de pantalla en captures i impressions. Ara el contingut sempre és visible.',
            'Las animaciones ligadas al scroll dejaban invisibles las secciones fuera de pantalla en capturas e impresiones. Ahora el contenido siempre es visible.',
            'Scroll-linked animations left off-screen sections invisible in screenshots and print. Content is now always visible.',
          ),
        ],
      },
      {
        title: t('Què n’he après', 'Qué he aprendido', 'What I learned'),
        items: [
          t(
            'Com funciona el desplegament automàtic de Cloudflare des de GitHub: cada push genera un build nou i, si passa, una versió nova de la web.',
            'Cómo funciona el despliegue automático de Cloudflare desde GitHub: cada push genera un build nuevo y, si pasa, una versión nueva de la web.',
            'How Cloudflare’s automatic deploys from GitHub work: every push triggers a new build and, if it passes, a new version of the site.',
          ),
          t(
            'L’experiència de representar-me a mi mateix: decidir què explico de mi, com ho explico i com vull que es vegi.',
            'La experiencia de representarme a mí mismo: decidir qué cuento de mí, cómo lo cuento y cómo quiero que se vea.',
            'The experience of representing myself: deciding what to say about me, how to say it and how I want it to look.',
          ),
        ],
      },
    ],
  },
]

export const getProject = (slug: string | undefined) => projects.find((p) => p.slug === slug)
