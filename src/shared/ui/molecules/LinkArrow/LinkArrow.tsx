import type { ComponentPropsWithoutRef } from 'react'
import { cx } from '@/shared/lib/cx'
import styles from './LinkArrow.module.css'

interface LinkArrowProps extends ComponentPropsWithoutRef<'a'> {
  size?: 'md' | 'sm'
}

/** Accent, underlined call-to-action link whose arrow slides on hover. */
export function LinkArrow({ children, size = 'md', className, ...rest }: LinkArrowProps) {
  return (
    <a className={cx(styles.link, styles[size], className)} {...rest}>
      <span>{children}</span>
      <span aria-hidden="true">→</span>
    </a>
  )
}
