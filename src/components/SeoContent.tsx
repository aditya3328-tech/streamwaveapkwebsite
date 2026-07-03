import React from "react";
import { motion } from "motion/react";
import { TrendingUp, Tv, Film, Laptop, CalendarClock } from "lucide-react";

/**
 * Long-form, human-written SEO content section (~550 words).
 *
 * Purpose: give search engines (and readers) genuinely useful context about
 * what StreamWave is, woven around the highest-value Bing keyword clusters —
 * "free movie app", "movies and tv app", "watch movies online", device
 * viewing and trending/latest discovery — without keyword stuffing.
 *
 * Uses H2/H3 only so the page keeps a single H1 (the Hero). Styling mirrors
 * the Features / FAQ sections to preserve the premium monochrome design.
 */

const COLLECTIONS: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  body: string;
}[] = [
  {
    icon: TrendingUp,
    title: "Trending Movies",
    body: "See what everyone is watching right now. The trending movies row surfaces the most-watched films of the week so you always have something worth pressing play on.",
  },
  {
    icon: Tv,
    title: "Popular TV Shows",
    body: "Binge popular TV shows and complete series with full seasons and tidy episode lists. It works like a proper movie and TV app, not just a single-title player.",
  },
  {
    icon: Film,
    title: "Free Entertainment Collection",
    body: "Movies, anime, cartoons for kids, and live sports sit side by side in one free entertainment app, so a single download covers the whole family's watchlist.",
  },
  {
    icon: Laptop,
    title: "Watch on Mobile, Laptop & TV",
    body: "Start on your phone and carry on across tablets, Chromebooks, and Android TV. You can even run the movie app on a laptop through an Android emulator.",
  },
  {
    icon: CalendarClock,
    title: "Latest Releases",
    body: "Fresh uploads land in a dedicated latest-releases feed, so new movies and the latest TV shows appear soon after they air — no manual searching required.",
  },
];

export const SeoContent: React.FC = () => {
  return (
    <section
      className="bg-[#000000] py-24 border-t border-neutral-900"
      id="why-streamwave"
      aria-labelledby="why-streamwave-heading"
    >
      <div className="max-w-4xl mx-auto px-6">
        {/* ── Intro / Why choose ─────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-4 block">
            Why StreamWave
          </span>
          <h2
            id="why-streamwave-heading"
            className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight mb-6"
          >
            A Free Movie App Built for Real Binge-Watching
          </h2>
          <div className="space-y-5 text-neutral-400 text-sm sm:text-base leading-relaxed">
            <p>
              StreamWave is a free movie app for Android that brings movies, TV shows, anime, and
              live sports together in one clean, fast interface. Instead of juggling several
              subscriptions, you get a single streaming app where you can watch movies online in
              crisp HD, follow full TV series, and pick up exactly where you left off. There is no
              sign-up wall and no monthly fee — install the app and start watching in minutes.
            </p>
            <p>
              What makes it feel premium is the details. A smart video player handles adaptive HD
              playback and picture-in-picture, synced multi-language subtitles load right inside
              the player, and offline downloads mean your favourite films travel with you. As an
              everyday entertainment app it stays lightweight, so it runs smoothly even on
              mid-range phones without draining your battery or your data.
            </p>
          </div>
        </motion.div>

        {/* ── Movies and TV entertainment anywhere ───────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-16"
        >
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight mb-6">
            Movies and TV Entertainment, Anywhere You Go
          </h2>
          <div className="space-y-5 text-neutral-400 text-sm sm:text-base leading-relaxed">
            <p>
              Because it is built as a true movie and TV app, StreamWave scales with however you
              like to watch. Stream on your phone during the commute, cast to the living-room
              Android TV in the evening, or open the movie app on a laptop through a Chromebook or
              Android emulator when you want a bigger screen. Your watch history, favourites, and
              downloads stay in sync across the experience.
            </p>
            <p>
              Discovery is just as effortless. Browse trending movies, jump into the latest TV
              shows, or use smart filters and fast search to find a specific title by genre, year,
              or rating. Whether you want to watch movies online tonight or download a season to
              enjoy offline on a flight, StreamWave keeps everything a tap away.
            </p>
          </div>
        </motion.div>

        {/* ── HD streaming vs offline downloads ──────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-16"
        >
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight mb-6">
            Watch Movies Online in HD, or Download to Watch Offline
          </h2>
          <div className="space-y-5 text-neutral-400 text-sm sm:text-base leading-relaxed">
            <p>
              When you are connected, StreamWave streams HD movies and shows with adaptive quality
              that scales from 480p up to 4K, so playback stays smooth whether you are on Wi-Fi or
              mobile data. The player starts quickly, remembers your place, and floats in
              picture-in-picture while you keep using your phone — the small touches that separate a
              polished streaming app from a basic one.
            </p>
            <p>
              Heading somewhere without signal? Download any movie or episode straight to your
              device and watch it offline later. It is the simplest way to build a personal library
              for flights, commutes, or the school run, and it means one free movie app can replace
              the handful of paid services you were juggling before.
            </p>
          </div>
        </motion.div>

        {/* ── Internal collection sections ───────────────────────────── */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-5" id="streamwave-collections">
          {COLLECTIONS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.06 }}
                className="group p-6 bg-[#0a0a0a] border border-neutral-800 rounded-3xl transition-colors duration-300 hover:border-neutral-600"
              >
                <div className="w-10 h-10 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-white mb-4 group-hover:bg-white group-hover:text-black transition-colors duration-300">
                  <Icon className="w-4 h-4" aria-hidden="true" />
                </div>
                <h3 className="font-display text-base font-semibold text-white mb-2 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed font-light">
                  {item.body}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
