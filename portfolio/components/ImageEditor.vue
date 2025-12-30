<template>
  <div class="wrap">
    <header class="topbar">
      <div class="title">
        <div class="h1">dynamic photo editor</div>
        <div class="sub">crop → stamp → pad • ordered chain • client-only</div>
      </div>
      <div class="actions">
        <label class="file">
          <input type="file" accept="image/*" @change="onPick" />
          <span>load image</span>
        </label>
        <button class="btn" :disabled="!imgReady" @click="resetAll">
          reset
        </button>
      </div>
    </header>

    <main class="grid">
      <section class="chain">
        <div class="panelHeader">
          <div class="panelTitle">transform chain</div>
          <div class="panelActions">
            <button
              class="chip"
              :disabled="!imgReady"
              @click="addTransform('crop')"
            >
              + crop
            </button>
            <button
              class="chip"
              :disabled="!imgReady"
              @click="addTransform('stamp')"
            >
              + stamp
            </button>
            <button
              class="chip"
              :disabled="!imgReady"
              @click="addTransform('pad')"
            >
              + pad
            </button>
          </div>
        </div>

        <div v-if="!imgReady" class="hint">load an image to start</div>

        <ol v-else class="list" role="list">
          <li
            v-for="(t, idx) in chain"
            :key="t.id"
            class="item"
            :class="{ selected: selectedId === t.id, disabled: !t.enabled }"
            @click="selectedId = t.id"
          >
            <div class="itemMain">
              <div class="itemTop">
                <span class="badge">{{ idx + 1 }}</span>
                <span class="name">{{ labelOf(t) }}</span>
                <span class="meta">{{ briefOf(t) }}</span>
              </div>

              <div class="itemBottom">
                <button class="mini" @click.stop="toggleEnabled(t)">
                  {{ t.enabled ? "enabled" : "disabled" }}
                </button>
                <button
                  class="mini"
                  :disabled="idx === 0"
                  @click.stop="move(idx, -1)"
                >
                  up
                </button>
                <button
                  class="mini"
                  :disabled="idx === chain.length - 1"
                  @click.stop="move(idx, +1)"
                >
                  down
                </button>
                <button class="mini danger" @click.stop="remove(idx)">
                  remove
                </button>
              </div>
            </div>
          </li>
        </ol>

        <div v-if="imgReady && chain.length === 0" class="hint">
          add a transform
        </div>
      </section>

      <section class="config">
        <div class="panelHeader">
          <div class="panelTitle">configuration</div>
          <div v-if="active" class="panelSub">
            {{ labelOf(active) }} • #{{ activeIndex + 1 }}
          </div>
        </div>

        <div v-if="!imgReady" class="hint">no image loaded</div>
        <div v-else-if="!active" class="hint">select a transform</div>

        <div v-else class="form">
          <template v-if="active.type === 'crop'">
            <div class="row">
              <label>ratio</label>
              <input v-model="active.ratio" class="input" placeholder="4:5" />
            </div>
            <div class="row">
              <label>anchor</label>
              <select v-model="active.anchor" class="input">
                <option v-for="p in positions" :key="p" :value="p">
                  {{ p }}
                </option>
              </select>
            </div>
            <div class="note">
              crop keeps max area at the chosen ratio, anchored to the chosen
              corner/center.
            </div>
          </template>

          <template v-else-if="active.type === 'stamp'">
            <div class="row">
              <label>location</label>
              <input
                v-model="active.location"
                class="input"
                placeholder="51.5074,-0.1278"
              />
            </div>
            <div class="row">
              <label>date</label>
              <input
                v-model="active.timecode"
                class="input"
                placeholder="yyyy mm dd"
              />
            </div>
            <div class="row">
              <label>corner</label>
              <select v-model="active.corner" class="input">
                <option v-for="c in corners" :key="c" :value="c">
                  {{ c }}
                </option>
              </select>
            </div>
            <div class="row">
              <label>opacity</label>
              <input
                v-model.number="active.opacity"
                class="range"
                type="range"
                min="0"
                max="100"
                step="1"
              />
              <div class="val">{{ active.opacity.toFixed(0) }}</div>
            </div>
            <div class="row">
              <label>size</label>
              <input
                v-model.number="active.size"
                class="range"
                type="range"
                min="10"
                max="80"
                step="1"
              />
              <div class="val">{{ active.size.toFixed(0) }}</div>
            </div>
            <div class="row">
              <label>inset y</label>
              <input
                v-model.number="active.insetY"
                class="range"
                type="range"
                min="0"
                max="128"
                step="1"
              />
              <div class="val">{{ active.insetY.toFixed(0) }}</div>
            </div>
            <div class="row">
              <label>inset x</label>
              <input
                v-model.number="active.insetX"
                class="range"
                type="range"
                min="0"
                max="128"
                step="1"
              />
              <div class="val">{{ active.insetX.toFixed(0) }}</div>
            </div>

            <div class="row">
              <label>color</label>
              <input v-model="active.color" class="input" type="color" />
              <div class="swatch" :style="{ background: active.color }" />
            </div>
            <div class="row">
              <label>glow</label>
              <input
                v-model.number="active.glow"
                class="range"
                type="range"
                min="0"
                max="100"
                step="1"
              />
              <div class="val">{{ active.glow.toFixed(0) }}</div>
            </div>
            <div class="row">
              <label>glow blur</label>
              <input
                v-model.number="active.glowBlur"
                class="range"
                type="range"
                min="0"
                max="100"
                step="1"
              />
              <div class="val">{{ active.glowBlur.toFixed(0) }}</div>
            </div>
            <div class="row">
              <label>jitter</label>
              <input
                v-model.number="active.jitter"
                class="range"
                type="range"
                min="0"
                max="100"
                step="1"
              />
              <div class="val">{{ active.jitter.toFixed(0) }}</div>
            </div>
            <div class="row">
              <label>scanline</label>
              <input
                v-model.number="active.scanline"
                class="range"
                type="range"
                min="0"
                max="100"
                step="1"
              />
              <div class="val">{{ active.scanline.toFixed(0) }}</div>
            </div>
            <div class="row">
              <label>grain</label>
              <input
                v-model.number="active.grain"
                class="range"
                type="range"
                min="0"
                max="100"
                step="1"
              />
              <div class="val">{{ active.grain.toFixed(0) }}</div>
            </div>
            <div class="row">
              <label>dropout</label>
              <input
                v-model.number="active.dropout"
                class="range"
                type="range"
                min="0"
                max="100"
                step="1"
              />
              <div class="val">{{ active.dropout.toFixed(0) }}</div>
            </div>

            <div class="note">
              stamp is mono, filmy and strong with only slight glow. the extra
              sliders let you tune burn-in (glow/blur), instability
              (jitter/scanline), and emulsion (grain/dropout).
            </div>
            <div v-if="lastExifSummary" class="note">
              exif: {{ lastExifSummary }}
            </div>
          </template>

          <template v-else-if="active.type === 'pad'">
            <div class="row">
              <label>ratio</label>
              <input v-model="active.ratio" class="input" placeholder="1:1" />
            </div>
            <div class="row">
              <label>background</label>
              <input v-model="active.bg" class="input" type="color" />
              <div class="swatch" :style="{ background: active.bg }" />
            </div>
            <div class="row">
              <label>fit</label>
              <select v-model="active.fit" class="input">
                <option value="contain">contain</option>
                <option value="cover">cover</option>
              </select>
            </div>
            <div class="row">
              <label>anchor</label>
              <select v-model="active.anchor" class="input">
                <option v-for="p in positions" :key="p" :value="p">
                  {{ p }}
                </option>
              </select>
            </div>
            <div class="note">
              pad changes final aspect ratio; canvas resizes to match output
              ratio (no warping).
            </div>
          </template>

          <div class="row">
            <label>enabled</label>
            <div class="tog">
              <input v-model="active.enabled" type="checkbox" />
              <span>{{ active.enabled ? "on" : "off" }}</span>
            </div>
          </div>
        </div>
      </section>

      <section class="preview">
        <div class="panelHeader">
          <div class="panelTitle">final preview</div>
          <div v-if="imgReady" class="panelSub">
            {{ outW }}×{{ outH }} px • preview {{ previewW }}×{{ previewH }}
          </div>
        </div>

        <div v-if="!imgReady" class="hint">load an image</div>

        <div v-else class="canvasWrap" :style="canvasWrapStyle">
          <canvas ref="canvasRef" class="canvas" />
        </div>

        <div v-if="imgReady" class="exportRow">
          <button class="btn" @click="downloadPng">download png</button>
          <button class="btn" @click="copyDataUrl">copy data url</button>
          <div v-if="copied" class="tiny">copied</div>
          <div v-else class="tiny">
            export is full-res; preview is downscaled for speed
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import {
  computed,
  nextTick,
  onBeforeUnmount,
  onMounted,
  reactive,
  ref,
  shallowRef,
  watch,
} from "vue";

