import { useEffect, useState } from 'react'

/**
 * Returns the id of the last section whose top has scrolled past
 * `threshold` (fraction of the viewport height).
 */
export function useActiveSection(ids: readonly string[], threshold = 0.4): string {
  const [active, setActive] = useState(ids[0])

  useEffect(() => {
    const onScroll = () => {
      let current = ids[0]
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top < window.innerHeight * threshold) current = id
      }
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [ids, threshold])

  return active
}
