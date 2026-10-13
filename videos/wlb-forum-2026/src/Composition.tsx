import {
  AbsoluteFill,
  Audio,
  Img,
  Sequence,
  staticFile,
  useCurrentFrame,
  interpolate,
  Easing,
} from "remotion";
import { Video } from "@remotion/media";

export type AxisId = "persona" | "liderazgo" | "impacto" | "futuro";
type Motif = "orbit" | "relay" | "ripple" | "stack";
type Kind = "photo" | "detail" | "hero" | "relay" | "ripple" | "stack" | "archive" | "video" | "poster";
type Shot = {
  from: number;
  duration: number;
  kind: Kind;
  image: string;
  image2?: string;
  copy?: string;
  kicker?: string;
  focus?: string;
  tone?: "paper" | "night" | "orange";
  align?: "left" | "center" | "right";
};
type AxisConfig = {
  id: AxisId;
  title: string;
  opening: string;
  closing: string;
  motif: Motif;
  accent: string;
  shots: Shot[];
};

const FPS = 30;
const TOTAL_FRAMES = 2700;
const INTRO_END = 120;
const REFLECTION_START = 2400;
const END_START = 2520;
const BODY_DURATIONS = [120, 105, 120, 120, 120, 90, 120, 120, 135, 105, 120, 105, 120, 105, 120, 120, 135, 90, 105, 105];

const photo = (name: string) => (name.startsWith("archive/") ? `assets/${name}` : `assets/${name}`);

