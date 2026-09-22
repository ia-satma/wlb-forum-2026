# WLB Forum — sistema de identidad visual y diseño digital

Versión documentada: 21 de septiembre de 2026  
Fuente de verdad: `tokens/*.css`, `styles.css`, `wlb-ds.js`, `index.html` y `assets/`.

## 1. Esencia de marca

WLB Forum combina el lenguaje de un cartel editorial con una interfaz digital de alto contraste. La identidad se sostiene en cuatro decisiones:

1. Azul marino como campo visual dominante.
2. Naranja como acento de marca y señal de acción.
3. Blanco sólido para toda la lectura sobre fondos oscuros.
4. Tipografía geométrica, pesada, en mayúsculas y con espaciado amplio para títulos y etiquetas.

La composición es firme, institucional y contemporánea. El sistema evita adornos innecesarios: la jerarquía se construye con escala, peso, color, reglas verticales y horizontales, fotografía teñida en azul y espacios amplios.

### Conceptos de personalidad

- Liderazgo humano
- Equilibrio vida–trabajo
- Transformación cultural
- Comunidad empresarial
- Institucional, pero no rígido
- Enérgico, sin perder claridad
- Editorial y fotográfico
- Inclusivo y legible para públicos adultos

## 2. Paleta cromática

### 2.1 Azul marino

| Token | Hex | Uso recomendado |
|---|---:|---|
| `--navy-900` | `#1F2C63` | Fondos de mayor profundidad, footer, banda de conteo, diálogos y overlays densos |
| `--navy-800` | `#233272` | Secciones alternas, tarjetas sólidas, programa y paneles |
| `--navy-700` | `#27377A` | Azul canónico de marca y fondo principal de página |
| `--navy-600` | `#2B3B80` | Hover de controles azul marino |
| `--navy-500` | `#304078` | Variación tonal intermedia |
| `--navy-400` | `#3D4B89` | Variación tonal de apoyo e iniciales sin fotografía |
| `--navy-300` | `#506090` | Información de estado y apoyos secundarios |
| `--navy-200` | `#8B95B8` | Tono auxiliar; no usar para texto sobre fondos oscuros |
| `--navy-100` | `#B3BBD2` | Tono auxiliar; no usar para texto sobre fondos oscuros |

### 2.2 Naranja de marca

| Token | Hex | Uso recomendado |
|---|---:|---|
| `--orange-600` | `#D85500` | Estado presionado y texto sobre superficies naranja muy claras |
| `--orange-500` | `#FF6B02` | Acento principal, CTA, reglas, iconos, palabras destacadas y numerales |
| `--orange-400` | `#FF8330` | Hover del acento y foco |
| `--orange-300` | `#FFA763` | Acento suave o gráfico secundario |
| `--orange-100` | `#FFE4D1` | Fondo cálido tenue |
| `--orange-050` | `#FFF0E9` | Superficie de acento muy suave |

### 2.3 Neutros

| Token | Hex | Uso recomendado |
|---|---:|---|
| `--white` | `#FFFFFF` | Todo el texto sobre azul, logos en negativo y contenido sobre naranja |
| `--paper` | `#F8F8F8` | Fondo claro alternativo |
| `--grey-200` | `#E4E6EE` | Bordes sobre superficies claras |
| `--grey-400` | `#A7ABBD` | Controles inactivos en superficies claras |
| `--grey-600` | `#5D6480` | Texto secundario únicamente sobre fondos claros |
| `--ink` | `#1A1F33` | Texto principal sobre fondos claros |

### 2.4 Estados

| Token | Hex | Significado |
|---|---:|---|
| `--status-success` | `#2E9E6B` | Confirmación y éxito |
| `--status-warning` | `#FF6B02` | Advertencia alineada con la marca |
| `--status-danger` | `#D92D20` | Error o acción destructiva |
| `--status-info` | `#506090` | Información neutral |

### 2.5 Roles semánticos vigentes

