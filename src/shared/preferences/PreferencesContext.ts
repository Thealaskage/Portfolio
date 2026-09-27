import { createContext, useContext } from 'react'
import { DICTIONARIES, type Dictionary } from '@/shared/i18n/dictionaries'
import type { Lang } from '@/shared/types/localized'

export type Theme = 'light' | 'dark'

export interface Preferences {
  theme: Theme
  lang: Lang
  toggleTheme: () => void
  setLang: (lang: Lang) => void
}

export const PreferencesContext = createContext<Preferences | null>(null)

export function usePreferences(): Preferences {
  const ctx = useContext(PreferencesContext)
  if (!ctx) throw new Error('usePreferences must be used inside <PreferencesProvider>')
  return ctx
}

/** UI strings for the current language. */
export function useT(): Dictionary {
  return DICTIONARIES[usePreferences().lang]
}
