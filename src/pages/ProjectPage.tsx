import { Link, useParams } from 'react-router'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { localePath, useLang, useTx } from '../i18n'
import { ui } from '../i18n/ui'
import { getProject, type ProjectSection } from '../data/projects'
import { SHOW_PENDING } from '../data/pending'
import { Pending } from '../components/Pending'
import { ProjectPicture } from '../components/ProjectPicture'
import { NotFound } from './NotFound'

function Block({ section }: { section: ProjectSection }) {
  const tx = useTx()
  if (section.pending && !SHOW_PENDING) return null
  const List = section.ordered ? 'ol' : 'ul'

  return (
    <section className="reveal grid gap-3 border-t border-rule py-8 lg:grid-cols-12 lg:gap-8">
      <h2 className="meta pt-1 uppercase lg:col-span-3">{tx(section.title)}</h2>
      <div className="space-y-4 text-[1.0625rem] leading-relaxed text-ink-2 lg:col-span-7">
        {section.intro && <p>{tx(section.intro)}</p>}
        {section.items && (
          <List className="space-y-3">
            {section.items.map((item, i) => (
              <li key={item.es} className="relative pl-8">
                <span aria-hidden="true" className="absolute top-0 left-0 font-mono text-sm leading-[1.75rem] text-minio">
                  {section.ordered ? String(i + 1).padStart(2, '0') : '—'}
                </span>
                {tx(item)}
              </li>
            ))}
          </List>
        )}
        {section.outro && <p>{tx(section.outro)}</p>}
        {section.pending && <Pending value={section.pending} block />}
      </div>
    </section>
  )
}

export function ProjectPage() {
  const { slug } = useParams()
  const lang = useLang()
  const tx = useTx()
  const project = getProject(slug)
  if (!project) return <NotFound />

  return (
    <article className="mx-auto max-w-6xl px-4 pt-12 pb-24 sm:px-6 lg:px-8 lg:pt-20">
      <Link
        to={{ pathname: localePath(lang), hash: '#projects' }}
        className="group inline-flex min-h-11 items-center gap-2 text-sm text-ink-2 hover:text-ink"
      >
        <ArrowLeft aria-hidden="true" className="size-4 transition-transform group-hover:-translate-x-0.5" />
        {tx(ui.projects.back)}
      </Link>

      <header className="mt-8 grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <p className="meta rise">
            {tx(project.kind)} · {tx(project.status)} · {project.year}
          </p>
          <h1 className="rise rise-1 mt-4 text-[clamp(2.5rem,7vw,5rem)] leading-[1] font-medium tracking-tight">
            {tx(project.name)}
          </h1>
          <p className="rise rise-2 mt-6 max-w-2xl text-xl leading-relaxed text-ink-2">{tx(project.summary)}</p>
          <ul className="rise rise-2 mt-6 flex flex-wrap gap-2" aria-label={tx(ui.projects.stack)}>
            {project.stack.map((tech) => (
              <li key={tech} className="rounded-sm border border-rule px-2 py-0.5 font-mono text-xs text-ink-2">
                {tech}
              </li>
            ))}
          </ul>
        </div>
        <nav aria-label={tx(ui.projects.links)} className="rise rise-3 self-end lg:col-span-4">
          <ul className="flex flex-col gap-1 lg:items-end">
            {project.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`group inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold ${
                    link.primary ? 'rounded-sm bg-ink px-4 text-paper hover:bg-minio-deep' : 'link'
                  }`}
                >
                  {tx(link.label)}
                  <ArrowUpRight
                    aria-hidden="true"
                    className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {project.image && (
        <div className="rise rise-3 mt-12">
          <ProjectPicture image={project.image} sizes="(min-width: 1152px) 72rem, 100vw" eager className={project.image.heroClass} />
        </div>
      )}

      <div className="mt-12">
        {project.sections.map((section) => (
          <Block key={section.title.es} section={section} />
        ))}
      </div>
    </article>
  )
}
