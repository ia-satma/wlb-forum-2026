import { Audio, AbsoluteFill, Easing, Img, interpolate, staticFile, useCurrentFrame } from "remotion";
import { gsap } from "gsap";

export type AxisId = "persona" | "liderazgo" | "impacto" | "futuro";

type AxisConfig = {
  id: AxisId;
  title: string;
  subtitle: string;
  opening: string;
  reflection: string;
  images: string[];
  captions: string[];
  accent: string;
};

const FRAME_RATE = 30;
const TOTAL_FRAMES = 90 * FRAME_RATE;
const INTRO_END = 8 * FRAME_RATE;
const DEVELOPMENT_END = 76 * FRAME_RATE;
const REFLECTION_END = 84 * FRAME_RATE;
const SCENE_LENGTH = (DEVELOPMENT_END - INTRO_END) / 8;
const gsapEase = gsap.parseEase("power3.out");

const axis = (id: AxisId, title: string, subtitle: string, opening: string, reflection: string, images: string[], captions: string[]): AxisConfig => ({
  id,
  title,
  subtitle,
  opening,
  reflection,
  images,
  captions,
  accent: "#ff6900",
});

export const AXES: Record<AxisId, AxisConfig> = {
  persona: axis("persona", "Persona", "El equilibrio se construye desde adentro.", "El equilibrio no empieza cuando termina la jornada.", "Avanzar sin dejarte atrás.", ["persona-office.png", "persona-wellbeing.png", "venue-woman.jpg", "future-workshop.png", "persona-office.png", "leadership-roundtable.png", "persona-wellbeing.png", "impact-community.png"], ["La vida completa también tiene un lugar en el trabajo.", "Respirar también es una forma de avanzar.", "El cuidado se vuelve cultura cuando se practica.", "La conversación abre nuevas maneras de colaborar.", "Tiempo de calidad. Límites claros. Energía para crear.", "Cuando una persona se siente vista, aporta lo mejor de sí.", "El bienestar sostiene lo que queremos construir.", "El talento crece cuando puede llevar su humanidad al trabajo."]),
  liderazgo: axis("liderazgo", "Liderazgo", "Decidir con claridad. Escuchar con empatía.", "Una organización se transforma con la forma en que sus líderes hacen sentir.", "El liderazgo que deja huella comparte el espacio.", ["leadership-roundtable.png", "future-workshop.png", "impact-innovation.png", "leadership-roundtable.png", "impact-innovation.png", "venue-woman.jpg", "future-workshop.png", "leadership-roundtable.png"], ["Escuchar antes de responder cambia una reunión.", "Las mejores decisiones dejan entrar todas las voces.", "La confianza convierte una estrategia en movimiento.", "Menos distancia. Más conversación.", "La autoridad también puede ser responsabilidad compartida.", "Los valores se vuelven hábitos en los pequeños gestos.", "Cuidar el presente abre el siguiente paso.", "La congruencia es una forma visible de liderar."]),
  impacto: axis("impacto", "Impacto", "Crecer dejando una huella que importe.", "El crecimiento y el impacto ya no pueden vivir separados.", "La vida cambia después de cada decisión.", ["impact-community.png", "impact-innovation.png", "future-workshop.png", "impact-community.png", "venue-woman.jpg", "impact-innovation.png", "leadership-roundtable.png", "impact-community.png"], ["Cada decisión de negocio mueve algo más grande.", "Pasar de la intención a la acción es el primer impacto.", "Una ciudad también se construye desde las organizaciones.", "La inclusión se vuelve real cuando es cotidiana.", "Crecer también significa abrir posibilidades.", "La colaboración multiplica lo que una persona comienza.", "La responsabilidad se mide en lo que dejamos.", "El propósito se reconoce en la vida que mejora después."]),
  futuro: axis("futuro", "Futuro", "Innovación en las manos. Humanidad en el centro.", "El futuro del trabajo ya aparece en las preguntas de hoy.", "La cultura decide hacia dónde vamos.", ["future-innovation.png", "future-workshop.png", "impact-innovation.png", "future-innovation.png", "leadership-roundtable.png", "future-workshop.png", "impact-community.png", "future-innovation.png"], ["La tecnología cambia lo que hacemos y la velocidad con que lo hacemos.", "La pregunta es qué trabajo queremos construir con ella.", "La inteligencia se vuelve colectiva cuando se comparte.", "Aprender juntos es una forma de preparar el futuro.", "Innovar también es elegir qué proteger.", "La precisión necesita empatía para convertirse en progreso.", "La visión se vuelve acción cuando tiene propósito.", "El futuro no es una predicción. Es una responsabilidad."]),
};

const textIn = (frame: number, start: number, end: number, distance = 28) => {
  const progress = interpolate(frame, [start, end], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic) });
  return { opacity: progress, transform: `translateY(${(1 - progress) * distance}px)` };
};