| Rol | Valor |
|---|---|
| Fondo principal | `--navy-700` |
| Fondo oscuro | `--navy-900` |
| Fondo alterno | `--navy-800` |
| Texto de display oscuro | `#FFFFFF` |
| Texto de cuerpo oscuro | `#FFFFFF` |
| Texto secundario oscuro | `#FFFFFF` |
| Texto principal claro | `#1A1F33` |
| Texto secundario claro | `#5D6480` |
| Acento | `#FF6B02` |
| Contenido sobre acento | `#FFFFFF` |

### 2.6 Reglas de contraste

- Sobre `navy-900`, blanco tiene contraste `13.14:1`; naranja 500 tiene `4.60:1`.
- Sobre `navy-800`, blanco tiene `11.86:1`; naranja 500 tiene `4.15:1`.
- Sobre `navy-700`, blanco tiene `10.97:1`; naranja 500 tiene `3.84:1`.
- El blanco sólido es el color obligatorio para párrafos, fechas secundarias, pies, ayudas, descripciones y etiquetas informativas sobre azul.
- El naranja 500 funciona como texto normal sobre `navy-900`; sobre `navy-800` y `navy-700` debe reservarse para texto grande o grueso, iconos, reglas, numerales y controles.
- No usar `navy-100`, `navy-200`, grises ni blanco semitransparente para texto sobre azul.
- El naranja no sustituye al blanco en párrafos largos.
- Sobre superficies claras usar `ink` para contenido principal y `grey-600` para contenido secundario.

## 3. Tipografía

### 3.1 Familia

- Display: `Poppins`, respaldo `Helvetica Neue`, `Arial`, sans-serif.
- Cuerpo: `Poppins`, respaldo `Helvetica Neue`, `Arial`, sans-serif.
- Datos monoespaciados: `ui-monospace`, `SFMono-Regular`, `Menlo`, monospace.
- Pesos cargados: 400, 500, 600, 700 y 800; cursiva 500.
- Poppins es una sustitución web. La familia original del cartel no fue entregada; debe reemplazarse por archivos licenciados si aparecen.

### 3.2 Pesos

| Token | Peso | Uso |
|---|---:|---|
| `--weight-regular` | 400 | Texto de cuerpo |
| `--weight-medium` | 500 | Texto de apoyo, cursivas y selección |
| `--weight-semibold` | 600 | Manifiestos y subtítulos destacados |
| `--weight-bold` | 700 | Etiquetas, botones y encabezados secundarios |
| `--weight-black` | 800 | Títulos, numerales y display de marca |

### 3.3 Escala digital de escritorio

| Token | Tamaño | Uso |
|---|---:|---|
| `--size-display-xl` | 88 px | Display principal WLB Forum |
| `--size-display-l` | 56 px | Titular grande |
| `--size-display-m` | 40 px | Titular medio |
| `--size-heading` | 28 px | Encabezado de sección |
| `--size-subheading` | 22 px | Subencabezado y títulos de tarjetas |
| `--size-lead` | 18 px | Entradilla y párrafo destacado |
| `--size-body` | 16 px | Texto de lectura |
| `--size-small` | 14 px | Información secundaria |
| `--size-eyebrow` | 13 px | Cejas y etiquetas |
| `--size-micro` | 11 px | Metadatos y leyendas mínimas |

### 3.4 Escala móvil vigente

| Rol | Tamaño |
|---|---:|
| Encabezado de token | 24 px |
| Subencabezado | 20 px |
| Lead | 19 px |
| Cuerpo | 17 px |
| Texto pequeño | 15 px |
| Eyebrow | 14 px |
| Microtexto | 12 px |
| `h2` global | 28–34 px fluido |
| `h3` global | 23 px |
| Manifiesto móvil | 32–38 px fluido; 34.32 px a 390 px |
| Párrafo del manifiesto | 16 px |

### 3.5 Escala para piezas impresas y colaterales

