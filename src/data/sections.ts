/**
 * Secciones de la portada en orden. El número se muestra en la cabecera de cada sección
 * y en el índice; `nav: false` significa que no aparece en el menú (pero sí en el
 * indicador de sección de móvil).
 */
export const homeSections = [
  { id: 'about', number: '01', nav: true },
  { id: 'path', number: '02', nav: true },
  { id: 'projects', number: '03', nav: true },
  { id: 'learning', number: '04', nav: true },
  { id: 'process', number: '05', nav: true },
  { id: 'contact', number: '06', nav: true },
  // El registro de cambios va al final, como un apéndice del cuaderno.
  { id: 'log', number: '07', nav: false },
] as const

export type HomeSectionId = (typeof homeSections)[number]['id']

export const navSections = homeSections.filter((s) => s.nav)

/** Número de una sección, para que la cabecera y el índice no se desincronicen. */
export const sectionNumber = (id: HomeSectionId) => homeSections.find((s) => s.id === id)!.number