const rawShots = (id: AxisId): Omit<Shot, "from" | "duration">[] => {
  if (id === "persona") return [
    { kind: "detail", image: "persona-office.png", copy: "NO EMPIEZA AL FINAL", kicker: "El equilibrio", focus: "52% 42%", tone: "night", align: "left" },
    { kind: "photo", image: "persona-office.png", copy: "A TODA VELOCIDAD", focus: "64% 44%", tone: "night", align: "right" },
    { kind: "detail", image: "persona-wellbeing.png", copy: "¿Y EL CUERPO?", focus: "50% 44%", tone: "paper", align: "center" },
    { kind: "archive", image: "archive/reflexion-dos.jpg", copy: "RESPIRAR TAMBIÉN", focus: "48% 35%", tone: "night", align: "left" },
    { kind: "photo", image: "persona-office.png", image2: "persona-wellbeing.png", copy: "RESULTADO / HISTORIA", tone: "paper", align: "left" },
    { kind: "detail", image: "persona-wellbeing.png", copy: "LÍMITES CLAROS", focus: "55% 40%", tone: "night", align: "right" },
    { kind: "hero", image: "persona-office.png", copy: "EQUILIBRIO ≠ PAUSA", tone: "night", align: "center" },
    { kind: "archive", image: "archive/voz-del-publico.jpg", copy: "CUIDADO", focus: "55% 38%", tone: "paper", align: "left" },
    { kind: "photo", image: "future-workshop.png", copy: "ESCUCHAR", tone: "night", align: "right" },
    { kind: "photo", image: "leadership-roundtable.png", copy: "PEDIR APOYO", tone: "night", align: "left" },
    { kind: "detail", image: "persona-office.png", copy: "ENERGÍA PARA CREAR", focus: "42% 52%", tone: "paper", align: "center" },
    { kind: "stack", image: "persona-wellbeing.png", image2: "archive/reflexion-dos.jpg", copy: "PRESENCIA", tone: "night", align: "right" },
    { kind: "archive", image: "archive/auditorio-wide.jpg", tone: "night", align: "center" },
    { kind: "photo", image: "future-workshop.png", copy: "UNA CULTURA SE PRACTICA", tone: "paper", align: "left" },
    { kind: "detail", image: "persona-office.png", copy: "TIEMPO DE CALIDAD", focus: "52% 50%", tone: "orange", align: "right" },
    { kind: "archive", image: "archive/cierre-comunidad.jpg", copy: "MÁS ALLÁ DE TI", focus: "50% 44%", tone: "night", align: "left" },
    { kind: "poster", image: "venue-navy.png", copy: "LO HUMANO SOSTIENE", tone: "night", align: "center" },
    { kind: "poster", image: "program-2026.png", copy: "UNA CONVERSACIÓN", tone: "paper", align: "left" },
    { kind: "hero", image: "persona-wellbeing.png", copy: "AVANZAR SIN DEJARTE", tone: "night", align: "center" },
    { kind: "poster", image: "speakers-2026.png", copy: "WLB FORUM 2026", tone: "orange", align: "right" },
  ];
  if (id === "liderazgo") return [
    { kind: "detail", image: "leadership-roundtable.png", copy: "NO ES TENER LA RAZÓN", kicker: "Liderar", focus: "46% 40%", tone: "night", align: "left" },
    { kind: "photo", image: "leadership-roundtable.png", copy: "ES HACER ESPACIO", focus: "58% 44%", tone: "night", align: "right" },
    { kind: "detail", image: "future-workshop.png", focus: "46% 42%", tone: "paper", align: "center" },
    { kind: "relay", image: "impact-innovation.png", copy: "ESCUCHAR ANTES", tone: "night", align: "left" },
    { kind: "archive", image: "archive/panelista-gesto.jpg", copy: "DE RESPONDER", focus: "54% 35%", tone: "paper", align: "right" },
    { kind: "photo", image: "leadership-roundtable.png", copy: "TODAS LAS VOCES", tone: "night", align: "left" },
    { kind: "hero", image: "leadership-roundtable.png", copy: "COMPARTE EL ESPACIO", tone: "night", align: "center" },
    { kind: "archive", image: "archive/panel-mixto-wide.jpg", copy: "DIRECCIÓN", focus: "50% 44%", tone: "paper", align: "left" },
    { kind: "detail", image: "future-workshop.png", copy: "CONFIANZA", focus: "50% 50%", tone: "night", align: "right" },
    { kind: "stack", image: "impact-innovation.png", copy: "CLARIDAD + EMPATÍA", tone: "paper", align: "left" },
    { kind: "archive", image: "archive/panelista-gesto.jpg", tone: "night", align: "center" },
    { kind: "detail", image: "archive/col-pregunta.jpg", copy: "MENOS DISTANCIA", focus: "56% 38%", tone: "paper", align: "right" },
    { kind: "photo", image: "future-workshop.png", copy: "MÁS CONVERSACIÓN", tone: "night", align: "left" },
    { kind: "archive", image: "archive/cierre-comunidad.jpg", copy: "RESPONSABILIDAD COMPARTIDA", focus: "52% 44%", tone: "night", align: "right" },
    { kind: "archive", image: "archive/venue-group.jpeg", copy: "NO OCUPA TODO", focus: "50% 38%", tone: "paper", align: "center" },
    { kind: "relay", image: "leadership-roundtable.png", copy: "ABRE UNA OPORTUNIDAD", tone: "night", align: "left" },
    { kind: "detail", image: "future-workshop.png", copy: "LOS GESTOS CUENTAN", focus: "50% 48%", tone: "paper", align: "right" },
    { kind: "poster", image: "venue-navy.png", copy: "VALORES → HÁBITOS", tone: "night", align: "center" },
    { kind: "hero", image: "leadership-roundtable.png", copy: "EMPRESAS QUE DURAN", tone: "night", align: "center" },
    { kind: "poster", image: "speakers-2026.png", copy: "LIDERAZGO", tone: "orange", align: "right" },
  ];
  if (id === "impacto") return [
    { kind: "ripple", image: "impact-community.png", copy: "CADA DECISIÓN MUEVE ALGO", tone: "night", align: "left" },
    { kind: "detail", image: "impact-community.png", copy: "MÁS GRANDE QUE TÚ", focus: "52% 45%", tone: "night", align: "right" },
    { kind: "stack", image: "impact-innovation.png", copy: "CRECER NO BASTA", tone: "paper", align: "center" },
    { kind: "photo", image: "future-workshop.png", copy: "¿QUÉ DEJAMOS?", tone: "night", align: "left" },
    { kind: "archive", image: "archive/reflexion-naranja.jpg", focus: "45% 35%", tone: "paper", align: "right" },
    { kind: "ripple", image: "impact-community.png", copy: "DE LA INTENCIÓN", tone: "night", align: "left" },
    { kind: "hero", image: "impact-community.png", copy: "A LA ACCIÓN", tone: "night", align: "center" },
    { kind: "archive", image: "archive/cierre-comunidad.jpg", copy: "UNA COMUNIDAD", focus: "50% 45%", tone: "paper", align: "left" },
    { kind: "detail", image: "impact-innovation.png", copy: "ABRIR POSIBILIDADES", focus: "54% 50%", tone: "night", align: "right" },
    { kind: "photo", image: "future-workshop.png", copy: "INNOVAR CON PROPÓSITO", tone: "paper", align: "left" },
    { kind: "archive", image: "archive/venue-group.jpeg", focus: "50% 40%", tone: "night", align: "center" },
    { kind: "archive", image: "archive/voz-del-publico.jpg", copy: "ESCUCHAR A QUIENES FALTAN", focus: "55% 36%", tone: "paper", align: "right" },
    { kind: "ripple", image: "impact-innovation.png", copy: "INCLUSIÓN COTIDIANA", tone: "night", align: "left" },
    { kind: "stack", image: "future-workshop.png", copy: "PASAR A LA ACCIÓN", tone: "paper", align: "center" },
    { kind: "ripple", image: "impact-community.png", copy: "LA HUELLA QUEDA", tone: "night", align: "right" },
    { kind: "archive", image: "archive/venue-group.jpeg", copy: "COLABORAR MULTIPLICA", focus: "50% 40%", tone: "night", align: "left" },
    { kind: "poster", image: "venue-navy.png", tone: "night", align: "center" },
    { kind: "poster", image: "program-2026.png", copy: "LO QUE DEJAMOS", tone: "paper", align: "left" },
    { kind: "hero", image: "impact-community.png", copy: "EL IMPACTO SE MULTIPLICA", tone: "night", align: "center" },
    { kind: "poster", image: "speakers-2026.png", copy: "IMPACTO", tone: "orange", align: "right" },
  ];
  return [
    { kind: "detail", image: "future-innovation.png", copy: "YA ESTÁ APARECIENDO", kicker: "El futuro", focus: "50% 44%", tone: "night", align: "left" },
    { kind: "photo", image: "future-innovation.png", copy: "TODO MÁS RÁPIDO", focus: "62% 44%", tone: "night", align: "right" },
    { kind: "stack", image: "future-workshop.png", copy: "PERO…", tone: "paper", align: "center" },
    { kind: "photo", image: "impact-innovation.png", copy: "¿QUÉ QUEREMOS CONSTRUIR?", tone: "night", align: "left" },
    { kind: "archive", image: "archive/panel-mixto.jpg", copy: "CONVERSACIONES HUMANAS", focus: "54% 38%", tone: "paper", align: "right" },
    { kind: "detail", image: "future-innovation.png", focus: "48% 48%", tone: "night", align: "center" },
    { kind: "hero", image: "future-innovation.png", copy: "LA TECNOLOGÍA NO DECIDE SOLA", tone: "night", align: "center" },
    { kind: "detail", image: "future-innovation.png", copy: "PRECISIÓN", focus: "48% 45%", tone: "paper", align: "left" },
    { kind: "archive", image: "archive/col-pregunta.jpg", copy: "APRENDER JUNTOS", focus: "50% 40%", tone: "night", align: "right" },
    { kind: "stack", image: "impact-innovation.png", copy: "COMPARTIR CONOCIMIENTO", tone: "paper", align: "left" },
    { kind: "archive", image: "archive/panel-mixto-wide.jpg", tone: "night", align: "center" },
    { kind: "stack", image: "future-workshop.png", copy: "INNOVAR TAMBIÉN ES PROTEGER", tone: "paper", align: "right" },
    { kind: "detail", image: "future-innovation.png", copy: "ELEGIR QUÉ AUTOMATIZAR", focus: "54% 48%", tone: "night", align: "left" },
    { kind: "poster", image: "venue-navy.png", copy: "QUÉ ABRIR", tone: "night", align: "center" },
    { kind: "archive", image: "archive/cierre-comunidad.jpg", copy: "QUÉ CUIDAR", focus: "50% 44%", tone: "paper", align: "right" },
    { kind: "archive", image: "archive/venue-group.jpeg", copy: "APRENDER JUNTOS", focus: "50% 40%", tone: "night", align: "left" },
    { kind: "poster", image: "program-2026.png", copy: "PRECISIÓN + EMPATÍA", tone: "paper", align: "center" },
    { kind: "poster", image: "speakers-2026.png", copy: "VISIÓN → ACCIÓN", tone: "night", align: "right" },
    { kind: "hero", image: "future-innovation.png", copy: "LA CULTURA DECIDE", tone: "night", align: "center" },
    { kind: "relay", image: "archive/ponente-escenario.jpg", copy: "FUTURO", tone: "orange", align: "left" },
  ];
};

