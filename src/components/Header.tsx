import React, { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { APK_URL } from "../config";
import { Download, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export const Header: React.FC<{
  onNavigate?: (view: "home" | "privacy" | "terms" | "dmca" | "contact") => void;
  currentView?: "home" | "privacy" | "terms" | "dmca" | "contact";
}> = ({ onNavigate, currentView = "home" }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Features", href: "#features" },
    { label: "Install Guide", href: "#install" },
    { label: "FAQ", href: "#faq" },
  ];

  const handleNavLinkClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    
    if (currentView !== "home") {
      onNavigate?.("home");
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 200);
    } else {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled || currentView !== "home"
          ? "bg-[#000000]/90 backdrop-blur-md border-neutral-800 py-3"
          : "bg-transparent border-transparent py-5"
      }`}
      id="main-header"
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={(e) => {
            e.preventDefault();
            onNavigate?.("home");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="focus:outline-none cursor-pointer"
          aria-label="StreamWave Home"
        >
          <Logo size="sm" />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8" id="desktop-nav" aria-label="Desktop primary navigation">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={(e) => handleNavLinkClick(e, link.href)}
              aria-label={`Go to ${link.label} section`}
              className="text-sm text-neutral-400 hover:text-white transition-colors duration-200 font-medium cursor-pointer"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* CTA Button (Desktop) */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href={APK_URL}
            aria-label="Download StreamWave Android APK installer"
            className="flex items-center gap-2 px-5 py-2.5 bg-white text-black hover:bg-neutral-200 font-semibold text-xs rounded-full tracking-wide uppercase transition-all duration-200"
            id="header-download-btn"
          >
            <Download className="w-3.5 h-3.5" aria-hidden="true" />
            Download APK
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-white p-2 focus:outline-none"
          aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMobileMenuOpen}
          id="mobile-menu-toggle"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black border-b border-neutral-800"
            id="mobile-nav-drawer"
            aria-label="Mobile navigation panel"
          >
            <div className="px-6 py-6 flex flex-col gap-6">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={(e) => handleNavLinkClick(e, link.href)}
                  aria-label={`Go to ${link.label} section`}
                  className="text-left text-base text-neutral-400 hover:text-white font-medium cursor-pointer w-full"
                >
                  {link.label}
                </button>
              ))}
              <hr className="border-neutral-800" />
              <a
                href={APK_URL}
                aria-label="Download StreamWave Android APK installer"
                className="flex items-center justify-center gap-2 w-full py-3 bg-white text-black font-semibold rounded-full tracking-wide uppercase text-sm transition-all duration-200"
                id="mobile-header-download-btn"
              >
                <Download className="w-4 h-4" aria-hidden="true" />
                Download APK
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