type Corner = "top-left" | "top-right" | "bottom-left" | "bottom-right";
type Anchor =
  | "center"
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right";

type CropT = {
  id: string;
  type: "crop";
  enabled: boolean;
  ratio: string;
  anchor: Anchor;
};

type StampT = {
  id: string;
  type: "stamp";
  enabled: boolean;
  location: string;
  timecode: string;
  corner: Corner;
  opacity: number;
  size: number;
  insetY: number;
  insetX: number;

  color: string;
  glow: number;
  glowBlur: number;
  jitter: number;
  scanline: number;
  grain: number;
  dropout: number;
};

type PadT = {
  id: string;
  type: "pad";
  enabled: boolean;
  ratio: string;
  bg: string;
  fit: "contain" | "cover";
  anchor: Anchor;
};

type Transform = CropT | StampT | PadT;

type ImgState = {
  bitmap?: ImageBitmap;
  srcW: number;
  srcH: number;
};

type ExifPick = {
  date?: Date;
  latitude?: number;
  longitude?: number;
};

const canvasRef = ref<HTMLCanvasElement | null>(null);
const img = reactive<ImgState>({ srcW: 0, srcH: 0 });
const imgReady = computed(() => !!img.bitmap);

const chain = reactive<Transform[]>([]);
const selectedId = ref<string | null>(null);