const makeAxis = (id: AxisId, title: string, opening: string, closing: string, motif: Motif): AxisConfig => {
  let cursor = INTRO_END;
  const shots = rawShots(id).map((s, i) => {
    const item = { ...s, from: cursor, duration: BODY_DURATIONS[i] };
    cursor += BODY_DURATIONS[i];
    return item;
  });
  if (cursor !== REFLECTION_START) throw new Error(`Invalid shot timing for ${id}: ${cursor}`);
  return { id, title, opening, closing, motif, accent: "#ff6a00", shots };
};

export const AXES: Record<AxisId, AxisConfig> = {
  persona: makeAxis("persona", "PERSONA", "El equilibrio no empieza cuando termina la jornada.", "Avanzar sin dejarte atrás.", "orbit"),
  liderazgo: makeAxis("liderazgo", "LIDERAZGO", "Una organización no se transforma solamente con estrategias.", "El liderazgo que deja huella comparte el espacio.", "relay"),
  impacto: makeAxis("impacto", "IMPACTO", "El crecimiento de una empresa se mide también por lo que transforma.", "El impacto no es una cifra: es una consecuencia.", "ripple"),
  futuro: makeAxis("futuro", "FUTURO", "El futuro del trabajo no llegará de un solo golpe.", "El futuro se construye en equilibrio.", "stack"),
};

