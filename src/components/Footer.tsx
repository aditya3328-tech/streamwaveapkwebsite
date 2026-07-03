import React from "react";
import { Logo } from "./Logo";
import { TELEGRAM_URL, APK_URL, CANONICAL_URL } from "../config";
import { ArrowUp, Send, Share2, Twitter, Facebook } from "lucide-react";

export const Footer: React.FC<{
  onNavigate?: (view: "home" | "privacy" | "terms" | "dmca" | "contact") => void;
}> = ({ onNavigate }) => {
  const handleScrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerLinks = [
    { label: "DMCA Policy", view: "dmca" as const },
    { label: "Privacy Policy", view: "privacy" as const },
    { label: "Terms of Service", view: "terms" as const },
    { label: "Contact Us", view: "contact" as const },
  ];

  // On-page internal anchors (help crawlers map the site structure)
  const exploreLinks = [
    { label: "Home", href: "#hero-section" },
    { label: "Features", href: "#features" },
    { label: "How To Install", href: "#install" },
    { label: "FAQ", href: "#faq" },
    { label: "Download", href: "#install-section-cta" },
  ];

  // Legitimate external authority links (opened safely in a new tab)
  const resourceLinks = [
    { label: "Android Developer Docs", href: "https://developer.android.com/guide" },
    { label: "Google Play Policies", href: "https://support.google.com/googleplay/android-developer/answer/113474" },
    { label: "Sideloading Guide", href: "https://developer.android.com/guide/app-bundle" },
  ];

  const shareText = "Watch movies, TV shows, anime & live sports on Android with StreamWave.";
  const shareLinks = [
    {
      label: "Share on X",
      icon: Twitter,
      href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(CANONICAL_URL)}`,
    },
    {
      label: "Share on Facebook",
      icon: Facebook,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(CANONICAL_URL)}`,
    },
    {
      label: "Share on Telegram",
      icon: Send,
      href: `https://t.me/share/url?url=${encodeURIComponent(CANONICAL_URL)}&text=${encodeURIComponent(shareText)}`,
    },
  ];

  const handleAnchorClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    const el = document.getElementById(href.replace("#", ""));
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      // Not on the home view — navigate home first, then scroll.
      onNavigate?.("home");
      setTimeout(() => {
        document.getElementById(href.replace("#", ""))?.scrollIntoView({ behavior: "smooth" });
      }, 200);
    }
  };

  return (
    <footer
      className="bg-[#000000] border-t border-neutral-900 py-16"
      id="main-footer"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Top block */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
          {/* Logo & Slogan */}
          <div className="flex flex-col gap-3">
            <Logo size="md" />
            <p className="text-neutral-500 text-xs max-w-sm mt-1">
              StreamWave is a modern Android streaming app hosting direct connections to movies, TV shows, anime, and high-definition sports streams.
            </p>
          </div>

          {/* Action Row */}
          <div className="flex flex-wrap items-center gap-4">
            {/* Telegram Channel CTA */}
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Join our official Telegram community channel"
              className="flex items-center gap-2 px-5 py-3 bg-neutral-900 border border-neutral-800 hover:bg-neutral-800 text-xs font-semibold tracking-wider text-white uppercase rounded-full transition-colors duration-200"
              id="footer-telegram-cta"
            >
              <Send className="w-3.5 h-3.5 text-neutral-400" aria-hidden="true" />
              Telegram Channel
            </a>

            {/* Back to Top */}
            <button
              onClick={handleScrollToTop}
              className="w-10 h-10 rounded-full bg-neutral-950 border border-neutral-800 hover:bg-neutral-900 flex items-center justify-center text-neutral-400 hover:text-white transition-colors duration-200"
              aria-label="Scroll back to top of page"
              id="back-to-top-btn"
            >
              <ArrowUp className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Link columns — internal navigation, external resources & sharing */}
        <nav
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12"
          aria-label="Footer navigation"
        >
          {/* Explore (internal anchors) */}
          <div>
            <h2 className="text-white text-xs font-semibold uppercase tracking-widest mb-4">Explore</h2>
            <ul className="flex flex-col gap-2.5">
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleAnchorClick(e, link.href)}
                    className="text-neutral-500 hover:text-white text-xs transition-colors duration-150"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal (internal views) */}
          <div>
            <h2 className="text-white text-xs font-semibold uppercase tracking-widest mb-4">Legal</h2>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      if (onNavigate) onNavigate(link.view);
                      else window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    aria-label={`View our ${link.label}`}
                    className="text-neutral-500 hover:text-white text-xs transition-colors duration-150 text-left cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources (external authority links) */}
          <div>
            <h2 className="text-white text-xs font-semibold uppercase tracking-widest mb-4">Resources</h2>
            <ul className="flex flex-col gap-2.5">
              {resourceLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-500 hover:text-white text-xs transition-colors duration-150"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Share */}
          <div>
            <h2 className="text-white text-xs font-semibold uppercase tracking-widest mb-4 flex items-center gap-1.5">
              <Share2 className="w-3.5 h-3.5 text-neutral-400" aria-hidden="true" /> Share
            </h2>
            <div className="flex items-center gap-3">
              {shareLinks.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    title={s.label}
                    className="w-9 h-9 rounded-full bg-neutral-950 border border-neutral-800 hover:bg-neutral-900 hover:text-white flex items-center justify-center text-neutral-400 transition-colors duration-200"
                  >
                    <Icon className="w-4 h-4" aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </div>
        </nav>

        <hr className="border-neutral-900 mb-8" />

        {/* Bottom block */}
        <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-6 text-xs text-neutral-500 font-light">
          <div>
            <p>
              &copy; {new Date().getFullYear()} StreamWave. All rights reserved.
            </p>
            <p className="mt-1 text-neutral-600">
              Disclaimer: StreamWave does not host or upload any media files. All streams are crawled from public web indices.
            </p>
          </div>

          {/* Minimal Links */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center" aria-label="Legal navigation">
            {footerLinks.map((link) => (
              <button
                key={link.label}
                onClick={(e) => {
                  e.preventDefault();
                  if (onNavigate) {
                    onNavigate(link.view);
                  } else {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }
                }}
                aria-label={`View our ${link.label}`}
                className="hover:text-white transition-colors duration-150 cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