const positions: Anchor[] = [
  "center",
  "top-left",
  "top-right",
  "bottom-left",
  "bottom-right",
];
const corners: Corner[] = [
  "top-left",
  "top-right",
  "bottom-left",
  "bottom-right",
];

const copied = ref(false);
let copiedTimer: number | null = null;

const outW = ref(0);
const outH = ref(0);
const previewW = ref(0);
const previewH = ref(0);

const lastExifSummary = ref("");

const PREVIEW_MAX = 1100; // max dimension for preview render

function uid() {
  return Math.random().toString(16).slice(2) + "-" + Date.now().toString(16);
}

function fmtYmd(d: Date) {
  const yy = String(d.getFullYear() % 100).padStart(2, "0");
  const m = d.getMonth() + 1;
  const day = d.getDate();
  const hh = String(d.getHours()).padStart(2, "0");
  const mm = String(d.getMinutes()).padStart(2, "0");
  return `'${yy} ${m} ${day} ${hh}:${mm}`;
}

function fmtCoords(lat: number, lon: number) {
  const a = Math.round(lat * 1e5) / 1e5;
  const b = Math.round(lon * 1e5) / 1e5;
  return `${a.toFixed(5)},${b.toFixed(5)}`;
}

async function readExifFromFile(file: File): Promise<ExifPick | null> {
  try {
    const exifr = await import(
      /* @vite-ignore */ "https://cdn.skypack.dev/exifr"
    );
    const parsed = await exifr.parse(file, {
      gps: true,
      tiff: true,
      ifd0: true,
      exif: true,
    });

    const pick: ExifPick = {};

    const cand =
      parsed?.DateTimeOriginal ??
      parsed?.CreateDate ??
      parsed?.DateTimeDigitized ??
      parsed?.ModifyDate ??
      parsed?.DateTime;

    if (cand instanceof Date) pick.date = cand;
    else if (typeof cand === "string") {
      const s = cand.replace(/:/g, (_m: string, off: number) =>
        off < 10 ? "-" : ":",
      );
      const d = new Date(s);
      if (!Number.isNaN(d.getTime())) pick.date = d;
    }

    const lat = parsed?.latitude ?? parsed?.GPSLatitude;
    const lon = parsed?.longitude ?? parsed?.GPSLongitude;
    if (
      typeof lat === "number" &&
      typeof lon === "number" &&
      Number.isFinite(lat) &&
      Number.isFinite(lon)
    ) {
      pick.latitude = lat;
      pick.longitude = lon;
    }

    if (!pick.date && pick.latitude == null) return null;
    return pick;
  } catch {
    return null;
  }
}

function setDefaultChain() {
  chain.splice(0, chain.length);
  const cropId = uid();
  const stampId = uid();

  chain.push({
    id: cropId,
    type: "crop",
    enabled: true,
    ratio: "9:16",
    anchor: "center",
  });

  chain.push({
    id: stampId,
    type: "stamp",
    enabled: true,
    location: "london",
    timecode: fmtYmd(new Date()),
    corner: "bottom-right",
    opacity: 90,
    size: 32,
    insetY: 120,
    insetX: 32,

    color: "#ff7828",
    glow: 50,
    glowBlur: 50,
    jitter: 50,
    scanline: 50,
    grain: 50,
    dropout: 50,
  });

  selectedId.value = cropId;
}

function parseRatio(r: string): number | null {
  const m = r.trim().match(/^\s*(\d+(?:\.\d+)?)\s*[:/]\s*(\d+(?:\.\d+)?)\s*$/);
  if (!m) return null;
  const a = Number(m[1]);
  const b = Number(m[2]);
  if (!Number.isFinite(a) || !Number.isFinite(b) || a <= 0 || b <= 0)
    return null;
  return a / b;
}

function labelOf(t: Transform) {
  if (t.type === "crop") return "crop";
  if (t.type === "stamp") return "stamp";
  return "pad";
}

function briefOf(t: Transform) {
  if (t.type === "crop") return `${t.ratio} • ${t.anchor}`;
  if (t.type === "stamp")
    return `${t.corner} • ${t.location || "—"} / ${t.timecode || "—"}`;
  return `${t.ratio} • ${t.bg.toUpperCase()} • ${t.fit}`;
}

