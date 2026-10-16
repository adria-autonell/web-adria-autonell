import { ArrowUpRight } from 'lucide-react'
import { useTx } from '../i18n'
import { ui } from '../i18n/ui'
import { about, languages } from '../data/profile'
import { Section } from '../components/Section'
import { sectionNumber } from '../data/sections'
import { MarginNote } from '../components/MarginNote'
import { Pending } from '../components/Pending'

export function About() {
  const tx = useTx()
  return (
    <Section
      id="about"
      number={sectionNumber('about')}
      label={tx(ui.nav.about)}
      title={tx(ui.sections.about)}
      aside={
        <div className="space-y-10">
          <MarginNote title={tx(about.note.title)}>
            <p>{tx(about.note.body)}</p>
            <a href={about.note.href} className="link mt-2 inline-flex min-h-11 items-center gap-1 text-sm font-semibold text-ink">
              fundacioimpulsa.org
              <ArrowUpRight aria-hidden="true" className="size-3.5" />
            </a>
          </MarginNote>
          <MarginNote title={tx(ui.about.languages)}>
            <dl className="space-y-1">
              {languages.map((lang) => (
                <div key={lang.name.es} className="flex justify-between gap-4">
                  <dt>{tx(lang.name)}</dt>
                  <dd className="font-mono text-xs leading-6 text-ink-3">{tx(lang.level)}</dd>
                </div>
              ))}
            </dl>
          </MarginNote>
        </div>
      }
    >
      <div className="reveal space-y-5 text-[1.0625rem] leading-relaxed text-ink-2 [&>p:first-child]:text-xl [&>p:first-child]:leading-relaxed [&>p:first-child]:text-ink">
        {about.paragraphs.map((p) => (
          <p key={p.es}>{tx(p)}</p>
        ))}
      </div>
      {about.open.map((q) => (
        <Pending key={q.note} value={q} block />
      ))}
    </Section>
  )
}
