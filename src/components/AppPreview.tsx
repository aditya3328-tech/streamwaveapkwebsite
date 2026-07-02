import React, { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

import homepage from "../assets/images/homepage.png";
import explorepage from "../assets/images/Explorepage.png";
import detailspage from "../assets/images/Detailspage.png";
import searchpage from "../assets/images/Searchpage.png";
import librarypage from "../assets/images/Library.png";

const screenshots = [
  {
    title: "Home Experience",
    description:
      "Discover trending movies, TV shows, anime, and personalized recommendations through a modern cinematic homepage designed for effortless browsing.",
    src: homepage,
    alt: "StreamWave home experience featuring movies, TV shows, and anime recommendations",
    imageTitle: "StreamWave Home Experience",
  },
  {
    title: "Explore Content",
    description:
      "Browse genres, categories, and curated collections with powerful discovery tools that help users find their next favorite watch.",
    src: explorepage,
    alt: "StreamWave explore page with genres, categories, and curated collections",
    imageTitle: "StreamWave Explore Content",
  },
  {
    title: "Detailed Information",
    description:
      "Access rich movie and series details including synopsis, ratings, genres, cast information, available languages, and streaming options.",
    src: detailspage,
    alt: "StreamWave details page showing movie synopsis, ratings, cast, and streaming options",
    imageTitle: "StreamWave Detailed Information",
  },
  {
    title: "Smart Search",
    description:
      "Instantly search movies, shows, and anime with fast suggestions, clean results, and an optimized experience across all devices.",
    src: searchpage,
    alt: "StreamWave smart search with fast suggestions and clean results",
    imageTitle: "StreamWave Smart Search",
  },
  {
    title: "Personal Library",
    description:
      "Manage watch history, favorites, saved content, and continue watching from a beautifully organized personal library.",
    src: librarypage,
    alt: "StreamWave personal library with watch history, favorites, and saved content",
    imageTitle: "StreamWave Personal Library",
  },
];

/* ── Intersection-observer hook for fade-up on entry ─────────────── */
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

/* ── Phone Mockup Card ───────────────────────────────────────────── */
interface CardProps {
  screen: (typeof screenshots)[number];
  idx: number;
}

const MockupCard: React.FC<CardProps> = ({ screen, idx }) => {
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.6s ease ${idx * 0.1}s, transform 0.6s ease ${idx * 0.1}s`,
      }}
      className="flex flex-col items-center"
    >
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="flex flex-col items-center w-full"
      >
        {/* ── Phone Frame ── */}
        <div
          style={{ aspectRatio: "9/19.5" }}
          className="
            relative w-full max-w-[200px] xl:max-w-[220px]
            bg-neutral-950 rounded-[2rem]
            border-[5px] border-neutral-800
            shadow-[0_24px_48px_-12px_rgba(0,0,0,0.95),0_0_0_1px_rgba(255,255,255,0.03)]
            overflow-hidden flex flex-col mb-4 group
            transition-all duration-300
          "
        >
          {/* Speaker notch */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-14 h-3 bg-black rounded-full z-20 flex items-center justify-center">
            <div className="w-7 h-0.5 bg-neutral-800 rounded-full" />
          </div>

          {/* Side buttons */}
          <div className="absolute top-14 -left-[6px] w-0.5 h-5 bg-neutral-700 rounded-r-sm z-10" />
          <div className="absolute top-[4.5rem] -left-[6px] w-0.5 h-7 bg-neutral-700 rounded-r-sm z-10" />

          {/* Screen */}
          <div className="relative flex-1 bg-black overflow-hidden select-none">
            <img
              src={screen.src}
              alt={screen.alt}
              title={screen.imageTitle}
              loading="lazy"
              decoding="async"
              width="220"
              height="476"
              className="w-full h-full object-cover select-none pointer-events-none group-hover:scale-[1.03] transition-transform duration-500"
            />
            {/* Glare overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/[0.015] to-white/0 pointer-events-none" />
            {/* Bottom vignette */}
            <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
          </div>
        </div>

        {/* ── Caption ── */}
        <div className="text-center px-1 max-w-[200px]">
          <h3 className="text-white font-semibold text-xs mb-1 tracking-tight leading-snug">
            {screen.title}
          </h3>
          <p className="text-neutral-500 text-[10px] leading-relaxed">
            {screen.description}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

/* ── Section ─────────────────────────────────────────────────────── */
export const AppPreview: React.FC = () => {
  return (
    <section
      className="bg-[#000000] py-24 border-t border-neutral-900 overflow-hidden"
      id="previews-section"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4 tracking-tight">
            App Screenshots / Features
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base max-w-xl mx-auto font-sans">
            Explore the full experience — from discovery to your personal library.
          </p>
        </div>

        {/* ── Desktop / Tablet Grid ── */}
        <div
          className="
            hidden sm:grid gap-6
            sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5
            justify-items-center items-start
            max-w-[1400px] mx-auto
          "
          id="desktop-mockups-grid"
        >
          {screenshots.map((screen, idx) => (
            <MockupCard key={idx} screen={screen} idx={idx} />
          ))}
        </div>

        {/* ── Mobile Horizontal Scroll Carousel ── */}
        <div
          className="flex sm:hidden gap-5 overflow-x-auto pb-8 px-4 snap-x snap-mandatory scroll-smooth"
          id="mobile-mockups-carousel"
          style={{ scrollbarWidth: "none" }}
        >
          {screenshots.map((screen, idx) => (
            <div
              key={idx}
              className="min-w-[240px] flex-shrink-0 snap-center flex flex-col items-center"
            >
              {/* Phone Frame */}
              <div
                style={{ aspectRatio: "9/19.5" }}
                className="
                  relative w-full max-w-[240px]
                  bg-neutral-950 rounded-[2rem]
                  border-[5px] border-neutral-800
                  shadow-[0_20px_40px_-15px_rgba(0,0,0,0.9)]
                  overflow-hidden flex flex-col mb-4
                "
              >
                {/* Notch */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-14 h-3 bg-black rounded-full z-20 flex items-center justify-center">
                  <div className="w-7 h-0.5 bg-neutral-800 rounded-full" />
                </div>
                {/* Screen */}
                <div className="relative flex-1 bg-black overflow-hidden select-none">
                  <img
                    src={screen.src}
                    alt={screen.alt}
                    title={screen.imageTitle}
                    loading="lazy"
                    decoding="async"
                    width="240"
                    height="519"
                    className="w-full h-full object-cover select-none pointer-events-none"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/[0.015] to-white/0 pointer-events-none" />
                </div>
              </div>

              {/* Caption */}
              <div className="text-center px-3 max-w-[210px]">
                <h3 className="text-white font-semibold text-xs mb-1 tracking-tight">
                  {screen.title}
                </h3>
                <p className="text-neutral-500 text-[10px] leading-relaxed">
                  {screen.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