function addTransform(type: Transform["type"]) {
  const id = uid();
  let t: Transform;
  if (type === "crop") {
    t = { id, type, enabled: true, ratio: "9:16", anchor: "center" };
  } else if (type === "stamp") {
    t = {
      id,
      type,
      enabled: true,
      location: "london",
      timecode: fmtYmd(new Date()),
      corner: "bottom-right",
      opacity: 90,
      size: 32,
      insetY: 120,
      insetX: 32,

      color: "#ff7828",
      glow: 50,
      glowBlur: 50,
      jitter: 50,
      scanline: 50,
      grain: 50,
      dropout: 50,
    };
  } else {
    t = {
      id,
      type,
      enabled: true,
      ratio: "1:1",
      bg: "#ffffff",
      fit: "contain",
      anchor: "center",
    };
  }
  chain.push(t);
  selectedId.value = id;
}

function remove(idx: number) {
  const removed = chain.splice(idx, 1)[0];
  if (removed && removed.id === selectedId.value) {
    selectedId.value = chain[idx]?.id ?? chain[idx - 1]?.id ?? null;
  }
}

function move(idx: number, delta: -1 | 1) {
  const j = idx + delta;
  if (j < 0 || j >= chain.length) return;
  const tmp = chain[idx];
  chain[idx] = chain[j];
  chain[j] = tmp;
}

function toggleEnabled(t: Transform) {
  t.enabled = !t.enabled;
}

const activeIndex = computed(() =>
  selectedId.value ? chain.findIndex((t) => t.id === selectedId.value) : -1,
);
const active = computed<Transform | null>(() =>
  activeIndex.value >= 0 ? chain[activeIndex.value] : null,
);

const canvasWrapStyle = computed(() => {
  if (!outW.value || !outH.value) return {};
  return { aspectRatio: `${outW.value} / ${outH.value}` } as Record<
    string,
    string
  >;
});

const scratchA = shallowRef<HTMLCanvasElement | null>(null);
const scratchB = shallowRef<HTMLCanvasElement | null>(null);

function ensureScratch() {
  if (!scratchA.value) scratchA.value = document.createElement("canvas");
  if (!scratchB.value) scratchB.value = document.createElement("canvas");
}

function setCanvasSize(c: HTMLCanvasElement, w: number, h: number) {
  if (c.width !== w) c.width = w;
  if (c.height !== h) c.height = h;
}

function drawImageFit(
  ctx: CanvasRenderingContext2D,
  src: CanvasImageSource,
  srcW: number,
  srcH: number,
  dstW: number,
  dstH: number,
  fit: "contain" | "cover",
  anchor: Anchor,
) {
  const srcAR = srcW / srcH;
  const dstAR = dstW / dstH;

  let drawW = dstW;
  let drawH = dstH;

  if (fit === "contain") {
    if (srcAR > dstAR) {
      drawW = dstW;
      drawH = Math.round(dstW / srcAR);
    } else {
      drawH = dstH;
      drawW = Math.round(dstH * srcAR);
    }
  } else {
    if (srcAR > dstAR) {
      drawH = dstH;
      drawW = Math.round(dstH * srcAR);
    } else {
      drawW = dstW;
      drawH = Math.round(dstW / srcAR);
    }
  }

  const ax = anchorX(anchor);
  const ay = anchorY(anchor);
  const x = Math.round((dstW - drawW) * ax);
  const y = Math.round((dstH - drawH) * ay);

  ctx.drawImage(src, x, y, drawW, drawH);
}

function anchorX(a: Anchor): number {
  if (a.endsWith("left")) return 0;
  if (a.endsWith("right")) return 1;
  return 0.5;
}

function anchorY(a: Anchor): number {
  if (a.startsWith("top")) return 0;
  if (a.startsWith("bottom")) return 1;
  return 0.5;
}

function computeCropRect(
  w: number,
  h: number,
  targetAR: number,
  anchor: Anchor,
) {
  const srcAR = w / h;
  let cw = w;
  let ch = h;

  if (srcAR > targetAR) {
    cw = Math.round(h * targetAR);
    ch = h;
  } else {
    cw = w;
    ch = Math.round(w / targetAR);
  }

  const x = Math.round((w - cw) * anchorX(anchor));
  const y = Math.round((h - ch) * anchorY(anchor));

  return { x, y, w: cw, h: ch };
}

function applyCrop(src: HTMLCanvasElement, t: CropT, dst: HTMLCanvasElement) {
  const r = parseRatio(t.ratio);
  if (!r) {
    setCanvasSize(dst, src.width, src.height);
    dst.getContext("2d")!.drawImage(src, 0, 0);
    return;
  }
  const rect = computeCropRect(src.width, src.height, r, t.anchor);
  setCanvasSize(dst, rect.w, rect.h);
  const ctx = dst.getContext("2d")!;
  ctx.clearRect(0, 0, rect.w, rect.h);
  ctx.drawImage(src, rect.x, rect.y, rect.w, rect.h, 0, 0, rect.w, rect.h);
}