| Token | Tamaño | Referencia |
|---|---:|---|
| `--poster-display` | 148 px | WLB / FORUM |
| `--poster-accent` | 42 px | WORK LIFE BALANCE |
| `--poster-eyebrow` | 36 px | 10MA EDICIÓN |
| `--poster-tagline` | 29 px | Mensaje transformador |
| `--poster-detail` | 32 px | Fecha y sede |
| `--poster-label` | 19 px | Persona / Liderazgo / Impacto / Futuro |

### 3.6 Alturas de línea

| Token | Valor | Uso |
|---|---:|---|
| `--leading-display` | 0.88 | Display apilado de alto impacto |
| `--leading-tight` | 1.12 | Titulares |
| `--leading-heading` | 1.20 | Encabezados |
| `--leading-body` | 1.50 | Cuerpo |
| `--leading-loose` | 1.65 | Texto editorial largo |

### 3.7 Tracking

| Token | Valor | Uso |
|---|---:|---|
| `--track-display` | -0.01 em | Display grande y compacto |
| `--track-accent` | 0.16 em | Acentos de marca |
| `--track-eyebrow` | 0.14 em | Cejas y microetiquetas |
| `--track-tagline` | 0.09 em | Taglines en mayúsculas |
| `--track-label` | 0.08 em | Botones, navegación y etiquetas |
| `--track-body` | 0 | Lectura continua |

### 3.8 Convenciones tipográficas

- Los títulos principales son negros 800, en mayúsculas y con interlineado compacto.
- Las palabras clave pueden ir en naranja; el resto del titular permanece blanco.
- Cejas, botones y etiquetas usan mayúsculas, peso 700/800 y tracking amplio.
- Los párrafos permanecen en sentence case y sin tracking añadido.
- Las líneas de texto largas se limitan a aproximadamente 560 px o 65 caracteres.
- En textos grandes usar `text-wrap: balance`; en párrafos editoriales usar `text-wrap: pretty`.
- Evitar una palabra aislada en la última línea.

## 4. Espaciado y layout

### 4.1 Escala base

| Token | Valor |
|---|---:|
| `--space-0` | 0 |
| `--space-1` | 4 px |
| `--space-2` | 8 px |
| `--space-3` | 12 px |
| `--space-4` | 16 px |
| `--space-5` | 24 px |
| `--space-6` | 32 px |
| `--space-7` | 40 px |
| `--space-8` | 56 px |
| `--space-9` | 72 px |
| `--space-10` | 96 px |
| `--space-11` | 128 px |

El ritmo parte de 4 px, pero las cadencias visuales dominantes son 8, 16, 24, 40 y 72 px.

### 4.2 Roles semánticos

| Rol | Valor |
|---|---:|
| Separación icono–etiqueta | 12 px |
| Separación vertical interna | 16 px |
| Separación entre bloques | 40 px |
| Separación entre secciones | 96 px |
| Padding de tarjeta | 24 px |
| Padding de tarjeta grande | 32 px |
| Padding vertical de botón | 14 px |
| Padding horizontal de botón | 40 px |
| Padding vertical de campo | 12 px |
| Padding horizontal de campo | 16 px |

### 4.3 Contenedores

- Ancho máximo de página: 1180 px.
- Gutter de escritorio: 32 px.
- Gutter móvil: 20 px.
- Gutter editorial de cartel: 130 px.
- Regla naranja estándar: 112 × 4 px.
- Hairline: 1 px.
- Las secciones usan grandes respiraciones verticales de 88–128 px.
- En escritorio se prefieren grids asimétricos; en móvil se apilan en una columna.

### 4.4 Breakpoints vigentes

- Móvil: hasta 767 px.
- Ajuste de manifiesto a dos columnas: desde 1000 px.
- Entre 768 y 999 px, los grids autoajustables pueden apilar contenido.
- A 390 px no existe desbordamiento horizontal en el manifiesto.

## 5. Superficies, bordes y profundidad

### 5.1 Superficies

