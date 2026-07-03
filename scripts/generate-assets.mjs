// ─────────────────────────────────────────────────────────────────────────────
// StreamWave — brand asset generator (pure Node, zero dependencies)
// Source of truth: public/streamwavelogo.png (the official orange TV logo).
// Produces favicons, PWA icons, apple-touch-icon and the OG/Twitter share image
// by decoding + area-resampling the real logo — so branding is consistent.
// Run:  node scripts/generate-assets.mjs
// ─────────────────────────────────────────────────────────────────────────────
import { deflateSync, inflateSync } from "node:zlib";
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC = path.resolve(__dirname, "..", "public");
mkdirSync(PUBLIC, { recursive: true });
const SRC = path.join(PUBLIC, "streamwavelogo.png");

// ── PNG decoder (8-bit, non-interlaced; RGB/RGBA/gray) → RGBA ─────────────────
function paeth(a, b, c) {
  const p = a + b - c, pa = Math.abs(p - a), pb = Math.abs(p - b), pc = Math.abs(p - c);
  return pa <= pb && pa <= pc ? a : pb <= pc ? b : c;
}
function decodePNG(buf) {
  if (buf.readUInt32BE(0) !== 0x89504e47) throw new Error("not a PNG");
  let o = 8, W, H, ct, bd, idat = [];
  while (o < buf.length) {
    const len = buf.readUInt32BE(o);
    const type = buf.toString("ascii", o + 4, o + 8);
    const data = buf.slice(o + 8, o + 8 + len);
    if (type === "IHDR") {
      W = data.readUInt32BE(0); H = data.readUInt32BE(4); bd = data[8]; ct = data[9];
      if (bd !== 8) throw new Error("only 8-bit depth supported");
      if (data[12] !== 0) throw new Error("interlaced PNG not supported");
    } else if (type === "IDAT") idat.push(data);
    else if (type === "IEND") break;
    o += 12 + len;
  }
  const channels = ct === 6 ? 4 : ct === 2 ? 3 : ct === 0 ? 1 : 0;
  if (!channels) throw new Error("unsupported color type " + ct);
  const raw = inflateSync(Buffer.concat(idat));
  const stride = W * channels;
  const out = Buffer.alloc(W * H * 4);
  const prev = Buffer.alloc(stride);
  const cur = Buffer.alloc(stride);
  let p = 0;
  for (let y = 0; y < H; y++) {
    const ft = raw[p++];
    for (let x = 0; x < stride; x++) {
      const filt = raw[p++];
      const a = x >= channels ? cur[x - channels] : 0;
      const b = prev[x];
      const c = x >= channels ? prev[x - channels] : 0;
      let val;
      switch (ft) {
        case 0: val = filt; break;
        case 1: val = filt + a; break;
        case 2: val = filt + b; break;
        case 3: val = filt + ((a + b) >> 1); break;
        case 4: val = filt + paeth(a, b, c); break;
        default: throw new Error("bad filter " + ft);
      }
      cur[x] = val & 0xff;
    }
    for (let x = 0; x < W; x++) {
      const s = x * channels, d = (y * W + x) * 4;
      if (channels === 1) { out[d] = out[d + 1] = out[d + 2] = cur[s]; out[d + 3] = 255; }
      else if (channels === 3) { out[d] = cur[s]; out[d + 1] = cur[s + 1]; out[d + 2] = cur[s + 2]; out[d + 3] = 255; }
      else { out[d] = cur[s]; out[d + 1] = cur[s + 1]; out[d + 2] = cur[s + 2]; out[d + 3] = cur[s + 3]; }
    }
    cur.copy(prev);
  }
  return { W, H, data: out };
}

// ── area-average resample (high quality for downscaling) ──────────────────────
// Resamples a sub-rectangle [sx,sy,sw,sh] of src into a dw×dh RGBA buffer.
function resampleRect(src, SW, sx, sy, sw, sh, dw, dh) {
  const out = Buffer.alloc(dw * dh * 4);
  for (let dy = 0; dy < dh; dy++) {
    const fy0 = sy + (dy * sh) / dh, fy1 = sy + ((dy + 1) * sh) / dh;
    for (let dx = 0; dx < dw; dx++) {
      const fx0 = sx + (dx * sw) / dw, fx1 = sx + ((dx + 1) * sw) / dw;
      let r = 0, g = 0, b = 0, a = 0, wsum = 0;
      const iy0 = Math.floor(fy0), iy1 = Math.ceil(fy1);
      const ix0 = Math.floor(fx0), ix1 = Math.ceil(fx1);
      for (let yy = iy0; yy < iy1; yy++) {
        const wy = Math.min(fy1, yy + 1) - Math.max(fy0, yy);
        if (wy <= 0) continue;
        for (let xx = ix0; xx < ix1; xx++) {
          const wx = Math.min(fx1, xx + 1) - Math.max(fx0, xx);
          if (wx <= 0) continue;
          const w = wx * wy, i = (yy * SW + xx) * 4;
          r += src[i] * w; g += src[i + 1] * w; b += src[i + 2] * w; a += src[i + 3] * w; wsum += w;
        }
      }
      const d = (dy * dw + dx) * 4;
      out[d] = Math.round(r / wsum); out[d + 1] = Math.round(g / wsum);
      out[d + 2] = Math.round(b / wsum); out[d + 3] = Math.round(a / wsum);
    }
  }
  return out;
}

