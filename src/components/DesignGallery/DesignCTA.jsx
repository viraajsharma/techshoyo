import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Mail, Sparkles } from 'lucide-react';
import { siteConfig } from '../../config';

export default function DesignCTA({ onStartProjectClick }) {
  return (
    <section id="design-cta" className="py-24 md:py-36 relative border-t border-white/[0.08] overflow-hidden bg-black">
      {/* Background Architectural Grid & Subtle Red Glow */}
      <div className="absolute inset-0 bg-tech-grid opacity-40 pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-red-600/[0.04] blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mx-auto"
        >
          {/* Eyebrow Label */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-zinc-400">
              NEXT STEPS & COLLABORATION
            </span>
          </div>

          {/* Heading: "Have an idea worth bringing to life?" */}
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#FAFAFA] leading-tight mb-6">
            Have an idea worth bringing to life?
          </h2>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg md:text-xl text-zinc-400 font-normal leading-relaxed max-w-xl mx-auto mb-10">
            Let's turn your next idea into something people remember.
          </p>

          {/* Buttons & Inquiry Channels */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <a
              href="#contact"
              onClick={onStartProjectClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-white text-black font-semibold text-xs tracking-wider uppercase transition-all duration-300 hover:bg-zinc-200 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] active:scale-95 group focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <a
              href={`mailto:${siteConfig.brand.email}?subject=Creative%20Design%20Inquiry%20—%20Techshoyo`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-white/[0.04] hover:bg-white/[0.08] text-white border border-white/[0.12] hover:border-white/30 font-medium text-xs tracking-wider uppercase transition-all duration-300 active:scale-95 group focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <Mail className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors" />
              <span>{siteConfig.brand.email}</span>
            </a>
          </div>

          {/* Reassuring Agency Pillars */}
          <div className="pt-10 border-t border-white/[0.08] flex flex-wrap items-center justify-center gap-8 text-xs text-zinc-500 font-mono">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>Direct Founder Collaboration</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
              <span>Tailored Visual Identity Systems</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
              <span>Turnarounds Measured in Days</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