const clamp = (value: number, a = 0, b = 1) => Math.min(b, Math.max(a, value));
const ease = Easing.bezier(0.22, 0.8, 0.2, 1);
const asset = (name: string) => staticFile(photo(name));

const imageStyle = (focus: string | undefined, scale: number, x: number, y: number): React.CSSProperties => ({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  objectPosition: focus || "50% 50%",
  transform: `scale(${scale}) translate(${x}%, ${y}%)`,
  transformOrigin: focus || "50% 50%",
});

const FilmTexture: React.FC<{ light?: boolean }> = ({ light = false }) => (
  <AbsoluteFill style={{ opacity: 0.14, mixBlendMode: light ? "multiply" : "screen", pointerEvents: "none" }}>
    <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)", backgroundSize: "8px 8px" }} />
  </AbsoluteFill>
);

const ImagePlane: React.FC<{ name: string; frame: number; duration: number; focus?: string; dark?: boolean; mask?: string; offset?: number }> = ({ name, frame, duration, focus, dark = false, mask, offset = 0 }) => {
  const t = clamp(frame / Math.max(1, duration));
  const sc = interpolate(t, [0, 1], [1.05, 1.15], { easing: ease });
  const x = interpolate(t, [0, 1], [-1.2 + offset, 1.2 + offset]);
  const y = interpolate(t, [0, 1], [0.6, -0.8]);
  return <div style={{ position: "absolute", inset: 0, overflow: "hidden", clipPath: mask }}><Img src={asset(name)} style={imageStyle(focus, sc, x, y)} /><div style={{ position: "absolute", inset: 0, background: dark ? "linear-gradient(90deg, rgba(3,13,20,.84), rgba(3,13,20,.16) 68%, rgba(3,13,20,.45))" : "linear-gradient(90deg, rgba(3,13,20,.22), rgba(3,13,20,.04))" }} /></div>;
};

const Carrier: React.FC<{ frame: number; duration: number; accent?: string; y?: number; invert?: boolean }> = ({ frame, duration, accent = "#ff6a00", y = 82, invert = false }) => {
  const p = clamp(frame / Math.max(1, duration));
  const dash = interpolate(p, [0, 1], [-20, 112]);
  const glow = interpolate(Math.sin(frame / 8), [-1, 1], [0.45, 1]);
  return <div style={{ position: "absolute", left: 0, right: 0, top: `${y}%`, height: 2, background: invert ? "rgba(239,228,213,.32)" : "rgba(255,255,255,.2)", overflow: "visible" }}><div style={{ position: "absolute", left: `${dash}%`, width: 220, height: 2, background: accent, boxShadow: `0 0 24px ${accent}`, opacity: glow }} /><div style={{ position: "absolute", left: `${clamp(p * 100)}%`, top: -5, width: 12, height: 12, borderRadius: "50%", background: accent, boxShadow: `0 0 0 8px ${accent}22, 0 0 26px ${accent}` }} /></div>;
};

const WordHit: React.FC<{ text?: string; frame: number; duration: number; align?: "left" | "center" | "right"; light?: boolean; small?: boolean }> = ({ text, frame, duration, align = "left", light = false, small = false }) => {
  if (!text) return null;
  const enter = clamp(frame / 20);
  const exit = clamp((duration - frame) / 16);
  const opacity = Math.min(enter, exit);
  const y = interpolate(enter, [0, 1], [26, 0], { easing: ease });
  const words = text.split(" ");
  return <div style={{ position: "absolute", zIndex: 8, left: align === "right" ? "auto" : align === "center" ? "50%" : "8%", right: align === "right" ? "8%" : "auto", top: small ? "16%" : "64%", transform: `${align === "center" ? "translateX(-50%)" : ""} translateY(${y}px)`, maxWidth: small ? 680 : 900, textAlign: align, opacity, color: light ? "#07131d" : "#f4eadb", fontSize: small ? 28 : 54, lineHeight: 0.98, letterSpacing: "-0.055em", fontWeight: 800, textTransform: "uppercase" }}><span>{words.map((w, i) => <span key={`${w}-${i}`} style={{ display: "inline-block", marginRight: 11, transform: `translateY(${Math.sin(frame / 8 + i) * 2}px)` }}>{w}</span>)}</span></div>;
};

