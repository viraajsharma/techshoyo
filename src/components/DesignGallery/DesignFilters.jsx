import React, { useRef } from 'react';
import { motion } from 'framer-motion';

export default function DesignFilters({
  categories,
  activeCategory,
  onSelectCategory,
  counts = {},
}) {
  const scrollContainerRef = useRef(null);

  return (
    <div className="sticky top-20 z-30 py-4 bg-black/85 backdrop-blur-xl border-y border-white/[0.08] transition-all">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex items-center justify-between gap-4">
          {/* Category Filter Pills Container */}
          <div
            ref={scrollContainerRef}
            className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1 scroll-smooth w-full"
            role="tablist"
            aria-label="Filter designs by creative discipline"
          >
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              const count = counts[cat.id] ?? 0;

              return (
                <button
                  key={cat.id}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls="gallery-grid"
                  onClick={() => onSelectCategory(cat.id)}
                  className={`relative px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all duration-200 whitespace-nowrap select-none flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-white ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-zinc-400 hover:text-zinc-200 bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.06]'
                  }`}
                >
                  {/* Framer Motion Shared Layout Active Pill */}
                  {isActive && (
                    <motion.div
                      layoutId="activeCategoryPill"
                      transition={{ type: 'spring', stiffness: 380, damping: 28 }}
                      className="absolute inset-0 rounded-full bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                    />
                  )}

                  <span className={`relative z-10 ${isActive ? 'text-black' : ''}`}>
                    {cat.label}
                  </span>

                  {/* Project Count Badge */}
                  <span
                    className={`relative z-10 text-[10px] font-mono px-1.5 py-0.2 rounded-full transition-colors ${
                      isActive
                        ? 'bg-black/10 text-black font-bold'
                        : 'bg-white/5 text-zinc-500'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
