import { useTx } from '../i18n'
import { ui } from '../i18n/ui'
import { process } from '../data/process'
import { Section } from '../components/Section'
import { sectionNumber } from '../data/sections'

export function Process() {
  const tx = useTx()
  return (
    <Section id="process" number={sectionNumber('process')} label={tx(ui.nav.process)} title={tx(ui.sections.process)}>
      <p className="reveal max-w-prose text-lg text-ink-2">{tx(ui.process.intro)}</p>
      <ol className="mt-10 grid gap-px overflow-hidden border border-rule bg-rule sm:grid-cols-2">
        {process.map((step, i) => (
          <li key={step.name.es} className="reveal group bg-paper p-6 transition-colors hover:bg-paper-2">
            <p className="meta flex items-center gap-2">
              <span className="text-minio">{String(i + 1).padStart(2, '0')}</span>
              {i < process.length - 1 && (
                <span aria-hidden="true" className="h-px flex-1 bg-rule transition-colors group-hover:bg-minio" />
              )}
            </p>
            <h3 className="mt-3 text-2xl font-medium">{tx(step.name)}</h3>
            <p className="mt-2 text-ink-2">{tx(step.body)}</p>
            <p className="mt-4 border-t border-dashed border-rule pt-3 text-sm text-ink-2">
              <span className="meta mr-1 uppercase">{tx(ui.process.here)}:</span> {tx(step.here)}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  )
}
