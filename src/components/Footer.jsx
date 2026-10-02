import React from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '../config';
import TSMonogram from './TSMonogram';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-black pt-20 pb-12 overflow-hidden border-t border-white/[0.08]">
      {/* Background Subtle Tech Grid */}
      <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        {/* Top Footer Navigation & Details */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/[0.06]">
          {/* Brand info */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <TSMonogram className="w-8 h-8 text-white" />
                <span className="font-heading font-bold text-xl tracking-tight text-white">
                  {siteConfig.brand.name}
                </span>
              </div>
              <p className="text-zinc-400 text-sm max-w-sm leading-relaxed mb-6 font-normal">
                {siteConfig.brand.subtext}
              </p>
            </div>

            <div className="text-xs font-mono text-zinc-500">
              {siteConfig.brand.institution} • {siteConfig.brand.location}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-4">
              Navigation
            </h4>
            <ul className="space-y-3">
              {siteConfig.navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-zinc-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials & Contact */}
          <div className="md:col-span-4 flex flex-col justify-between">
            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-4">
                Connect
              </h4>
              <ul className="space-y-3">
                {siteConfig.socialLinks.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-zinc-400 hover:text-white transition-colors flex items-center justify-between group"
                    >
                      <span>{item.name}</span>
                      <span className="text-xs font-mono text-zinc-600 group-hover:text-zinc-400 transition-colors">
                        ↗
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Back to top button */}
            <div className="mt-8">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-zinc-400 hover:text-white transition-colors group"
                aria-label="Back to top"
              >
                <span>Back to top</span>
                <ArrowUp className="w-3.5 h-3.5 transition-transform duration-200 group-hover:-translate-y-1" />
              </button>
            </div>
          </div>
        </div>

        {/* Giant TechShoyo Wordmark Reveal on Scroll */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="pt-12 pb-6 text-center select-none"
        >
          <div className="font-heading font-extrabold text-[13.5vw] leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white/[0.18] to-white/[0.02] hover:from-white/[0.3] hover:to-white/[0.08] transition-all duration-700">
            {siteConfig.footer.wordmark}
          </div>
        </motion.div>

        {/* Bottom Copyright Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-zinc-600 gap-4 border-t border-white/[0.04]">
          <div>{siteConfig.footer.copyright}</div>
          <div>{siteConfig.footer.note}</div>
        </div>
      </div>
    </footer>
  );
}
