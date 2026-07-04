import React from "react";
import { motion } from "motion/react";
import { APK_VERSIONS, ApkVersion } from "../config";
import {
  ArrowLeft,
  Rocket,
  Download,
  Tag,
  FileArchive,
  CalendarDays,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

// Release-notes list, reused by both the latest and previous cards.
const ReleaseNotes: React.FC<{ notes: string[] }> = ({ notes }) => (
  <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2.5">
    {notes.map((note) => (
      <li key={note} className="flex items-start gap-2.5 text-neutral-400 text-sm">
        <Sparkles className="w-3.5 h-3.5 text-neutral-600 mt-0.5 shrink-0" aria-hidden="true" />
        <span>{note}</span>
      </li>
    ))}
  </ul>
);

// Small labelled fact chip (Version / File / Released).
const Fact: React.FC<{ icon: React.ElementType; label: string; value: string }> = ({
  icon: Icon,
  label,
  value,
}) => (
  <div className="flex items-start gap-3 p-3.5 bg-neutral-950 border border-neutral-800 rounded-2xl">
    <div className="w-8 h-8 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center shrink-0">
      <Icon className="w-3.5 h-3.5 text-neutral-400" aria-hidden="true" />
    </div>
    <div className="min-w-0">
      <dt className="text-[10px] font-mono uppercase tracking-widest text-neutral-500">{label}</dt>
      <dd className="text-white text-sm font-medium mt-0.5 break-words">{value}</dd>
    </div>
  </div>
);

// ── Highlighted latest-release card (orange accent) ──────────────────────────
const LatestCard: React.FC<{ apk: ApkVersion }> = ({ apk }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.6 }}
    className="group relative overflow-hidden rounded-3xl border border-orange-500/40 bg-gradient-to-b from-orange-500/[0.08] to-transparent p-8 sm:p-10 transition-all duration-300 hover:border-orange-500/70 hover:shadow-2xl hover:shadow-orange-500/10"
  >
    {/* Ambient orange glow */}
    <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-orange-500/10 blur-3xl pointer-events-none" />

    <div className="relative z-10">
      <div className="flex flex-wrap items-center gap-3">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-orange-500/15 border border-orange-500/40 rounded-full text-xs font-mono text-orange-300 uppercase tracking-widest">
          <Rocket className="w-3.5 h-3.5" aria-hidden="true" />
          Latest Release
        </span>
        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-orange-500 text-black rounded-full text-xs font-bold uppercase tracking-widest">
          {apk.status}
        </span>
      </div>

      <h2 className="mt-6 font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
        StreamWave <span className="text-orange-400">v{apk.version}</span>
      </h2>

      <dl className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
        <Fact icon={Tag} label="Version" value={`v${apk.version}`} />
        <Fact icon={FileArchive} label="File" value={apk.file} />
        <Fact icon={CalendarDays} label="Released" value={apk.date} />
      </dl>

      <ReleaseNotes notes={apk.notes} />

      <a
        href={`/${apk.file}`}
        download
        aria-label={`Download StreamWave v${apk.version} Android APK`}
        className="mt-8 inline-flex items-center justify-center gap-2.5 px-9 py-4 bg-orange-500 hover:bg-orange-400 text-black font-bold text-base tracking-wide rounded-full transition-all duration-200 shadow-xl shadow-orange-500/20 active:scale-98"
      >
        <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform duration-200" aria-hidden="true" />
        Download v{apk.version}
      </a>
    </div>
  </motion.div>
);

// ── Previous-release card ────────────────────────────────────────────────────
const PreviousCard: React.FC<{ apk: ApkVersion; index: number }> = ({ apk, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.5, delay: 0.05 * index }}
    className="group rounded-3xl border border-neutral-800 bg-[#0a0a0a] p-7 transition-all duration-300 hover:border-neutral-700 hover:bg-[#101010] hover:-translate-y-1"
  >
    <div className="flex items-center justify-between gap-3">
      <h3 className="font-display text-2xl font-bold text-white tracking-tight">
        v{apk.version}
      </h3>
      <span className="inline-flex items-center px-3 py-1 bg-neutral-900 border border-neutral-800 rounded-full text-[11px] font-mono text-neutral-400 uppercase tracking-widest">
        {apk.status}
      </span>
    </div>

    <dl className="mt-5 flex flex-col gap-2 text-sm">
      <div className="flex items-center gap-2 text-neutral-500">
        <FileArchive className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
        <span className="font-mono text-neutral-400 break-all">{apk.file}</span>
      </div>
      <div className="flex items-center gap-2 text-neutral-500">
        <CalendarDays className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
        <span>Released {apk.date}</span>
      </div>
    </dl>

    <ReleaseNotes notes={apk.notes} />

    <a
      href={`/${apk.file}`}
      download
      aria-label={`Download StreamWave v${apk.version} Android APK`}
      className="mt-7 inline-flex items-center justify-center gap-2 px-6 py-3 bg-neutral-900 border border-neutral-700 text-white hover:bg-white hover:text-black font-semibold text-sm tracking-wide rounded-full transition-all duration-200 active:scale-98"
    >
      <Download className="w-4 h-4" aria-hidden="true" />
      Download v{apk.version}
    </a>
  </motion.div>
);

export const Versions: React.FC<{ onBack?: () => void }> = ({ onBack }) => {
  const latest = APK_VERSIONS.find((v) => v.latest) ?? APK_VERSIONS[0];
  const previous = APK_VERSIONS.filter((v) => v !== latest);

  return (
    <section
      className="relative min-h-screen bg-[#000000] pt-28 pb-24 px-6 overflow-hidden"
      id="versions-page"
    >
      {/* Subtle ambient glow, consistent with the rest of the site */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.04)_0%,transparent_60%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Back link */}
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-white transition-colors duration-200 mb-8 cursor-pointer"
          aria-label="Back to StreamWave home"
        >
          <ArrowLeft className="w-4 h-4" aria-hidden="true" />
          Back to Home
        </button>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center flex flex-col items-center mb-14"
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1 mb-6 bg-neutral-900 border border-neutral-800 rounded-full text-xs font-mono text-neutral-400 uppercase tracking-widest">
            <FileArchive className="w-3.5 h-3.5" aria-hidden="true" />
            APK Versions
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            StreamWave APK Archive
          </h1>
          <p className="mt-4 text-neutral-400 text-base sm:text-lg max-w-xl">
            Download current and previous releases of StreamWave.
          </p>
        </motion.div>

        {/* Latest */}
        <LatestCard apk={latest} />

        {/* Previous releases */}
        {previous.length > 0 && (
          <>
            <div className="flex items-center gap-4 mt-16 mb-8">
              <h2 className="font-display text-xl font-bold text-white tracking-tight whitespace-nowrap">
                Previous Releases
              </h2>
              <span className="h-px flex-grow bg-neutral-900" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {previous.map((apk, i) => (
                <PreviousCard key={apk.version} apk={apk} index={i} />
              ))}
            </div>
          </>
        )}

        {/* Safety note */}
        <div className="mt-14 flex items-center justify-center gap-2.5 text-xs text-neutral-500">
          <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" aria-hidden="true" />
          <span>Every APK is digitally signed and safe to install. Always download from this official page.</span>
        </div>
      </div>
    </section>
  );
};