const sceneEase = (progress: number) => gsapEase(Math.max(0, Math.min(1, progress)));

const imageTransform = (frame: number, index: number) => {
  const local = Math.max(0, frame - INTRO_END - index * SCENE_LENGTH);
  const p = sceneEase(local / SCENE_LENGTH);
  const scale = interpolate(p, [0, 1], [1.04, 1.12]);
  const x = interpolate(p, [0, 1], [index % 2 ? 1.2 : -1.2, index % 2 ? -1.2 : 1.2]);
  const y = interpolate(p, [0, 1], [index % 3 === 0 ? -0.7 : 0.5, index % 3 === 0 ? 0.5 : -0.7]);
  return `scale(${scale}) translate(${x}%, ${y}%)`;
};

const SceneImage: React.FC<{ src: string; frame: number; index: number; opacity: number }> = ({ src, frame, index, opacity }) => (
  <Img src={staticFile(`/assets/${src}`)} style={{ position: "absolute", inset: "-3%", width: "106%", height: "106%", objectFit: "cover", objectPosition: "center", opacity, transform: imageTransform(frame, index), filter: "saturate(.88) contrast(1.03)" }} />
);

const BrandMark: React.FC<{ axis: AxisConfig }> = ({ axis }) => (
  <div style={{ position: "absolute", top: 54, left: 72, display: "flex", alignItems: "center", gap: 22 }}>
    <div style={{ width: 10, height: 42, background: axis.accent }} />
    <span style={{ color: "#fff", fontFamily: "Poppins, Arial, sans-serif", fontWeight: 700, fontSize: 22, letterSpacing: 4 }}>WLB FORUM 2026</span>
  </div>
);

const SceneLayer: React.FC<{ axis: AxisConfig; frame: number }> = ({ axis, frame }) => {
  const sceneFrame = Math.max(0, frame - INTRO_END);
  const index = Math.min(7, Math.floor(sceneFrame / SCENE_LENGTH));
  const currentStart = INTRO_END + index * SCENE_LENGTH;
  const local = frame - currentStart;
  const nextIndex = Math.min(7, index + 1);
  const fadeIn = interpolate(local, [0, 20], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic) });
  const fadeOut = interpolate(local, [SCENE_LENGTH - 28, SCENE_LENGTH], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.in(Easing.cubic) });
  const textStyle = textIn(frame, currentStart + 20, currentStart + 58);
  return (
    <AbsoluteFill>
      <SceneImage src={axis.images[index]} frame={frame} index={index} opacity={fadeOut} />
      {nextIndex !== index && <SceneImage src={axis.images[nextIndex]} frame={frame} index={nextIndex} opacity={fadeIn} />}
      <AbsoluteFill style={{ background: "linear-gradient(90deg, rgba(7,18,57,.88) 0%, rgba(7,18,57,.35) 48%, rgba(7,18,57,.18) 100%)" }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(0deg, rgba(7,18,57,.68), transparent 52%)" }} />
      <BrandMark axis={axis} />
      <div style={{ position: "absolute", left: 86, bottom: 92, width: 840, ...textStyle }}>
        <div style={{ color: axis.accent, fontFamily: "Poppins, Arial, sans-serif", fontSize: 20, letterSpacing: 4, fontWeight: 700, marginBottom: 14 }}>0{index + 1} / {axis.title.toUpperCase()}</div>
        <div style={{ color: "#fff", fontFamily: "Poppins, Arial, sans-serif", fontSize: 44, lineHeight: 1.14, fontWeight: 700, letterSpacing: -1 }}>{axis.captions[index]}</div>
      </div>
      <div style={{ position: "absolute", bottom: 52, left: 86, right: 86, height: 2, background: "rgba(255,255,255,.26)" }}><div style={{ height: 2, width: `${((index + Math.min(1, Math.max(0, local / SCENE_LENGTH))) / 8) * 100}%`, background: axis.accent }} /></div>
    </AbsoluteFill>
  );
};

