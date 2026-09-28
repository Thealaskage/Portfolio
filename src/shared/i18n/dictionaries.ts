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
  projLink: string
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
      'Llevo dos años construyendo herramientas que equipos reales usan todos los días. Lo que más disfruto es sentarme con quien tiene el problema, entenderlo bien y volver con algo que le ahorre horas o le haga la vida más fácil.',
    writeMe: 'Escríbeme',
    expTitle: 'Experiencia',
    expSub: 'Desde diciembre de 2024 · datos, automatización y frontend',
    projTitle: 'Proyectos',
    projLink: 'Ver proyecto',
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
      'I have spent two years building tools that real teams use every day. What I enjoy most is sitting down with whoever has the problem, understanding it well, and coming back with something that saves them hours or makes their life easier.',
    writeMe: 'Get in touch',
    expTitle: 'Experience',
    expSub: 'Since December 2024 · data, automation and frontend',
    projTitle: 'Projects',
    projLink: 'View project',
    rights: 'All rights reserved.',
    contact: 'Contact me',
    photoPh: 'foto-jorge.webp',
    slotPh: 'Project screenshot',
  },
}
