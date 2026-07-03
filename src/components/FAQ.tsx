import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { FAQItem } from "../types";

// Kept in sync with the FAQPage JSON-LD in index.html so the visible answers
// and the structured data always match (a Bing/Google rich-result requirement).
const FAQS: FAQItem[] = [
  {
    question: "Is StreamWave a free movie app?",
    answer: "Yes. StreamWave is a 100% free movie app for Android. You can watch movies and TV shows online in HD with no mandatory subscriptions, paid plans, or hidden paywalls.",
  },
  {
    question: "How do I install the StreamWave APK?",
    answer: "Download the StreamWave APK from this official site, open Android Settings and enable \"Install unknown apps\" for your browser, then open the downloaded .apk file and tap Install. Launch the app and start streaming — no root and no registration required.",
  },
  {
    question: "Can I watch movies and TV shows offline?",
    answer: "Yes. StreamWave lets you download movies and full TV series to your device so you can watch them offline later, without using data or waiting for buffering.",
  },
  {
    question: "Can I use the movie app on a laptop or PC?",
    answer: "StreamWave is an Android movie app, so it runs on phones, tablets, and Chromebooks. To use the movie app on a laptop or PC, install it through an Android emulator or a Chromebook that supports Android apps.",
  },
  {
    question: "Does the app support subtitles?",
    answer: "Yes. StreamWave features robust subtitles integration. It loads synced captions dynamically in multiple languages (English, Spanish, French, Portuguese, Hindi, etc.) for almost all movies, TV shows, and anime content directly inside our player.",
  },
  {
    question: "Can I watch TV shows and series on StreamWave?",
    answer: "Yes. This movie and TV app offers complete TV series with full seasons and episode layouts, alongside movies, anime, and live sports broadcasts in HD.",
  },
  {
    question: "Which Android versions are supported?",
    answer: "StreamWave runs on Android 5.0 (Lollipop) or higher and works on Android phones, tablets, Chromebooks, and Android TV / Fire TV sticks via sideloading the APK.",
  },
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className="bg-[#000000] py-24 border-t border-neutral-900"
      id="faq"
    >
      <div className="max-w-4xl mx-auto px-6">
        {/* Header Title */}
        <div className="text-center mb-16">
          <HelpCircle className="w-8 h-8 text-neutral-500 mx-auto mb-4" aria-hidden="true" />
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base max-w-md mx-auto mt-3">
            Got questions? We have the answers. Find general insights about how StreamWave operates.
          </p>
        </div>

        {/* Accordions List */}
        <div className="space-y-4" id="faq-accordions">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-[#0a0a0a] border border-neutral-800 rounded-2xl overflow-hidden transition-colors duration-200"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${idx}`}
                  aria-label={`Toggle answer for: ${faq.question}`}
                  id={`faq-btn-${idx}`}
                >
                  <span className="text-sm sm:text-base font-semibold text-white tracking-tight pr-4">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-neutral-900 flex items-center justify-center text-neutral-400 border border-neutral-800 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-white" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" aria-hidden="true" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      id={`faq-panel-${idx}`}
                      role="region"
                      aria-labelledby={`faq-btn-${idx}`}
                    >
                      <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-neutral-400 leading-relaxed font-light border-t border-neutral-900">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
