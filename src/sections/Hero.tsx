import { ArrowDown, ArrowRight } from 'lucide-react'
import { localePath, useLang, useTx } from '../i18n'
import { ui } from '../i18n/ui'
import { hero, status } from '../data/profile'
import { site } from '../data/site'
import { ButtonLink } from '../components/ButtonLink'
import { InfraNote } from '../components/InfraNote'

export function Hero() {
  const lang = useLang()
  const tx = useTx()

  return (
    <section id="hero" aria-labelledby="hero-title" className="overflow-hidden">
      <div className="mx-auto grid max-w-6xl gap-x-8 gap-y-14 px-4 pt-14 pb-20 sm:px-6 sm:pt-20 lg:grid-cols-12 lg:px-8 lg:pt-28 lg:pb-32">
        <div className="lg:col-span-8">
          <p className="meta rise">{tx(hero.eyebrow)}</p>

          <h1
            id="hero-title"
            translate="no"
            className="rise rise-1 mt-6 text-[clamp(4rem,14vw,8.5rem)] leading-[0.92] font-medium tracking-[-0.035em]"
          >
            Adrià
            <span className="block pl-[0.6em]">
              <span className="relative inline-block">
                Autonell
                <svg
                  aria-hidden="true"
                  viewBox="0 0 300 16"
                  preserveAspectRatio="none"
                  className="absolute -bottom-[0.1em] left-0 h-[0.12em] w-full overflow-visible"
                >
                  <path
                    className="draw stroke-minio"
                    pathLength={1}
                    d="M2 11c40-6 80-7 120-4s95 4 176-3"
                    fill="none"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </span>
          </h1>

          <p className="rise rise-2 mt-10 max-w-xl text-lg leading-relaxed text-ink-2">{tx(hero.lead)}</p>
          <p className="rise rise-2 mt-6 max-w-xl font-serif text-2xl leading-snug text-ink italic">
            “{tx(hero.motto)}”
          </p>

          <div className="rise rise-3 mt-10 flex flex-wrap gap-3">
            <ButtonLink to={{ pathname: localePath(lang), hash: '#projects' }}>
              {tx(ui.hero.primary)}
              <ArrowDown className="size-4 transition-transform group-hover:translate-y-0.5" aria-hidden="true" />
            </ButtonLink>
            <ButtonLink to={{ pathname: localePath(lang), hash: '#contact' }} variant="secondary">
              {tx(ui.hero.secondary)}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </ButtonLink>
          </div>
        </div>

        <aside className="rise rise-3 self-end lg:col-span-4" aria-labelledby="status-title">
          <div className="crop-marks bg-paper-2 p-6">
            <h2 id="status-title" className="meta flex items-center gap-2 font-mono uppercase">
              <span className="relative inline-flex size-2">
                <span aria-hidden="true" className="absolute inset-0 rounded-full bg-minio motion-safe:animate-ping motion-safe:[animation-duration:2.4s]" />
                <span aria-hidden="true" className="relative inline-flex size-2 rounded-full bg-minio" />
              </span>
              {tx(ui.hero.statusTitle)}
            </h2>
            <dl className="mt-5 space-y-4">
              {status.map((row) => (
                <div key={row.label.es} className="grid grid-cols-[6.5rem_1fr] gap-3 border-t border-rule pt-3">
                  <dt className="meta pt-0.5">{tx(row.label)}</dt>
                  <dd className="text-sm leading-snug">{tx(row.value)}</dd>
                </div>
              ))}
              <div className="grid grid-cols-[6.5rem_1fr] gap-3 border-t border-rule pt-3">
                <dt className="meta pt-0.5">{tx(ui.hero.location)}</dt>
                <dd className="text-sm leading-snug">{site.location}</dd>
              </div>
            </dl>
          </div>
          <InfraNote id="hero" />
        </aside>
      </div>
    </section>
  )
}
