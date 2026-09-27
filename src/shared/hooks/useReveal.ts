import { useEffect } from 'react'

const HIDDEN_OFFSET = 'translateY(24px)'
const TRANSITION =
  'opacity .8s ease, transform .8s var(--ease-out), border-color .35s ease, background-color var(--t-theme), box-shadow .35s ease'

/**
 * Fades in every `[data-reveal]` element as it enters the viewport.
 * Elements already on screen at mount are left untouched.
 * Styles are set inline so they don't fight each component's CSS Module.
 */
export function useReveal(): void {
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return

    const show = (el: HTMLElement) => {
      el.style.opacity = ''
      el.style.transform = ''
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          show(entry.target as HTMLElement)
          io.unobserve(entry.target)
        }
      },
      { threshold: 0.05, rootMargin: '0px 0px -5% 0px' },
    )

    const pending: HTMLElement[] = []
    document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el) => {
      if (el.getBoundingClientRect().top < window.innerHeight * 0.9) return
      el.style.transition = TRANSITION
      el.style.opacity = '0'
      el.style.transform = HIDDEN_OFFSET
      io.observe(el)
      pending.push(el)
    })

    return () => {
      io.disconnect()
      pending.forEach(show)
    }
  }, [])
}