| Token | Valor |
|---|---|
| `--surface-page` | Navy 700 |
| `--surface-page-light` | Paper |
| `--surface-card` | Blanco al 7% sobre azul |
| `--surface-card-solid` | Blanco |
| `--surface-card-navy` | Navy 800 |
| `--surface-raised` | Blanco al 12% |
| `--surface-accent` | Naranja 500 |
| `--surface-accent-soft` | Naranja 050 |

### 5.2 Radios

| Token | Valor | Uso |
|---|---:|---|
| `--radius-none` | 0 | Secciones y bloques editoriales |
| `--radius-field` | 6 px | Campos y tooltips |
| `--radius-panel` | 8 px | Tarjetas, diálogos y paneles |
| `--radius-pill` | 999 px | Botones, tags, switches y badges |

El lenguaje visual limita deliberadamente los radios. Las secciones principales permanecen rectas; los elementos interactivos usan píldora.

### 5.3 Sombras

| Token | Valor | Uso |
|---|---|---|
| `--shadow-none` | Ninguna | Estado base editorial |
| `--shadow-raised` | `0 2px 8px rgba(15,22,56,.18)` | Menús y tarjetas claras |
| `--shadow-overlay` | `0 24px 64px rgba(15,22,56,.45)` | Diálogos y overlays |
| `--shadow-accent` | `0 6px 20px rgba(255,107,2,.32)` | Énfasis naranja excepcional |
| `--inset-hairline` | Borde interno blanco al 18% | Tarjetas de vidrio |

### 5.4 Bordes

- Hairline oscuro: blanco al 28%.
- Hairline claro: `#E4E6EE`.
- Borde de acento: 2 px naranja.
- Regla de acento: 4 px naranja.
- Las reglas naranjas pueden ser superiores, verticales o parte de una ceja.

## 6. Fotografía y tratamiento visual

### 6.1 Dirección fotográfica

- Fotografía documental de eventos reales, ponentes, asistentes y sedes.
- Priorizar momentos naturales sobre poses de stock.
- Mezclar formatos horizontales, verticales y editoriales.
- Mantener encuadres útiles para texto superpuesto.
- Evitar imágenes genéricas que no pertenezcan al foro.

### 6.2 Tratamiento

- Reducir saturación entre 60% y 85% cuando la imagen vive dentro del sistema.
- Cubrir fotografía hero o manifiesto con un lavado azul marino.
- Proteger texto con gradiente superior o inferior cuando sea necesario.
- Blanco para texto sobre imagen; naranja para reglas y acentos.
- No colocar texto pequeño naranja sobre zonas fotográficas de contraste irregular.

### 6.3 Overlays

- `overlay-navy`: gradiente vertical de navy 900/700 con opacidad 78–94%.
- `overlay-navy-flat`: navy 700 al 86%.
- `overlay-protect-bottom`: transparente arriba a navy 900 al 90% abajo.
- `overlay-protect-top`: navy 900 al 90% arriba a transparente abajo.
- Desenfoque de panel: 10 px.

## 7. Iconografía y logos

### 7.1 Iconos

- Biblioteca: Lucide 0.469.0.
- Estilo: outline, trazo 2, extremos y uniones redondeados.
- Color preferido: naranja 500.
- Tamaños habituales: 14, 16, 18, 24, 26, 28, 32, 34 y 44 px.
- Los iconos decorativos deben llevar `aria-hidden="true"`.
- Los botones solo con icono necesitan nombre accesible.

### 7.2 Logos

- Logo WLB blanco para superficies oscuras.
- Logo IMEF Monterrey como cofirma.
- Lockup: WLB + divisor hairline + IMEF.
- La marca WLB domina visualmente; IMEF se presenta aproximadamente al 58% de la altura de WLB.
- No recolorear, estirar, recortar ni aplicar sombra a los logos.
- Mantener espacio libre equivalente al menos al gutter interno del lockup.

## 8. Movimiento e interacción

