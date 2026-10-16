import type { ReactNode } from 'react'

/** Nota al margen, como las anotaciones a lápiz de un cuaderno. */
export function MarginNote({ title, children }: { title?: ReactNode; children: ReactNode }) {
  return (
    <div className="relative mt-8 max-w-xs pl-5 text-sm leading-relaxed text-ink-2 lg:mt-0">
      <span aria-hidden="true" className="absolute top-1 left-0 font-mono text-xs text-minio">
        ↳
      </span>
      {title && <p className="meta mb-1 uppercase">{title}</p>}
      {children}
    </div>
  )
}
