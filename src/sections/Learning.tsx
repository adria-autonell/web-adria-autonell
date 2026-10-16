import { useTx } from '../i18n'
import { ui } from '../i18n/ui'
import { learning, type LearningState } from '../data/learning'
import { isPending, SHOW_PENDING } from '../data/pending'
import { Section } from '../components/Section'
import { sectionNumber } from '../data/sections'
import { Pending } from '../components/Pending'

/** Un glifo por estado, en lugar de porcentajes: lleno = hecho, vacío = por recorrer. */
const glyph: Record<LearningState, string> = {
  real: '■',
  project: '◧',
  practising: '◫',
  deepen: '□',
}

export function Learning() {
  const tx = useTx()
  return (
    <Section id="learning" number={sectionNumber('learning')} label={tx(ui.nav.learning)} title={tx(ui.sections.learning)}>
      <p className="reveal max-w-prose text-lg text-ink-2">{tx(ui.learning.intro)}</p>
      <dl className="mt-10 divide-y divide-rule border-y border-rule">
        {learning
          .filter((group) => SHOW_PENDING || !isPending(group.items))
          .map((group) => (
          <div key={group.state} className="reveal grid gap-3 py-6 sm:grid-cols-[13rem_1fr] sm:gap-6">
            <dt>
              <span className="flex items-baseline gap-2 font-semibold">
                <span aria-hidden="true" className="font-mono text-minio">
                  {glyph[group.state]}
                </span>
                {tx(group.label)}
              </span>
              <span className="meta mt-1 block pl-5">{tx(group.hint)}</span>
            </dt>
            <dd>
              {isPending(group.items) ? (
                <Pending value={group.items} />
              ) : (
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => {
                    const label = typeof item === 'string' ? item : tx(item)
                    return (
                      <li key={label} className="rounded-sm bg-paper-2 px-2.5 py-1 text-sm">
                        {label}
                      </li>
                    )
                  })}
                </ul>
              )}
              {group.todo && <Pending value={group.todo} block />}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}
