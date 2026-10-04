import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import TSMonogram from './TSMonogram';
import { siteConfig } from '../config';
import { ArrowDown, ArrowUpRight, Sparkles } from 'lucide-react';

export default function Hero() {
  const headlineWords = siteConfig.brand.tagline.split(" ");

  // Mouse Parallax for the huge faint monogram
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 120, mass: 0.5 };
  const parallaxX = useSpring(mouseX, springConfig);
  const parallaxY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX - innerWidth / 2) / (innerWidth / 2);
      const y = (e.clientY - innerHeight / 2) / (innerHeight / 2);
      mouseX.set(x * 25);
      mouseY.set(y * 25);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between pt-36 md:pt-44 overflow-hidden border-b border-white/[0.06]">
      {/* Background Subtle Tech Grid */}
      <div className="absolute inset-0 bg-tech-grid opacity-60 pointer-events-none" />

      {/* Radial soft white glow behind hero */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] hero-glow pointer-events-none -z-10" />

      {/* Huge Faint Outlined Monogram with Mouse Parallax (3-5% opacity) */}
      <motion.div
        style={{ x: parallaxX, y: parallaxY }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] md:w-[720px] md:h-[720px] opacity-[0.04] pointer-events-none select-none -z-10 flex items-center justify-center"
      >
        <TSMonogram 
          className="w-full h-full text-white" 
          stroke="white" 
          strokeWidth={2}
          fill="none" 
        />
      </motion.div>

      {/* Main Hero Content */}
      <div className="max-w-6xl mx-auto px-6 md:px-10 text-center flex flex-col items-center z-10 my-auto">
        {/* Student Agency Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md mb-8 hover:border-white/20 transition-colors"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-medium tracking-wide text-zinc-300">
            {siteConfig.brand.heroBadge || "Operating"}
          </span>
        </motion.div>

        {/* Masked Word-by-Word Slide Up Headline */}
        <h1 className="font-heading font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-[#FAFAFA] max-w-5xl leading-[1.08] mb-8">
          {headlineWords.map((word, i) => (
            <span key={i} className="inline-block overflow-hidden py-1">
              <motion.span
                className="inline-block"
                initial={{ y: "120%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{
                  duration: 0.75,
                  delay: 0.15 + i * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {word}&nbsp;
              </motion.span>
            </span>
          ))}
        </h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="text-base sm:text-lg md:text-xl text-zinc-400 max-w-2xl font-normal leading-relaxed mb-10 tracking-tight"
        >
          {siteConfig.brand.subtext}
        </motion.p>

        {/* Dual CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          {/* Primary Button: Solid white with black text, hover inversion */}
          <a
            href="#work"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white text-black font-semibold text-sm tracking-wide transition-all duration-300 hover:bg-black hover:text-white hover:border-white border border-transparent shadow-[0_0_25px_rgba(255,255,255,0.2)] active:scale-95 text-center flex items-center justify-center gap-2 group"
          >
            <span>{siteConfig.brand.ctaPrimary}</span>
            <ArrowDown className="w-4 h-4 transition-transform duration-200 group-hover:translate-y-0.5" />
          </a>

          {/* Secondary Button: Transparent with thin white border, hover inversion */}
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-transparent text-white font-semibold text-sm tracking-wide border border-white/20 transition-all duration-300 hover:bg-white hover:text-black hover:border-white active:scale-95 text-center flex items-center justify-center gap-2 group"
          >
            <span>{siteConfig.brand.ctaSecondary}</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </motion.div>
      </div>

      {/* Marquee Strip below Hero */}
      <div className="w-full border-t border-white/[0.08] bg-black/50 backdrop-blur-sm py-4 overflow-hidden mt-16">
        <div className="flex w-max animate-marquee">
          {[...Array(2)].map((_, arrayIdx) => (
            <div key={arrayIdx} className="flex items-center gap-8 shrink-0 pr-8">
              {siteConfig.marqueeItems.map((item, idx) => (
                <div key={idx} className="flex items-center gap-8">
                  <span className="text-xs uppercase tracking-widest font-heading font-medium text-zinc-400 whitespace-nowrap">
                    {item}
                  </span>
                  <div className="w-3.5 h-3.5 text-zinc-600 shrink-0">
                    <TSMonogram className="w-full h-full text-zinc-600" />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