### 8.1 Timing

| Token | Valor |
|---|---:|
| `--dur-fast` | 120 ms |
| `--dur-base` | 200 ms |
| `--dur-slow` | 360 ms |
| `--ease-out` | `cubic-bezier(.22,.61,.36,1)` |
| `--ease-in-out` | `cubic-bezier(.45,.05,.55,.95)` |

### 8.2 Principios

- Movimiento breve, sobrio y funcional.
- Entradas con fade y elevación pequeña.
- Sin rebotes ni animaciones elásticas.
- Presión de botón: escala 0.98.
- Marquee continuo, lineal, duplicado para loop y pausado en hover.
- Hero con Ken Burns suave.
- En móvil los reveals quedan visibles para evitar contenido perdido por throttling del observador.
- Respetar `prefers-reduced-motion` cuando se amplíe el sistema.

### 8.3 Estados

- Hover naranja: `#FF8330`.
- Press naranja: `#D85500`.
- Velo hover: blanco al 10%.
- Deshabilitado: opacidad 0.4.
- Foco: halo naranja de 3 px al 45%.

## 9. Inventario de componentes

El bundle exporta 46 piezas entre componentes, secciones y datos.

### 9.1 Componentes de marca

| Componente | Función |
|---|---|
| `Countdown` | Cuenta regresiva con días, horas, minutos y segundos |
| `DetailRow` | Fila de dato con icono naranja, regla y dos niveles de texto |
| `Eyebrow` | Etiqueta en mayúsculas con regla naranja opcional |
| `Icon` | Adaptador de iconos Lucide |
| `Logo` | Variantes WLB, IMEF y lockup |
| `Marquee` | Ticker continuo navy o naranja |
| `PillarStat` | Pilar visual con icono, etiqueta y descripción |
| `Reveal` | Entrada de contenido al hacer scroll |
| `SectionHeading` | Ceja, título, palabra acento y entradilla |
| `SpeakerCard` | Tarjeta de ponente con fotografía y rol |

### 9.2 Componentes core

| Componente | Variantes |
|---|---|
| `Badge` | accent, accentSoft, navy, outline, success, danger |
| `Button` | primary, secondary, outlineAccent, ghost, onLight; tamaños sm, md, lg |
| `Card` | glass, navy, solid, outline; acento superior opcional |
| `IconButton` | ghost, solid, outline; tamaños 32, 40 y 48 px |
| `Tag` | Normal, hover, seleccionado |

### 9.3 Feedback

| Componente | Función |
|---|---|
| `Dialog` | Modal navy con regla superior naranja |
| `Toast` | Mensaje con tonos accent, success, danger e info |
| `Tooltip` | Ayuda contextual arriba, abajo, izquierda o derecha |

### 9.4 Formularios

| Componente | Función |
|---|---|
| `Checkbox` | Casilla para fondo oscuro o claro |
| `Field` | Etiqueta, requerido, ayuda y error |
| `Input` | Campo con foco naranja y estado inválido |
| `Radio` | Selección simple con descripción |
| `Select` | Menú nativo con indicador naranja |
| `Switch` | Interruptor de 44 × 24 px |

### 9.5 Navegación

| Componente | Función |
|---|---|
| `Navbar` | Barra sticky con blur, navegación y CTA |
| `Tabs` | Selector de contenido con subrayado naranja |

### 9.6 Colaterales

| Componente | Formato |
|---|---|
| `EmailBanner` | Cabecera 1200 × 420 para correo |
| `Poster` | Cartel principal de evento |
| `StoryCard` | Pieza vertical para redes sociales |

### 9.7 Secciones de la landing

