import { ExperienceSection } from '@/features/experience/ExperienceSection'
import { HeroSection } from '@/features/hero/HeroSection'
import { ProjectsSection } from '@/features/projects/ProjectsSection'
import { useInitialHashScroll } from '@/shared/hooks/useInitialHashScroll'
import { useReveal } from '@/shared/hooks/useReveal'
import { Footer } from './layout/Footer/Footer'
import { Header } from './layout/Header/Header'
import { PreferencesProvider } from './providers/PreferencesProvider'

function Page() {
  useInitialHashScroll()
  useReveal()

  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ExperienceSection />
        <ProjectsSection />
      </main>
      <Footer />
    </>
  )
}

export function App() {
  return (
    <PreferencesProvider>
      <Page />
    </PreferencesProvider>
  )
}
