import { Layers } from 'lucide-react'
import { useInfraMode } from '../hooks/useInfraMode'
import { useTx } from '../i18n'
import { ui } from '../i18n/ui'

/** Interruptor del modo «Ver la infraestructura». */
export function InfraToggle() {
  const { on, toggle } = useInfraMode()
  const tx = useTx()
  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={on}
      title={tx(ui.infra.on)}
      className={`inline-flex min-h-11 items-center gap-2 rounded-sm border px-3 font-mono text-xs transition-colors ${
        on ? 'border-minio bg-minio text-paper' : 'border-rule text-ink-2 hover:border-ink-3 hover:text-ink'
      }`}
    >
      <Layers className="size-4" aria-hidden="true" />
      {/* El nombre accesible empieza por el texto visible en cada ancho (WCAG 2.5.3). */}
      <span className="2xl:hidden">{tx(ui.infra.short)}</span>
      <span className="sr-only 2xl:not-sr-only">{tx(ui.infra.on)}</span>
    </button>
  )
}
