import { useInfraMode } from '../hooks/useInfraMode'
import { infraNotes } from '../data/infra'
import { useTx } from '../i18n'

/** Anotación técnica que solo aparece con el modo «Ver la infraestructura» activo. */
export function InfraNote({ id }: { id: keyof typeof infraNotes }) {
  const { on } = useInfraMode()
  const tx = useTx()
  const entry = infraNotes[id]
  if (!on || !entry) return null
  return (
    <p className="mt-6 max-w-xs border-l-2 border-minio bg-paper-2/80 py-2 pr-3 pl-3 font-mono text-xs leading-relaxed text-ink-2">
      <span className="block font-medium text-minio-deep">{entry.component}</span>
      {tx(entry.note)}
    </p>
  )
}
