import type { Localized } from '@/shared/types/localized'

export interface Experience {
  id: string
  company: string
  tech: readonly string[]
  content: Localized<{ role: string; date: string; bullets: readonly string[] }>
}

export const EXPERIENCES: readonly Experience[] = [
  {
    id: 'arpl-software-eng',
    company: 'ARPL Tecnología Industrial · Lima',
    tech: ['SQL Server', 'PostgreSQL', 'Python', 'FastAPI', 'React', 'Power BI', 'Power Automate', 'Power Apps', 'SharePoint'],
    content: {
      es: {
        role: 'Practicante de Ingeniería de Software',
        date: 'JUN 2025 — HOY',
        bullets: [
          'Diseñé en SQL Server la base de datos de Gestión de Conocimiento y su ingesta diaria automática.',
          'Por iniciativa propia, creé alertas en Microsoft Teams que avisan cuando una ingesta falla.',
          'Construí el dashboard "Huella de Conocimiento" (Figma → Power BI), que usan las 7 áreas de la empresa.',
          'Desarrollé el frontend y endpoints en FastAPI de una app de mantenimiento predictivo para UNACEM.',
          'Desarrollé la app "Certificados" en Power Apps, con 4 roles y aprobación en dos etapas enrutada automáticamente por comunidad.',
          'Agregué funciones a 4 apps de eventos en Power Apps, incluido el registro de asistencia por QR.',
        ],
      },
      en: {
        role: 'Software Engineering Intern',
        date: 'JUN 2025 — NOW',
        bullets: [
          'Designed the Knowledge Management database in SQL Server and its automated daily ingestion.',
          'On my own initiative, built Microsoft Teams alerts that fire when an ingestion fails.',
          'Built the "Knowledge Footprint" dashboard (Figma → Power BI), used by all 7 company areas.',
          'Developed the frontend and FastAPI endpoints of a predictive maintenance app for UNACEM.',
          'Built the "Certificates" app in Power Apps, with 4 roles and a two-stage approval routed automatically by community.',
          'Added features to 4 event apps in Power Apps, including QR-based attendance tracking.',
        ],
      },
    },
  },
  {
    id: 'arpl-data-analyst',
    company: 'ARPL Tecnología Industrial · Lima',
    tech: ['Power BI', 'DAX', 'Power Query', 'Power Apps', 'Power Automate', 'SharePoint'],
    content: {
      es: {
        role: 'Practicante de Análisis de Datos',
        date: 'DIC 2024 — JUN 2025',
        bullets: [
          'Desarrollé el dashboard "Directorio" en Power BI, que integra 5 fuentes de datos y usan las 7 áreas de la empresa.',
          'Creé en Power Apps "Lecciones Aprendidas", para Gestión de Proyectos, con revisión por roles, notificaciones y generación de PDFs con Power Automate.',
          'Documenté los procesos en Bizagi Modeler y definí la estructura de roles y permisos en SharePoint.',
        ],
      },
      en: {
        role: 'Data Analyst Intern',
        date: 'DEC 2024 — JUN 2025',
        bullets: [
          'Developed the "Directory" dashboard in Power BI, which integrates 5 data sources and is used by all 7 company areas.',
          'Created "Lessons Learned" in Power Apps for Project Management, with role-based review, notifications and PDF generation with Power Automate.',
          'Documented processes in Bizagi Modeler and defined the roles and permissions structure in SharePoint.',
        ],
      },
    },
  },
]
