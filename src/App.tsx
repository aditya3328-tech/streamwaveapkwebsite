import React, { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { AppPreview } from "./components/AppPreview";
import { Features } from "./components/Features";
import { HowToInstall } from "./components/HowToInstall";
import { DownloadSection } from "./components/DownloadSection";
import { FAQ } from "./components/FAQ";
import { SeoContent } from "./components/SeoContent";
import { Footer } from "./components/Footer";
import { PrivacyPolicy } from "./components/PrivacyPolicy";
import { TermsAndConditions } from "./components/TermsAndConditions";
import { DMCAPolicy } from "./components/DMCAPolicy";
import { ContactUs } from "./components/ContactUs";
import { Versions } from "./components/Versions";
import { View } from "./types";

// Map between the browser URL and the SPA view. Only /versions has a dedicated
// path; every other view lives at "/" (legal pages keep their existing behaviour).
const pathToView = (path: string): View => (path === "/versions" ? "versions" : "home");
const viewToPath = (view: View): string => (view === "versions" ? "/versions" : "/");

export default function App() {
  const [currentView, setCurrentView] = useState<View>(() =>
    typeof window !== "undefined" ? pathToView(window.location.pathname) : "home"
  );

  const handleNavigate = (view: View) => {
    setCurrentView(view);
    const path = viewToPath(view);
    if (typeof window !== "undefined" && window.location.pathname !== path) {
      window.history.pushState({ view }, "", path);
    }
    window.scrollTo({ top: 0 });
  };

  // Keep the view in sync with browser back/forward navigation.
  useEffect(() => {
    const onPopState = () => setCurrentView(pathToView(window.location.pathname));
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  // Dynamic document title per view
  useEffect(() => {
    const titles: Record<typeof currentView, string> = {
      home:     "Free Movie App – Watch Movies & TV Shows | StreamWave",
      privacy:  "Privacy Policy | StreamWave",
      terms:    "Terms & Conditions | StreamWave",
      dmca:     "DMCA Policy | StreamWave",
      contact:  "Contact Us | StreamWave",
      versions: "APK Versions | StreamWave",
    };
    document.title = titles[currentView];

    // Keep the meta description in sync per view for JS-rendering crawlers.
    const descriptions: Record<typeof currentView, string> = {
      home:     "StreamWave is a free movie app for Android to watch movies and TV shows online in HD. Download the APK to stream films offline with subtitles — no sign-up.",
      privacy:  "Read the StreamWave Privacy Policy to learn how the Android streaming app handles your data and privacy.",
      terms:    "Review the StreamWave Terms & Conditions for using the Android streaming app.",
      dmca:     "StreamWave DMCA Policy and copyright takedown information for the Android streaming app.",
      contact:  "Contact the StreamWave team for support with the Android streaming app.",
      versions: "Download current and previous releases of the StreamWave Android APK from the official archive.",
    };
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", descriptions[currentView]);
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
            <Hero onViewVersions={() => handleNavigate("versions")} />

            {/* 3 Mobile Screenshot Mockups Carousel/Grid */}
            <AppPreview />

            {/* 6 Grid Feature Showcase Cards */}
            <Features />

            {/* Sideload & Installation Walkthrough Guide */}
            <HowToInstall />

            {/* Dedicated premium download experience (APK, details, install guide) */}
            <DownloadSection onViewVersions={() => handleNavigate("versions")} />

            {/* Interactive Accordion FAQs */}
            <FAQ />

            {/* Long-form SEO content: keyword-rich, human-written context */}
            <SeoContent />
          </main>
        )}

        {currentView === "privacy" && <PrivacyPolicy onBack={() => handleNavigate("home")} />}
        {currentView === "terms" && <TermsAndConditions onBack={() => handleNavigate("home")} />}
        {currentView === "dmca" && <DMCAPolicy onBack={() => handleNavigate("home")} />}
        {currentView === "contact" && <ContactUs onBack={() => handleNavigate("home")} />}
        {currentView === "versions" && <Versions onBack={() => handleNavigate("home")} />}
      </div>

      {/* Brand Slogan and Footer Links */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
