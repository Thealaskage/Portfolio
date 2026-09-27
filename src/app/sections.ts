import type { Dictionary } from '@/shared/i18n/dictionaries'

/** Page sections in scroll order. Each feature renders a <section> with the matching id. */
export const SECTIONS = [
  { id: 'inicio', label: 'navHome' },
  { id: 'experiencia', label: 'navExperience' },
  { id: 'proyectos', label: 'navProjects' },
] as const satisfies readonly { id: string; label: keyof Dictionary }[]

export const SECTION_IDS = SECTIONS.map((s) => s.id)
