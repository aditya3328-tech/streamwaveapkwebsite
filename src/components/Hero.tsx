import React from "react";
import {
  APK_URL,
  TELEGRAM_URL,
  VERSION,
  RELEASE_DATE,
  RELEASE_NOTES,
  APK_SIZE,
  ANDROID_MIN,
} from "../config";
import { Download, Send, Smartphone } from "lucide-react";
import { motion } from "motion/react";
import { Logo } from "./Logo";

export const Hero: React.FC = () => {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center items-center bg-[#000000] text-center pt-28 px-6 overflow-hidden animate-fade-in"
      id="hero-section"
    >
      {/* Background ambient mesh grid - very subtle grey, no neon */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_40%,#000000_100%)] pointer-events-none" />

      {/* Subtle Premium Movie-Themed SVGs (Opacity: 0.02 max) */}
      <div className="absolute inset-0 pointer-events-none select-none z-0" aria-hidden="true">
        {/* Film Reel outline (top-left) */}
        <svg
          style={{ opacity: 0.02 }}
          className="absolute top-[18%] left-[6%] w-16 h-16 text-white hidden md:block"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          id="bg-film-reel"
        >
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="3" />
          <circle cx="12" cy="6" r="1.5" />
          <circle cx="12" cy="18" r="1.5" />
          <circle cx="6" cy="12" r="1.5" />
          <circle cx="18" cy="12" r="1.5" />
          <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
        </svg>

        {/* Clapperboard icon (top-right) */}
        <svg
          style={{ opacity: 0.02 }}
          className="absolute top-[15%] right-[8%] w-14 h-14 text-white hidden md:block"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          id="bg-clapperboard"
        >
          <path d="M22 11V3h-7L8 11M2 11h20M2 11v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V11M2 11L7 3M12 11l5-8" />
        </svg>

        {/* Cinema Ticket (middle-left) */}
        <svg
          style={{ opacity: 0.015 }}
          className="absolute top-[48%] left-[4%] w-12 h-12 text-white hidden md:block"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          id="bg-ticket"
        >
          <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z" />
          <path d="M9 5v14" />
          <path d="M15 5v14" />
        </svg>

        {/* Popcorn Bucket (middle-right) */}
        <svg
          style={{ opacity: 0.015 }}
          className="absolute top-[45%] right-[5%] w-14 h-14 text-white hidden md:block"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          id="bg-popcorn"
        >
          <path d="M6 8 L4 21 A1 1 0 0 0 5 22 L19 22 A1 1 0 0 0 20 21 L18 8 Z" />
          <path d="M9 8V22" />
          <path d="M15 8V22" />
          <path d="M5 8Q8 5 10 8Q12 5 14 8Q16 5 19 8" />
        </svg>

        {/* Play Button (bottom-left) */}
        <svg
          style={{ opacity: 0.02 }}
          className="absolute bottom-[20%] left-[10%] w-16 h-16 text-white hidden md:block"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          id="bg-play-btn"
        >
          <polygon points="5 3 19 12 5 21 5 3" />
        </svg>

        {/* Subtitle / CC icon (bottom-right) */}
        <svg
          style={{ opacity: 0.02 }}
          className="absolute bottom-[22%] right-[11%] w-14 h-14 text-white hidden md:block"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          id="bg-sub-cc"
        >
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="M7 15h2a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2H7" />
          <path d="M15 15h2a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2" />
        </svg>

        {/* TV Icon (bottom-middle-left) */}
        <svg
          style={{ opacity: 0.015 }}
          className="absolute bottom-[8%] left-[22%] w-12 h-12 text-white hidden lg:block"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          id="bg-tv-icon"
        >
          <rect x="2" y="7" width="20" height="15" rx="2" ry="2" />
          <polyline points="17 2 12 7 7 2" />
        </svg>

        {/* Sports ball outline (bottom-middle-right) */}
        <svg
          style={{ opacity: 0.015 }}
          className="absolute bottom-[10%] right-[24%] w-12 h-12 text-white hidden lg:block"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          id="bg-sports-ball"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2v20M2 12h20" />
          <path d="M12 12m-6 0a6 6 0 1 0 12 0 6 6 0 1 0-12 0" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto flex flex-col items-center relative z-10">
        {/* Large Centered Logo */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Logo size="lg" showText={false} />
        </motion.div>

        {/* Version + Android Badge Row */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-2 mb-6"
        >
          {/* Latest version badge */}
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-neutral-900 border border-neutral-800 rounded-full text-xs font-mono text-neutral-400 uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            v{VERSION} &nbsp;·&nbsp; {new Date(RELEASE_DATE).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
          </span>
          {/* Android requirement chip */}
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-neutral-900 border border-neutral-800 rounded-full text-xs font-mono text-neutral-500 uppercase tracking-widest">
            <Smartphone className="w-3 h-3" aria-hidden="true" />
            {ANDROID_MIN}
          </span>
        </motion.div>

        {/* Hero Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.1] mb-6 max-w-3xl"
        >
          Unlimited Entertainment,<br />
          One Wave Away
        </motion.h1>

        {/* Hero Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-neutral-400 text-base sm:text-lg md:text-xl font-normal max-w-2xl mb-12 leading-relaxed"
        >
          StreamWave is a free movie app for Android — watch movies, TV shows, anime, and live sports.<br className="hidden sm:block" />
          Fast HD playback, no subscription, and built-in subtitle support.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full max-w-md sm:max-w-none"
        >
          {/* Download APK - Primary */}
          <a
            href={APK_URL}
            download
            aria-label="Download StreamWave Android APK installer directly to your device"
            className="flex items-center justify-center gap-2.5 w-full sm:w-auto px-8 py-4 bg-white text-black hover:bg-neutral-200 font-bold text-sm tracking-wide uppercase rounded-full transition-all duration-200 shadow-lg shadow-white/5 active:scale-98"
            id="hero-download-btn"
          >
            <Download className="w-4 h-4" aria-hidden="true" />
            DOWNLOAD APK
          </a>

          {/* Join Telegram - Secondary */}
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Join our official Telegram community"
            className="flex items-center justify-center gap-2.5 w-full sm:w-auto px-8 py-4 bg-neutral-900 border border-neutral-800 text-white hover:bg-neutral-800 font-semibold text-sm tracking-wide uppercase rounded-full transition-all duration-200"
            id="hero-telegram-btn"
          >
            <Send className="w-4 h-4 text-neutral-400" aria-hidden="true" />
            JOIN TELEGRAM
          </a>
        </motion.div>

        {/* Version info row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-8 flex flex-col items-center gap-2"
        >
          <div className="flex flex-wrap justify-center gap-4 text-xs font-mono text-neutral-500">
            <span>v{VERSION}</span>
            <span>·</span>
            <span>{APK_SIZE}</span>
            <span>·</span>
            <span>No root required</span>
          </div>
          {/* Release notes */}
          <p className="text-[11px] text-neutral-600 font-mono max-w-xs text-center leading-relaxed">
            <span className="text-neutral-500 font-semibold">What's new: </span>{RELEASE_NOTES}
          </p>
        </motion.div>
      </div>
    </section>
  );
};
