import React from "react";
import { motion } from "motion/react";
import { ArrowLeft, Scale, ShieldAlert, AlertTriangle, HelpCircle, HardDriveDownload } from "lucide-react";

interface TermsAndConditionsProps {
  onBack: () => void;
}

export const TermsAndConditions: React.FC<TermsAndConditionsProps> = ({ onBack }) => {
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
      id="terms-conditions-view"
    >
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="group flex items-center gap-2 px-4 py-2 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 hover:border-neutral-700 text-xs font-semibold uppercase tracking-wider text-neutral-300 hover:text-white rounded-full transition-all duration-200 mb-10 cursor-pointer"
          id="terms-back-btn"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </button>

        {/* Header Block */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 pb-10 border-b border-neutral-900 mb-12">
          <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white shadow-xl">
            <Scale className="w-7 h-7" />
          </div>
          <div>
            <h1 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight mb-2">
              Terms & Conditions
            </h1>
            <p className="text-neutral-500 text-sm">
              Last Updated: June 30, 2026 • Version 2.4.1
            </p>
          </div>
        </div>

        {/* Quick Warnings Block */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          <div className="p-5 bg-neutral-950 border border-neutral-900 rounded-2xl flex flex-col gap-3">
            <ShieldAlert className="w-5 h-5 text-neutral-400" />
            <h3 className="text-sm font-semibold">Decentralized Streaming</h3>
            <p className="text-neutral-500 text-xs leading-relaxed">
              We compile links from open-web search bots. StreamWave does not host or upload any media file.
            </p>
          </div>
          <div className="p-5 bg-neutral-950 border border-neutral-900 rounded-2xl flex flex-col gap-3">
            <AlertTriangle className="w-5 h-5 text-neutral-400" />
            <h3 className="text-sm font-semibold">As-Is Sideloading</h3>
            <p className="text-neutral-500 text-xs leading-relaxed">
              We provide the application purely on an "as-is" and "as-available" framework for individual evaluation.
            </p>
          </div>
          <div className="p-5 bg-neutral-950 border border-neutral-900 rounded-2xl flex flex-col gap-3">
            <HardDriveDownload className="w-5 h-5 text-neutral-400" />
            <h3 className="text-sm font-semibold">User Responsibility</h3>
            <p className="text-neutral-500 text-xs leading-relaxed">
              Users are solely responsible for local legal adherence and bandwidth compliance.
            </p>
          </div>
        </div>

        {/* Terms text content */}
        <div className="space-y-10 text-neutral-400 text-sm sm:text-base leading-relaxed font-normal">
          <section className="space-y-4">
            <h2 className="font-display text-lg sm:text-xl font-bold text-white tracking-tight flex items-center gap-2">
              <span className="text-neutral-600 font-mono text-xs">01/</span>
              Agreement to Terms
            </h2>
            <p>
              By sideloading, installing, or launching the StreamWave Android APK, you represent and agree that you have read, understood, and consented to be bound by these entire Terms and Conditions. If you do not agree with any structural part of this agreement, you must immediately cease using the application and remove the APK from your local storage.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-lg sm:text-xl font-bold text-white tracking-tight flex items-center gap-2">
              <span className="text-neutral-600 font-mono text-xs">02/</span>
              Content Disclaimer & Web Crawlers
            </h2>
            <p>
              StreamWave is a smart search tool and directory aggregator. We do not host, store, download, cache, or distribute any video streams, audiovisual files, or transmission signals on our servers.
            </p>
            <p>
              The system functions as an automated indexing client that queries public search engines, web caches, and open-source catalogs. Consequently:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm text-neutral-400">
              <li>
                StreamWave has zero direct control over the quality, content, accuracy, legality, copyright, or streaming speed of indexed server locations.
              </li>
              <li>
                We do not endorse, sponsor, or guarantee any external streaming providers, player networks, or video hosts.
              </li>
              <li>
                Any concerns or complaints regarding copyright infringement should be directly directed to the public host or domain holding the file source.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-lg sm:text-xl font-bold text-white tracking-tight flex items-center gap-2">
              <span className="text-neutral-600 font-mono text-xs">03/</span>
              Intellectual Property & DMCA Policy
            </h2>
            <p>
              We honor intellectual property rights. Because StreamWave operates strictly as a real-time web parser, we cannot delete content hosted on third-party servers. However, we do coordinate with content owners to remove specific links or keyword indexing formulas from our internal search queries upon receipt of valid DMCA notices.
            </p>
            <p>
              To file a query, please review our DMCA Policy page for filing guidelines and contact coordinates.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-lg sm:text-xl font-bold text-white tracking-tight flex items-center gap-2">
              <span className="text-neutral-600 font-mono text-xs">04/</span>
              User Obligations & Acceptable Conduct
            </h2>
            <p>
              When utilizing StreamWave, you agree to comply with all regional guidelines and intellectual restrictions. You are strictly prohibited from:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm text-neutral-400">
              <li>
                Decompiling, reverse engineering, or repackaging the StreamWave APK for commercial distribution or injected malware exploits.
              </li>
              <li>
                Flooding the indexing databases or using automated bot engines to query our APIs.
              </li>
              <li>
                Bypassing safe connection shields or stream decoders.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-lg sm:text-xl font-bold text-white tracking-tight flex items-center gap-2">
              <span className="text-neutral-600 font-mono text-xs">05/</span>
              No Warranties & Limitation of Liability
            </h2>
            <p>
              STREAMWAVE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASE WITH ZERO REPRESENTATIONS OR WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED.
            </p>
            <p>
              In no event shall the StreamWave development network, team members, or open-source contributors be liable for any claims, damages, bandwidth fees, battery drain, or storage failures arising from the use or installation of this utility software.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-lg sm:text-xl font-bold text-white tracking-tight flex items-center gap-2">
              <span className="text-neutral-600 font-mono text-xs">06/</span>
              Termination of Service
            </h2>
            <p>
              We reserve the right to temporarily freeze or completely dissolve our index servers, catalog updates, or support databases at any point without prior warning, explanation, or financial liability.
            </p>
          </section>
        </div>

        {/* Footer block */}
        <div className="mt-16 pt-8 border-t border-neutral-900 text-center">
          <button
            onClick={onBack}
            className="px-6 py-3 bg-white text-black hover:bg-neutral-200 text-xs font-semibold tracking-wider uppercase rounded-full transition-all duration-200 cursor-pointer"
          >
            I Accept, Return Home
          </button>
        </div>
      </div>
    </motion.div>
  );
};
