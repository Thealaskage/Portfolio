import type { Localized } from '@/shared/types/localized'

export interface Project {
  id: string
  name: string
  tech: readonly string[]
  content: Localized<{ kind: string; desc: string }>
}

/** Screenshot for each project lives at public/assets/img/proyecto-<id>.png */
export const projectImage = (id: string) => `/assets/img/proyecto-${id}.png`

export const PROJECTS: readonly Project[] = [
  {
    id: 'reportia',
    name: 'Reportia',
    tech: [],
    content: {
      es: { kind: 'Por completar', desc: 'Descripción del proyecto pendiente — cuéntame de qué trata y lo agrego aquí.' },
      en: { kind: 'Coming soon', desc: 'Project description pending.' },
    },
  },
  {
    id: 'huella',
    name: 'Dashboard Huella',
    tech: ['Power BI', 'DAX', 'Figma'],
    content: {
      es: {
        kind: 'Dashboard estratégico',
        desc: 'Dashboard usado por las 7 áreas de la empresa para incentivar el intercambio de conocimiento. Diseñado en Figma y construido en Power BI, con métricas y narrativa de datos definidas junto al negocio.',
      },
      en: {
        kind: 'Strategic dashboard',
        desc: 'Dashboard used by all 7 company areas to encourage knowledge sharing. Designed in Figma and built in Power BI, with metrics and data storytelling defined alongside the business.',
      },
    },
  },
  {
    id: 'eya',
    name: 'EYA',
    tech: ['Power Apps', 'Power Automate', 'QR'],
    content: {
      es: {
        kind: 'Eventos y asistencia',
        desc: 'Gestión de eventos con registro de asistencia presencial por escaneo QR y validación automática de asistencia virtual, parametrizable por el negocio.',
      },
      en: {
        kind: 'Events & attendance',
        desc: 'Event management with in-person attendance via QR scanning and automatic validation of virtual attendance, configurable by the business.',
      },
    },
  },
  {
    id: 'certificados',
    name: 'App Certificados',
    tech: ['Power Apps', 'Power Automate', 'AI Builder', 'SharePoint'],
    content: {
      es: {
        kind: 'Power Apps',
        desc: 'MVP para la gestión de certificados con flujos automatizados, extracción de datos con AI Builder y SharePoint como repositorio estructurado.',
      },
      en: {
        kind: 'Power Apps',
        desc: 'MVP for certificate management with automated flows, AI Builder data extraction and SharePoint as a structured repository.',
      },
    },
  },
  {
    id: 'anomalias',
    name: 'Detección de Anomalías',
    tech: ['Tailwind CSS', 'Atomic Design', 'Feature-Driven'],
    content: {
      es: {
        kind: 'Frontend industrial',
        desc: 'Frontend para el mantenimiento preventivo de activos en producción de cemento. Arquitectura Feature-Driven + Atomic Design y rediseño UX/UI con buena aceptación de los usuarios.',
      },
      en: {
        kind: 'Industrial frontend',
        desc: 'Frontend for preventive maintenance of cement production assets. Feature-Driven + Atomic Design architecture and a UX/UI redesign well received by users.',
      },
    },
  },
]