// Compose a resampled rect onto a size×size black canvas at the given scale.
function iconFromRect(src, SW, rect, size, scale) {
  const canvas = Buffer.alloc(size * size * 4);
  for (let i = 0; i < size * size; i++) canvas[i * 4 + 3] = 255; // opaque black
  const inner = Math.round(size * scale);
  const off = Math.floor((size - inner) / 2);
  const rs = resampleRect(src, SW, rect.x, rect.y, rect.w, rect.h, inner, inner);
  for (let y = 0; y < inner; y++)
    for (let x = 0; x < inner; x++) {
      const s = (y * inner + x) * 4, d = ((y + off) * size + (x + off)) * 4;
      canvas[d] = rs[s]; canvas[d + 1] = rs[s + 1]; canvas[d + 2] = rs[s + 2]; canvas[d + 3] = 255;
    }
  return canvas;
}

// ── PNG encoder (RGBA 8-bit) ──────────────────────────────────────────────────
function crc32(buf) {
  let c = ~0;
  for (let i = 0; i < buf.length; i++) { c ^= buf[i]; for (let k = 0; k < 8; k++) c = (c >>> 1) ^ (0xedb88320 & -(c & 1)); }
  return (~c) >>> 0;
}
function chunk(type, data) {
  const t = Buffer.from(type, "ascii"), len = Buffer.alloc(4), crc = Buffer.alloc(4);
  len.writeUInt32BE(data.length, 0);
  crc.writeUInt32BE(crc32(Buffer.concat([t, data])), 0);
  return Buffer.concat([len, t, data, crc]);
}
function encodePNG(width, height, rgba) {
  const sig = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0); ihdr.writeUInt32BE(height, 4); ihdr[8] = 8; ihdr[9] = 6;
  const stride = width * 4, raw = Buffer.alloc((stride + 1) * height);
  for (let y = 0; y < height; y++) { raw[y * (stride + 1)] = 0; rgba.copy(raw, y * (stride + 1) + 1, y * stride, y * stride + stride); }
  return Buffer.concat([sig, chunk("IHDR", ihdr), chunk("IDAT", deflateSync(raw, { level: 9 })), chunk("IEND", Buffer.alloc(0))]);
}

// ─────────────────────────────────────────────────────────────────────────────
const { W, H, data } = decodePNG(readFileSync(SRC));
console.log("decoded logo", W + "x" + H);

// TV-mark crop (excludes the wordmark) — a square region around the TV + play icon.
const rect = {
  x: Math.round(W * 0.19),
  y: Math.round(H * 0.07),
  w: Math.round(W * 0.62),
  h: Math.round(W * 0.62),
};

const icons = [
  { name: "favicon-16x16.png", size: 16, scale: 0.98 },
  { name: "favicon-32x32.png", size: 32, scale: 0.98 },
  { name: "apple-touch-icon.png", size: 180, scale: 0.88 },
  { name: "icon-192.png", size: 192, scale: 0.80 }, // maskable → safe zone
  { name: "icon-512.png", size: 512, scale: 0.80 }, // maskable → safe zone
];
for (const ic of icons) {
  const canvas = iconFromRect(data, W, rect, ic.size, ic.scale);
  writeFileSync(path.join(PUBLIC, ic.name), encodePNG(ic.size, ic.size, canvas));
  console.log("wrote", ic.name);
}

// favicon.ico (wraps a 32×32 PNG)
{
  const size = 32;
  const png = encodePNG(size, size, iconFromRect(data, W, rect, size, 0.98));
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); header.writeUInt16LE(1, 2); header.writeUInt16LE(1, 4);
  const entry = Buffer.alloc(16);
  entry[0] = size; entry[1] = size;
  entry.writeUInt16LE(1, 4); entry.writeUInt16LE(32, 6);
  entry.writeUInt32LE(png.length, 8); entry.writeUInt32LE(22, 12);
  writeFileSync(path.join(PUBLIC, "favicon.ico"), Buffer.concat([header, entry, png]));
  console.log("wrote favicon.ico");
}

// OG / Twitter share image (1200×630) — full logo (wordmark included) centered on black.
{
  const OW = 1200, OH = 630;
  const canvas = Buffer.alloc(OW * OH * 4);
  for (let i = 0; i < OW * OH; i++) canvas[i * 4 + 3] = 255;
  const target = 580;                       // full square logo height on the banner
  const rs = resampleRect(data, W, 0, 0, W, H, target, target);
  const ox = Math.floor((OW - target) / 2), oy = Math.floor((OH - target) / 2);
  for (let y = 0; y < target; y++)
    for (let x = 0; x < target; x++) {
      const s = (y * target + x) * 4, d = ((y + oy) * OW + (x + ox)) * 4;
      canvas[d] = rs[s]; canvas[d + 1] = rs[s + 1]; canvas[d + 2] = rs[s + 2]; canvas[d + 3] = 255;
    }
  writeFileSync(path.join(PUBLIC, "og-image.png"), encodePNG(OW, OH, canvas));
  console.log("wrote og-image.png");
}

console.log("✓ all brand assets regenerated from streamwavelogo.png");
