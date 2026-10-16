import type { L } from '../i18n'

export interface ProcessStep {
  name: L
  body: L
  /** Qué pasó en este paso al construir esta web: el proceso con un ejemplo real. */
  here: L
}

export const process: ProcessStep[] = [
  {
    name: { ca: 'Idea', es: 'Idea', en: 'Idea' },
    body: {
      ca: 'Entendre què ha d’aconseguir el projecte i per a qui és.',
      es: 'Entender qué tiene que conseguir el proyecto y para quién es.',
      en: 'Understand what the project has to achieve and who it’s for.',
    },
    here: {
      ca: 'Que qualsevol persona pugui veure en pocs minuts qui soc, què he fet i com treballo.',
      es: 'Que cualquier persona pueda ver en pocos minutos quién soy, qué he hecho y cómo trabajo.',
      en: 'Let anyone see within minutes who I am, what I’ve done and how I work.',
    },
  },
  {
    name: { ca: 'Recerca', es: 'Investigación', en: 'Research' },
    body: {
      ca: 'Reunir informació real abans de decidir res.',
      es: 'Reunir información real antes de decidir nada.',
      en: 'Gather real information before deciding anything.',
    },
    here: {
      ca: 'Comprovar cada dada abans de publicar-la: dates, concursos i el nom oficial de l’XPRIZE Wildfire.',
      es: 'Comprobar cada dato antes de publicarlo: fechas, concursos y el nombre oficial del XPRIZE Wildfire.',
      en: 'Check every fact before publishing it: dates, contests and the official name of XPRIZE Wildfire.',
    },
  },
  {
    name: { ca: 'Disseny', es: 'Diseño', en: 'Design' },
    body: {
      ca: 'Comparar opcions abans de triar-ne una.',
      es: 'Comparar opciones antes de elegir una.',
      en: 'Compare options before picking one.',
    },
    here: {
      ca: 'Tres direccions visuals; vaig triar la del quadern d’obra.',
      es: 'Tres direcciones visuales; elegí la del cuaderno de obra.',
      en: 'Three visual directions; I chose the “site notebook”.',
    },
  },
  {
    name: { ca: 'Desenvolupament', es: 'Desarrollo', en: 'Build' },
    body: {
      ca: 'Construir amb peces reutilitzables i dades separades del disseny.',
      es: 'Construir con piezas reutilizables y datos separados del diseño.',
      en: 'Build with reusable pieces and data kept apart from design.',
    },
    here: {
      ca: 'React + TypeScript, contingut a src/data, HTML prerenderitzat.',
      es: 'React + TypeScript, contenido en src/data, HTML prerenderizado.',
      en: 'React + TypeScript, content in src/data, prerendered HTML.',
    },
  },
  {
    name: { ca: 'Proves', es: 'Pruebas', en: 'Testing' },
    body: {
      ca: 'Comprovar-ho en un navegador real, no només al meu.',
      es: 'Comprobarlo en un navegador real, no solo en el mío.',
      en: 'Check it in a real browser, not just mine.',
    },
    here: {
      ca: 'Playwright a 375, 768 i 1440 px: enllaços, teclat, consola i Lighthouse.',
      es: 'Playwright a 375, 768 y 1440 px: enlaces, teclado, consola y Lighthouse.',
      en: 'Playwright at 375, 768 and 1440 px: links, keyboard, console and Lighthouse.',
    },
  },
  {
    name: { ca: 'Millores', es: 'Mejoras', en: 'Improve' },
    body: {
      ca: 'Mesurar, corregir i deixar-ne constància.',
      es: 'Medir, corregir y dejar constancia.',
      en: 'Measure, fix and keep a record.',
    },
    here: {
      ca: 'Cada canvi queda al registre de canvis d’aquesta mateixa pàgina.',
      es: 'Cada cambio queda en el registro de cambios de esta misma página.',
      en: 'Every change goes into the changelog on this very page.',
    },
  },
]
