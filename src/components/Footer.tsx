import React from "react";
import { Logo } from "./Logo";
import { TELEGRAM_URL, APK_URL } from "../config";
import { ArrowUp, Send } from "lucide-react";

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
              StreamWave is a modern Android streaming utility hosting direct connections to movies, shows, and high-definition sports streams.
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
