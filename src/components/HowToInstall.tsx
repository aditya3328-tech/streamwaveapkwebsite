import React from "react";
import { motion } from "motion/react";
import { APK_URL, VERSION, ANDROID_MIN, RELEASE_NOTES } from "../config";
import { ArrowUpRight, Download, ShieldAlert, Sparkles, Smartphone, FileText } from "lucide-react";
import { InstallStep } from "../types";

const STEPS: InstallStep[] = [
  {
    number: 1,
    title: "Download APK File",
    description: "Click any download button on this official site to fetch the secure, virus-free StreamWave APK installer directly to your device.",
  },
  {
    number: 2,
    title: "Allow Unknown Sources",
    description: "Android requires safety permission for off-store apps. Navigate to Settings > Security (or App Settings) and toggle 'Install Unknown Apps' to allow your browser to launch it.",
  },
  {
    number: 3,
    title: "Install and Enjoy",
    description: "Open the downloaded .apk file from your notification bar or 'Downloads' folder, click 'Install', launch the app, and immerse yourself in unlimited cinema.",
  },
];

export const HowToInstall: React.FC = () => {
  return (
    <section
      className="bg-[#000000] py-24 border-t border-neutral-900 relative"
      id="install"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-3 block">
              Quick Android Setup
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Three Simple Steps To Start Watching
            </h2>
          </div>
          <div>
            <p className="text-neutral-400 text-sm max-w-sm">
              StreamWave runs natively on all modern Android devices. No rooting, no logins, no complex configurations.
            </p>
          </div>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" id="install-steps-grid">
          {STEPS.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="group relative p-8 bg-[#0a0a0a] border border-neutral-800 rounded-3xl flex flex-col justify-between"
            >
              {/* Massive Monochrome Step Indicator */}
              <div className="flex justify-between items-start mb-10">
                <span className="font-display text-5xl sm:text-6xl font-black text-neutral-800 group-hover:text-white transition-colors duration-300">
                  0{step.number}
                </span>
                {step.number === 1 && (
                  <span className="text-[10px] font-mono tracking-widest uppercase bg-neutral-900 border border-neutral-800 px-2.5 py-1 rounded text-neutral-400">
                    Recommended
                  </span>
                )}
                {step.number === 2 && (
                  <ShieldAlert className="w-5 h-5 text-neutral-600 group-hover:text-neutral-400 transition-colors duration-300" aria-hidden="true" />
                )}
                {step.number === 3 && (
                  <Sparkles className="w-5 h-5 text-neutral-600 group-hover:text-neutral-400 transition-colors duration-300" aria-hidden="true" />
                )}
              </div>

              {/* Title & Desc */}
              <div>
                <h3 className="font-display text-lg font-bold text-white mb-3 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed font-light mb-6">
                  {step.description}
                </p>
              </div>

              {/* Action Trigger for Step 1 */}
              {step.number === 1 ? (
                <a
                  href={APK_URL}
                  download
                  aria-label="Download the APK installer package to begin Step 1"
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-bold tracking-wider uppercase text-white hover:text-neutral-400 transition-colors duration-200 mt-auto"
                >
                  Download Package <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              ) : (
                <div className="h-[18px] mt-auto" />
              )}
            </motion.div>
          ))}
        </div>

        {/* ── Requirements & Release Notes ───────────────────────────── */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Android Requirements */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-start gap-4 p-5 bg-[#0a0a0a] border border-neutral-800 rounded-2xl"
          >
            <div className="w-9 h-9 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center shrink-0 mt-0.5">
              <Smartphone className="w-4 h-4 text-neutral-400" aria-hidden="true" />
            </div>
            <div>
              <p className="text-white text-xs font-semibold mb-1 tracking-tight">Requirements</p>
              <p className="text-neutral-500 text-xs leading-relaxed">{ANDROID_MIN} &mdash; No root access required. Works on phones and tablets.</p>
            </div>
          </motion.div>

          {/* Release Notes */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-start gap-4 p-5 bg-[#0a0a0a] border border-neutral-800 rounded-2xl"
          >
            <div className="w-9 h-9 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center shrink-0 mt-0.5">
              <FileText className="w-4 h-4 text-neutral-400" aria-hidden="true" />
            </div>
            <div>
              <p className="text-white text-xs font-semibold mb-1 tracking-tight">What's New in v{VERSION}</p>
              <p className="text-neutral-500 text-xs leading-relaxed">{RELEASE_NOTES}</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-8 bg-[#0a0a0a] border border-neutral-800 rounded-[2rem] flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center border border-neutral-800 shrink-0">
              <Download className="w-4 h-4 text-white" aria-hidden="true" />
            </div>
            <div>
              <p className="text-white font-medium text-sm tracking-tight">Ready to begin?</p>
              <p className="text-neutral-500 text-xs">Download the current version (v{VERSION}) directly.</p>
            </div>
          </div>
          <a
            href={APK_URL}
            download
            aria-label="Download the StreamWave Android APK package"
            className="w-full md:w-auto px-6 py-3 bg-white text-black font-bold text-xs uppercase tracking-wider rounded-full hover:bg-neutral-200 text-center transition-colors duration-200"
            id="install-section-cta"
          >
            Download APK
          </a>
        </motion.div>
      </div>
    </section>
  );
};
