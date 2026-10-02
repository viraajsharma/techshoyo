import React from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '../config';
import { Code2, Layout, Share2, FileCheck, ArrowUpRight } from 'lucide-react';
import { fadeUp, staggerContainer } from '../styles/animations';

const iconMap = {
  Code2: Code2,
  Layout: Layout,
  Share2: Share2,
  FileCheck: FileCheck,
};

export default function Services() {
  return (
    <section id="services" className="py-28 md:py-36 relative border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-6">
          <div>
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs uppercase tracking-widest text-zinc-500 font-mono block mb-3"
            >
              // SERVICES & CAPABILITIES
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="font-heading text-3xl md:text-5xl font-bold tracking-tight text-[#FAFAFA]"
            >
              Built for speed. <br className="hidden md:block" />Designed to convert.
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-zinc-400 text-sm md:text-base max-w-md leading-relaxed"
          >
            We focus exclusively on what moves the needle: clean code, fast page loads, responsive geometry, and intentional user flows.
          </motion.p>
        </div>

        {/* 4 Cards Grid */}
        <motion.div 
          variants={staggerContainer(0.08, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {siteConfig.services.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Code2;

            return (
              <motion.div
                key={service.id}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="group relative p-8 md:p-10 rounded-2xl bg-[#0A0A0A] border border-white/[0.08] hover:border-white/30 transition-all duration-300 overflow-hidden flex flex-col justify-between"
              >
                {/* Subtle White Border Glow Sweep on Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute -inset-[100%] bg-[radial-gradient(circle_at_var(--mouse-x,50%)_var(--mouse-y,50%),rgba(255,255,255,0.08),transparent_50%)]" />
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/[0.03] blur-2xl rounded-full" />
                </div>

                {/* Subtle corner tech accent */}
                <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden pointer-events-none">
                  <div className="absolute top-0 right-0 w-[1px] h-4 bg-white/20" />
                  <div className="absolute top-0 right-0 w-4 h-[1px] bg-white/20" />
                </div>

                <div>
                  {/* Top Row: Icon + Number */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-colors duration-300">
                      <IconComponent className="w-5 h-5 stroke-[1.5]" />
                    </div>
                    <span className="font-mono text-xs text-zinc-500 font-semibold tracking-wider">
                      {service.number}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-heading text-xl md:text-2xl font-bold text-white mb-3 tracking-tight group-hover:translate-x-1 transition-transform duration-300">
                    {service.title}
                  </h3>
                  <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-6 font-normal">
                    {service.description}
                  </p>
                </div>

                {/* Footer details row */}
                <div className="pt-6 border-t border-white/[0.06] flex items-center justify-between">
                  <span className="text-xs text-zinc-500">
                    {service.details}
                  </span>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-zinc-300 group-hover:text-white transition-colors"
                  >
                    <span>Inquire</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