| Componente | Contenido |
|---|---|
| `Hero` | Logos, edición, WLB Forum, fecha, sede, CTA y key visual |
| `Sponsors` | Banda clara de patrocinadores; disponible, pero oculta temporalmente |
| `DiezAnos` | Historia del foro y cronología III–X |
| `Ejes` | Persona, Liderazgo, Impacto y Futuro |
| `Program` | Horario general; la agenda detallada está por confirmar |
| `VideoBlock` | Teaser del evento |
| `Expectations` | Cuatro beneficios de la edición |
| `CultureStatement` | Manifiesto visual sobre fotografía |
| `VenueAccess` | Sede, horarios, estacionamiento y vestimenta |
| `SponsorCta` | Contacto para patrocinio; disponible, pero oculto temporalmente |
| `Gallery` | Cronología visual y archivo de imágenes |
| `Register` | Formulario de registro y resumen de evento |
| `SiteFooter` | Lockup, navegación, informes y legales |

### 9.8 Datos exportados

| Exportación | Contenido |
|---|---|
| `PHOTOS` | Mapa de fotografías y piezas remotas |
| `EDITIONS` | Cronología de ediciones 2019–2026 |
| `ARCHIVE` | Imágenes pendientes de asignar a una edición |
| `TEASER` | Información del video promocional |

## 10. Arquitectura de la experiencia

Orden actual de la landing:

1. Navbar.
2. Hero.
3. Marquee.
4. Diez años de foro.
5. Cuatro ejes.
6. Countdown y detalles del evento.
7. Programa.
8. Teaser.
9. Expectativas.
10. Manifiesto cultural.
11. Accesos y sede.
12. Galería histórica.
13. Registro.
14. Footer.
15. Botón flotante de informes.

Las secciones de patrocinadores y patrocinio permanecen disponibles en el sistema de diseño, pero no se renderizan en la landing actual.

La narrativa sigue: reconocimiento de marca → propósito → estructura del evento → prueba histórica → conversión.

## 11. Lenguaje visual de composición

- Fondos navy alternados para marcar ritmo sin romper la identidad.
- Títulos grandes alineados a la izquierda.
- Palabras naranjas dentro de títulos blancos.
- Reglas naranjas como firma gráfica.
- Numerales grandes para edición, tiempo y secuencias.
- Grids asimétricos en desktop y apilado claro en móvil.
- Fotografía full-bleed con overlay azul.
- Tarjetas solo cuando aportan agrupación o estado.
- Pocas sombras; profundidad mediante tono, overlay y transparencia de superficies.
- Espacio negativo generoso.
- Navegación y CTA en forma de píldora; secciones editoriales rectas.

## 12. Voz y contenido

### 12.1 Tono

- Directo y positivo.
- Institucional con lenguaje humano.
- Seguro, no grandilocuente.
- Orientado a acciones concretas.
- Inclusivo y profesional.

### 12.2 Vocabulario central

- Persona
- Liderazgo
- Impacto
- Futuro
- Equilibrio
- Cultura
- Transformación
- Congruencia
- Oportunidades
- Comunidad

### 12.3 Convenciones

- Títulos cortos, en mayúsculas y con verbo activo cuando aplique.
- Párrafos en español claro y sentence case.
- Fechas completas: “Jueves 5 de noviembre”.
- Ubicación completa la primera vez y abreviada después.
- CTA principal: verbo + beneficio o siguiente paso.
- Evitar tecnicismos, frases abstractas y textos extensos sin cortes.

## 13. Accesibilidad

- Mantener blanco `#FFFFFF` para todo texto sobre navy.
- Tamaño de cuerpo móvil: 17 px; no reducir contenido esencial por debajo de 15 px.
- Campos editables: 16 px o más para evitar zoom involuntario en móviles.
- Botones y controles táctiles: objetivo cercano a 44 × 44 px.
- Foco visible con halo naranja.
- Iconos decorativos ocultos a lectores de pantalla.
- Imágenes significativas con `alt` descriptivo.
- No depender solo del color; acompañar estados con texto, icono o forma.
- No usar naranja pequeño sobre navy 700/800 como único contenido informativo.
- Mantener orden semántico de encabezados.
- Conservar acciones accesibles sin hover.
- Los estados de error deben nombrar el problema y su solución.

