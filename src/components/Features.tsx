import React from "react";
import { motion } from "motion/react";
import {
  Video,
  MonitorPlay,
  Bookmark,
  Heart,
  SlidersHorizontal,
  Tv,
  Sparkles,
  Smile,
  Trophy,
  DownloadCloud,
  Subtitles,
  UserCheck,
} from "lucide-react";
import { FeatureItem } from "../types";

const FEATURES: FeatureItem[] = [
  {
    icon: Video,
    title: "High-Quality Video",
    description: "Stream content in stunning HD, 1080p, and 4K quality with dynamic auto-resolution adjusting to your internet speed.",
  },
  {
    icon: MonitorPlay,
    title: "Picture-in-Picture (PiP)",
    description: "Multitask with ease. Watch your favorite movies, sports, or series in a floating screen overlay while using other apps.",
  },
  {
    icon: Bookmark,
    title: "Personal Wishlist",
    description: "Save upcoming releases and discoverable cinema to your offline wishlist to build your ultimate watch queue.",
  },
  {
    icon: Heart,
    title: "Mark Favorites",
    description: "Keep your absolute favorite movies, seasons, and anime cataloged neatly under your library for instant access.",
  },
  {
    icon: SlidersHorizontal,
    title: "Smart Filters & Sorting",
    description: "Refine contents instantly by release year, primary genre, country, and rating score to find exactly what you want.",
  },
  {
    icon: Tv,
    title: "Binge TV Shows",
    description: "Explore complete TV series, episodic layouts, and detailed seasons updated immediately after broadcasting.",
  },
  {
    icon: Sparkles,
    title: "Dedicated Anime Hub",
    description: "Access massive catalogs of anime with multi-audio feeds, Japanese dubbing, and perfectly timed translation files.",
  },
  {
    icon: Smile,
    title: "Kids & Cartoons",
    description: "A fun, family-safe animation selection featuring kids series, educational cartoons, and children's cinema.",
  },
  {
    icon: Trophy,
    title: "Live Sports Broadcasts",
    description: "Catch soccer leagues, international cups, motorsport championships, and action tournaments in live HD feed.",
  },
  {
    icon: DownloadCloud,
    title: "Lightning Downloads",
    description: "Download any title to your local Android device storage to watch offline, anytime, anywhere with no limits.",
  },
  {
    icon: Subtitles,
    title: "Multi-Language Subs",
    description: "Fully embedded closed-caption subtitles synced in real-time across multiple international languages.",
  },
  {
    icon: UserCheck,
    title: "Zero Registration Required",
    description: "No sign-up form, no mail confirmation, and no subscription credentials. Just install, launch, and stream.",
  },
];

export const Features: React.FC = () => {
  return (
    <section
      className="bg-[#000000] py-24 border-t border-neutral-900 relative"
      id="features"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-3 block">
            Engineered for performance
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Designed to Excel
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base max-w-lg mx-auto mt-4 leading-relaxed">
            Every feature is fine-tuned to deliver the most robust, buffer-free entertainment on Android.
          </p>
        </div>

        {/* Features Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          id="features-grid"
        >
          {FEATURES.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ borderColor: "#ffffff" }}
                className="group p-8 bg-[#0a0a0a] border border-neutral-800 rounded-3xl flex flex-col transition-all duration-300 relative overflow-hidden"
              >
                {/* Subtle light reflex effect on hover */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/[0.01] rounded-bl-full pointer-events-none group-hover:bg-white/[0.03] transition-all duration-500" />

                {/* Icon Circle container - sleek white icon on dark bg */}
                <div className="w-12 h-12 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-white mb-6 group-hover:bg-white group-hover:text-black transition-all duration-300">
                  <Icon className="w-5 h-5" aria-hidden="true" />
                </div>

                {/* Title */}
                <h3 className="font-display text-lg font-semibold text-white mb-3 tracking-tight">
                  {feat.title}
                </h3>

                {/* Description */}
                <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed font-light">
                  {feat.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
