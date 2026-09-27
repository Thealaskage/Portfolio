import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react'
import { storage } from '@/shared/lib/storage'
import { PreferencesContext, type Preferences, type Theme } from '@/shared/preferences/PreferencesContext'
import { LANGS, type Lang } from '@/shared/types/localized'

const THEME_KEY = 'jpl-theme'
const LANG_KEY = 'jpl-lang'

const initialTheme = (): Theme => (storage.get(THEME_KEY) === 'dark' ? 'dark' : 'light')
const initialLang = (): Lang => {
  const saved = storage.get(LANG_KEY)
  return LANGS.includes(saved as Lang) ? (saved as Lang) : 'es'
}

/** Owns theme + language, persists them and mirrors them onto <html>. */
export function PreferencesProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState(initialTheme)
  const [lang, setLang] = useState(initialLang)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    storage.set(THEME_KEY, theme)
  }, [theme])

  useEffect(() => {
    document.documentElement.lang = lang
    storage.set(LANG_KEY, lang)
  }, [lang])

  const toggleTheme = useCallback(() => setTheme((t) => (t === 'dark' ? 'light' : 'dark')), [])

  const value = useMemo<Preferences>(() => ({ theme, lang, toggleTheme, setLang }), [theme, lang, toggleTheme])

  return <PreferencesContext value={value}>{children}</PreferencesContext>
}
