import React from "react";
import { motion } from "motion/react";
import { ArrowLeft, Shield, Lock, Eye, FileText, Smartphone } from "lucide-react";

interface PrivacyPolicyProps {
  onBack: () => void;
}

export const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onBack }) => {
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
      id="privacy-policy-view"
    >
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="group flex items-center gap-2 px-4 py-2 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 hover:border-neutral-700 text-xs font-semibold uppercase tracking-wider text-neutral-300 hover:text-white rounded-full transition-all duration-200 mb-10 cursor-pointer"
          id="privacy-back-btn"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </button>

        {/* Header Block */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 pb-10 border-b border-neutral-900 mb-12">
          <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white shadow-xl">
            <Shield className="w-7 h-7" />
          </div>
          <div>
            <h1 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight mb-2">
              Privacy Policy
            </h1>
            <p className="text-neutral-500 text-sm">
              Last Updated: June 30, 2026 • Version 2.4.1
            </p>
          </div>
        </div>

        {/* Highlight Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          <div className="p-5 bg-neutral-950 border border-neutral-900 rounded-2xl flex flex-col gap-3">
            <Lock className="w-5 h-5 text-neutral-400" />
            <h3 className="text-sm font-semibold">Zero Logs Policy</h3>
            <p className="text-neutral-500 text-xs leading-relaxed">
              We do not track, store, or profile your personal streaming activities or history.
            </p>
          </div>
          <div className="p-5 bg-neutral-950 border border-neutral-900 rounded-2xl flex flex-col gap-3">
            <Eye className="w-5 h-5 text-neutral-400" />
            <h3 className="text-sm font-semibold">No Registration</h3>
            <p className="text-neutral-500 text-xs leading-relaxed">
              No account creation, email addresses, or phone numbers are ever requested.
            </p>
          </div>
          <div className="p-5 bg-neutral-950 border border-neutral-900 rounded-2xl flex flex-col gap-3">
            <Smartphone className="w-5 h-5 text-neutral-400" />
            <h3 className="text-sm font-semibold">Device Security</h3>
            <p className="text-neutral-500 text-xs leading-relaxed">
              Minimalistic permissions. We only require storage access to save offline files.
            </p>
          </div>
        </div>

        {/* Legal Text Content */}
        <div className="space-y-10 text-neutral-400 text-sm sm:text-base leading-relaxed font-normal">
          <section className="space-y-4">
            <h2 className="font-display text-lg sm:text-xl font-bold text-white tracking-tight flex items-center gap-2">
              <span className="text-neutral-600 font-mono text-xs">01/</span>
              Introduction
            </h2>
            <p>
              Welcome to StreamWave. Your privacy is paramount to us. This Privacy Policy outlines our strict guidelines regarding how we operate, and the extreme measures we take to protect your confidentiality. StreamWave is designed as an open-source, subscription-free, utility media application for Android devices.
            </p>
            <p>
              Unlike conventional streaming services, StreamWave operates on a decentralized core. This means we do not host a proprietary database of personal tracking metrics, keeping your entertainment private.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-lg sm:text-xl font-bold text-white tracking-tight flex items-center gap-2">
              <span className="text-neutral-600 font-mono text-xs">02/</span>
              Information Collection
            </h2>
            <p>
              StreamWave is a strictly zero-registration application.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm text-neutral-400">
              <li>
                <strong className="text-neutral-200">Personal Data:</strong> We do not collect, request, or harvest personal details such as names, emails, billing configurations, physical addresses, or telephone coordinates.
              </li>
              <li>
                <strong className="text-neutral-200">Usage History:</strong> Your active playback logs, watchlists, and favorite markings are stored solely on your local Android device via standard sandboxed client storage. This information is never transmitted to our external servers.
              </li>
              <li>
                <strong className="text-neutral-200">Technical Device Data:</strong> Our streaming clients automatically configure request headers to coordinate video bitrate with local screen aspect ratios. This standard protocol is handled directly between your device and the decentralized server hosts.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-lg sm:text-xl font-bold text-white tracking-tight flex items-center gap-2">
              <span className="text-neutral-600 font-mono text-xs">03/</span>
              Permissions Requested
            </h2>
            <p>
              To deliver high-performance playback and downloads, the StreamWave Android APK requests the following safe permissions:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm text-neutral-400">
              <li>
                <strong className="text-neutral-200">Storage / Media Access:</strong> Required strictly to download video streams and coordinate subtitle synchronization locally.
              </li>
              <li>
                <strong className="text-neutral-200">Network / Internet Connections:</strong> Necessary to stream video sources from public media index hosts and deliver real-time live sports score tickers.
              </li>
              <li>
                <strong className="text-neutral-200">Picture-in-Picture (PiP) Permission:</strong> Grants the floating overlay window capability, enabling you to multitask seamlessly.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-lg sm:text-xl font-bold text-white tracking-tight flex items-center gap-2">
              <span className="text-neutral-600 font-mono text-xs">04/</span>
              Third-Party Services & Links
            </h2>
            <p>
              Our application parses public indexes to locate media feeds. Please be aware that when playing video sources or utilizing external links (such as joining the community Telegram Channel), those destinations have independent privacy guidelines.
            </p>
            <p>
              We highly recommend utilizing a secure VPN protocol if you wish to secure your network endpoints further from public web service providers.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-lg sm:text-xl font-bold text-white tracking-tight flex items-center gap-2">
              <span className="text-neutral-600 font-mono text-xs">05/</span>
              Changes to This Policy
            </h2>
            <p>
              We reserve the right to modify or refine this Privacy Policy to stay in compliance with upcoming Android development guidelines. We will notify the community of policy changes via our official Telegram Channel or by updating the effective date at the top of this document.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-lg sm:text-xl font-bold text-white tracking-tight flex items-center gap-2">
              <span className="text-neutral-600 font-mono text-xs">06/</span>
              Contact Us
            </h2>
            <p>
              If you have inquiries regarding this privacy framework, security implementations, or local file sandboxing mechanisms, feel free to reach out directly to the core development team through our official community channel.
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
