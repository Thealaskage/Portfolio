import { useState } from 'react'
import { cx } from '@/shared/lib/cx'
import styles from './ImageSlot.module.css'

interface ImageSlotProps {
  src: string
  alt: string
  /** Shown in a dashed box until the image file exists. */
  placeholder: string
  fit?: 'cover' | 'contain'
  framed?: boolean
  className?: string
}

export function ImageSlot({ src, alt, placeholder, fit = 'cover', framed = true, className }: ImageSlotProps) {
  const [failedSrc, setFailedSrc] = useState<string | null>(null)

  return (
    <div className={cx(styles.slot, className)}>
      {failedSrc === src ? (
        <div className={cx(styles.placeholder, framed && styles.framed)}>{placeholder}</div>
      ) : (
        <img className={cx(styles.img, styles[fit])} src={src} alt={alt} loading="lazy" onError={() => setFailedSrc(src)} />
      )}
    </div>
  )
}