const MotifDrawing: React.FC<{ motif: Motif; frame: number; duration: number; accent: string }> = ({ motif, frame, duration, accent }) => {
  const p = clamp(frame / Math.max(1, duration));
  const op = interpolate(p, [0, 0.16, 1], [0.15, 0.85, 0.52]);
  if (motif === "orbit") return <svg viewBox="0 0 1920 1080" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: op }}><ellipse cx="1420" cy="520" rx={interpolate(p, [0, 1], [120, 540])} ry={interpolate(p, [0, 1], [70, 270])} fill="none" stroke={accent} strokeWidth="2" /><ellipse cx="1420" cy="520" rx={interpolate(p, [0, 1], [190, 700])} ry={interpolate(p, [0, 1], [120, 410])} fill="none" stroke="#f4eadb" strokeOpacity=".45" strokeWidth="1" transform="rotate(-18 1420 520)" /><circle cx={1420 + Math.cos(frame / 18) * 420} cy={520 + Math.sin(frame / 18) * 180} r="10" fill={accent} /></svg>;
  if (motif === "relay") return <svg viewBox="0 0 1920 1080" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: op }}><path d="M220 770 C480 290 670 870 930 430 S1390 280 1710 650" fill="none" stroke={accent} strokeWidth="4" strokeDasharray="16 22" strokeDashoffset={-frame * 2} /><path d="M220 770 L1710 650" stroke="#f4eadb" strokeOpacity=".18" strokeWidth="1" strokeDasharray="3 18" />{[220, 650, 930, 1280, 1710].map((cx, i) => <circle key={cx} cx={cx} cy={[770, 620, 430, 410, 650][i]} r={i === Math.floor(p * 5) ? 18 : 8} fill={i <= Math.floor(p * 5) ? accent : "#f4eadb"} opacity={i <= Math.floor(p * 5) ? 1 : .55} />)}</svg>;
  if (motif === "ripple") return <svg viewBox="0 0 1920 1080" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: op }}><circle cx="960" cy="540" r={interpolate(p, [0, 1], [20, 600])} fill="none" stroke={accent} strokeWidth="4" /><circle cx="960" cy="540" r={interpolate(p, [0, 1], [80, 820])} fill="none" stroke="#f4eadb" strokeOpacity=".36" strokeWidth="2" /><circle cx="960" cy="540" r={interpolate(p, [0, 1], [140, 1020])} fill="none" stroke={accent} strokeOpacity=".4" strokeWidth="1" strokeDasharray="5 22" /></svg>;
  return <svg viewBox="0 0 1920 1080" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: op }}><g transform="translate(960 540) rotate(-7)">{[0,1,2,3].map((i) => { const z = interpolate(p, [0,1], [i * 112, i * 26]); return <rect key={i} x={-420 + z} y={-250 + z / 3} width="840" height="500" rx="16" fill="none" stroke={i === 2 ? accent : "#f4eadb"} strokeOpacity={0.65 - i * .1} strokeWidth={i === 2 ? 5 : 2} transform={`scale(${1 - i * .06})`} />; })}</g><circle cx="960" cy="540" r={interpolate(p, [0,1], [30, 180])} fill={accent} opacity=".12" /></svg>;
};

