import type { ReactNode } from 'react'
import { formatDate, useLang, useTx } from '../i18n'
import { ui } from '../i18n/ui'
import type { LegalDoc } from '../data/legal'
import { site } from '../data/site'
import { confirmed, isPending } from '../data/pending'
import { Pending } from '../components/Pending'

/** Página legal genérica: política de privacidad o aviso legal. */
export function LegalPage({ doc }: { doc: LegalDoc }) {
  const lang = useLang()
  const tx = useTx()
  const email = confirmed(site.links.email)
  const hasPending = doc.sections.some((s) => s.body.some(isPending))

  const render = (text: string): ReactNode => {
    const [before, after] = text.split('{contact}')
    if (after === undefined) return text
    const contact = email ? (
      <a className="link" href={`mailto:${email}`}>
        {email}
      </a>
    ) : (
      <a className="link" href={site.links.linkedin}>
        LinkedIn
      </a>
    )
    return (
      <>
        {before}
        {contact}
        {render(after)}
      </>
    )
  }

  return (
    <article className="mx-auto max-w-6xl px-4 pt-12 pb-24 sm:px-6 lg:px-8 lg:pt-20">
      <div className="grid gap-8 lg:grid-cols-12">
        <header className="lg:col-span-4">
          <h1 className="text-[clamp(2.25rem,5vw,3.5rem)] leading-[1.05] font-medium tracking-tight">{tx(doc.title)}</h1>
          <p className="meta mt-4">
            {tx(ui.legal.lastUpdated)}: <time dateTime={doc.updated}>{formatDate(doc.updated, lang, true)}</time>
          </p>
          {hasPending && <p className="meta mt-2">{tx(ui.legal.pendingNotice)}</p>}
        </header>
        <div className="space-y-10 lg:col-span-7 lg:col-start-6">
          {doc.sections.map((section) => (
            <section key={section.heading.es}>
              <h2 className="text-2xl font-medium">{tx(section.heading)}</h2>
              <div className="mt-3 space-y-4 leading-relaxed text-ink-2">
                {section.body.map((p, i) =>
                  isPending(p) ? <Pending key={i} value={p} block /> : <p key={i}>{render(tx(p))}</p>,
                )}
              </div>
            </section>
          ))}
        </div>
      </div>
    </article>
  )
}
