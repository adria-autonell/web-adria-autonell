import { formatDate, useLang, useTx } from '../i18n'
import { ui } from '../i18n/ui'
import { changelog, lessons, nowLearning } from '../data/log'
import { isPending, SHOW_PENDING } from '../data/pending'
import { Section } from '../components/Section'
import { sectionNumber } from '../data/sections'
import { MarginNote } from '../components/MarginNote'
import { Pending } from '../components/Pending'

export function Log() {
  const lang = useLang()
  const tx = useTx()

  const now = isPending(nowLearning) ? null : nowLearning
  const aside =
    now || SHOW_PENDING ? (
      <MarginNote title={tx(ui.log.now)}>
        {now ? (
          <>
            <p>{tx(now.text)}</p>
            <p className="meta mt-2">{formatDate(now.updated, lang)}</p>
          </>
        ) : (
          isPending(nowLearning) && <Pending value={nowLearning} />
        )}
      </MarginNote>
    ) : undefined

  return (
    <Section id="log" number={sectionNumber('log')} label={tx(ui.log.changelog)} title={tx(ui.sections.log)} aside={aside}>
      <p className="reveal max-w-prose text-lg text-ink-2">{tx(ui.log.intro)}</p>

      <h3 className="meta mt-10 uppercase">{tx(ui.log.changelog)}</h3>
      <ol className="mt-4 space-y-6 font-mono text-sm">
        {changelog.map((entry) => (
          <li key={entry.version} className="reveal grid gap-2 sm:grid-cols-[7rem_1fr]">
            <p className="text-ink-3">
              <span className="text-minio">v{entry.version}</span>
              <br />
              <time dateTime={entry.date}>{formatDate(entry.date, lang)}</time>
            </p>
            <ul className="space-y-1.5 font-sans text-[0.9375rem] text-ink-2">
              {entry.changes.map((c) => (
                <li key={c.es} className="relative pl-4 before:absolute before:left-0 before:text-ink-3 before:content-['+']">
                  {tx(c)}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>

      {(SHOW_PENDING || !isPending(lessons)) && (
        <>
          <h3 className="meta mt-12 uppercase">{tx(ui.log.lessons)}</h3>
          {isPending(lessons) ? (
            <Pending value={lessons} block />
          ) : (
            <ul className="mt-4 space-y-4">
              {lessons.map((l) => (
                <li key={l.title.es}>
                  <p className="font-semibold">{tx(l.title)}</p>
                  <p className="text-ink-2">{tx(l.body)}</p>
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </Section>
  )
}
