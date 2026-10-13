import {mkdir, readFile, rename, writeFile} from "node:fs/promises";
import {spawn} from "node:child_process";
import path from "node:path";
import {fileURLToPath} from "node:url";

const root = path.resolve(fileURLToPath(new URL("..", import.meta.url)));
const audioDir = path.join(root, "public", "audio");
const tempDir = path.join(audioDir, "elevenlabs-raw");
const voiceId = "efcRUax7uSa9kpBwtDPe";
const apiKey = process.env.ELEVENLABS_API_KEY;
if (!apiKey) throw new Error("Falta ELEVENLABS_API_KEY en el entorno.");

const axes = ["persona", "liderazgo", "impacto", "futuro"];
await mkdir(tempDir, {recursive: true});

const run = (command, args) => new Promise((resolve, reject) => {
  const child = spawn(command, args, {stdio: "inherit"});
  child.on("error", reject);
  child.on("exit", (code) => code === 0 ? resolve() : reject(new Error(`${command} terminó con código ${code}`)));
});

for (const axis of axes) {
  const text = (await readFile(path.join(root, "content", `${axis}.txt`), "utf8")).replace(/\s+/g, " ").trim();
  const response = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voiceId}?output_format=mp3_44100_128`, {
    method: "POST",
    headers: {"xi-api-key": apiKey, "Content-Type": "application/json", Accept: "audio/mpeg"},
    body: JSON.stringify({
      text,
      model_id: "eleven_multilingual_v2",
      voice_settings: {stability: 0.45, similarity_boost: 0.82, style: 0.15, use_speaker_boost: true},
    }),
  });
  if (!response.ok) throw new Error(`ElevenLabs ${axis}: ${response.status} ${await response.text()}`);
  const rawPath = path.join(tempDir, `${axis}.mp3`);
  const nextPath = path.join(audioDir, `${axis}-vo.next.mp3`);
  await writeFile(rawPath, Buffer.from(await response.arrayBuffer()));
  await run("ffmpeg", ["-y", "-hide_banner", "-loglevel", "error", "-i", rawPath, "-af", "loudnorm=I=-14:TP=-1.5:LRA=11", "-c:a", "libmp3lame", "-b:a", "160k", "-ar", "44100", nextPath]);
  await rename(nextPath, path.join(audioDir, `${axis}-vo.mp3`));
  console.log(`Generada voz ${voiceId} para ${axis}`);
}
