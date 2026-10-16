/**
 * Marcador para información que Adrià todavía no ha confirmado.
 *
 * - En desarrollo (`npm run dev`) se muestra como una etiqueta discontinua para no olvidarla.
 * - En producción no se publica nada: ni el texto ni la etiqueta.
 * - `npm run pending` lista todos los pendientes del proyecto.
 */
export interface Pending {
  readonly pending: true
  /** Qué falta, escrito para Adrià (no se publica). */
  readonly note: string
}

export const pending = (note: string): Pending => ({ pending: true, note })

export const isPending = (value: unknown): value is Pending =>
  typeof value === 'object' && value !== null && (value as Pending).pending === true

export const SHOW_PENDING = import.meta.env.DEV

/** Valor confirmado o `undefined` si sigue pendiente. */
export const confirmed = <T>(value: T | Pending): T | undefined =>
  isPending(value) ? undefined : value
