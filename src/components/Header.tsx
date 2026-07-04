import React, { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { APK_URL } from "../config";
import { Download, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { View } from "../types";

export const Header: React.FC<{
  onNavigate?: (view: View) => void;
  currentView?: View;
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

  // In-page section jump links (home page only).
  const navLinks = [
    { label: "Install Guide", href: "#install" },
    { label: "FAQ", href: "#faq" },
  ];

  // Page-level navigation links (existing pages exposed in the navbar).
  const pageLinks: { label: string; view: View }[] = [
    { label: "Home", view: "home" },
    { label: "Older Versions", view: "versions" },
    { label: "Terms of Service", view: "terms" },
    { label: "Contact Us", view: "contact" },
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

  const handlePageNavClick = (view: View) => {
    onNavigate?.(view);
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
          className="focus:outline-none cursor-pointer shrink-0"
          aria-label="StreamWave Home"
        >
          <Logo size="sm" />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-x-6" id="desktop-nav" aria-label="Desktop primary navigation">
          {/* In-page section links */}
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

          {/* Divider between section links and page links */}
          <span className="w-px h-4 bg-neutral-800" aria-hidden="true" />

          {/* Page links */}
          {pageLinks.map((link) => {
            const isActive = currentView === link.view;
            return (
              <button
                key={link.view}
                onClick={() => handlePageNavClick(link.view)}
                aria-label={`Go to ${link.label}`}
                aria-current={isActive ? "page" : undefined}
                className={`relative text-sm font-medium transition-colors duration-200 cursor-pointer ${
                  isActive ? "text-white" : "text-neutral-400 hover:text-white"
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-active-underline"
                    className="absolute -bottom-1.5 left-0 right-0 h-0.5 rounded-full bg-white"
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* CTA Button (Desktop) */}
        <div className="hidden xl:flex items-center gap-4 shrink-0">
          <a
            href={APK_URL}
            download
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
          className="xl:hidden text-white p-2 focus:outline-none"
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
            className="xl:hidden bg-black border-b border-neutral-800 overflow-hidden"
            id="mobile-nav-drawer"
            aria-label="Mobile navigation panel"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {/* Page links */}
              {pageLinks.map((link) => {
                const isActive = currentView === link.view;
                return (
                  <button
                    key={link.view}
                    onClick={() => handlePageNavClick(link.view)}
                    aria-label={`Go to ${link.label}`}
                    aria-current={isActive ? "page" : undefined}
                    className={`text-left text-base font-medium cursor-pointer w-full transition-colors duration-200 ${
                      isActive ? "text-white" : "text-neutral-400 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </button>
                );
              })}

              <hr className="border-neutral-800" />

              {/* In-page section links */}
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={(e) => handleNavLinkClick(e, link.href)}
                  aria-label={`Go to ${link.label} section`}
                  className="text-left text-base text-neutral-400 hover:text-white font-medium cursor-pointer w-full transition-colors duration-200"
                >
                  {link.label}
                </button>
              ))}

              <hr className="border-neutral-800" />

              <a
                href={APK_URL}
                download
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
