import type { Localized } from '@/shared/types/localized'

export interface Dictionary {
  navHome: string
  navExperience: string
  navProjects: string
  themeLabel: string
  langLabel: string
  aboutKicker: string
  aboutTitle: string
  aboutBody: string
  writeMe: string
  expTitle: string
  expSub: string
  projTitle: string
  rights: string
  contact: string
  photoPh: string
  slotPh: string
}

export const DICTIONARIES: Localized<Dictionary> = {
  es: {
    navHome: 'Inicio',
    navExperience: 'Experiencia',
    navProjects: 'Proyectos',
    themeLabel: 'Cambiar tema',
    langLabel: 'Cambiar idioma',
    aboutKicker: 'Sobre mí',
    aboutTitle: 'Ingeniero de Software, basado en Lima, Perú.',
    aboutBody:
      'Me apasiona el ciclo completo del software: entender el problema, construir la solución y ponerla en operación. Trabajo entre datos, backend y frontend, y hoy profundizo en IA aplicada a procesos.',
    writeMe: 'Escríbeme',
    expTitle: 'Experiencia',
    expSub: '+1 año construyendo soluciones de datos y software',
    projTitle: 'Proyectos',
    rights: 'Todos los derechos reservados.',
    contact: 'Contáctame',
    photoPh: 'foto-jorge.webp',
    slotPh: 'Captura del proyecto',
  },
  en: {
    navHome: 'Home',
    navExperience: 'Experience',
    navProjects: 'Projects',
    themeLabel: 'Toggle theme',
    langLabel: 'Change language',
    aboutKicker: 'About me',
    aboutTitle: 'Software Engineer, based in Lima, Peru.',
    aboutBody:
      'I care about the full software lifecycle: understanding the problem, building the solution and running it in production. I work across data, backend and frontend, currently going deeper into AI applied to processes.',
    writeMe: 'Get in touch',
    expTitle: 'Experience',
    expSub: '1+ year building data and software solutions',
    projTitle: 'Projects',
    rights: 'All rights reserved.',
    contact: 'Contact me',
    photoPh: 'foto-jorge.webp',
    slotPh: 'Project screenshot',
  },
}
