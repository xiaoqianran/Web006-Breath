/**
 * 生成 public/assets/audio 下原创 WAV（无第三方采样）。
 * 用法：node scripts/generate-audio-assets.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outDir = path.join(root, "public/assets/audio");
fs.mkdirSync(outDir, { recursive: true });

const SR = 22050;

function writeWav(filePath, samples, sampleRate = SR) {
  const n = samples.length;
  const dataSize = n * 2;
  const buf = Buffer.alloc(44 + dataSize);
  buf.write("RIFF", 0);
  buf.writeUInt32LE(36 + dataSize, 4);
  buf.write("WAVE", 8);
  buf.write("fmt ", 12);
  buf.writeUInt32LE(16, 16);
  buf.writeUInt16LE(1, 20);
  buf.writeUInt16LE(1, 22);
  buf.writeUInt32LE(sampleRate, 24);
  buf.writeUInt32LE(sampleRate * 2, 28);
  buf.writeUInt16LE(2, 32);
  buf.writeUInt16LE(16, 34);
  buf.write("data", 36);
  buf.writeUInt32LE(dataSize, 40);
  for (let i = 0; i < n; i++) {
    const s = Math.max(-1, Math.min(1, samples[i]));
    buf.writeInt16LE((s * 32767) | 0, 44 + i * 2);
  }
  fs.writeFileSync(filePath, buf);
}

function tone(freq, durationMs, type, gain) {
  const n = Math.floor((SR * durationMs) / 1000);
  const samples = new Float32Array(n);
  const dur = durationMs / 1000;
  for (let i = 0; i < n; i++) {
    const t = i / SR;
    const attack = Math.min(1, i / (0.008 * SR));
    const release = Math.exp((-3.2 * t) / Math.max(0.04, dur));
    const env = attack * release;
    const phase = 2 * Math.PI * freq * t;
    let wave;
    if (type === "triangle") {
      const p = (freq * t) % 1;
      wave = 4 * Math.abs(p - 0.5) - 1;
    } else if (type === "soft") {
      wave = Math.sin(phase) * 0.85 + Math.sin(phase * 2) * 0.12;
    } else {
      wave = Math.sin(phase);
    }
    samples[i] = wave * gain * env;
  }
  return samples;
}

function concat(parts) {
  let len = 0;
  for (const p of parts) len += p.length;
  const out = new Float32Array(len);
  let o = 0;
  for (const p of parts) {
    out.set(p, o);
    o += p.length;
  }
  return out;
}

function silence(ms) {
  return new Float32Array(Math.floor((SR * ms) / 1000));
}

function bgmLoop(rootFreq, seconds = 4) {
  const notes = [0, 2, 4, 7, 9, 7, 4, 2].map(
    (semi) => rootFreq * Math.pow(2, semi / 12),
  );
  const noteMs = (seconds * 1000) / notes.length;
  const parts = [];
  for (const f of notes) {
    parts.push(tone(f, noteMs * 0.92, "soft", 0.09));
    parts.push(silence(noteMs * 0.08));
  }
  return concat(parts);
}

const generators = {
  sfx_click: () => tone(660, 45, "sine", 0.22),
  sfx_accept: () => tone(520, 95, "triangle", 0.24),
  sfx_craft_ok: () => tone(740, 130, "sine", 0.24),
  sfx_rare: () =>
    concat([tone(880, 100, "triangle", 0.22), tone(1108, 120, "soft", 0.18)]),
  sfx_circulate: () => tone(480, 110, "sine", 0.22),
  sfx_day_end: () =>
    concat([tone(392, 140, "triangle", 0.2), tone(330, 160, "soft", 0.16)]),
  bgm_menu: () => bgmLoop(261.63, 4.2),
  bgm_shop: () => bgmLoop(293.66, 4.8),
};

for (const [id, gen] of Object.entries(generators)) {
  const file = path.join(outDir, `${id}.wav`);
  writeWav(file, gen());
  console.log("wrote", path.basename(file), fs.statSync(file).size);
}

fs.writeFileSync(
  path.join(outDir, "LICENSE.txt"),
  [
    "一息 · 温柔瞬间铺 — 音频资源许可",
    "",
    "本目录全部 .wav 由项目脚本合成（正弦/三角/软泛音包络），",
    "为项目原创程序生成内容，无第三方采样。",
    "许可证：与本仓库相同之原创素材，可随项目使用、修改与再分发。",
    "生成：node scripts/generate-audio-assets.mjs",
    `生成日期：${new Date().toISOString().slice(0, 10)}`,
    "",
  ].join("\n"),
);

console.log("audio assets ready in", outDir);
