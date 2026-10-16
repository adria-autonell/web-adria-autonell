import type { ReactNode } from 'react'
import { Link, type To } from 'react-router'

interface Props {
  to?: To
  href?: string
  variant?: 'primary' | 'secondary'
  download?: boolean
  children: ReactNode
}

const base =
  'group inline-flex min-h-11 items-center gap-2 rounded-sm px-5 py-2.5 text-sm font-semibold transition-[background-color,color,border-color,transform] duration-150 active:translate-y-px'
const variants = {
  primary: 'bg-ink text-paper hover:bg-minio-deep',
  secondary: 'border border-ink/80 text-ink hover:border-minio-deep hover:text-minio-deep',
}

/** Botón-enlace. Interno con `to`, externo con `href` (se abre en la misma pestaña salvo descargas). */
export function ButtonLink({ to, href, variant = 'primary', download, children }: Props) {
  const className = `${base} ${variants[variant]}`
  if (to) {
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    )
  }
  const external = href?.startsWith('http')
  return (
    <a href={href} className={className} download={download || undefined} {...(external ? { rel: 'noopener' } : {})}>
      {children}
    </a>
  )
}