## 14. Responsive

### 14.1 Móvil

- Navegación de enlaces oculta; logo y CTA permanecen visibles.
- Hero, programa, registro, expectativas y galería pasan a una columna.
- Gutter de 20 px.
- Los pilares del hero usan dos columnas.
- El countdown usa dos columnas y oculta separadores verticales.
- Las filas de ubicación y fecha se apilan.
- La imagen de registro se limita a 360 px.
- El footer pasa a una columna.
- El manifiesto limita su titular para que la palabra más larga no desborde.

### 14.2 Escritorio

- Contenedor máximo de 1180 px.
- Manifiesto en proporción 1.45 / 1 desde 1000 px.
- El título del manifiesto se limita a 64 px.
- La columna izquierda del manifiesto mide 627 px a viewport de 1549 px y ya no invade el texto derecho.
- Navegación completa visible y sticky.
- Programa con columna editorial sticky y agenda principal.

## 15. Activos actuales

### 15.1 Locales

- `assets/logo-wlb-forum-white.png`
- `assets/logo-imef-monterrey.png`
- `assets/imagery-venue-navy.png`
- `assets/poster-save-the-date-2026.png`
- `assets/poster-ix-2025.png`

### 15.2 Remotos

- Fotografías históricas, programas y carteles desde el CDN de WLB/IMEF.
- Video teaser desde Vimeo.
- Poppins desde Google Fonts.
- React, ReactDOM, Babel y Lucide desde CDN.

### 15.3 Recomendación de producción

- Descargar y versionar localmente las fotografías definitivas.
- Sustituir la fuente web por archivos licenciados si se identifica la familia original.
- Mantener un archivo maestro de logos y sus versiones autorizadas.
- Añadir favicon de marca.

## 16. Reglas de uso rápido

### Sí

- Navy dominante, naranja controlado y blanco sólido.
- Títulos compactos, grandes y pesados.
- Texto de lectura amplio y de alto contraste.
- Reglas naranjas y numerales como recursos de jerarquía.
- Fotografía real con overlay azul.
- Mucho espacio entre secciones.
- Botones principales naranjas con texto blanco.

### No

- Texto gris o blanco semitransparente sobre navy.
- Párrafos largos en naranja.
- Más colores de acento sin una necesidad de estado.
- Sombras negras fuertes o tarjetas genéricas en todas partes.
- Gradientes morados/azules ajenos a la marca.
- Tipografía demasiado pequeña en móvil.
- Títulos que invadan otras columnas.
- Fotografías de stock sin relación con el foro.
- Exceso de bordes redondeados.

## 17. Checklist antes de publicar una pieza

- [ ] Usa navy 700/800/900 como base principal.
- [ ] Reserva naranja 500 para acentos, acciones, reglas, iconos o display.
- [ ] Todo texto sobre navy está en blanco sólido.
- [ ] El cuerpo móvil es legible para público adulto.
- [ ] Ningún título desborda su contenedor.
- [ ] La fotografía conserva contraste suficiente para texto.
- [ ] Los logos mantienen proporción y espacio libre.
- [ ] Los botones tienen hover, press y foco visible.
- [ ] Los controles táctiles tienen tamaño suficiente.
- [ ] El contenido funciona a 390 px y en escritorio ancho.
- [ ] Las imágenes significativas tienen texto alternativo.
- [ ] El orden de encabezados es semántico.
- [ ] El recurso actualizado tiene versión de caché cuando se publica en Pages.

## 18. Implementación

- Tokens de color: `tokens/colors.css`.
- Tokens tipográficos: `tokens/typography.css` y `tokens/fonts.css`.
- Espaciado: `tokens/spacing.css`.
- Efectos: `tokens/effects.css`.
- Ajustes responsive y de accesibilidad: `styles.css`.
- Bundle de componentes: `wlb-ds.js`.
- Composición de la landing: `index.html`.
- Namespace del sistema: `WLBForumDesignSystem_a27a89`.

