import React from "react";
import { motion } from "motion/react";
import { ArrowLeft, FileText, Send, CheckCircle, ShieldAlert } from "lucide-react";

interface DMCAPolicyProps {
  onBack: () => void;
}

export const DMCAPolicy: React.FC<DMCAPolicyProps> = ({ onBack }) => {
  React.useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="min-h-screen bg-[#000000] text-white pt-28 pb-20 px-6 font-sans selection:bg-white selection:text-black"
      id="dmca-policy-view"
    >
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="group flex items-center gap-2 px-4 py-2 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 hover:border-neutral-700 text-xs font-semibold uppercase tracking-wider text-neutral-300 hover:text-white rounded-full transition-all duration-200 mb-10 cursor-pointer"
          id="dmca-back-btn"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </button>

        {/* Header Block */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 pb-10 border-b border-neutral-900 mb-12">
          <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white shadow-xl">
            <FileText className="w-7 h-7" />
          </div>
          <div>
            <h1 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight mb-2">
              DMCA Policy
            </h1>
            <p className="text-neutral-500 text-sm">
              Last Updated: June 30, 2026 • Compliant & Proactive
            </p>
          </div>
        </div>

        {/* Core Notice */}
        <div className="p-6 bg-neutral-950 border border-neutral-900 rounded-2xl mb-12 flex gap-4 items-start">
          <ShieldAlert className="w-6 h-6 text-neutral-400 shrink-0 mt-0.5" />
          <div>
            <h3 className="text-sm font-semibold mb-1 text-white">Index Scraper Disclaimer</h3>
            <p className="text-neutral-500 text-xs leading-relaxed">
              StreamWave is an automated search engine and client directory. We do not host, store, or transmit any copyright-protected audio, video, or digital media files on our physical hardware.
            </p>
          </div>
        </div>

        {/* Requirements content */}
        <div className="space-y-10 text-neutral-400 text-sm sm:text-base leading-relaxed font-normal">
          <section className="space-y-4">
            <h2 className="font-display text-lg sm:text-xl font-bold text-white tracking-tight flex items-center gap-2">
              <span className="text-neutral-600 font-mono text-xs">01/</span>
              Overview of Compliance
            </h2>
            <p>
              We fully respect and align with intellectual property rights, adhering strictly to the Digital Millennium Copyright Act (DMCA) guidelines. Because our client app indexes public websites via real-time web crawler code, we are unable to clean files directly from the hosting domain.
            </p>
            <p>
              However, upon receipt of a valid and standardized DMCA complaint, we take action to blacklist specific streaming endpoints, link URLs, or search query formulas from being presented within our mobile application.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-lg sm:text-xl font-bold text-white tracking-tight flex items-center gap-2">
              <span className="text-neutral-600 font-mono text-xs">02/</span>
              Filing Requirements
            </h2>
            <p>
              To process your request promptly, the notice MUST contain the following standardized components:
            </p>
            <ul className="list-decimal pl-5 space-y-3 text-sm text-neutral-400">
              <li>
                <strong className="text-neutral-200">Signature:</strong> A physical or digital signature of the copyright owner or a person authorized to represent them.
              </li>
              <li>
                <strong className="text-neutral-200">Work Identification:</strong> Clear description of the copyrighted work claimed to have been infringed.
              </li>
              <li>
                <strong className="text-neutral-200">Link Identification:</strong> The exact streaming URLs, host domains, or search terms displayed in the StreamWave app that you seek to have removed.
              </li>
              <li>
                <strong className="text-neutral-200">Contact Coordinates:</strong> Your official email address, physical mailing address, and telephone number.
              </li>
              <li>
                <strong className="text-neutral-200">Good Faith Declaration:</strong> A statement that you believe, in good faith, that the disputed usage is not authorized by the copyright holder, its agent, or state law.
              </li>
              <li>
                <strong className="text-neutral-200">Accuracy Declaration:</strong> A statement made under penalty of perjury that the data submitted in your notice is accurate and that you are authorized to represent the owner.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-lg sm:text-xl font-bold text-white tracking-tight flex items-center gap-2">
              <span className="text-neutral-600 font-mono text-xs">03/</span>
              Processing Time
            </h2>
            <p>
              Once a valid notice is sent to our development group, we verify the data and apply blacklisting filters within <strong className="text-neutral-200">24 to 48 hours</strong>.
            </p>
          </section>
        </div>

        {/* Footer block */}
        <div className="mt-16 pt-8 border-t border-neutral-900 text-center">
          <button
            onClick={onBack}
            className="px-6 py-3 bg-white text-black hover:bg-neutral-200 text-xs font-semibold tracking-wider uppercase rounded-full transition-all duration-200 cursor-pointer"
          >
            I Understand, Return Home
          </button>
        </div>
      </div>
    </motion.div>
  );
};