function applyPad(src: HTMLCanvasElement, t: PadT, dst: HTMLCanvasElement) {
  const r = parseRatio(t.ratio);
  if (!r) {
    setCanvasSize(dst, src.width, src.height);
    dst.getContext("2d")!.drawImage(src, 0, 0);
    return;
  }

  const base = Math.max(src.width, src.height);
  let ow = base;
  let oh = Math.round(base / r);
  if (oh < 1) oh = 1;

  if (t.fit === "contain") {
    if (ow < src.width) {
      ow = src.width;
      oh = Math.round(ow / r);
    }
    if (oh < src.height) {
      oh = src.height;
      ow = Math.round(oh * r);
    }
  }

  setCanvasSize(dst, ow, oh);
  const ctx = dst.getContext("2d")!;
  ctx.save();
  ctx.clearRect(0, 0, ow, oh);
  ctx.fillStyle = t.bg;
  ctx.fillRect(0, 0, ow, oh);
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = "high";
  drawImageFit(ctx, src, src.width, src.height, ow, oh, t.fit, t.anchor);
  ctx.restore();
}

function mulberry32(seed: number) {
  let t = seed >>> 0;
  return () => {
    t += 0x6d2b79f5;
    let r = Math.imul(t ^ (t >>> 15), 1 | t);
    r ^= r + Math.imul(r ^ (r >>> 7), 61 | r);
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
}

function hashStr(s: string) {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function clamp01(x: number) {
  return Math.max(0, Math.min(1, x));
}

function clampInt(x: number, lo: number, hi: number) {
  return Math.max(lo, Math.min(hi, x | 0));
}

function hexToRgb(hex: string) {
  const s = hex.trim().replace("#", "");
  const n =
    s.length === 3
      ? s
          .split("")
          .map((c) => c + c)
          .join("")
      : s;
  if (n.length !== 6) return { r: 255, g: 120, b: 40 };
  const v = parseInt(n, 16);
  if (!Number.isFinite(v)) return { r: 255, g: 120, b: 40 };
  return { r: (v >> 16) & 255, g: (v >> 8) & 255, b: v & 255 };
}

function rgbaFromHex(hex: string, a: number) {
  const { r, g, b } = hexToRgb(hex);
  return `rgba(${r}, ${g}, ${b}, ${clamp01(a)})`;
}

function applyStamp(src: HTMLCanvasElement, t: StampT, dst: HTMLCanvasElement) {
  setCanvasSize(dst, src.width, src.height);
  const ctx = dst.getContext("2d")!;
  ctx.clearRect(0, 0, dst.width, dst.height);
  ctx.drawImage(src, 0, 0);

  const W = dst.width;
  const H = dst.height;
  const m = Math.min(W, H);

  const insetYPx = Math.max(4, Math.round((m * t.insetY) / 1000));
  const insetXPx = Math.max(4, Math.round((m * t.insetX) / 1000));
  const fontPx = Math.max(10, Math.round((m * t.size) / 1000));
  const op = clamp01((t.opacity ?? 0) / 100);

  const lines = [t.location || "", t.timecode || ""];
  const text = lines.join("\n");

  const seed = hashStr(`${text}|${W}x${H}|${t.corner}`);
  const rnd = mulberry32(seed);

  ctx.save();
  ctx.font = `${fontPx}px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`;
  ctx.textBaseline = "alphabetic";

  const alignRight = t.corner.endsWith("right");
  const alignBottom = t.corner.startsWith("bottom");
  ctx.textAlign = alignRight ? "right" : "left";

  const lineGap = Math.round(fontPx * 0.22);
  const lineH = fontPx + lineGap;

  const x = alignRight ? W - insetXPx : insetXPx;
  const ySecond = alignBottom ? H - insetYPx : insetYPx + fontPx + lineH;
  const yFirst = alignBottom ? ySecond - lineH : insetYPx + fontPx;

  const layer = document.createElement("canvas");
  layer.width = W;
  layer.height = H;
  const lctx = layer.getContext("2d")!;

  lctx.clearRect(0, 0, W, H);
  lctx.font = ctx.font;
  lctx.textAlign = ctx.textAlign;
  lctx.textBaseline = ctx.textBaseline;

  const baseColor = rgbaFromHex(t.color || "#ff7828", 1);
  const glowColor = rgbaFromHex(t.color || "#ff7828", 1);

  // fine core: strong + crisp
  lctx.save();
  lctx.shadowBlur = 0;
  lctx.fillStyle = baseColor;
  lctx.globalAlpha = op * 0.95;
  for (let i = 0; i < 2; i++) {
    const y0 = i === 0 ? yFirst : ySecond;
    const dx = Math.round((rnd() - 0.5) * 0.55);
    const dy = Math.round((rnd() - 0.5) * 0.55);
    lctx.fillText(lines[i], x + dx, y0 + dy);
  }
  lctx.restore();

  // slight glow: small blur, weaker alpha, extra-fine jitter (analogue burn-in)
  const glowK = clamp01(((t.glow ?? 0) / 100) * 2);
  const blurK = clamp01(((t.glowBlur ?? 0) / 100) * 2);
  const jitK = clamp01(((t.jitter ?? 0) / 100) * 2);

  lctx.save();
  lctx.fillStyle = baseColor;
  lctx.shadowColor = glowColor;
  lctx.shadowBlur = Math.max(0, Math.round(fontPx * (0.02 + 0.14 * blurK)));
  lctx.globalAlpha = op * (0.06 + 0.3 * glowK);
  for (let i = 0; i < 2; i++) {
    const y0 = i === 0 ? yFirst : ySecond;
    const jitterX = (rnd() - 0.5) * fontPx * (0.008 + 0.08 * jitK);
    const jitterY = (rnd() - 0.5) * fontPx * (0.007 + 0.07 * jitK);
    for (let k = 0; k < 2; k++) {
      const dx = (rnd() - 0.5) * (0.25 + 1.2 * jitK);
      const dy = (rnd() - 0.5) * (0.25 + 1.2 * jitK);
      lctx.globalAlpha =
        op * (0.04 + (0.1 + 0.22 * glowK) * (0.6 + 0.4 * rnd()));
      lctx.fillText(lines[i], x + jitterX + dx, y0 + jitterY + dy);
    }
  }
  lctx.restore();

  // scanline unevenness: alpha modulation mask (tunable)
  const scanK = clamp01(((t.scanline ?? 0) / 100) * 2);
  const mask = document.createElement("canvas");
  mask.width = W;
  mask.height = H;
  const mctx = mask.getContext("2d")!;
  const imgd = mctx.createImageData(W, H);
  const d = imgd.data;
  for (let y = 0; y < H; y++) {
    const amp = 0.01 + 0.07 * scanK;
    const band =
      1 -
      amp +
      amp *
        (0.5 +
          0.5 * Math.sin((y / H) * Math.PI * (10 + 10 * scanK) + rnd() * 0.7));
    for (let x0 = 0; x0 < W; x0++) {
      const i = (y * W + x0) * 4;
      const n = (rnd() * (0.1 + 0.22 * scanK) + (0.9 - 0.1 * scanK)) * band;
      const a = Math.round(248 * n);
      d[i] = 255;
      d[i + 1] = 255;
      d[i + 2] = 255;
      d[i + 3] = a;
    }
  }
  mctx.putImageData(imgd, 0, 0);

  lctx.save();
  lctx.globalCompositeOperation = "destination-in";
  lctx.globalAlpha = 1;
  lctx.drawImage(mask, 0, 0);
  lctx.restore();

  // extra grain/speckle applied to the text itself (no background box)
  // build grain, then mask it by the text alpha
  const grain = document.createElement("canvas");
  grain.width = W;
  grain.height = H;
  const gctx = grain.getContext("2d")!;
  const gimg = gctx.createImageData(W, H);
  const gd = gimg.data;
  for (let i = 0; i < gd.length; i += 4) {
    const n = (rnd() - 0.5) * 90;
    const r = 128 + n + (rnd() - 0.5) * 10;
    const g = 128 + n + (rnd() - 0.5) * 6;
    const b = 128 + n + (rnd() - 0.5) * 10;
    const a = 30 + rnd() * 70;
    gd[i] = clampInt(r, 0, 255);
    gd[i + 1] = clampInt(g, 0, 255);
    gd[i + 2] = clampInt(b, 0, 255);
    gd[i + 3] = clampInt(a, 0, 255);
  }
  gctx.putImageData(gimg, 0, 0);

  // mask grain by existing text alpha
  gctx.globalCompositeOperation = "destination-in";
  gctx.drawImage(layer, 0, 0);

  lctx.save();
  lctx.globalCompositeOperation = "overlay";
  lctx.globalAlpha = clamp01(((t.grain ?? 0) / 100) * 2) * 0.45;
  lctx.drawImage(grain, 0, 0);

  // tiny random dropout to mimic emulsion instability
  lctx.globalCompositeOperation = "destination-out";
  lctx.globalAlpha = clamp01(((t.dropout ?? 0) / 100) * 2) * 0.1;
  lctx.drawImage(grain, 0, 0);
  lctx.restore();

  ctx.save();
  ctx.globalCompositeOperation = "screen";
  ctx.globalAlpha = 1;
  ctx.drawImage(layer, 0, 0);
  ctx.restore();

  ctx.restore();
}

function computePreviewScale(srcW: number, srcH: number) {
  const m = Math.max(srcW, srcH);
  if (m <= PREVIEW_MAX) return 1;
  return PREVIEW_MAX / m;
}

function renderTo(scale: number, outCanvas?: HTMLCanvasElement) {
  if (!img.bitmap) return null;
  ensureScratch();

  const a = scratchA.value!;
  const b = scratchB.value!;

  const sw = Math.max(1, Math.round(img.srcW * scale));
  const sh = Math.max(1, Math.round(img.srcH * scale));

  setCanvasSize(a, sw, sh);
  const actx = a.getContext("2d")!;
  actx.clearRect(0, 0, a.width, a.height);
  actx.imageSmoothingEnabled = true;
  actx.imageSmoothingQuality = "high";
  actx.drawImage(img.bitmap, 0, 0, sw, sh);

  let src = a;
  let dst = b;

  for (const t of chain) {
    if (!t.enabled) continue;
    if (t.type === "crop") applyCrop(src, t, dst);
    else if (t.type === "pad") applyPad(src, t, dst);
    else applyStamp(src, t, dst);

    const tmp = src;
    src = dst;
    dst = tmp;
  }

  if (outCanvas) {
    setCanvasSize(outCanvas, src.width, src.height);
    const octx = outCanvas.getContext("2d")!;
    octx.clearRect(0, 0, outCanvas.width, outCanvas.height);
    octx.imageSmoothingEnabled = true;
    octx.imageSmoothingQuality = "high";
    octx.drawImage(src, 0, 0);
  }

  return src;
}

function renderPreview() {
  if (!img.bitmap || !canvasRef.value) return;

  const scale = computePreviewScale(img.srcW, img.srcH);
  const src = renderTo(scale, canvasRef.value);
  if (!src) return;

  const dims = simulateFinalDims(img.srcW, img.srcH);
  outW.value = dims.w;
  outH.value = dims.h;

  previewW.value = canvasRef.value.width;
  previewH.value = canvasRef.value.height;
}

function simulateFinalDims(w0: number, h0: number) {
  let w = w0;
  let h = h0;
  for (const t of chain) {
    if (!t.enabled) continue;
    if (t.type === "crop") {
      const r = parseRatio(t.ratio);
      if (!r) continue;
      const srcAR = w / h;
      if (srcAR > r) w = Math.round(h * r);
      else h = Math.round(w / r);
    } else if (t.type === "pad") {
      const r = parseRatio(t.ratio);
      if (!r) continue;
      const base = Math.max(w, h);
      let ow = base;
      let oh = Math.round(base / r);
      if (oh < 1) oh = 1;
      if (t.fit === "contain") {
        if (ow < w) {
          ow = w;
          oh = Math.round(ow / r);
        }
        if (oh < h) {
          oh = h;
          ow = Math.round(oh * r);
        }
      }
      w = ow;
      h = oh;
    }
  }
  return { w, h };
}

async function onPick(e: Event) {
  const input = e.target as HTMLInputElement;
  const file = input.files?.[0];
  if (!file) return;

  const url = URL.createObjectURL(file);
  try {
    const decoded = await loadBitmap(url);
    if (img.bitmap) img.bitmap.close?.();
    img.bitmap = decoded;
    img.srcW = decoded.width;
    img.srcH = decoded.height;

    if (chain.length === 0) setDefaultChain();
    if (!selectedId.value && chain.length) selectedId.value = chain[0].id;

    lastExifSummary.value = "";
    const exif = await readExifFromFile(file);
    if (exif) {
      const stamp = chain.find((t): t is StampT => t.type === "stamp");
      if (stamp) {
        if (exif.date) stamp.timecode = fmtYmd(exif.date);
        if (exif.latitude != null && exif.longitude != null)
          stamp.location = fmtCoords(exif.latitude, exif.longitude);
      }
      const parts: string[] = [];
      if (exif.date) parts.push(`date ${fmtYmd(exif.date)}`);
      if (exif.latitude != null && exif.longitude != null)
        parts.push(`gps ${fmtCoords(exif.latitude, exif.longitude)}`);
      lastExifSummary.value = parts.join(" • ");
    } else {
      lastExifSummary.value = "no gps/date found";
    }

    await nextTick();
    renderPreview();
  } finally {
    URL.revokeObjectURL(url);
    input.value = "";
  }
}

function resetAll() {
  setDefaultChain();
  outW.value = 0;
  outH.value = 0;
  previewW.value = 0;
  previewH.value = 0;
  lastExifSummary.value = "";
  if (canvasRef.value) {
    const ctx = canvasRef.value.getContext("2d")!;
    ctx.clearRect(0, 0, canvasRef.value.width, canvasRef.value.height);
  }
  if (img.bitmap) renderPreview();
}

async function loadBitmap(url: string): Promise<ImageBitmap> {
  try {
    const res = await fetch(url);
    const blob = await res.blob();
    return await createImageBitmap(blob);
  } catch {
    const el = await new Promise<HTMLImageElement>((resolve, reject) => {
      const im = new Image();
      im.onload = () => resolve(im);
      im.onerror = reject;
      im.src = url;
    });
    return await createImageBitmap(el);
  }
}

async function downloadPng() {
  if (!img.bitmap) return;
  const full = document.createElement("canvas");
  renderTo(1, full);
  full.toBlob((blob) => {
    if (!blob) return;
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "edited.png";
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(a.href), 2500);
  }, "image/png");
}

async function copyDataUrl() {
  if (!img.bitmap) return;
  const full = document.createElement("canvas");
  renderTo(1, full);
  const dataUrl = full.toDataURL("image/png");
  try {
    await navigator.clipboard.writeText(dataUrl);
    copied.value = true;
    if (copiedTimer) window.clearTimeout(copiedTimer);
    copiedTimer = window.setTimeout(() => (copied.value = false), 1000);
  } catch {
    // ignore
  }
}

watch(
  () => [
    img.bitmap,
    img.srcW,
    img.srcH,
    chain.map((t) => JSON.stringify(t)).join("|"),
  ],
  async () => {
    if (!img.bitmap) return;
    await nextTick();
    renderPreview();
  },
  { deep: false },
);

onMounted(() => {
  ensureScratch();
  if (chain.length === 0) setDefaultChain();
});

onBeforeUnmount(() => {
  if (img.bitmap) img.bitmap.close?.();
  if (copiedTimer) window.clearTimeout(copiedTimer);
});
</script>

<style scoped>
.wrap {
  min-height: 100vh;
  padding: 16px;
  color: #111;
  background: #fafafa;
}

.topbar {
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 14px;
}

.title .h1 {
  font-size: 18px;
  font-weight: 700;
  letter-spacing: -0.02em;
}
.title .sub {
  font-size: 12px;
  opacity: 0.7;
}

.actions {
  display: flex;
  gap: 10px;
  align-items: center;
}

.file {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
}

.file input {
  display: none;
}

.file span,
.btn {
  border: 1px solid rgba(0, 0, 0, 0.12);
  background: #fff;
  padding: 8px 10px;
  border-radius: 12px;
  font-size: 13px;
  cursor: pointer;
  user-select: none;
}

.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.grid {
  display: grid;
  grid-template-columns: 360px 360px minmax(320px, 1fr);
  gap: 14px;
  align-items: start;
}

@media (max-width: 1100px) {
  .grid {
    grid-template-columns: 1fr;
  }
}

.chain,
.config,
.preview {
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.06);
  overflow: hidden;
}

