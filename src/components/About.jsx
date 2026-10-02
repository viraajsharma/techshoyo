import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '../config';
import { GraduationCap, Code, Sparkles, Terminal, ArrowUpRight } from 'lucide-react';
import TSMonogram from './TSMonogram';
import { fadeUp, staggerContainer } from '../styles/animations';

export default function About() {
  const [hoveredFounder, setHoveredFounder] = useState(null);

  return (
    <section id="about" className="py-28 md:py-36 relative border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header & Warm Story */}
        <div className="max-w-4xl mb-20 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] text-xs font-mono text-zinc-400 mb-6"
          >
            <GraduationCap className="w-3.5 h-3.5 text-zinc-300" />
            <span>{siteConfig.about.badge}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="font-heading text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#FAFAFA] mb-8 leading-[1.1]"
          >
            {siteConfig.about.heading}
          </motion.h2>

          <div className="space-y-6 text-zinc-400 text-base md:text-lg leading-relaxed font-normal">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              {siteConfig.about.storyParagraph1}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              {siteConfig.about.storyParagraph2}
            </motion.p>
          </div>
        </div>

        {/* 3 Founder Cards */}
        <motion.div
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {siteConfig.founders.map((founder, index) => (
            <motion.div
              key={founder.id}
              variants={fadeUp}
              whileHover={{ y: -8, rotateX: 2, rotateY: index === 0 ? 3 : index === 2 ? -3 : 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformPerspective: 1000 }}
              className="group relative rounded-2xl bg-[#0A0A0A] border border-white/[0.08] hover:border-white/30 transition-all duration-300 p-6 md:p-8 flex flex-col justify-between overflow-hidden"
              onMouseEnter={() => setHoveredFounder(founder.id)}
              onMouseLeave={() => setHoveredFounder(null)}
            >
              {/* Subtle top chamfer tech accent */}
              <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-[1px] h-4 bg-white/20" />
                <div className="absolute top-0 right-0 w-4 h-[1px] bg-white/20" />
              </div>

              <div>
                {/* Photo / Avatar Placeholder with Grayscale to Full-Tone Hover */}
                {/* 
                  ⚠️ NOTE TO USER: REPLACE FOUNDER PHOTOS
                  To replace this photo placeholder:
                  1. Place your photo in `public/images/founders/${founder.id}.jpg`
                  2. In `src/config.js`, set `photo: "/images/founders/${founder.id}.jpg"`
                */}
                <div className="relative aspect-square w-full rounded-xl overflow-hidden mb-6 bg-zinc-900 border border-white/10 group-hover:border-white/20 transition-colors">
                  {founder.photo ? (
                    <img
                      src={founder.photo}
                      alt={founder.name}
                      className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                    />
                  ) : (
                    /* Minimalist Architectural Avatar Placeholder */
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-b from-zinc-900 to-black text-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-tech-grid opacity-30" />
                      
                      <div className="w-20 h-20 rounded-full border border-white/10 flex items-center justify-center bg-white/[0.03] mb-4 text-white group-hover:scale-110 group-hover:border-white/30 transition-all duration-300">
                        <TSMonogram className="w-10 h-10 text-white/50 group-hover:text-white transition-colors" />
                      </div>

                      <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">
                        Photo Placeholder
                      </span>
                      <span className="text-[11px] text-zinc-600 font-mono mt-0.5">
                        config.js → founders
                      </span>
                    </div>
                  )}

                  {/* Corner tag on photo */}
                  <div className="absolute bottom-3 left-3 px-2 py-0.5 rounded bg-black/80 backdrop-blur-md border border-white/10 text-[10px] font-mono text-zinc-400">
                    {founder.credentials}
                  </div>
                </div>

                {/* Name & Role */}
                {/* ⚠️ NOTE TO USER: REPLACE FOUNDER ROLE & BIO IN src/config.js */}
                <h3 className="font-heading text-2xl font-bold text-white tracking-tight mb-1 group-hover:text-white transition-colors">
                  {founder.name}
                </h3>
                <p className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-4">
                  {founder.role}
                </p>

                {/* Short Bio */}
                <p className="text-zinc-400 text-sm leading-relaxed mb-6 font-normal">
                  {founder.bio}
                </p>
              </div>

              {/* Institution Footnote */}
              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs text-zinc-500 font-mono">
                <span>{founder.institution}</span>
                <span className="text-zinc-600">Bangalore</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
