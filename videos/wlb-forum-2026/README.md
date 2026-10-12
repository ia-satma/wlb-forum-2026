# Serie audiovisual WLB Forum 2026

Proyecto editable en Remotion para los cuatro videos de los ejes **Persona**, **Liderazgo**, **Impacto** y **Futuro**.

## Especificaciones

- 1920 × 1080, 30 fps, 90 segundos por composición.
- Voz femenina en español mexicano y pista ambiental original por eje.
- Ocho escenas documentales por video, con parallax, zooms, máscaras y transiciones frame-a-frame.
- Paleta WLB: azul marino `#071239`, naranja `#ff6900` y blanco sólido.
- GSAP se usa para las curvas de easing; las animaciones se calculan desde el frame actual de Remotion.
- El cierre institucional es común y usa los logos oficiales existentes.

## Comandos

```bash
npm install
npm run dev
npm run lint
npx remotion compositions
```

Para renderizar una composición:

```bash
npx remotion render WlbPersona out/WLB-Forum-2026-Persona.mp4 --codec=h264 --crf=18 --concurrency=8
npx remotion render WlbLiderazgo out/WLB-Forum-2026-Liderazgo.mp4 --codec=h264 --crf=18 --concurrency=8
npx remotion render WlbImpacto out/WLB-Forum-2026-Impacto.mp4 --codec=h264 --crf=18 --concurrency=8
npx remotion render WlbFuturo out/WLB-Forum-2026-Futuro.mp4 --codec=h264 --crf=18 --concurrency=8
```

## Contenido

- `content/guiones.md`: guiones aprobados y storyboard.
- `content/*.txt`: textos enviados a ElevenLabs.
- `public/assets/`: imágenes editoriales, logos y recursos oficiales.
- `public/audio/`: voces y música original por eje.
- `src/Composition.tsx`: sistema audiovisual parametrizado para los cuatro videos.
- `out/`: renders MP4 y frames de validación.

## Validación

Los MP4 finales se verificaron con `ffprobe`: 90.005 s, 1920 × 1080, 30 fps, H.264 y AAC. La medición EBU R128 quedó alrededor de -18 LUFS integrados, dejando voz y música sin saturación.
