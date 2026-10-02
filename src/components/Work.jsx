import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '../config';
import { ExternalLink, ArrowUpRight, Sparkles, Monitor } from 'lucide-react';
import TSMonogram from './TSMonogram';
import { fadeUp, staggerContainer } from '../styles/animations';

export default function Work() {
  const [activeHoverId, setActiveHoverId] = useState(null);
  const [bubblePos, setBubblePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e, projectId) => {
    const cardRect = e.currentTarget.getBoundingClientRect();
    setBubblePos({
      x: e.clientX - cardRect.left,
      y: e.clientY - cardRect.top,
    });
    setActiveHoverId(projectId);
  };

  const handleMouseLeave = () => {
    setActiveHoverId(null);
  };

  return (
    <section id="work" className="py-28 md:py-36 relative border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 gap-6">
          <div>
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs uppercase tracking-widest text-zinc-500 font-mono block mb-3"
            >
              // PORTFOLIO & CASE STUDIES
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="font-heading text-3xl md:text-5xl font-bold tracking-tight text-[#FAFAFA]"
            >
              Featured Works.
            </motion.h2>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex flex-col items-start md:items-end"
          >
            <span className="text-zinc-400 text-sm md:text-base font-medium">
              {siteConfig.brand.selectedWorkSubtitle}
            </span>
            <span className="text-xs text-zinc-600 font-mono mt-1">
              5 Production & Concept Releases
            </span>
          </motion.div>
        </div>

        {/* Projects Grid: 5 Projects */}
        <motion.div 
          variants={staggerContainer(0.08, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {siteConfig.projects.map((project, index) => {
            const isFullWidthOnLarge = index === 0; // First project spans 2 columns on lg

            return (
              <motion.div
                key={project.id}
                variants={fadeUp}
                className={`group relative rounded-2xl bg-[#0A0A0A] border border-white/[0.08] hover:border-white/30 transition-all duration-300 flex flex-col justify-between overflow-hidden ${
                  isFullWidthOnLarge ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
                onMouseMove={(e) => handleMouseMove(e, project.id)}
                onMouseLeave={handleMouseLeave}
              >
                {/* Cursor-following "View" bubble (Desktop only) */}
                {activeHoverId === project.id && (
                  <motion.div
                    className="hidden md:flex pointer-events-none absolute z-30 w-16 h-16 rounded-full bg-white text-black font-heading font-bold text-xs items-center justify-center tracking-wider shadow-[0_0_20px_rgba(255,255,255,0.4)]"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{
                      scale: 1,
                      opacity: 1,
                      x: bubblePos.x - 32,
                      y: bubblePos.y - 32,
                    }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 450,
                      damping: 25,
                      mass: 0.1,
                    }}
                  >
                    VIEW
                  </motion.div>
                )}

                {/* Card Top: Browser-like Visual Thumbnail Container */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-950 border-b border-white/[0.06] flex flex-col">
                  {/* Fake Browser Top Chrome Bar */}
                  <div className="h-8 px-4 bg-black/60 border-b border-white/[0.04] flex items-center justify-between z-10 shrink-0">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                      <span className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
                      <span className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
                    </div>
                    <div className="text-[10px] font-mono text-zinc-500 truncate max-w-[180px] bg-white/[0.03] px-2 py-0.5 rounded border border-white/5">
                      {project.url.replace(/^https?:\/\//, '')}
                    </div>
                    <div className="w-4" />
                  </div>

                  {/* Thumbnail / Image / Placeholder */}
                  {/* 
                    ⚠️ NOTE TO USER: REPLACE PROJECT SCREENSHOTS
                    To replace this preview with a real screenshot:
                    1. Drop your image into `public/images/projects/${project.id}.webp`
                    2. In `src/config.js`, set `thumbnail: "/images/projects/${project.id}.webp"`
                  */}
                  <div className="relative flex-1 w-full overflow-hidden flex items-center justify-center p-6 group-hover:scale-[1.03] transition-transform duration-500 ease-out">
                    {project.thumbnail ? (
                      <img
                        src={project.thumbnail}
                        alt={`${project.title} screenshot`}
                        loading="lazy"
                        className="w-full h-full object-cover object-top"
                      />
                    ) : (
                      /* Rich Dark Geometric Placeholder with monogram & mock UI structure */
                      <div className={`w-full h-full rounded-lg bg-gradient-to-br ${project.gradient} border border-white/[0.06] p-6 flex flex-col justify-between relative overflow-hidden`}>
                        {/* Background tech wireframe grid */}
                        <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />

                        {/* Top corner tag inside preview */}
                        <div className="flex items-center justify-between z-10">
                          <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-500">
                            {project.year}
                          </span>
                          {project.badge && (
                            <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold tracking-wider uppercase bg-white/10 text-zinc-300 border border-white/20">
                              {project.badge}
                            </span>
                          )}
                        </div>

                        {/* Center graphic preview */}
                        <div className="my-auto flex flex-col items-center justify-center text-center z-10">
                          <div className="w-12 h-12 text-white/15 mb-3">
                            <TSMonogram className="w-full h-full text-white/20" />
                          </div>
                          <span className="font-heading font-bold text-lg md:text-xl text-white tracking-tight">
                            {project.title}
                          </span>
                          <span className="text-xs text-zinc-500 font-mono mt-1">
                            {project.type}
                          </span>
                        </div>

                        {/* Bottom preview line */}
                        <div className="text-[10px] text-zinc-600 font-mono flex items-center justify-between z-10">
                          <span>Status: Live Production</span>
                          <span className="text-zinc-500">techshoyo.me</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Content Footer */}
                <div className="p-6 md:p-8 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-2">
                      <div className="flex items-center gap-2">
                        <h3 className="font-heading text-xl font-bold text-white tracking-tight">
                          {project.title}
                        </h3>
                        {project.badge && (
                          <span className="px-2 py-0.5 rounded text-[10px] font-semibold tracking-wide uppercase bg-white/10 text-zinc-300 border border-white/15">
                            {project.badge}
                          </span>
                        )}
                      </div>
                      <span className="text-xs font-mono text-zinc-500">
                        {project.type}
                      </span>
                    </div>

                    <p className="text-zinc-400 text-sm leading-relaxed mb-6 font-normal">
                      {project.description}
                    </p>
                  </div>

                  {/* Open Live Site Button */}
                  <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white hover:text-zinc-300 transition-colors group/link"
                      aria-label={`Open live site for ${project.title} in a new tab`}
                    >
                      <span>Open Live Site</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                    </a>

                    <span className="text-[11px] font-mono text-zinc-600">
                      External Tab ↗
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
