import { ArrowUpRight } from 'lucide-react'
import { useTx, type L } from '../i18n'
import { ui } from '../i18n/ui'
import { timeline, type TimelineKind } from '../data/timeline'
import { contests, contestsIntro } from '../data/contests'
import { isPending, SHOW_PENDING } from '../data/pending'
import { Section } from '../components/Section'
import { sectionNumber } from '../data/sections'
import { Pending } from '../components/Pending'

const kindLabel: Record<TimelineKind, L> = {
  study: { ca: 'Formació', es: 'Formación', en: 'Education' },
  work: { ca: 'Experiència', es: 'Experiencia', en: 'Experience' },
  growth: { ca: 'Creixement', es: 'Crecimiento', en: 'Growth' },
}

function Contests() {
  const tx = useTx()
  return (
    <div className="reveal mt-16">
      <h3 id="contests-title" className="text-2xl font-medium">
        {tx(ui.contests.title)}
      </h3>
      <p className="mt-2 max-w-prose text-ink-2">{tx(contestsIntro)}</p>
      <ul aria-labelledby="contests-title" className="mt-6 divide-y divide-rule border-y border-rule">
        {contests.map((contest) => (
          <li key={contest.name} className="grid gap-2 py-5 sm:grid-cols-[1fr_auto] sm:gap-x-6">
            <div>
              <p className="font-serif text-xl leading-snug font-medium">{contest.name}</p>
              <p className="mt-1 text-[0.9375rem] text-ink-2">{tx(contest.context)}</p>
              {contest.highlight && (
                <p className="mt-2 border-l-2 border-minio pl-3 text-[0.9375rem] font-semibold text-ink">{tx(contest.highlight)}</p>
              )}
              <ul className="mt-2 flex flex-wrap gap-x-5">
                {contest.links.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="link inline-flex min-h-11 items-center gap-1 text-sm">
                      {tx(link.label)}
                      <ArrowUpRight aria-hidden="true" className="size-3.5" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <ul className="flex gap-1.5 sm:flex-col sm:items-end" aria-label={tx(ui.contests.years)}>
              {contest.years.map((year) => (
                <li key={year} className="rounded-sm bg-paper-2 px-2 py-0.5 font-mono text-xs text-ink-2">
                  {year}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Timeline() {
  const tx = useTx()
  const entries = timeline.filter((e) => SHOW_PENDING || !e.draft)

  return (
    <Section id="path" number={sectionNumber('path')} label={tx(ui.nav.path)} title={tx(ui.sections.path)}>
      <ol className="relative border-l border-rule">
        {entries.map((entry, i) => (
          <li key={i} className="reveal relative pb-10 pl-8 last:pb-0">
            <span
              aria-hidden="true"
              className={`absolute top-2 -left-[5px] size-[9px] rounded-full border-2 border-paper ${
                entry.kind === 'study' ? 'bg-ink' : entry.kind === 'work' ? 'bg-minio' : 'bg-ink-3'
              }`}
            />
            <p className="meta">
              {tx(kindLabel[entry.kind])}
              {entry.date && !isPending(entry.date) && <> · {tx(entry.date)}</>}
            </p>
            {entry.draft ? (
              <>
                <h3 className="mt-1 text-xl font-medium">{isPending(entry.org) ? '' : entry.org}</h3>
                <Pending value={entry.draft} block />
              </>
            ) : (
              <>
                <h3 className="mt-1 text-xl leading-snug font-medium">{tx(entry.title)}</h3>
                {isPending(entry.org) ? (
                  <Pending value={entry.org} />
                ) : entry.href ? (
                  <a href={entry.href} className="link inline-flex items-center gap-1 text-sm font-semibold text-ink-2">
                    {entry.org}
                    <ArrowUpRight aria-hidden="true" className="size-3.5" />
                  </a>
                ) : (
                  entry.org && <p className="text-sm font-semibold text-ink-2">{entry.org}</p>
                )}
                <p className="mt-2 text-ink-2">{tx(entry.body)}</p>
                {entry.tools && (
                  <ul className="mt-3 flex flex-wrap gap-1.5" aria-label={tx(ui.projects.stack)}>
                    {entry.tools.map((tool) => (
                      <li key={tool} className="rounded-sm border border-rule px-1.5 py-0.5 font-mono text-xs text-ink-2">
                        {tool}
                      </li>
                    ))}
                  </ul>
                )}
                {entry.date && isPending(entry.date) && <Pending value={entry.date} block />}
              </>
            )}
          </li>
        ))}
      </ol>
      <Contests />
    </Section>
  )
}
