import { useActiveSection } from '@/shared/hooks/useActiveSection'
import { cx } from '@/shared/lib/cx'
import { usePreferences, useT } from '@/shared/preferences/PreferencesContext'
import { Container } from '@/shared/ui/atoms/Container/Container'
import { IconButton } from '@/shared/ui/atoms/IconButton/IconButton'
import { Segmented } from '@/shared/ui/molecules/Segmented/Segmented'
import { SECTION_IDS, SECTIONS } from '@/app/sections'
import styles from './Header.module.css'

const LANG_OPTIONS = [
  { value: 'en', label: 'EN' },
  { value: 'es', label: 'ES' },
] as const

export function Header() {
  const t = useT()
  const { theme, lang, toggleTheme, setLang } = usePreferences()
  const active = useActiveSection(SECTION_IDS)

  return (
    <header className={styles.header}>
      <Container className={styles.inner}>
        <a href="#inicio" className={styles.logo}>
          JP<span className={styles.accent}>.</span>
        </a>

        <nav className={styles.nav}>
          {SECTIONS.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={cx(styles.navLink, active === s.id && styles.active)}
              aria-current={active === s.id ? 'true' : undefined}
            >
              <span>{t[s.label]}</span>
              <span className={styles.dot} />
            </a>
          ))}
        </nav>

        <div className={styles.actions}>
          <Segmented options={LANG_OPTIONS} value={lang} onChange={setLang} aria-label={t.langLabel} />
          <IconButton
            icon={theme === 'dark' ? 'sun' : 'moon'}
            onClick={toggleTheme}
            aria-label={t.themeLabel}
            className={styles.themeToggle}
          />
        </div>
      </Container>
    </header>
  )
}