const HeroObject: React.FC<{ motif: Motif; frame: number; duration: number; accent: string }> = ({ motif, frame, duration, accent }) => {
  const p = clamp(frame / Math.max(1, duration));
  const settle = interpolate(p, [0, 0.55, 1], [0.5, 1.12, 1], { easing: ease });
  if (motif === "orbit") return <div style={{ position: "absolute", left: "50%", top: "48%", width: 570, height: 220, transform: `translate(-50%, -50%) rotate(${interpolate(p, [0, .55, 1], [-18, 7, 0])}deg) scale(${settle})`, transformOrigin: "center", filter: "drop-shadow(0 24px 32px rgba(0,0,0,.32))" }}><div style={{ position: "absolute", left: 30, right: 30, top: 102, height: 18, borderRadius: 10, background: "#f4eadb" }} /><div style={{ position: "absolute", left: 0, top: 52, width: 118, height: 118, borderRadius: "50%", border: `8px solid ${accent}`, background: "#102432" }} /><div style={{ position: "absolute", right: 0, top: 52, width: 118, height: 118, borderRadius: "50%", border: "8px solid #f4eadb", background: accent }} /><div style={{ position: "absolute", left: "50%", top: 80, width: 30, height: 62, transform: "translateX(-50%)", background: accent }} /></div>;
  if (motif === "relay") return <div style={{ position: "absolute", left: "50%", top: "50%", width: 380, height: 380, transform: `translate(-50%, -50%) scale(${settle})`, borderRadius: "50%", border: `2px solid ${accent}`, boxShadow: `0 0 70px ${accent}35` }}>{[0,1,2,3,4].map((i) => { const a = (Math.PI * 2 * i) / 5 - Math.PI / 2; return <div key={i} style={{ position: "absolute", left: "50%", top: "50%", width: 230, height: 2, transformOrigin: "left center", transform: `rotate(${a * 180 / Math.PI}deg)`, background: i <= Math.floor(p * 5) ? accent : "#f4eadb44" }}><span style={{ position: "absolute", right: -7, top: -7, width: 16, height: 16, borderRadius: "50%", background: i <= Math.floor(p * 5) ? accent : "#f4eadb" }} /></div>; })}<div style={{ position: "absolute", left: "50%", top: "50%", width: 54, height: 54, transform: "translate(-50%, -50%)", borderRadius: "50%", background: accent }} /></div>;
  if (motif === "ripple") return <div style={{ position: "absolute", left: "50%", top: "50%", width: 560, height: 300, transform: `translate(-50%, -50%) perspective(650px) rotateX(52deg) scale(${settle})`, border: `4px solid ${accent}`, borderRadius: "50%", boxShadow: `0 0 0 34px ${accent}18, 0 0 0 76px ${accent}0e` }}><div style={{ position: "absolute", left: "50%", top: "50%", width: 40, height: 40, transform: "translate(-50%, -50%) translateZ(50px)", borderRadius: "50%", background: accent, boxShadow: `0 0 50px ${accent}` }} /></div>;
  return <div style={{ position: "absolute", left: "50%", top: "50%", width: 520, height: 300, transform: `translate(-50%, -50%) scale(${settle})`, perspective: 800 }}>{[0,1,2,3].map((i) => <div key={i} style={{ position: "absolute", inset: 0, transform: `translate(${(i - 1.5) * (1 - p) * 150}px, ${(i - 1.5) * (1 - p) * 90}px) rotate(${(i - 1.5) * (1 - p) * 7}deg)`, border: `${i === 2 ? 8 : 2}px solid ${i === 2 ? accent : "#f4eadb"}`, borderRadius: 22, opacity: .95 - i * .12, boxShadow: `0 15px 30px rgba(0,0,0,.24)` }} />)}</div>;
};

const PosterTreatment: React.FC<{ name: string; frame: number; duration: number }> = ({ name, frame, duration }) => {
  const t = clamp(frame / duration);
  return <div style={{ position: "absolute", right: "9%", top: "15%", width: 390, height: 560, transform: `rotate(${interpolate(t, [0,1], [-8, 3])}deg) translateY(${interpolate(t, [0,1], [80,0])}px)`, boxShadow: "0 25px 60px rgba(0,0,0,.45)", overflow: "hidden", border: "1px solid #f4eadb88" }}><Img src={asset(name)} style={{ width: "100%", height: "100%", objectFit: "cover" }} /></div>;
};

