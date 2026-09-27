# Portafolio — Jorge Ponce Loyola

React + Vite + TypeScript, CSS Modules y CSS custom properties. Arquitectura feature-driven con atomic design (versión light).

## Scripts

```bash
pnpm install
pnpm dev       # servidor de desarrollo
pnpm build     # type-check + build de producción en dist/
pnpm preview   # sirve dist/
pnpm lint      # oxlint
```

## Estructura

```
src/
  app/            composición: App, PreferencesProvider (tema + idioma), Header, Footer, secciones
  features/       una carpeta por sección de la página (hero, experience, projects)
                  cada una con sus componentes, datos (*.data.ts) y estilos
  shared/
    ui/atoms/     piezas mínimas: Container, Icon, Tag, IconButton, PillButton, ImageSlot
    ui/molecules/ combinaciones: LinkArrow, SectionHeader, Segmented
    hooks/        useActiveSection, useReveal, useInitialHashScroll
    i18n/         textos de interfaz ES/EN
    config/       links personales (site.ts)
    styles/       tokens.css (variables claro/oscuro) y global.css
```

Reglas: los features importan de `shared/`, nunca entre sí. Cada componente vive en su carpeta con `Nombre.tsx` + `Nombre.module.css`. Los colores y medidas salen de `tokens.css`; el tema oscuro solo redefine variables.

## Contenido

- Textos de interfaz: `src/shared/i18n/dictionaries.ts`
- Experiencia: `src/features/experience/experience.data.ts`
- Proyectos: `src/features/projects/projects.data.ts`
- Links (GitHub, LinkedIn, correo, CV): `src/shared/config/site.ts`
- Imágenes: `public/assets/img/foto-jorge.png` y `public/assets/img/proyecto-<id>.png`
