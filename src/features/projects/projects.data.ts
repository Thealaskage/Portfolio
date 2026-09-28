import type { Localized } from '@/shared/types/localized'

export interface Project {
  id: string
  name: string
  tech: readonly string[]
  /** Public link (live site, landing page, repo). Shown as "View project". */
  url?: string
  /** Brand colour behind the screenshot. Without it the panel uses the theme's soft tint. */
  brand?: string
  content: Localized<{ kind: string; desc: string }>
}

/** Screenshot for each project lives at public/assets/img/proyecto-<id>.png */
export const projectImage = (id: string) => `/assets/img/proyecto-${id}.png`

export const PROJECTS: readonly Project[] = [
  {
    id: 'reportia',
    name: 'Reportia',
    tech: ['.NET 8', 'React Native', 'n8n', 'Docker', 'Azure', 'GitHub Actions'],
    url: 'https://reportia-landingpage.web.app',
    brand: '#1f4fd8',
    content: {
      es: {
        kind: 'Tesis UPC · 2026 · Full-stack',
        desc: 'Plataforma para reportar incidencias urbanas en Lima por WhatsApp o app móvil. Cada reporte se ofrece a voluntarios en un radio de 1 km y sube al supervisor si nadie lo acepta en 30 minutos. Desarrollé el backend en .NET 8, la app móvil y el chatbot de WhatsApp.',
      },
      en: {
        kind: 'UPC thesis · 2026 · Full-stack',
        desc: 'Platform for reporting urban issues in Lima via WhatsApp or a mobile app. Each report is offered to volunteers within a 1 km radius and escalates to a supervisor if no one accepts it within 30 minutes. I built the .NET 8 backend, the mobile app and the WhatsApp chatbot.',
      },
    },
  },
  {
    id: 'huella',
    name: 'Dashboard Huella de Conocimiento',
    tech: ['Power BI', 'DAX', 'SQL Server', 'Power Automate', 'Figma'],
    brand: '#f5f5f5',
    content: {
      es: {
        kind: 'Dashboard estratégico',
        desc: 'Dashboard que usan las 7 áreas de la empresa para incentivar el intercambio de conocimiento. Armé flujos en Power Automate que extraen a diario los datos de Viva Engage, SharePoint y Power Apps y los dejan curados en SQL Server. Sobre esa base lo diseñé en Figma y lo construí en Power BI, con las métricas definidas junto al negocio.',
      },
      en: {
        kind: 'Strategic dashboard',
        desc: "A dashboard used by the company's seven areas to encourage knowledge sharing. I built Power Automate flows that pull data daily from Viva Engage, SharePoint and Power Apps into SQL Server, curated. On that base I designed it in Figma and built it in Power BI, with the metrics defined alongside the business.",
      },
    },
  },
  {
    id: 'certificados',
    name: 'App Certificados',
    tech: ['Power Apps', 'Power Automate', 'AI Builder', 'SharePoint'],
    brand: '#be1f26',
    content: {
      es: {
        kind: 'Power Apps · Flujo de aprobación',
        desc: 'Los colaboradores enviaban sus certificados a RR.HH. para que los registraran a mano y, al ser tantos por persona, la mayoría quedaba sin registrar. Construí una app donde cada uno registra los suyos: 4 roles, aprobación en dos etapas con enrutamiento automático según su comunidad, notificaciones en Teams y bitácora de cada cambio de estado. Los accesos se sincronizan solos con Microsoft 365 cuando alguien entra o sale de la empresa.',
      },
      en: {
        kind: 'Power Apps · Approval workflow',
        desc: 'Employees used to send their certificates to HR for manual entry and, with so many per person, most were never recorded. I built an app where everyone registers their own: 4 roles, a two-stage approval routed automatically by community, Teams notifications and an audit log of every status change. Access syncs itself with Microsoft 365 as people join or leave the company.',
      },
    },
  },
  {
    id: 'mantenimiento',
    name: 'Mantenimiento Predictivo',
    tech: ['Python', 'FastAPI', 'Tailwind CSS', 'Atomic Design', 'Microsoft SSO'],
    brand: '#ff0000',
    content: {
      es: {
        kind: 'Full-stack industrial',
        desc: 'App para anticipar fallas en activos de producción de cemento para UNACEM. Desarrollé los endpoints REST en FastAPI para gestionar líneas, equipos y sensores, calcular indicadores de mantenimiento y autenticar con SSO de Microsoft. En el frontend apliqué una arquitectura Feature-Driven con Atomic Design y rediseñé la UX/UI bajo los estándares de marca de UNACEM.',
      },
      en: {
        kind: 'Industrial full-stack',
        desc: "An app to anticipate failures in cement production assets for UNACEM. I built the FastAPI REST endpoints to manage lines, equipment and sensors, calculate maintenance indicators and authenticate with Microsoft SSO. On the frontend I applied a Feature-Driven architecture with Atomic Design and redesigned the UX/UI to UNACEM's brand standards.",
      },
    },
  },
  {
    id: 'asistente-whatsapp',
    name: 'Asistente de IA para WhatsApp',
    tech: ['n8n', 'OpenAI', 'RAG', 'Supabase', 'pgvector'],
    brand: '#075e54',
    content: {
      es: {
        kind: 'Agente de IA · Proyecto propio',
        desc: 'Un agente que responde las consultas de quienes escriben al WhatsApp del negocio y los guía a agendar una primera reunión. Responde con RAG sobre una base de conocimiento en Supabase, extrae los datos de cada interesado con un LLM y deriva a una persona los casos que lo necesitan. Atendió 61 conversaciones en su primer mes.',
      },
      en: {
        kind: 'AI agent · Personal project',
        desc: 'An agent that answers people who message the business on WhatsApp and guides them to book a first meeting. It replies using RAG over a knowledge base in Supabase, extracts each lead’s details with an LLM and hands off to a person the cases that need it. It handled 61 conversations in its first month.',
      },
    },
  },
]
