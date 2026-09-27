import type { Localized } from '@/shared/types/localized'

export interface Experience {
  id: string
  company: string
  tech: readonly string[]
  content: Localized<{ role: string; date: string; bullets: readonly string[] }>
}

export const EXPERIENCES: readonly Experience[] = [
  {
    id: 'arpl-data-eng',
    company: 'ARPL Tecnología Industrial · Lima',
    tech: ['SQL Server', 'ETL/ELT', 'Power Automate', 'Power BI', 'Tailwind CSS'],
    content: {
      es: {
        role: 'Practicante de Ingeniería de Datos',
        date: 'JUN 2025 — HOY',
        bullets: [
          'Arquitectura de datos Landing-to-Staging para Gestión de Conocimiento: +15 tablas, 12 vistas y +15 stored procedures.',
          'Ingesta diaria automatizada con Power Automate y alertas en Microsoft Teams ante fallos.',
          'Dashboard "Huella de Conocimiento" (Figma → Power BI), usado por las 7 áreas de la empresa.',
          'Frontend de una app de detección de anomalías para mantenimiento preventivo.',
        ],
      },
      en: {
        role: 'Data Engineering Intern',
        date: 'JUN 2025 — NOW',
        bullets: [
          'Landing-to-Staging data architecture for Knowledge Management: 15+ tables, 12 views and 15+ stored procedures.',
          'Automated daily ingestion with Power Automate and failure alerts in Microsoft Teams.',
          '"Knowledge Footprint" dashboard (Figma → Power BI), used by all 7 company areas.',
          'Frontend for an anomaly-detection app for preventive maintenance.',
        ],
      },
    },
  },
  {
    id: 'arpl-data-analyst',
    company: 'ARPL Tecnología Industrial · Lima',
    tech: ['Power Query', 'DAX', 'Power Apps', 'AI Builder', 'SharePoint'],
    content: {
      es: {
        role: 'Practicante de Análisis de Datos',
        date: 'DIC 2024 — JUN 2025',
        bullets: [
          'Dashboard "Directorio" integrando 5 fuentes de datos con ETL en Power Query y modelado DAX.',
          'MVPs en Power Apps ("Lecciones Aprendidas", "Certificados") con Power Automate, AI Builder y SharePoint.',
          'Documentación técnica con Bizagi Modeler y estructura de roles y permisos en SharePoint.',
        ],
      },
      en: {
        role: 'Data Analyst Intern',
        date: 'DEC 2024 — JUN 2025',
        bullets: [
          '"Directory" dashboard integrating 5 data sources with Power Query ETL and DAX modeling.',
          'Power Apps MVPs ("Lessons Learned", "Certificates") with Power Automate, AI Builder and SharePoint.',
          'Technical documentation with Bizagi Modeler and role/permission structure in SharePoint.',
        ],
      },
    },
  },
]
