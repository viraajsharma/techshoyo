import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig } from '../config';
import { Mail, Copy, Check, Send, Sparkles, ArrowUpRight } from 'lucide-react';
import TSMonogram from './TSMonogram';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: siteConfig.contact.serviceOptions[0],
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  // Handle Input Changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  // Validate form
  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Please enter your name.';
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim() || formData.message.trim().length < 8) {
      newErrors.message = 'Please provide a short description (min 8 chars).';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Simulated Submit with Self-Drawing Checkmark
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 900);
  };

  // Copy Email to Clipboard
  const handleCopyEmail = () => {
    navigator.clipboard.writeText(siteConfig.brand.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section id="contact" className="py-28 md:py-36 relative border-b border-white/[0.06] bg-black">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Info & Quick Copy */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-xs uppercase tracking-widest text-zinc-500 font-mono block mb-3"
              >
                // START A CONVERSATION
              </motion.span>

              <motion.h2 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="font-heading text-3xl sm:text-5xl font-extrabold tracking-tight text-[#FAFAFA] mb-6 leading-tight"
              >
                {siteConfig.contact.heading}
              </motion.h2>

              <motion.p 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-zinc-400 text-base leading-relaxed mb-10"
              >
                {siteConfig.contact.subheading}
              </motion.p>
            </div>

            {/* Direct Email Box with 1-Click Copy */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="p-6 rounded-2xl bg-[#0A0A0A] border border-white/10 hover:border-white/25 transition-colors relative"
            >
              <div className="text-xs uppercase tracking-wider font-mono text-zinc-500 mb-2">
                Direct Founders Inbox
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <a
                  href={`mailto:${siteConfig.brand.email}`}
                  className="font-heading font-semibold text-lg md:text-xl text-white hover:underline underline-offset-4 tracking-tight"
                >
                  {siteConfig.brand.email}
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/[0.06] hover:bg-white text-zinc-300 hover:text-black text-xs font-semibold tracking-wide transition-all duration-200 active:scale-95 border border-white/10"
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>
              </div>

              <div className="mt-4 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs text-zinc-500 font-mono">
                <span>Average response: &lt; 24h</span>
                <span>Delhi NCR (IST)</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Floating-Label Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl bg-[#0A0A0A] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative overflow-hidden">
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  /* Success State with Self-Drawing Checkmark */
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="py-12 flex flex-col items-center text-center"
                  >
                    <div className="w-20 h-20 rounded-full bg-white/5 border border-white/20 flex items-center justify-center mb-6 text-white relative">
                      <svg className="w-10 h-10" viewBox="0 0 52 52" fill="none">
                        <motion.circle
                          cx="26"
                          cy="26"
                          r="24"
                          stroke="currentColor"
                          strokeWidth="2"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 0.5, ease: "easeOut" }}
                        />
                        <motion.path
                          d="M14 27l8 8 16-16"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                        />
                      </svg>
                    </div>

                    <h3 className="font-heading text-2xl font-bold text-white mb-2 tracking-tight">
                      Message Received!
                    </h3>
                    <p className="text-zinc-400 text-sm max-w-sm mb-8 leading-relaxed">
                      Thank you for reaching out to TechShoyo. Viraaj, Ansh, or Suryansh will review your project details and get back to you shortly.
                    </p>

                    <button
                      type="button"
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          name: '',
                          email: '',
                          service: siteConfig.contact.serviceOptions[0],
                          message: '',
                        });
                      }}
                      className="px-6 py-2.5 rounded-full bg-white text-black font-semibold text-xs tracking-wider uppercase hover:bg-zinc-200 transition-colors"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  /* Form */
                  <form onSubmit={handleSubmit} noValidate className="space-y-6">
                    {/* Name Floating Input */}
                    <div className="relative">
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder=" "
                        className="peer w-full px-4 pt-6 pb-2 rounded-xl bg-black border border-white/10 text-white placeholder-transparent focus:border-white focus:outline-none transition-colors text-sm"
                      />
                      <label
                        htmlFor="contact-name"
                        className="absolute left-4 top-2 text-[11px] font-mono uppercase tracking-wider text-zinc-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:text-zinc-500 peer-focus:top-2 peer-focus:text-[11px] peer-focus:text-white pointer-events-none"
                      >
                        Your Name
                      </label>
                      {errors.name && (
                        <span className="text-[11px] text-red-400 font-mono mt-1 block">
                          {errors.name}
                        </span>
                      )}
                    </div>

                    {/* Email Floating Input */}
                    <div className="relative">
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder=" "
                        className="peer w-full px-4 pt-6 pb-2 rounded-xl bg-black border border-white/10 text-white placeholder-transparent focus:border-white focus:outline-none transition-colors text-sm"
                      />
                      <label
                        htmlFor="contact-email"
                        className="absolute left-4 top-2 text-[11px] font-mono uppercase tracking-wider text-zinc-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:text-zinc-500 peer-focus:top-2 peer-focus:text-[11px] peer-focus:text-white pointer-events-none"
                      >
                        Your Email
                      </label>
                      {errors.email && (
                        <span className="text-[11px] text-red-400 font-mono mt-1 block">
                          {errors.email}
                        </span>
                      )}
                    </div>

                    {/* Service Selection Dropdown */}
                    <div className="relative">
                      <label
                        htmlFor="contact-service"
                        className="block text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-2"
                      >
                        Service Required
                      </label>
                      <select
                        id="contact-service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-black border border-white/10 text-white focus:border-white focus:outline-none transition-colors text-sm cursor-pointer appearance-none"
                      >
                        {siteConfig.contact.serviceOptions.map((opt) => (
                          <option key={opt} value={opt} className="bg-zinc-950 text-white py-2">
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Message Floating Textarea */}
                    <div className="relative">
                      <textarea
                        id="contact-message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder=" "
                        className="peer w-full px-4 pt-6 pb-2 rounded-xl bg-black border border-white/10 text-white placeholder-transparent focus:border-white focus:outline-none transition-colors text-sm resize-none"
                      />
                      <label
                        htmlFor="contact-message"
                        className="absolute left-4 top-2 text-[11px] font-mono uppercase tracking-wider text-zinc-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:text-zinc-500 peer-focus:top-2 peer-focus:text-[11px] peer-focus:text-white pointer-events-none"
                      >
                        Tell us about your project or timeline
                      </label>
                      {errors.message && (
                        <span className="text-[11px] text-red-400 font-mono mt-1 block">
                          {errors.message}
                        </span>
                      )}
                    </div>

                    {/* Submit Button: Solid White, Hover Inversion */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-full bg-white text-black font-semibold text-sm tracking-wider uppercase transition-all duration-300 hover:bg-black hover:text-white hover:border-white border border-transparent flex items-center justify-center gap-2 group active:scale-95 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span className="inline-block w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>
                          <span>Send Inquiry</span>
                          <Send className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
