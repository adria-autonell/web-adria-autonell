import type { ProjectImage } from '../data/projects'
import { useTx } from '../i18n'

/** Captura responsive en AVIF/WebP con dimensiones explícitas (sin saltos de diseño). */
export function ProjectPicture({
  image,
  sizes,
  eager = false,
  className = '',
}: {
  image: ProjectImage
  sizes: string
  eager?: boolean
  className?: string
}) {
  const tx = useTx()
  const set = (ext: string) => `${image.src}-800.${ext} 800w, ${image.src}-1600.${ext} 1600w`
  return (
    <picture>
      <source type="image/avif" srcSet={set('avif')} sizes={sizes} />
      <source type="image/webp" srcSet={set('webp')} sizes={sizes} />
      <img
        src={`${image.src}-800.webp`}
        width={image.width}
        height={image.height}
        alt={tx(image.alt)}
        loading={eager ? 'eager' : 'lazy'}
        fetchPriority={eager ? 'high' : 'auto'}
        decoding="async"
        className={`h-auto w-full border border-rule bg-paper-2 ${className}`}
      />
    </picture>
  )
}
