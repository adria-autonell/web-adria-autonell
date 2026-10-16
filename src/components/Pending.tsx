import { SHOW_PENDING, type Pending as PendingValue } from '../data/pending'

/**
 * Recordatorio visible solo en desarrollo. En producción no renderiza nada.
 * El texto está en castellano porque es una nota para Adrià, no para visitantes.
 */
export function Pending({ value, block = false }: { value: PendingValue; block?: boolean }) {
  if (!SHOW_PENDING) return null
  const Tag = block ? 'p' : 'span'
  return (
    <Tag
      className={`${block ? 'my-3 block' : 'inline-block'} rounded-sm border border-dashed border-minio/60 bg-minio/5 px-2 py-0.5 font-mono text-xs text-minio-deep`}
    >
      Pendiente · {value.note}
    </Tag>
  )
}
