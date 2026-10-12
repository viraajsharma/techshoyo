import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TSMonogram from './TSMonogram';
import { siteConfig } from '../config';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { useRouter } from '../context/RouterContext';

export default function Navbar() {
  const { navigate, isDesignsPage } = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Magnetic button ref
  const buttonRef = useRef(null);
  const [buttonOffset, setButtonOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (currentScrollY > 150) {
        if (currentScrollY > lastScrollY && !mobileMenuOpen) {
          // scrolling down -> hide navbar
          setIsVisible(false);
        } else {
          // scrolling up -> show navbar
          setIsVisible(true);
        }
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, mobileMenuOpen]);

  const handleMagneticMove = (e) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    setButtonOffset({ x: x * 0.25, y: y * 0.25 });
  };

  const handleMagneticLeave = () => {
    setButtonOffset({ x: 0, y: 0 });
  };

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    navigate(href);
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{
          y: isVisible ? 0 : -100,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-black/80 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_10px_30px_rgba(0,0,0,0.8)] py-3.5'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
          {/* Logo / Monogram + Wordmark */}
          <a
            href="/"
            onClick={(e) => handleLinkClick(e, '/')}
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-lg p-1"
            aria-label={`${siteConfig.brand.name} Home`}
          >
            <div className="relative w-8 h-8 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <TSMonogram className="w-8 h-8 text-white transition-colors duration-200" />
              <div className="absolute inset-0 bg-white/20 blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <span className="font-heading font-bold text-lg md:text-xl tracking-tight text-[#FAFAFA] group-hover:text-white transition-colors">
              {siteConfig.brand.name}
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
            {siteConfig.navLinks.map((link) => {
              const isDesignsLink = link.href === '/designs';
              const isActive = isDesignsLink && isDesignsPage;

              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`text-sm font-medium transition-colors duration-200 tracking-wide relative py-1 group flex items-center gap-1.5 ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {/* Subtle red indicator for Designs when active */}
                  {isDesignsLink && (
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 inline-block" />
                  )}
                  <span>{link.label}</span>
                  <span
                    className={`absolute bottom-0 left-0 h-[1.5px] transition-all duration-300 ${
                      isActive
                        ? 'w-full bg-white'
                        : 'w-0 bg-white group-hover:w-full'
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          {/* Right Action: Magnetic CTA */}
          <div className="hidden md:flex items-center gap-4">
            <motion.div
              ref={buttonRef}
              onMouseMove={handleMagneticMove}
              onMouseLeave={handleMagneticLeave}
              animate={{ x: buttonOffset.x, y: buttonOffset.y }}
              transition={{ type: "spring", stiffness: 350, damping: 20 }}
            >
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, '#contact')}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-white text-black font-semibold text-xs tracking-wider uppercase transition-all duration-300 hover:bg-zinc-200 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] active:scale-95"
              >
                <span>{siteConfig.brand.navCta}</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </motion.div>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-zinc-300 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-md"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-2xl md:hidden pt-28 px-8 flex flex-col justify-between pb-12"
          >
            <div className="flex flex-col gap-6">
              {siteConfig.navLinks.map((link, idx) => {
                const isDesignsLink = link.href === '/designs';
                const isActive = isDesignsLink && isDesignsPage;

                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05, duration: 0.3 }}
                    className={`text-2xl font-heading font-semibold border-b border-white/5 pb-3 flex items-center justify-between ${
                      isActive ? 'text-white' : 'text-zinc-300 hover:text-white'
                    }`}
                  >
                    <span>{link.label}</span>
                    {isDesignsLink && (
                      <span className="text-xs font-mono uppercase px-2 py-0.5 rounded-full bg-red-950 text-red-400 border border-red-500/30">
                        Archive
                      </span>
                    )}
                  </motion.a>
                );
              })}
            </div>

            <div className="flex flex-col gap-4">
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, '#contact')}
                className="w-full py-3.5 rounded-full bg-white text-black font-semibold text-center text-sm tracking-wider uppercase"
              >
                {siteConfig.brand.navCta}
              </a>
              <div className="text-center text-xs text-zinc-500 font-mono">
                {siteConfig.brand.email}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