const Intro: React.FC<{ axis: AxisConfig; frame: number }> = ({ axis, frame }) => {
  const title = textIn(frame, 18, 54, 38);
  const subtitle = textIn(frame, 70, 110, 24);
  const line = interpolate(frame, [62, 130], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic) });
  return (
    <AbsoluteFill style={{ background: "#071239" }}>
      <Img src={staticFile(`/assets/${axis.images[0]}`)} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.44, transform: `scale(${interpolate(frame, [0, INTRO_END], [1.03, 1.08], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })})` }} />
      <AbsoluteFill style={{ background: "linear-gradient(90deg, rgba(7,18,57,.93), rgba(7,18,57,.28))" }} />
      <BrandMark axis={axis} />
      <div style={{ position: "absolute", left: 86, top: 295, width: 1040 }}>
        <div style={{ color: axis.accent, fontFamily: "Poppins, Arial, sans-serif", fontSize: 24, letterSpacing: 7, fontWeight: 700, ...subtitle }}>EJE 0{Object.keys(AXES).indexOf(axis.id) + 1}</div>
        <div style={{ color: "#fff", fontFamily: "Poppins, Arial, sans-serif", fontSize: 126, lineHeight: 0.95, fontWeight: 800, letterSpacing: -4, ...title }}>{axis.title}</div>
        <div style={{ marginTop: 28, width: 220 * line, height: 8, background: axis.accent }} />
        <div style={{ color: "#fff", fontFamily: "Poppins, Arial, sans-serif", fontSize: 29, lineHeight: 1.3, maxWidth: 760, marginTop: 26, ...subtitle }}>{axis.subtitle}</div>
        <div style={{ color: "rgba(255,255,255,.86)", fontFamily: "Poppins, Arial, sans-serif", fontSize: 22, lineHeight: 1.4, maxWidth: 850, marginTop: 44, ...textIn(frame, 112, 160, 18) }}>{axis.opening}</div>
      </div>
    </AbsoluteFill>
  );
};

const Reflection: React.FC<{ axis: AxisConfig; frame: number }> = ({ axis, frame }) => {
  const p = interpolate(frame, [DEVELOPMENT_END, DEVELOPMENT_END + 34], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic) });
  return <AbsoluteFill style={{ background: "#071239", justifyContent: "center", alignItems: "center", padding: "0 180px", textAlign: "center", opacity: p }}><div style={{ width: 160, height: 8, background: axis.accent, marginBottom: 42, transform: `scaleX(${p})` }} /><div style={{ color: "#fff", fontFamily: "Poppins, Arial, sans-serif", fontSize: 60, lineHeight: 1.16, fontWeight: 700, maxWidth: 1450, transform: `translateY(${(1 - p) * 24}px)` }}>{axis.reflection}</div></AbsoluteFill>;
};

const EndCard: React.FC<{ frame: number }> = ({ frame }) => {
  const p = interpolate(frame, [REFLECTION_END, REFLECTION_END + 24], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic) });
  return <AbsoluteFill style={{ background: "#071239", opacity: p, alignItems: "center", justifyContent: "center" }}><div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 50% 40%, rgba(37,58,125,.65), #071239 70%)" }} /><div style={{ position: "relative", width: 1160, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}><Img src={staticFile("/assets/logo-wlb.png")} style={{ width: 490, height: 228, objectFit: "contain", marginBottom: 28 }} /><div style={{ width: 130, height: 4, background: "#ff6900", marginBottom: 30 }} /><div style={{ color: "#fff", fontFamily: "Poppins, Arial, sans-serif", fontSize: 26, letterSpacing: 1.2, fontWeight: 700 }}>JUEVES 5 DE NOVIEMBRE DE 2026</div><div style={{ color: "#fff", fontFamily: "Poppins, Arial, sans-serif", fontSize: 22, marginTop: 12 }}>CLUB INDUSTRIAL · SAN PEDRO GARZA GARCÍA, NUEVO LEÓN</div><div style={{ color: "#ff6900", fontFamily: "Poppins, Arial, sans-serif", fontSize: 24, fontWeight: 700, marginTop: 10 }}>3:00 A 7:30 PM</div><Img src={staticFile("/assets/logo-imef.png")} style={{ position: "absolute", right: -20, bottom: -18, width: 240, height: 132, objectFit: "contain" }} /></div></AbsoluteFill>;
};

export const WlbVideo: React.FC<{ axisId: AxisId }> = ({ axisId }) => {
  const frame = useCurrentFrame();
  const config = AXES[axisId];
  return <AbsoluteFill style={{ backgroundColor: "#071239", fontFamily: "Poppins, Arial, sans-serif", overflow: "hidden" }}><Audio src={staticFile(`/audio/${axisId}-music.mp3`)} volume={0.14} /><Audio src={staticFile(`/audio/${axisId}-vo.mp3`)} volume={0.92} />{frame < INTRO_END && <Intro axis={config} frame={frame} />}{frame >= INTRO_END && frame < DEVELOPMENT_END && <SceneLayer axis={config} frame={frame} />}{frame >= DEVELOPMENT_END && frame < REFLECTION_END && <Reflection axis={config} frame={frame} />}{frame >= REFLECTION_END && <EndCard frame={frame} />}</AbsoluteFill>;
};

export const compositions = (axisId: AxisId) => ({ id: `Wlb${axisId[0].toUpperCase()}${axisId.slice(1)}`, component: WlbVideo, durationInFrames: TOTAL_FRAMES, fps: FRAME_RATE, width: 1920, height: 1080 });
