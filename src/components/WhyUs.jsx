import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { siteConfig } from '../config';
import { Users, Zap, ShieldCheck, LockOpen, ArrowUpRight } from 'lucide-react';
import { fadeUp, staggerContainer } from '../styles/animations';

const iconMap = {
  Users: Users,
  Zap: Zap,
  ShieldCheck: ShieldCheck,
  LockOpen: LockOpen,
};

function CountUpNumber({ targetValue, suffix = "" }) {
  const [currentValue, setCurrentValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 1200; // ms
    const stepTime = 30;
    const steps = duration / stepTime;
    const increment = targetValue / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= targetValue) {
        setCurrentValue(targetValue);
        clearInterval(timer);
      } else {
        setCurrentValue(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, targetValue]);

  return (
    <span ref={ref} className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl text-white tracking-tight">
      {currentValue}
      {suffix}
    </span>
  );
}

export default function WhyUs() {
  return (
    <section className="py-28 md:py-36 relative border-b border-white/[0.06] bg-black">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-widest text-zinc-500 font-mono block mb-3"
          >
            // THE TECHSHOYO ADVANTAGE
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="font-heading text-3xl md:text-5xl font-bold tracking-tight text-[#FAFAFA] mb-4"
          >
            {siteConfig.whyUs.heading}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-zinc-400 text-sm md:text-base leading-relaxed"
          >
            {siteConfig.whyUs.subheading}
          </motion.p>
        </div>

        {/* Real Numbers Metrics Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 md:mb-24 border-y border-white/[0.08] py-10">
          {siteConfig.whyUs.stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.6 }}
              className="flex flex-col"
            >
              <div className="mb-2">
                <CountUpNumber targetValue={stat.value} suffix={stat.suffix} />
              </div>
              <span className="font-heading text-sm md:text-base font-semibold text-zinc-200">
                {stat.label}
              </span>
              <span className="text-xs text-zinc-500 mt-1 max-w-[200px]">
                {stat.description}
              </span>
            </motion.div>
          ))}
        </div>

        {/* 4 Feature Points Grid */}
        <motion.div 
          variants={staggerContainer(0.08, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {siteConfig.whyUs.features.map((feature, idx) => {
            const Icon = iconMap[feature.icon] || Zap;

            return (
              <motion.div
                key={feature.title}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="p-8 rounded-2xl bg-[#0A0A0A] border border-white/[0.08] hover:border-white/25 transition-all duration-300 relative group overflow-hidden"
              >
                <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-white mb-6 group-hover:bg-white group-hover:text-black transition-colors duration-300">
                  <Icon className="w-5 h-5 stroke-[1.5]" />
                </div>

                <h3 className="font-heading text-xl font-bold text-white mb-2 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed font-normal">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
