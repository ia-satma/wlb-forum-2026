# Serie audiovisual WLB Forum 2026

Proyecto editable en Remotion para los cuatro videos de los ejes **Persona**, **Liderazgo**, **Impacto** y **Futuro**.

## Especificaciones

- 1920 × 1080, 30 fps, 90 segundos por composición.
- Voz en español generada con ElevenLabs y música ambiental independiente por eje.
- 22 momentos narrativos por video: hook, tensión, giro conceptual, prueba documental, síntesis e invitación al evento.
- El sistema alterna fotos reales del archivo WLB, macro-crops, máscaras, capas 2.5D, objetos SVG, nodos, ondas y una ruta visual propia para cada eje.
- El texto en pantalla es puntual; la voz sostiene el relato. Los cortes ocurren durante el movimiento para evitar una lectura de presentación.
- Cierre común con fecha, sede y logos oficiales, animado como consecuencia de la última escena.

## Comandos

```bash
npm install
npm run dev
npm run lint
npx remotion compositions
bash scripts/render-all.sh
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
- `public/assets/archive/`: fotografías documentales de ediciones anteriores del evento.
- `public/assets/`: imágenes editoriales, programa vigente, ponentes y logos oficiales.
- `public/audio/`: voces y música por eje.
- `src/Composition.tsx`: sistema audiovisual parametrizado para los cuatro videos.
- `scripts/generate-elevenlabs-voice.mjs`: regenera las cuatro voces con ElevenLabs (`efcRUax7uSa9kpBwtDPe`) usando `ELEVENLABS_API_KEY`.
- `out/`: renders MP4 y frames de validación.

## Validación

Los cuatro MP4 finales se verificaron con `ffprobe`: 90.005 s, 1920 × 1080, 30 fps, H.264 y AAC. `npm run lint`, `npx remotion compositions` y `git diff --check` pasan.
