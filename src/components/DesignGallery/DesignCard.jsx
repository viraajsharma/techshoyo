import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Maximize2, ArrowUpRight } from 'lucide-react';

export default function DesignCard({ project, onClick }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="group relative rounded-2xl bg-[#0A0A0A] border border-white/[0.08] hover:border-blue-500/40 hover:shadow-[0_0_25px_rgba(59,130,246,0.12)] transition-all duration-300 overflow-hidden flex flex-col cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
      onClick={() => onClick(project)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick(project);
        }
      }}
      tabIndex={0}
      role="button"
      aria-label={`View design project: ${project.title}`}
    >
      {/* Visual Asset Container */}
      <div className={`relative w-full overflow-hidden bg-zinc-950 flex items-center justify-center ${project.aspectClass || 'aspect-square'}`}>
        {/* Placeholder skeleton while loading */}
        {!imageLoaded && !hasError && (
          <div className="absolute inset-0 bg-zinc-900/60 animate-pulse flex items-center justify-center">
            <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
              Loading Asset...
            </span>
          </div>
        )}

        {/* Artwork Image */}
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
          onError={() => {
            setHasError(true);
            setImageLoaded(true);
          }}
          className={`w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04] ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Top Badges Overlay */}
        <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none z-10">
          {/* Work Type Badge */}
          {project.isRealWork ? (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider bg-black/70 backdrop-blur-md text-zinc-300 border border-white/10">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Client Project
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider bg-black/70 backdrop-blur-md text-blue-200 border border-blue-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shadow-[0_0_6px_#3B82F6]" />
              Studio Showcase
            </span>
          )}

          {/* Year Badge */}
          <span className="px-2 py-0.5 rounded text-[10px] font-mono text-zinc-400 bg-black/60 backdrop-blur-md border border-white/5">
            {project.year}
          </span>
        </div>

        {/* Hover Gradient Overlay with "Inspect" Action */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5 z-20">
          <div className="w-full flex items-center justify-between text-white">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white">
              <span>Inspect Artwork</span>
              <Maximize2 className="w-3.5 h-3.5 text-blue-400" />
            </span>
            <span className="text-[11px] font-mono text-zinc-400">
              TechShoyo
            </span>
          </div>
        </div>
      </div>

      {/* Card Content Details */}
      <div className="p-5 md:p-6 flex flex-col justify-between flex-1 border-t border-white/[0.06] bg-[#0A0A0A]">
        <div>
          {/* Category Eyebrow & Tag */}
          <div className="flex items-center justify-between gap-2 mb-2">
            <span className="text-[11px] font-mono uppercase tracking-wider text-blue-400 font-semibold">
              {project.categoryLabel}
            </span>
            {project.tags && project.tags[0] && (
              <span className="text-[10px] font-mono text-zinc-500 truncate max-w-[120px]">
                {project.tags[0]}
              </span>
            )}
          </div>

          {/* Project Title */}
          <h3 className="font-heading text-lg md:text-xl font-bold text-[#FAFAFA] group-hover:text-white transition-colors tracking-tight line-clamp-1 mb-2">
            {project.title}
          </h3>

          {/* Project Description excerpt */}
          <p className="text-zinc-400 text-xs sm:text-sm line-clamp-2 leading-relaxed mb-4">
            {project.description}
          </p>
        </div>

        {/* Bottom Tags / Details */}
        <div className="pt-3 border-t border-white/[0.04] flex items-center justify-between text-xs text-zinc-500">
          <span className="text-[11px] font-mono text-zinc-500">
            {project.deliverables ? `${project.deliverables.length} Deliverables` : 'Design Asset'}
          </span>
          <span className="inline-flex items-center gap-1 text-[11px] font-medium text-zinc-400 group-hover:text-blue-400 transition-colors">
            <span>View Full Details</span>
            <ArrowUpRight className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </div>
    </motion.div>
  );
}