const VisualShot: React.FC<{ shot: Shot; motif: Motif; accent: string }> = ({ shot, motif, accent }) => {
  const frame = useCurrentFrame();
  const t = clamp(frame / shot.duration);
  const paper = shot.tone === "paper";
  const orange = shot.tone === "orange";
  const bg = paper ? "#eee4d4" : orange ? "#e65112" : "#081721";
  const fg = paper ? "#07131d" : "#f4eadb";
  return <AbsoluteFill style={{ backgroundColor: bg, color: fg, overflow: "hidden" }}>
    {shot.kind === "archive" || shot.kind === "photo" || shot.kind === "detail" ? <ImagePlane name={shot.image} frame={frame} duration={shot.duration} focus={shot.focus} dark={!paper} /> : null}
    {shot.kind === "photo" && shot.image2 ? <div style={{ position: "absolute", right: "7%", bottom: "11%", width: 300, height: 190, border: `2px solid ${accent}`, transform: `rotate(${interpolate(t, [0,1], [5,-3])}deg) translateY(${interpolate(t,[0,1],[70,0])}px)`, overflow: "hidden", boxShadow: "0 18px 35px #0005" }}><Img src={asset(shot.image2)} style={{ width: "100%", height: "100%", objectFit: "cover" }} /></div> : null}
    {shot.kind === "poster" ? <><ImagePlane name={shot.image} frame={frame} duration={shot.duration} dark={!paper} /><PosterTreatment name={shot.image} frame={frame} duration={shot.duration} /></> : null}
    {shot.kind === "video" ? <><div style={{ position: "absolute", inset: 0, background: "#07131d" }} /><div style={{ position: "absolute", inset: "12% 9%", overflow: "hidden", border: `2px solid ${accent}`, transform: `rotate(${interpolate(t, [0,1], [-2, 1])}deg)` }}><Video src={staticFile("assets/wlb-forum-2026-teaser.mp4")} muted style={{ width: "100%", height: "100%", filter: "saturate(.65) contrast(1.18)" }} objectFit="cover" /></div><span style={{ position: "absolute", top: "15%", left: "10%", color: fg, fontSize: 18, letterSpacing: ".2em", fontWeight: 700 }}>ARCHIVO / WLB</span></> : null}
    {shot.kind === "hero" ? <><div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 50% 48%, #163447 0%, #081721 58%, #050a0e 100%)" }} /><HeroObject motif={motif} frame={frame} duration={shot.duration} accent={accent} /></> : null}
    {shot.kind === "relay" || shot.kind === "ripple" || shot.kind === "stack" ? <><div style={{ position: "absolute", inset: 0, background: paper ? "#eee4d4" : "#081721" }} /><ImagePlane name={shot.image} frame={frame} duration={shot.duration} dark={!paper} mask="inset(9% 8% 10% 8% round 10px)" /><div style={{ position: "absolute", inset: 0, background: paper ? "rgba(238,228,212,.72)" : "rgba(8,23,33,.64)" }} /><MotifDrawing motif={motif} frame={frame} duration={shot.duration} accent={accent} />{shot.kind === "stack" ? <HeroObject motif="stack" frame={frame} duration={shot.duration} accent={accent} /> : null}</> : null}
    <div style={{ position: "absolute", inset: 0, background: paper ? "linear-gradient(110deg, rgba(238,228,212,.86) 0%, rgba(238,228,212,.18) 54%, transparent 100%)" : "linear-gradient(110deg, rgba(4,13,19,.52), transparent 68%)" }} />
    {(shot.kind === "hero" || shot.kind === "relay" || shot.kind === "ripple" || shot.kind === "video") ? <Carrier frame={frame} duration={shot.duration} accent={accent} y={shot.kind === "hero" ? 54 : 82} invert={paper} /> : null}
    <WordHit text={(shot.kind === "photo" || shot.kind === "archive") ? undefined : shot.copy} frame={frame} duration={shot.duration} align={shot.align} light={paper} />
    {shot.kicker ? <div style={{ position: "absolute", left: shot.align === "right" ? "auto" : "8%", right: shot.align === "right" ? "8%" : "auto", top: "56%", fontSize: 16, letterSpacing: ".24em", textTransform: "uppercase", opacity: .8 }}>{shot.kicker}</div> : null}
    <FilmTexture light={paper} />
  </AbsoluteFill>;
};

const Intro: React.FC<{ axis: AxisConfig }> = ({ axis }) => {
  const frame = useCurrentFrame();
  const p = clamp(frame / INTRO_END);
  const x = interpolate(p, [0, 1], [-100, 0], { easing: ease });
  const reveal = interpolate(p, [0, .6, 1], [0, 1, .84]);
  return <AbsoluteFill style={{ background: "#081721", color: "#f4eadb", overflow: "hidden" }}><div style={{ position: "absolute", inset: 0, background: `radial-gradient(circle at ${interpolate(p,[0,1],[26,65])}% 46%, #173b4b 0%, #081721 52%, #03080b 100%)` }} /><div style={{ position: "absolute", left: `${x}%`, top: "50%", width: 980, height: 2, background: axis.accent, boxShadow: `0 0 45px ${axis.accent}` }} /><div style={{ position: "absolute", left: "8%", top: "34%", fontSize: 17, letterSpacing: ".3em", fontWeight: 700, opacity: reveal }}>WORK LIFE BALANCE FORUM / 2026</div><div style={{ position: "absolute", left: "8%", top: "42%", maxWidth: 1150, fontSize: 82, lineHeight: .9, fontWeight: 800, letterSpacing: "-.06em", textTransform: "uppercase", transform: `translateX(${interpolate(p,[0,1],[-40,0])}px)`, opacity: reveal }}>{axis.opening}</div><div style={{ position: "absolute", right: "8%", bottom: "12%", fontSize: 15, letterSpacing: ".18em", textTransform: "uppercase", opacity: .7 }}>{axis.title} / 01</div><Carrier frame={frame} duration={INTRO_END} accent={axis.accent} y={74} /><FilmTexture /></AbsoluteFill>;
};

const Reflection: React.FC<{ axis: AxisConfig }> = ({ axis }) => {
  const frame = useCurrentFrame();
  const p = clamp(frame / (END_START - REFLECTION_START));
  const bgName = axis.id === "persona" ? "archive/reflexion-dos.jpg" : axis.id === "liderazgo" ? "archive/venue-group.jpeg" : axis.id === "impacto" ? "archive/cierre-comunidad.jpg" : "archive/panel-mixto-wide.jpg";
  return <AbsoluteFill style={{ background: "#081721", color: "#f4eadb", overflow: "hidden" }}><ImagePlane name={bgName} frame={frame} duration={END_START - REFLECTION_START} dark /><div style={{ position: "absolute", inset: 0, background: "rgba(6,17,24,.58)" }} /><div style={{ position: "absolute", left: "8%", top: "38%", maxWidth: 1080, fontSize: 68, lineHeight: .96, letterSpacing: "-.06em", fontWeight: 800, textTransform: "uppercase", opacity: interpolate(p,[0,.15,1],[0,1,.9]), transform: `translateY(${interpolate(p,[0,.15],[34,0],{easing:ease})}px)` }}>{axis.closing}</div><Carrier frame={frame} duration={END_START - REFLECTION_START} accent={axis.accent} y={76} /><FilmTexture /></AbsoluteFill>;
};

const FinalCTA: React.FC<{ axis: AxisConfig }> = () => {
  const frame = useCurrentFrame();
  const p = clamp(frame / (TOTAL_FRAMES - END_START));
  const logoIn = clamp((frame - 35) / 24);
  return <AbsoluteFill style={{ background: "#eee4d4", color: "#07131d", overflow: "hidden" }}><div style={{ position: "absolute", inset: 0, background: "linear-gradient(130deg, #eee4d4 0%, #eee4d4 62%, #e65d19 62%, #e65d19 100%)" }} /><div style={{ position: "absolute", left: "8%", top: "15%", fontSize: 18, letterSpacing: ".2em", fontWeight: 700 }}>WLB FORUM 2026</div><div style={{ position: "absolute", left: "8%", top: "32%", fontSize: 56, lineHeight: .95, letterSpacing: "-.05em", fontWeight: 800, textTransform: "uppercase", maxWidth: 700 }}>05 NOVIEMBRE<br />CLUB INDUSTRIAL</div><div style={{ position: "absolute", right: "9%", top: "26%", width: 390, height: 390, border: "2px solid #07131d", borderRadius: "50%", transform: `rotate(${interpolate(p,[0,1],[-12,0])}deg) scale(${interpolate(p,[0,1],[.5,1],{easing:ease})})`, opacity: interpolate(p,[0,.2],[0,1]) }}><div style={{ position: "absolute", inset: 34, border: "2px solid #07131d", borderRadius: "50%" }}><Img src={staticFile("assets/logo-wlb.png")} style={{ width: "72%", height: "72%", objectFit: "contain", position: "absolute", left: "14%", top: "14%" }} /></div><div style={{ position: "absolute", right: "4%", bottom: "21%", width: 170, padding: 14, background: "#07131d", transform: `translateY(${interpolate(p,[0,1],[50,0],{easing:ease})}px)`, opacity: logoIn }}><Img src={staticFile("assets/logo-imef.png")} style={{ width: "100%", height: 55, objectFit: "contain", filter: "brightness(0) invert(1)" }} /></div></div><div style={{ position: "absolute", left: "8%", bottom: "10%", fontSize: 14, letterSpacing: ".12em", fontWeight: 700, opacity: frame > 144 ? 1 : 0 }}>EL FUTURO SE CONSTRUYE EN EQUILIBRIO</div><Carrier frame={frame} duration={TOTAL_FRAMES - END_START} accent="#07131d" y={84} invert /><FilmTexture light /></AbsoluteFill>;
};

export const WlbVideo: React.FC<{ axisId: AxisId }> = ({ axisId }) => {
  const axis = AXES[axisId];
  return <AbsoluteFill style={{ background: "#081721" }}><Audio src={staticFile(`audio/${axis.id}-vo.mp3`)} volume={1} /><Audio src={staticFile(`audio/${axis.id}-music.mp3`)} volume={(f) => interpolate(f, [0, 50, 160, 2520, 2690, 2700], [0, .38, .28, .26, .18, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })} /><Sequence durationInFrames={INTRO_END}><Intro axis={axis} /></Sequence>{axis.shots.map((shot, i) => <Sequence key={`${axis.id}-${i}`} from={shot.from} durationInFrames={shot.duration}><VisualShot shot={shot} motif={axis.motif} accent={axis.accent} /></Sequence>)}<Sequence from={REFLECTION_START} durationInFrames={END_START - REFLECTION_START}><Reflection axis={axis} /></Sequence><Sequence from={END_START} durationInFrames={TOTAL_FRAMES - END_START}><FinalCTA axis={axis} /></Sequence><div style={{ position: "absolute", inset: 0, pointerEvents: "none", border: "1px solid rgba(255,255,255,.1)" }} /></AbsoluteFill>;
};

export const compositions = (axisId: AxisId) => ({ id: `Wlb${axisId.charAt(0).toUpperCase()}${axisId.slice(1)}`, component: WlbVideo, width: 1920, height: 1080, fps: FPS, durationInFrames: TOTAL_FRAMES, defaultProps: { axisId } });
