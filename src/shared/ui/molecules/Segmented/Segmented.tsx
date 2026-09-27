import { cx } from '@/shared/lib/cx'
import styles from './Segmented.module.css'

interface SegmentedProps<T extends string> {
  options: readonly { value: T; label: string }[]
  value: T
  onChange: (value: T) => void
  'aria-label': string
}

/** Compact two-or-more-state pill; clicking anywhere cycles to the next option. */
export function Segmented<T extends string>({ options, value, onChange, 'aria-label': ariaLabel }: SegmentedProps<T>) {
  const next = () => {
    const i = options.findIndex((o) => o.value === value)
    onChange(options[(i + 1) % options.length].value)
  }

  return (
    <button type="button" className={styles.root} onClick={next} aria-label={ariaLabel}>
      {options.map((o) => (
        <span key={o.value} className={cx(styles.option, o.value === value && styles.on)}>
          {o.label}
        </span>
      ))}
    </button>
  )
}
