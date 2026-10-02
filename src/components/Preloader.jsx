import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TSMonogram from './TSMonogram';
import { siteConfig } from '../config';

export default function Preloader({ onComplete }) {
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Under 1s total duration: completes at 850ms, wipes up smoothly
    const timer = setTimeout(() => {
      setIsDone(true);
      if (onComplete) onComplete();
    }, 850);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{ 
            y: "-100%", 
            transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } 
          }}
          className="fixed inset-0 z-[1000] flex flex-col items-center justify-center bg-black text-white pointer-events-none select-none"
        >
          {/* Subtle noise backdrop */}
          <div className="absolute inset-0 bg-grain pointer-events-none opacity-40" />

          <motion.div 
            className="relative flex flex-col items-center gap-4"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Animated TS Monogram */}
            <div className="relative w-20 h-20 md:w-24 md:h-24">
              <TSMonogram 
                className="w-full h-full text-white" 
                animated={true}
                pathTransition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              />
              <div className="absolute inset-0 bg-white/20 blur-xl rounded-full -z-10 animate-pulse-subtle" />
            </div>

            {/* Wordmark */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.4 }}
              className="text-center"
            >
              <h1 className="font-heading font-bold text-lg tracking-widest text-[#FAFAFA] uppercase">
                {siteConfig.brand.name}
              </h1>
              <p className="text-[11px] tracking-widest text-zinc-500 uppercase mt-0.5">
                {siteConfig.brand.monogramText} • STUDIO
              </p>
            </motion.div>
          </motion.div>

          {/* Bottom subtle progress indicator */}
          <motion.div 
            className="absolute bottom-12 w-24 h-[1px] bg-zinc-800 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
          >
            <motion.div 
              className="h-full bg-white"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
