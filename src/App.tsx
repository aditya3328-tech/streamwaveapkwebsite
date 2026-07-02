import React, { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { AppPreview } from "./components/AppPreview";
import { Features } from "./components/Features";
import { HowToInstall } from "./components/HowToInstall";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";
import { PrivacyPolicy } from "./components/PrivacyPolicy";
import { TermsAndConditions } from "./components/TermsAndConditions";
import { DMCAPolicy } from "./components/DMCAPolicy";
import { ContactUs } from "./components/ContactUs";

export default function App() {
  const [currentView, setCurrentView] = useState<"home" | "privacy" | "terms" | "dmca" | "contact">("home");

  const handleNavigate = (view: "home" | "privacy" | "terms" | "dmca" | "contact") => {
    setCurrentView(view);
    window.scrollTo({ top: 0 });
  };

  // Dynamic document title per view
  useEffect(() => {
    const titles: Record<typeof currentView, string> = {
      home:    "StreamWave - Premium Android Streaming App | Movies, Shows & Sports",
      privacy: "Privacy Policy | StreamWave",
      terms:   "Terms & Conditions | StreamWave",
      dmca:    "DMCA Policy | StreamWave",
      contact: "Contact Us | StreamWave",
    };
    document.title = titles[currentView];
  }, [currentView]);

  return (
    <div className="min-h-screen bg-[#000000] text-white selection:bg-white selection:text-black font-sans flex flex-col" id="app-root">
      {/* Dynamic Header / Navigation */}
      <Header onNavigate={handleNavigate} currentView={currentView} />

      {/* Main Sections */}
      <div className="flex-grow">
        {currentView === "home" && (
          <main id="main-content">
            {/* Hero Banner with Call to Actions */}
            <Hero />

            {/* 3 Mobile Screenshot Mockups Carousel/Grid */}
            <AppPreview />

            {/* 6 Grid Feature Showcase Cards */}
            <Features />

            {/* Sideload & Installation Walkthrough Guide */}
            <HowToInstall />

            {/* Interactive Accordion FAQs */}
            <FAQ />
          </main>
        )}

        {currentView === "privacy" && <PrivacyPolicy onBack={() => handleNavigate("home")} />}
        {currentView === "terms" && <TermsAndConditions onBack={() => handleNavigate("home")} />}
        {currentView === "dmca" && <DMCAPolicy onBack={() => handleNavigate("home")} />}
        {currentView === "contact" && <ContactUs onBack={() => handleNavigate("home")} />}
      </div>

      {/* Brand Slogan and Footer Links */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