Este documento describe el sistema real implementado; no sustituye los tokens. Cuando exista una diferencia, los archivos de tokens y los componentes publicados son la fuente técnica de verdad.

## 19. Registro literal de tokens semánticos

Este apéndice conserva los nombres exactos usados por el código para facilitar diseño, desarrollo y handoff.

### 19.1 Texto y líneas

| Token | Valor resuelto o referencia |
|---|---|
| `--text-display` | `var(--white)` |
| `--text-body` | `var(--white)` |
| `--text-muted` | `var(--white)` |
| `--text-accent` | `var(--orange-500)` |
| `--text-on-accent` | `var(--white)` |
| `--text-on-light` | `var(--ink)` |
| `--text-body-on-light` | `var(--grey-600)` |
| `--line-rule` | `var(--orange-500)` |
| `--line-hairline` | `rgba(255,255,255,.28)` |
| `--line-hairline-light` | `var(--grey-200)` |
| `--line-focus` | `var(--orange-400)` |

### 19.2 Bordes, overlays y blur

| Token | Valor |
|---|---|
| `--border-hairline` | `1px solid var(--line-hairline)` |
| `--border-hairline-light` | `1px solid var(--line-hairline-light)` |
| `--border-accent` | `2px solid var(--orange-500)` |
| `--border-rule` | `4px solid var(--orange-500)` |
| `--overlay-navy` | Gradiente vertical navy 900/700, opacidad 78–94% |
| `--overlay-navy-flat` | `rgba(39,55,122,.86)` |
| `--overlay-protect-bottom` | Transparente a navy 900 al 90% |
| `--overlay-protect-top` | Navy 900 al 90% a transparente |
| `--blur-panel` | `blur(10px)` |

### 19.3 Interacción

| Token | Valor |
|---|---|
| `--transition-base` | `all var(--dur-base) var(--ease-out)` |
| `--state-hover-accent` | `var(--orange-400)` |
| `--state-press-accent` | `var(--orange-600)` |
| `--state-hover-veil` | `rgba(255,255,255,.1)` |
| `--state-press-scale` | `0.98` |
| `--state-disabled-opacity` | `0.4` |
| `--focus-ring` | `0 0 0 3px rgba(255,107,2,.45)` |

### 19.4 Espaciado semántico y geometría

| Token | Valor |
|---|---|
| `--gap-inline` | `var(--space-3)` / 12 px |
| `--gap-stack` | `var(--space-4)` / 16 px |
| `--gap-block` | `var(--space-7)` / 40 px |
| `--gap-section` | `var(--space-10)` / 96 px |
| `--pad-card` | `var(--space-5)` / 24 px |
| `--pad-card-lg` | `var(--space-6)` / 32 px |
| `--pad-button-y` | 14 px |
| `--pad-button-x` | `var(--space-7)` / 40 px |
| `--pad-field-y` | 12 px |
| `--pad-field-x` | `var(--space-4)` / 16 px |
| `--page-max` | 1180 px |
| `--page-gutter` | `var(--space-6)` / 32 px; 20 px en móvil |
| `--poster-gutter` | 130 px |
| `--rule-length` | 112 px |
| `--rule-weight` | 4 px |
| `--hairline` | 1 px |

### 19.5 Familias y estilos compuestos

| Token | Valor |
|---|---|
| `--font-display` | Poppins, Helvetica Neue, Arial, sans-serif |
| `--font-body` | Poppins, Helvetica Neue, Arial, sans-serif |
| `--font-mono` | ui-monospace, SFMono-Regular, Menlo, monospace |
| `--text-style-display` | Peso 800, 88 px, leading 0.88, Poppins |
| `--text-style-heading` | Peso 700, 28 px, leading 1.2, Poppins |
| `--text-style-body` | Peso 400, 16 px, leading 1.5, Poppins |
| `--text-style-label` | Peso 700, 13 px, leading 1.2, Poppins |
