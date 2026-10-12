import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, CheckCircle2, ArrowUpRight } from 'lucide-react';

export default function DesignModal({
  project,
  isOpen,
  onClose,
  onPrev,
  onNext,
  hasPrev = true,
  hasNext = true,
  currentIndex = 0,
  totalCount = 0,
}) {
  const closeButtonRef = useRef(null);

  // Lock background scroll while modal is open
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      // Auto focus close button for accessibility
      setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 50);

      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  // Keyboard navigation: Escape to close, Left/Right arrows to paginate
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      } else if (e.key === 'ArrowLeft' && hasPrev) {
        e.preventDefault();
        onPrev();
      } else if (e.key === 'ArrowRight' && hasNext) {
        e.preventDefault();
        onNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onPrev, onNext, hasPrev, hasNext]);

  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-project-title"
      >
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/90 backdrop-blur-2xl"
          aria-hidden="true"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 15 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 w-full max-w-5xl max-h-[92vh] bg-[#0A0A0A] border border-white/[0.12] rounded-2xl md:rounded-3xl shadow-[0_25px_70px_rgba(0,0,0,0.9)] overflow-hidden flex flex-col"
        >
          {/* Top Modal Navigation Header */}
          <div className="flex items-center justify-between px-5 sm:px-7 py-4 border-b border-white/[0.08] bg-black/60 backdrop-blur-md">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono uppercase tracking-widest text-red-400 font-semibold">
                {project.categoryLabel}
              </span>
              <span className="text-zinc-600">•</span>
              <span className="text-xs font-mono text-zinc-400">
                {currentIndex + 1} of {totalCount}
              </span>
            </div>

            {/* Quick Actions & Close Button */}
            <div className="flex items-center gap-2">
              {/* Previous / Next Mini Controls */}
              <div className="flex items-center border border-white/[0.1] rounded-full overflow-hidden mr-2">
                <button
                  onClick={onPrev}
                  disabled={!hasPrev}
                  aria-label="Previous design project"
                  className="p-1.5 px-2.5 hover:bg-white/10 text-zinc-300 hover:text-white disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <div className="w-[1px] h-4 bg-white/[0.08]" />
                <button
                  onClick={onNext}
                  disabled={!hasNext}
                  aria-label="Next design project"
                  className="p-1.5 px-2.5 hover:bg-white/10 text-zinc-300 hover:text-white disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Close Button */}
              <button
                ref={closeButtonRef}
                onClick={onClose}
                aria-label="Close modal preview"
                className="p-2 rounded-full bg-white/5 hover:bg-white/15 text-zinc-300 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Modal Main Scrollable Content */}
          <div className="flex-1 overflow-y-auto no-scrollbar grid grid-cols-1 lg:grid-cols-12">
            {/* Left / Center: High-Resolution Artwork Stage */}
            <div className="lg:col-span-7 bg-black/90 p-4 sm:p-8 flex items-center justify-center relative min-h-[300px] sm:min-h-[420px] border-b lg:border-b-0 lg:border-r border-white/[0.08]">
              {/* Prev / Next Floating Arrows */}
              <button
                onClick={onPrev}
                disabled={!hasPrev}
                aria-label="Previous artwork"
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/70 hover:bg-black text-white border border-white/15 disabled:opacity-0 transition-all z-20 hidden sm:flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={onNext}
                disabled={!hasNext}
                aria-label="Next artwork"
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/70 hover:bg-black text-white border border-white/15 disabled:opacity-0 transition-all z-20 hidden sm:flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Artwork Container */}
              <div className="max-w-full max-h-[68vh] flex items-center justify-center overflow-hidden rounded-xl bg-zinc-950/80 shadow-[0_0_40px_rgba(0,0,0,0.8)] border border-white/[0.06]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="max-h-[68vh] max-w-full w-auto h-auto object-contain select-none"
                />
              </div>
            </div>

            {/* Right: Project Details & Information */}
            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between bg-[#0A0A0A]">
              <div>
                {/* Meta Badges */}
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  {project.isRealWork ? (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider bg-emerald-950/50 text-emerald-300 border border-emerald-500/30">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      Client Project
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider bg-red-950/50 text-red-300 border border-red-500/30">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                      Studio Template
                    </span>
                  )}

                  <span className="px-2.5 py-1 rounded-full text-xs font-mono text-zinc-400 bg-white/[0.04] border border-white/[0.08]">
                    {project.year}
                  </span>
                </div>

                {/* Project Title */}
                <h2
                  id="modal-project-title"
                  className="font-heading text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug mb-4"
                >
                  {project.title}
                </h2>

                {/* Description */}
                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                  {project.description}
                </p>

                {/* Deep Dive Details */}
                {project.details && (
                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] mb-6">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 block mb-1.5">
                      // Design Rationale & Execution
                    </span>
                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                      {project.details}
                    </p>
                  </div>
                )}

                {/* Deliverables / Scope */}
                {project.deliverables && project.deliverables.length > 0 && (
                  <div className="mb-6">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 block mb-2.5">
                      // Deliverables
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {project.deliverables.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-zinc-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-red-400 flex-shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tags */}
                {project.tags && project.tags.length > 0 && (
                  <div className="mb-6">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 block mb-2">
                      // Tags
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded text-[11px] font-mono text-zinc-400 bg-white/[0.04] border border-white/[0.06]"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Inquire / Action Bar */}
              <div className="pt-6 border-t border-white/[0.08] flex items-center justify-between gap-4">
                <a
                  href="#contact"
                  onClick={onClose}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-white text-black font-semibold text-xs tracking-wider uppercase transition-all duration-300 hover:bg-zinc-200 shadow-[0_0_20px_rgba(255,255,255,0.2)] active:scale-95 text-center"
                >
                  <span>Request Similar Design</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
