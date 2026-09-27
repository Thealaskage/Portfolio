import type { ComponentPropsWithoutRef } from 'react'
import { cx } from '@/shared/lib/cx'
import { Icon, type IconName } from '../Icon/Icon'
import styles from './IconButton.module.css'

interface IconLinkProps extends ComponentPropsWithoutRef<'a'> {
  icon: IconName
  iconSize?: number
  'aria-label': string
}

/** Round, outlined icon link (social profiles). */
export function IconLink({ icon, iconSize, className, ...rest }: IconLinkProps) {
  return (
    <a className={cx(styles.button, styles.lift, className)} {...rest}>
      <Icon name={icon} size={iconSize} />
    </a>
  )
}

interface IconButtonProps extends ComponentPropsWithoutRef<'button'> {
  icon: IconName
  'aria-label': string
}

/** Small round, outlined icon button (header actions). */
export function IconButton({ icon, className, ...rest }: IconButtonProps) {
  return (
    <button type="button" className={cx(styles.button, styles.small, className)} {...rest}>
      <Icon name={icon} />
    </button>
  )
}
