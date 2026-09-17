# X Work Life Balance Forum 2026 — landing

Sitio estático. No requiere build.

## Publicar en GitHub Pages
1. Sube el contenido de esta carpeta a la raíz del repositorio (o a `/docs`).
2. Settings → Pages → Deploy from a branch → rama `main`, carpeta `/ (root)`.
3. La página queda en `https://<usuario>.github.io/<repo>/`.

## Archivos
- `index.html` — la landing (React + Babel desde CDN unpkg; Poppins desde Google Fonts).
- `styles.css` + `tokens/` — tokens del sistema de diseño (colores, tipografía, espaciado, efectos).
- `wlb-ds.js` — bundle compilado de los componentes y secciones del WLB Forum Design System (namespace `WLBForumDesignSystem_a27a89`). Todas las secciones de la página viven aquí.
- `assets/` — logos, save the date 2026, cartel IX 2025, fotografía del hero.

## Editar contenido
Desde `index.html`:
- Estado "Registros agotados": constante `soldOut`.
- Fecha del countdown: `target="2026-11-05T08:30:00-06:00"`.
- Navegación, ticker y textos del modal de informes.

Para cambiar el programa, la cronología de ediciones o cualquier sección, edita
la fuente JSX en el proyecto del sistema de diseño (`ui_kits/forum-site/`:
`Program.jsx`, `Photos.jsx`, `Gallery.jsx`, …) y vuelve a exportar `wlb-ds.js`.
La fuente no se incluye aquí para que el repositorio quede como sitio estático.

Las fotos de la galería se cargan desde el CDN de wlb.imefmty.com — descárgalas
a `assets/` para producción.
