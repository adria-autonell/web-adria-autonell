import type { L } from '../i18n'

/*
 * Concursos de programación en los que Adrià participó con el Institut Lliçà d'Amunt.
 * Los años los ha confirmado Adrià. La clasificación para la final de la OIcat 2024
 * está publicada por el instituto (enlace en `links`). No se publican posiciones ni premios.
 */

export interface Contest {
  name: string
  years: string[]
  context: L
  /** Resultado verificable, si lo hay. */
  highlight?: L
  links: { label: L; href: string }[]
}

const t = (ca: string, es: string, en: string): L => ({ ca, es, en })

export const contestsIntro = t(
  'Durant el Grau Mitjà vaig participar en concursos de programació amb l’Institut Lliçà d’Amunt.',
  'Durante el Grado Medio participé en concursos de programación con el Institut Lliçà d’Amunt.',
  'During my intermediate vocational degree I took part in programming contests with Institut Lliçà d’Amunt.',
)

export const contests: Contest[] = [
  {
    name: 'Olimpíada Informàtica de Catalunya',
    years: ['2024', '2025'],
    context: t(
      'Competició individual de problemes d’algorísmia per a estudiants preuniversitaris.',
      'Competición individual de problemas de algoritmia para estudiantes preuniversitarios.',
      'An individual algorithmic problem-solving contest for pre-university students.',
    ),
    highlight: t(
      '2024: classificat per a la final, celebrada a la Universitat de Vic.',
      '2024: clasificado para la final, celebrada en la Universitat de Vic.',
      '2024: qualified for the final, held at the University of Vic.',
    ),
    links: [
      {
        label: t('Notícia de l’institut', 'Noticia del instituto', 'School news'),
        href: 'https://agora.xtec.cat/iesllica/portada/dos-alumnes-dinformatica-classificats-per-la-final-de-loicat/',
      },
      { label: t('Web de l’OIcat', 'Web de la OIcat', 'OIcat website'), href: 'https://olimpiada-informatica.cat/' },
    ],
  },
  {
    name: 'HP CodeWars Barcelona',
    years: ['2024', '2025'],
    context: t(
      'Competició anual de programació per equips que organitza HP a Sant Cugat del Vallès.',
      'Competición anual de programación por equipos que organiza HP en Sant Cugat del Vallès.',
      'A yearly team programming contest run by HP in Sant Cugat del Vallès.',
    ),
    links: [{ label: t('Web d’HP CodeWars', 'Web de HP CodeWars', 'HP CodeWars website'), href: 'https://codewarsbcn.hpcloud.hp.com/' }],
  },
  {
    name: 'ProgramaMe',
    years: ['2024', '2025'],
    context: t(
      'Concurs de programació per equips per a estudiants de cicles formatius.',
      'Concurso de programación por equipos para estudiantes de ciclos formativos.',
      'A team programming contest for vocational training students.',
    ),
    links: [{ label: t('Web de ProgramaMe', 'Web de ProgramaMe', 'ProgramaMe website'), href: 'https://programame.com/' }],
  },
]
