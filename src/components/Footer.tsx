import { Link } from 'react-router'
import { ArrowUp } from 'lucide-react'
import { formatDate, localePath, useLang, useTx } from '../i18n'
import { ui } from '../i18n/ui'
import { site } from '../data/site'
import { confirmed } from '../data/pending'
import { requestPath } from '../data/infra'
import { useInfraMode } from '../hooks/useInfraMode'
import { LangSwitch } from './LangSwitch'

export function Footer() {
  const lang = useLang()
  const tx = useTx()
  const { on } = useInfraMode()
  const repo = confirmed(site.links.repo)

  return (
    <footer data-component="Footer" className="border-t border-rule bg-paper-2/60">
      {on && (
        <div className="border-b border-rule">
          <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
            <p className="meta uppercase">{tx(ui.infra.pathTitle)}</p>
            <ol className="mt-4 grid gap-3 sm:grid-cols-5">
              {requestPath.map((step, i) => (
                <li key={step.label} className="border-t-2 border-minio pt-2">
                  <span className="font-mono text-sm text-ink">
                    {String(i + 1).padStart(2, '0')} · {step.label}
                  </span>
                  <span className="block text-sm text-ink-2">{tx(step.detail)}</span>
                </li>
              ))}
            </ol>
            <p className="meta mt-6">{tx(ui.infra.facts)}</p>
          </div>
        </div>
      )}
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 text-sm text-ink-2 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <div>
          <p>{tx(ui.footer.built)}</p>
          <p className="meta mt-1">
            v{site.version} · {tx(ui.footer.updated)} {formatDate(site.updated, lang, true)}
            {repo && (
              <>
                {' · '}
                <a className="link" href={repo}>
                  {tx(ui.footer.source)}
                </a>
              </>
            )}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <Link className="link inline-flex min-h-11 items-center" to={localePath(lang, '/privacy')}>
            {tx(ui.footer.privacy)}
          </Link>
          <Link className="link inline-flex min-h-11 items-center" to={localePath(lang, '/legal')}>
            {tx(ui.footer.legal)}
          </Link>
          <LangSwitch />
          <a href="#top" className="inline-flex min-h-11 items-center gap-1 text-ink-2 hover:text-ink">
            <ArrowUp className="size-4" aria-hidden="true" />
            {tx(ui.footer.top)}
          </a>
        </div>
      </div>
    </footer>
  )
}
