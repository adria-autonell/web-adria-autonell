import { Link } from 'react-router'
import { ArrowRight } from 'lucide-react'
import { localePath, useLang, useTx } from '../i18n'
import { ui } from '../i18n/ui'
import { projects } from '../data/projects'
import { Section } from '../components/Section'
import { sectionNumber } from '../data/sections'
import { ProjectPicture } from '../components/ProjectPicture'

export function Projects() {
  const lang = useLang()
  const tx = useTx()

  return (
    <Section id="projects" number={sectionNumber('projects')} label={tx(ui.nav.projects)} title={tx(ui.sections.projects)}>
      <ol className="space-y-16">
        {projects.map((project, i) => (
          <li key={project.slug} className="reveal">
            <article aria-labelledby={`project-${project.slug}`} className="group relative">
              <p className="meta">
                <span className="text-minio">{String(i + 1).padStart(2, '0')}</span>
                <span className="ml-3">{tx(project.kind)} · {tx(project.status)}</span>
              </p>
              <h3 id={`project-${project.slug}`} className="mt-2 text-3xl leading-tight font-medium tracking-tight">
                <Link
                  to={localePath(lang, `/projects/${project.slug}`)}
                  className="after:absolute after:inset-0 after:content-[''] group-hover:text-minio-deep"
                >
                  {tx(project.name)}
                </Link>
              </h3>
              <p className="mt-3 max-w-prose text-ink-2">{tx(project.summary)}</p>
              {(
                <ul className="mt-4 flex flex-wrap gap-2" aria-label={tx(ui.projects.stack)}>
                  {project.stack.map((tech) => (
                    <li key={tech} className="rounded-sm border border-rule px-2 py-0.5 font-mono text-xs text-ink-2">
                      {tech}
                    </li>
                  ))}
                </ul>
              )}
              {project.image && (
                <div className="mt-6 transition-transform duration-300 group-hover:-translate-y-1">
                  <ProjectPicture image={project.image} sizes="(min-width: 1024px) 34rem, 100vw" />
                </div>
              )}
              <p className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-ink group-hover:text-minio-deep">
                {tx(ui.projects.readCase)}
                <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-1" />
              </p>
            </article>
          </li>
        ))}
      </ol>
    </Section>
  )
}
