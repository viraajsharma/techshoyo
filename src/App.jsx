import React, { useState } from 'react';
import Preloader from './components/Preloader';
import ProgressBar from './components/ProgressBar';
import CustomCursor from './components/CustomCursor';
import SmoothScroll from './components/SmoothScroll';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Work from './components/Work';
import Process from './components/Process';
import About from './components/About';
import WhyUs from './components/WhyUs';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [preloaderFinished, setPreloaderFinished] = useState(false);

  return (
    <SmoothScroll>
      {/* Preloader (<1s duration) */}
      <Preloader onComplete={() => setPreloaderFinished(true)} />

      {/* Top Thin White Scroll Progress Bar */}
      <ProgressBar />

      {/* Desktop-only subtle custom cursor */}
      <CustomCursor />

      {/* Main Page Container */}
      <div className="relative min-h-screen bg-black text-[#FAFAFA] font-sans overflow-x-hidden selection:bg-white selection:text-black">
        {/* Subtle noise grain overlay */}
        <div className="fixed inset-0 bg-grain pointer-events-none z-30" />

        {/* Navigation Bar */}
        <Navbar />

        {/* Main Content Sections (In exact requested order) */}
        <main id="main-content">
          {/* 1. Hero */}
          <Hero />

          {/* 2. Services */}
          <Services />

          {/* 3. Work */}
          <Work />

          {/* 4. Process */}
          <Process />

          {/* 5. About */}
          <About />

          {/* 6. Why Us */}
          <WhyUs />

          {/* 7. Contact */}
          <Contact />
        </main>

        {/* 8. Footer */}
        <Footer />
      </div>
    </SmoothScroll>
  );
}
