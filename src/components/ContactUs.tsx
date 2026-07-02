import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, Mail, Send, CheckCircle, MessageSquare, AlertCircle } from "lucide-react";
import { TELEGRAM_URL } from "../config";

interface ContactUsProps {
  onBack: () => void;
}

export const ContactUs: React.FC<ContactUsProps> = ({ onBack }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "support",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  React.useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "support", message: "" });
    }, 1200);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="min-h-screen bg-[#000000] text-white pt-28 pb-20 px-6 font-sans selection:bg-white selection:text-black"
      id="contact-us-view"
    >
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="group flex items-center gap-2 px-4 py-2 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 hover:border-neutral-700 text-xs font-semibold uppercase tracking-wider text-neutral-300 hover:text-white rounded-full transition-all duration-200 mb-10 cursor-pointer"
          id="contact-back-btn"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </button>

        {/* Header Block */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 pb-10 border-b border-neutral-900 mb-12">
          <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white shadow-xl">
            <Mail className="w-7 h-7" />
          </div>
          <div>
            <h1 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight mb-2">
              Contact StreamWave Support
            </h1>
            <p className="text-neutral-500 text-sm">
              Have feedback, reports, or advertising questions? Reach out instantly.
            </p>
          </div>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Support info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 bg-neutral-950 border border-neutral-900 rounded-2xl space-y-4">
              <h2 className="text-base font-semibold text-white flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-neutral-400" />
                Community Channel
              </h2>
              <p className="text-neutral-400 text-xs leading-relaxed">
                For fast support, community discussions, release announcements, and custom stream requests, join our official Telegram channel.
              </p>
              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 hover:border-neutral-700 text-[11px] font-semibold tracking-wider text-white uppercase rounded-full transition-all duration-200"
              >
                <Send className="w-3 h-3" />
                Join Telegram Channel
              </a>
            </div>

            <div className="p-6 bg-neutral-950 border border-neutral-900 rounded-2xl space-y-3">
              <h2 className="text-base font-semibold text-white flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-neutral-400" />
                Bug Reporting
              </h2>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Please specify your Android version, device model, and streaming title when reporting active video player crashes or playback latency.
              </p>
            </div>
          </div>

          {/* Right Column: Contact form */}
          <div className="lg:col-span-7">
            <div className="bg-neutral-950 border border-neutral-900 rounded-3xl p-6 sm:p-8 relative overflow-hidden">
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    key="contact-form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                    id="contact-support-form"
                  >
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full bg-neutral-900 border border-neutral-850 hover:border-neutral-800 focus:border-white text-sm text-white px-4 py-3 rounded-xl focus:outline-none transition-all duration-200"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="johndoe@example.com"
                        className="w-full bg-neutral-900 border border-neutral-850 hover:border-neutral-800 focus:border-white text-sm text-white px-4 py-3 rounded-xl focus:outline-none transition-all duration-200"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">
                        Subject
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full bg-neutral-900 border border-neutral-850 hover:border-neutral-800 focus:border-white text-sm text-white px-4 py-3 rounded-xl focus:outline-none transition-all duration-200 cursor-pointer"
                      >
                        <option value="support">App Support & Bugs</option>
                        <option value="dmca">DMCA / Copyright Reports</option>
                        <option value="business">Business / Advertising</option>
                        <option value="other">General Inquiries</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">
                        Message Content
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Write your message details here..."
                        className="w-full bg-neutral-900 border border-neutral-850 hover:border-neutral-800 focus:border-white text-sm text-white px-4 py-3 rounded-xl focus:outline-none transition-all duration-200 resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3 px-6 bg-white hover:bg-neutral-200 text-black font-semibold uppercase tracking-wider text-xs rounded-xl transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                      id="contact-submit-btn"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5" />
                          Send Message
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-card"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 text-center space-y-4"
                  >
                    <div className="w-12 h-12 bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-2">
                      <CheckCircle className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-white">Message Transmitted!</h3>
                    <p className="text-neutral-500 text-xs max-w-sm mx-auto leading-relaxed">
                      Thank you for contacting StreamWave support. We have received your query and our development team will respond via email as soon as possible.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="inline-flex px-4 py-2 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-xs font-semibold tracking-wider uppercase text-neutral-300 hover:text-white rounded-full transition-all duration-200 cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
