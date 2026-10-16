import type { L } from '../i18n'

/** Notas que aparecen al activar «Ver la infraestructura». Clave = id de la sección. */
export const infraNotes: Record<string, { component: string; note: L }> = {
  hero: {
    component: '<Hero />',
    note: {
      ca: 'HTML prerenderitzat en el build. Es serveix estàtic des de la xarxa de Cloudflare i React només l’hidrata.',
      es: 'HTML prerenderizado en el build. Se sirve estático desde la red de Cloudflare y React solo lo hidrata.',
      en: 'HTML prerendered at build time, served statically from Cloudflare’s network; React only hydrates it.',
    },
  },
  about: {
    component: '<About />',
    note: {
      ca: 'El text surt de src/data/profile.ts, en tres idiomes. Les preguntes pendents només es veuen en desenvolupament.',
      es: 'El texto sale de src/data/profile.ts, en tres idiomas. Las preguntas pendientes solo se ven en desarrollo.',
      en: 'Text comes from src/data/profile.ts in three languages. Open questions only show in development.',
    },
  },
  path: {
    component: '<Timeline />',
    note: {
      ca: 'Les dates sense confirmar no es publiquen: millor sense data que amb una d’inventada.',
      es: 'Las fechas sin confirmar no se publican: mejor sin fecha que con una inventada.',
      en: 'Unconfirmed dates aren’t published: better no date than an invented one.',
    },
  },
  projects: {
    component: '<ProjectList />',
    note: {
      ca: 'Captures en AVIF i WebP, amb width/height explícits per evitar salts de disseny (CLS).',
      es: 'Capturas en AVIF y WebP, con width/height explícitos para evitar saltos de diseño (CLS).',
      en: 'Screenshots in AVIF and WebP with explicit width/height to avoid layout shift (CLS).',
    },
  },
  learning: {
    component: '<Learning />',
    note: {
      ca: 'Sense barres de percentatge: cada tecnologia porta una etiqueta d’estat honesta.',
      es: 'Sin barras de porcentaje: cada tecnología lleva una etiqueta de estado honesta.',
      en: 'No percentage bars: each technology gets an honest status label.',
    },
  },
  process: {
    component: '<Process />',
    note: {
      ca: 'Cada pas enllaça amb el que va passar construint aquesta web.',
      es: 'Cada paso enlaza con lo que pasó al construir esta web.',
      en: 'Each step links to what actually happened while building this site.',
    },
  },
  log: {
    component: '<Log />',
    note: {
      ca: 'El registre de canvis és un array a src/data/log.ts: afegir-hi una entrada és una línia.',
      es: 'El registro de cambios es un array en src/data/log.ts: añadir una entrada es una línea.',
      en: 'The changelog is an array in src/data/log.ts: adding an entry is one line.',
    },
  },
  contact: {
    component: '<Contact />',
    note: {
      ca: 'Sense formulari: no hi ha backend ni dades emmagatzemades, i per tant res a protegir contra l’spam.',
      es: 'Sin formulario: no hay backend ni datos almacenados, así que nada que proteger contra spam.',
      en: 'No form: no backend and no stored data, so nothing to protect from spam.',
    },
  },
}

/** Recorrido de una petición, mostrado en el pie con el modo infraestructura activo. */
export const requestPath: { label: string; detail: L }[] = [
  { label: 'DNS', detail: { ca: 'Domini → Cloudflare', es: 'Dominio → Cloudflare', en: 'Domain → Cloudflare' } },
  {
    label: 'TLS',
    detail: {
      ca: 'HTTPS automàtic + HSTS',
      es: 'HTTPS automático + HSTS',
      en: 'Automatic HTTPS + HSTS',
    },
  },
  {
    label: 'Edge',
    detail: {
      ca: 'CDN · capçaleres de seguretat',
      es: 'CDN · cabeceras de seguridad',
      en: 'CDN · security headers',
    },
  },
  {
    label: 'HTML',
    detail: {
      ca: 'Estàtic, prerenderitzat',
      es: 'Estático, prerenderizado',
      en: 'Static, prerendered',
    },
  },
  {
    label: 'JS',
    detail: {
      ca: 'React hidrata la pàgina',
      es: 'React hidrata la página',
      en: 'React hydrates the page',
    },
  },
]
