import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { FAQItem } from "../types";

const FAQS: FAQItem[] = [
  {
    question: "Is StreamWave free?",
    answer: "Yes. StreamWave is 100% free to download and use. We believe in providing premium, unhindered streaming without mandatory paid plans, subscriptions, or hidden paywalls.",
  },
  {
    question: "Is it available for Android?",
    answer: "Absolutely. StreamWave is designed specifically for Android operating systems. It is fully compatible with Android smartphones, tablets, Chromebooks, and Android TV / Fire TV sticks (requires sideloading the APK). Android v5.0 or higher is required.",
  },
  {
    question: "Does it support subtitles?",
    answer: "Yes. StreamWave features robust subtitles integration. It loads synced captions dynamically in multiple languages (English, Spanish, French, Portuguese, Hindi, etc.) for almost all movies, TV shows, and anime content directly inside our player.",
  },
  {
    question: "Can I watch sports?",
    answer: "Yes, StreamWave hosts a dedicated sports hub featuring high-definition, low-latency live streams of major sports associations. This includes global football leagues, professional basketball, motorsport matches, cricket tournaments, and more.",
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
