import { useLang } from '../i18n'
import { personJsonLd } from '../seo'
import { Hero } from '../sections/Hero'
import { About } from '../sections/About'
import { Timeline } from '../sections/Timeline'
import { Projects } from '../sections/Projects'
import { Learning } from '../sections/Learning'
import { Process } from '../sections/Process'
import { Log } from '../sections/Log'
import { Contact } from '../sections/Contact'

export function Home() {
  const lang = useLang()
  return (
    <>
      <script type="application/ld+json">{JSON.stringify(personJsonLd(lang))}</script>
      <Hero />
      <About />
      <Timeline />
      <Projects />
      <Learning />
      <Process />
      <Contact />
      <Log />
    </>
  )
}