.panelHeader {
  display: flex;
  gap: 10px;
  align-items: baseline;
  justify-content: space-between;
  padding: 12px 12px 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
}

.panelTitle {
  font-weight: 700;
  font-size: 13px;
}

.panelSub {
  font-size: 12px;
  opacity: 0.65;
}

.panelActions {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.chip {
  border: 1px solid rgba(0, 0, 0, 0.12);
  background: #fff;
  padding: 6px 9px;
  border-radius: 999px;
  font-size: 12px;
  cursor: pointer;
}

.chip:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.hint {
  padding: 14px;
  font-size: 13px;
  opacity: 0.7;
}

.list {
  margin: 0;
  padding: 10px;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.item {
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 14px;
  padding: 10px;
  cursor: pointer;
  transition:
    transform 120ms ease,
    border-color 120ms ease;
}

.item:hover {
  transform: translateY(-1px);
}

.item.selected {
  border-color: rgba(0, 0, 0, 0.28);
}
.item.disabled {
  opacity: 0.65;
}

.itemTop {
  display: flex;
  gap: 8px;
  align-items: center;
  line-height: 1.2;
}

.badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.06);
  font-size: 12px;
  font-weight: 700;
}

.name {
  font-weight: 800;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.meta {
  font-size: 12px;
  opacity: 0.65;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.itemBottom {
  margin-top: 8px;
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.mini {
  border: 1px solid rgba(0, 0, 0, 0.12);
  background: #fff;
  padding: 6px 8px;
  border-radius: 10px;
  font-size: 12px;
  cursor: pointer;
}

.mini:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.mini.danger {
  border-color: rgba(190, 0, 0, 0.25);
}

.form {
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.row {
  display: grid;
  grid-template-columns: 110px 1fr auto;
  gap: 10px;
  align-items: center;
}

.row label {
  font-size: 12px;
  opacity: 0.75;
}

.input {
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.14);
  border-radius: 12px;
  padding: 8px 10px;
  font-size: 13px;
  background: #fff;
}

.range {
  width: 100%;
  margin: 0;
  padding: 0;
  border: 0;
  background: transparent;
}

.val {
  width: 54px;
  text-align: right;
  font-size: 12px;
  opacity: 0.7;
}

.swatch {
  width: 20px;
  height: 20px;
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.12);
}

.tog {
  display: flex;
  gap: 10px;
  align-items: center;
  font-size: 13px;
}

.note {
  font-size: 12px;
  opacity: 0.65;
  line-height: 1.35;
}

.preview {
  padding-bottom: 10px;
}

.canvasWrap {
  margin: 12px;
  border-radius: 18px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background: repeating-conic-gradient(from 0deg, #f0f0f0 0 25%, #fafafa 0 50%)
    0 0 / 20px 20px;
  overflow: hidden;
  display: block;
}

.canvas {
  width: 100%;
  height: 100%;
  display: block;
}

.exportRow {
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 0 12px 12px;
  flex-wrap: wrap;
}

.tiny {
  font-size: 12px;
  opacity: 0.6;
}
</style>
