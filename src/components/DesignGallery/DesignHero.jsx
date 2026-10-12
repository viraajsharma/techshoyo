import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight } from 'lucide-react';

export default function DesignHero({ onExploreClick, onContactClick }) {
  return (
    <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden border-b border-white/[0.06]">
      {/* Background Architectural Grid & Subtle Radial Glow */}
      <div className="absolute inset-0 bg-tech-grid opacity-60 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-blue-600/[0.12] blur-[140px] rounded-full pointer-events-none" />
      <div className="hero-glow absolute inset-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div className="max-w-4xl">
          {/* Small Top Label / Archive Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-blue-950/30 border border-blue-500/25 backdrop-blur-sm mb-6 md:mb-8 shadow-[0_0_15px_rgba(59,130,246,0.12)]"
          >
            {/* Electric Blue Accent Dot */}
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500 shadow-[0_0_8px_#3B82F6]" />
            </span>
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-blue-200 font-medium">
              THE TECHSHOYO CREATIVE ARCHIVE
            </span>
          </motion.div>

          {/* Main Heading: "Made to be seen." */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[#FAFAFA] leading-[1.05] mb-6 md:mb-8"
          >
            Made to be{' '}
            <span className="relative inline-block text-white">
              seen.
              {/* Electric blue accent underline marker */}
              <span className="absolute bottom-1.5 left-0 w-full h-[3px] bg-gradient-to-r from-blue-500 via-blue-400 to-transparent rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
            </span>
          </motion.h1>

          {/* Supporting Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg sm:text-xl md:text-2xl text-zinc-400 font-normal leading-relaxed max-w-2xl mb-10 md:mb-12"
          >
            A collection of ideas, identities and digital experiences brought to life through design.
          </motion.p>

          {/* Hero CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap items-center gap-4 sm:gap-5"
          >
            <button
              onClick={onExploreClick}
              className="inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold text-xs tracking-wider uppercase transition-all duration-300 shadow-[0_0_35px_rgba(37,99,235,0.7)] hover:shadow-[0_0_45px_rgba(59,130,246,0.9)] active:scale-95 group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              <span>Explore the Work</span>
              <ArrowDown className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5" />
            </button>

            <button
              onClick={onContactClick}
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] text-white border border-white/[0.12] hover:border-blue-500/40 font-medium text-xs tracking-wider uppercase transition-all duration-300 active:scale-95 group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-blue-400 group-hover:text-white transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </motion.div>

          {/* Editorial Discipline Pills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="pt-12 md:pt-16 mt-12 md:mt-14 border-t border-white/[0.08] grid grid-cols-2 sm:grid-cols-4 gap-6 text-xs text-zinc-400"
          >
            <div>
              <span className="font-mono text-blue-500 block text-[10px] uppercase tracking-wider mb-1 font-semibold">
                // Disciplines
              </span>
              <span className="text-zinc-300 font-medium">Branding & Identity</span>
            </div>
            <div>
              <span className="font-mono text-blue-500 block text-[10px] uppercase tracking-wider mb-1 font-semibold">
                // Formats
              </span>
              <span className="text-zinc-300 font-medium">Posters & Editorial</span>
            </div>
            <div>
              <span className="font-mono text-blue-500 block text-[10px] uppercase tracking-wider mb-1 font-semibold">
                // Digital
              </span>
              <span className="text-zinc-300 font-medium">UI/UX & Web Media</span>
            </div>
            <div>
              <span className="font-mono text-blue-500 block text-[10px] uppercase tracking-wider mb-1 font-semibold">
                // Studio Model
              </span>
              <span className="text-zinc-300 font-medium">Direct Founder Access</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
