import type { ReactNode } from 'react'
import { InfraNote } from './InfraNote'

interface SectionProps {
  id: string
  number: string
  label: string
  title: string
  aside?: ReactNode
  children: ReactNode
}

/**
 * Una «entrada» del cuaderno: número y etiqueta a la izquierda, contenido en el centro
 * y notas al margen a la derecha. En móvil todo se apila.
 */
export function Section({ id, number, label, title, aside, children }: SectionProps) {
  const headingId = `${id}-title`
  return (
    <section id={id} aria-labelledby={headingId} tabIndex={-1} className="-scroll-mt-16 border-t border-rule outline-none">
      <div className="mx-auto grid max-w-6xl gap-x-8 px-4 py-20 sm:px-6 lg:grid-cols-12 lg:px-8 lg:py-28">
        <header className="reveal lg:col-span-3">
          <p className="meta">
            <span className="text-minio">{number}</span> — {label}
          </p>
          <h2 id={headingId} className="mt-3 text-[2rem] leading-[1.1] font-medium tracking-tight sm:text-4xl">
            {title}
          </h2>
          <InfraNote id={id} />
        </header>
        <div className="mt-10 lg:col-span-6 lg:mt-1">{children}</div>
        {aside && <aside className="lg:col-span-3 lg:mt-2">{aside}</aside>}
      </div>
    </section>
  )
}
