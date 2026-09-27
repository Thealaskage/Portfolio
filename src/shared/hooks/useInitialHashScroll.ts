import { useEffect } from 'react'

/**
 * The browser tries to jump to `#section` before React has rendered it.
 * Re-apply that jump once on mount.
 */
export function useInitialHashScroll(): void {
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1))
    if (id) document.getElementById(id)?.scrollIntoView({ behavior: 'instant' })
  }, [])
}
