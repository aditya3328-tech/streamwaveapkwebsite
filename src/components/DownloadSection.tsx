import React from "react";
import { motion } from "motion/react";
import {
  APK_URL,
  APK_FILENAME,
  APK_SIZE,
  VERSION,
  TELEGRAM_COMMUNITY_URL,
} from "../config";
import {
  Download,
  Clapperboard,
  Sparkles,
  Send,
  ShieldCheck,
  Smartphone,
  FileArchive,
  Tag,
  CalendarDays,
} from "lucide-react";

// New in v1.1.0 — highlights shown on the dedicated download section.
const WHATS_NEW: string[] = [
  "New Profile section",
  "Optional Login system",
  "Favorites & Wishlist improvements",
  "Watch History support",
  "Share App functionality",
  "Telegram Community integration",
  "Redesigned Details page",
  "Improved Explore filters",
  "Better loading experience",
  "Performance improvements and bug fixes",
];

// Key facts about the current build.
const APP_DETAILS: { icon: React.ElementType; label: string; value: string }[] = [
  { icon: Tag, label: "Version", value: `v${VERSION}` },
  { icon: FileArchive, label: "File", value: APK_FILENAME },
  { icon: Download, label: "Size", value: APK_SIZE },
  { icon: Smartphone, label: "Minimum Android", value: "Android 7.0+" },
  { icon: CalendarDays, label: "Updated", value: "July 2026" },
];

// Sideload walkthrough shown as a compact card.
const INSTALL_STEPS: string[] = [
  "Download the APK.",
  'Allow "Install Unknown Apps" if prompted.',
  "Open the downloaded file.",
  "Enjoy StreamWave.",
];

export const DownloadSection: React.FC = () => {
  return (
    <section
      className="bg-[#000000] py-24 border-t border-neutral-900 relative overflow-hidden"
      id="download"
    >
      {/* Subtle ambient glow, consistent with the hero treatment */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.04)_0%,transparent_60%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* ── Heading ─────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center flex flex-col items-center"
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1 mb-6 bg-neutral-900 border border-neutral-800 rounded-full text-xs font-mono text-neutral-400 uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Official Download
          </span>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight flex items-center justify-center gap-3">
            <Clapperboard className="w-8 h-8 sm:w-9 sm:h-9 text-neutral-500" aria-hidden="true" />
            StreamWave v{VERSION}
          </h2>
          <p className="mt-4 text-neutral-400 text-base sm:text-lg max-w-xl">
            Unlimited entertainment, one tap away.
          </p>

          {/* ── Primary Download Button ───────────────────────────── */}
          <a
            href={APK_URL}
            download
            aria-label={`Download StreamWave v${VERSION} Android APK`}
            id="download-page-cta"
            className="group mt-10 inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-black hover:bg-neutral-200 font-bold text-base sm:text-lg tracking-wide rounded-full transition-all duration-200 shadow-xl shadow-white/10 active:scale-98"
          >
            <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform duration-200" aria-hidden="true" />
            Download StreamWave v{VERSION}
          </a>
          <p className="mt-4 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs font-mono text-neutral-500">
            <span>{APK_SIZE}</span>
            <span aria-hidden="true">·</span>
            <span>Android 7.0+</span>
            <span aria-hidden="true">·</span>
            <span>No root required</span>
          </p>
        </motion.div>

        {/* ── What's New ──────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-16 p-8 bg-[#0a0a0a] border border-neutral-800 rounded-3xl"
        >
          <h3 className="font-display text-lg font-bold text-white mb-6 flex items-center gap-2 tracking-tight">
            <Sparkles className="w-5 h-5 text-neutral-400" aria-hidden="true" />
            What's New in v{VERSION}
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
            {WHATS_NEW.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-neutral-400 text-sm">
                <Sparkles className="w-3.5 h-3.5 text-neutral-600 mt-1 shrink-0" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* ── App Details ─────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-6 p-8 bg-[#0a0a0a] border border-neutral-800 rounded-3xl"
        >
          <h3 className="font-display text-lg font-bold text-white mb-6 tracking-tight">
            App Details
          </h3>
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {APP_DETAILS.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="flex items-start gap-3 p-4 bg-neutral-950 border border-neutral-800 rounded-2xl"
              >
                <div className="w-9 h-9 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center shrink-0">
                  <Icon className="w-4 h-4 text-neutral-400" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <dt className="text-[11px] font-mono uppercase tracking-widest text-neutral-500">{label}</dt>
                  <dd className="text-white text-sm font-medium mt-0.5 break-words">{value}</dd>
                </div>
              </div>
            ))}
          </dl>
        </motion.div>

        {/* ── Installation Guide ──────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 p-8 bg-[#0a0a0a] border border-neutral-800 rounded-3xl"
        >
          <h3 className="font-display text-lg font-bold text-white mb-6 tracking-tight">
            How to install
          </h3>
          <ol className="flex flex-col gap-4">
            {INSTALL_STEPS.map((step, idx) => (
              <li key={step} className="flex items-center gap-4">
                <span className="w-7 h-7 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-xs font-mono font-bold text-white shrink-0">
                  {idx + 1}
                </span>
                <span className="text-neutral-400 text-sm">{step}</span>
              </li>
            ))}
          </ol>
          <div className="mt-6 flex items-center gap-2.5 text-xs text-neutral-500">
            <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" aria-hidden="true" />
            <span>The APK is digitally signed and safe to install.</span>
          </div>
        </motion.div>

        {/* ── Telegram Community ──────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-6 p-8 bg-[#0a0a0a] border border-neutral-800 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-11 h-11 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center shrink-0">
              <Send className="w-5 h-5 text-neutral-300" aria-hidden="true" />
            </div>
            <div>
              <p className="text-white font-semibold text-sm tracking-tight">Join Telegram Community</p>
              <p className="text-neutral-500 text-xs mt-0.5">Get updates, request titles, and connect with other viewers.</p>
            </div>
          </div>
          <a
            href={TELEGRAM_COMMUNITY_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Join the StreamWave Telegram community"
            id="download-telegram-cta"
            className="w-full sm:w-auto px-8 py-3.5 bg-white text-black hover:bg-neutral-200 font-bold text-sm uppercase tracking-wider rounded-full text-center transition-colors duration-200 shrink-0"
          >
            Join Community
          </a>
        </motion.div>
      </div>
    </section>
  );
};
