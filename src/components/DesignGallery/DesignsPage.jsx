import React, { useState, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import DesignHero from './DesignHero';
import DesignFilters from './DesignFilters';
import DesignCard from './DesignCard';
import DesignModal from './DesignModal';
import DesignCTA from './DesignCTA';
import Footer from '../Footer';
import { DESIGN_CATEGORIES, DESIGNS_DATA } from '../../data/designsData';
import { useRouter } from '../../context/RouterContext';
import { ArrowLeft } from 'lucide-react';

export default function DesignsPage() {
  const { navigate } = useRouter();
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const galleryRef = useRef(null);

  // Compute category project counts
  const categoryCounts = useMemo(() => {
    const counts = { all: DESIGNS_DATA.length };
    DESIGN_CATEGORIES.forEach((cat) => {
      if (cat.id !== 'all') {
        counts[cat.id] = DESIGNS_DATA.filter((p) =>
          p.category === cat.id || (p.categories && p.categories.includes(cat.id))
        ).length;
      }
    });
    return counts;
  }, []);

  // Filter projects by category
  const filteredProjects = useMemo(() => {
    if (activeCategory === 'all') {
      return DESIGNS_DATA;
    }
    return DESIGNS_DATA.filter((p) =>
      p.category === activeCategory || (p.categories && p.categories.includes(activeCategory))
    );
  }, [activeCategory]);

  // Modal navigation indices
  const currentModalIndex = useMemo(() => {
    if (!selectedProject) return -1;
    return filteredProjects.findIndex((p) => p.id === selectedProject.id);
  }, [selectedProject, filteredProjects]);

  const handlePrevProject = () => {
    if (currentModalIndex > 0) {
      setSelectedProject(filteredProjects[currentModalIndex - 1]);
    } else {
      setSelectedProject(filteredProjects[filteredProjects.length - 1]);
    }
  };

  const handleNextProject = () => {
    if (currentModalIndex < filteredProjects.length - 1) {
      setSelectedProject(filteredProjects[currentModalIndex + 1]);
    } else {
      setSelectedProject(filteredProjects[0]);
    }
  };

  const scrollToGallery = () => {
    if (galleryRef.current) {
      galleryRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleStartProject = (e) => {
    e?.preventDefault();
    navigate('#contact');
  };

  return (
    <div className="relative min-h-screen bg-black text-[#FAFAFA] font-sans selection:bg-white selection:text-black">
      {/* 1. Hero Section */}
      <DesignHero
        onExploreClick={scrollToGallery}
        onContactClick={handleStartProject}
      />

      {/* 2. Sticky Category Filters */}
      <div ref={galleryRef} id="gallery" className="scroll-mt-24">
        <DesignFilters
          categories={DESIGN_CATEGORIES}
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
          counts={categoryCounts}
        />
      </div>

      {/* 3. Gallery Grid Section */}
      <section className="py-14 md:py-20 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          {/* Gallery Status & Filter Summary Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-8 mb-10 border-b border-white/[0.06] gap-4">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
                // ARCHIVE FEED
              </span>
              <span className="text-zinc-600">•</span>
              <span className="text-xs font-mono text-zinc-400">
                Displaying {filteredProjects.length} of {DESIGNS_DATA.length} Creative Releases
              </span>
            </div>

            {/* Back to Home Quick Shortcut */}
            <button
              onClick={() => navigate('/')}
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-zinc-400 hover:text-white transition-colors self-start sm:self-auto group"
            >
              <ArrowLeft className="w-3.5 h-3.5 transition-transform duration-200 group-hover:-translate-x-1" />
              <span>Back to TechShoyo Home</span>
            </button>
          </div>

          {/* Asymmetric / Masonry Grid */}
          <motion.div
            layout
            id="gallery-grid"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-start"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => {
                // Apply asymmetric spanning to certain visual cards on large screens
                // e.g. landscape advertising or wide web items can span 2 cols on desktop if desired
                const isFeaturedWide = project.aspect === 'landscape' && (index % 4 === 0);

                return (
                  <div
                    key={project.id}
                    className={isFeaturedWide ? 'sm:col-span-2 lg:col-span-2' : ''}
                  >
                    <DesignCard
                      project={project}
                      onClick={(p) => setSelectedProject(p)}
                    />
                  </div>
                );
              })}
            </AnimatePresence>
          </motion.div>

          {/* Empty State Fallback (if no projects match) */}
          {filteredProjects.length === 0 && (
            <div className="py-24 text-center border border-white/[0.08] rounded-2xl bg-white/[0.01]">
              <p className="text-zinc-400 text-sm mb-4">
                No designs currently categorized under this discipline.
              </p>
              <button
                onClick={() => setActiveCategory('all')}
                className="px-5 py-2.5 rounded-full bg-white text-black text-xs font-semibold uppercase tracking-wider hover:bg-zinc-200 transition-colors"
              >
                Reset to All Work
              </button>
            </div>
          )}
        </div>
      </section>

      {/* 4. Lightbox Modal */}
      <DesignModal
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
        onPrev={handlePrevProject}
        onNext={handleNextProject}
        hasPrev={filteredProjects.length > 1}
        hasNext={filteredProjects.length > 1}
        currentIndex={currentModalIndex}
        totalCount={filteredProjects.length}
      />

      {/* 5. Final Call-to-Action */}
      <DesignCTA onStartProjectClick={handleStartProject} />

      {/* 6. Existing Website Footer */}
      <Footer />
    </div>
  );
}
