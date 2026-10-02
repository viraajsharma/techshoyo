import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { siteConfig } from '../config';
import { Compass, PenTool, Terminal, Rocket } from 'lucide-react';

const processIcons = [Compass, PenTool, Terminal, Rocket];

export default function Process() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "end 50%"],
  });

  const lineHeight = useSpring(scrollYProgress, {
    stiffness: 150,
    damping: 25,
    restDelta: 0.001,
  });

  return (
    <section 
      id="process" 
      ref={containerRef}
      className="py-28 md:py-36 relative border-b border-white/[0.06] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 md:mb-28">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-widest text-zinc-500 font-mono block mb-3"
          >
            // EXECUTION PIPELINE
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="font-heading text-3xl md:text-5xl font-bold tracking-tight text-[#FAFAFA] mb-4"
          >
            How we take you from zero to live.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-zinc-400 text-sm md:text-base"
          >
            Four structured phases. No bloated agency rituals. Just rapid execution and direct collaboration.
          </motion.p>
        </div>

        {/* Process Steps with Scroll-Drawing Connected Line */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Connecting Line (Desktop) */}
          <div className="hidden md:block absolute left-8 top-10 bottom-10 w-[2px] bg-white/[0.08]">
            <motion.div
              style={{ scaleY: lineHeight }}
              className="w-full h-full bg-white origin-top shadow-[0_0_12px_rgba(255,255,255,0.7)]"
            />
          </div>

          <div className="flex flex-col gap-12 md:gap-16">
            {siteConfig.process.map((step, index) => {
              const Icon = processIcons[index] || Compass;

              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="relative flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 group"
                >
                  {/* Step Node with Number */}
                  <div className="relative z-10 w-16 h-16 rounded-2xl bg-black border border-white/20 group-hover:border-white group-hover:bg-white group-hover:text-black flex items-center justify-center text-white shrink-0 transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.8)]">
                    <span className="font-heading font-bold text-lg">
                      {step.step}
                    </span>
                    {/* Outer glow ring on hover */}
                    <div className="absolute inset-0 rounded-2xl bg-white/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                  </div>

                  {/* Card Content */}
                  <div className="flex-1 p-8 rounded-2xl bg-[#0A0A0A] border border-white/[0.08] group-hover:border-white/25 transition-all duration-300 relative overflow-hidden">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                      <div className="flex items-center gap-3">
                        <Icon className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" />
                        <h3 className="font-heading text-xl md:text-2xl font-bold text-white tracking-tight">
                          {step.name}
                        </h3>
                      </div>
                      <span className="text-xs font-mono uppercase tracking-wider text-zinc-500">
                        {step.tagline}
                      </span>
                    </div>

                    <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-normal">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
