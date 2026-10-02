import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Disable on touch devices or small screens
    const checkTouch = () => {
      return 'ontouchstart' in window || navigator.maxTouchPoints > 0 || window.innerWidth < 768;
    };

    if (checkTouch()) {
      setIsTouchDevice(true);
      return;
    }

    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleInteractiveEnter = (e) => {
      const target = e.target.closest('a, button, input, select, textarea, [data-cursor="hover"]');
      if (target) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseover', handleInteractiveEnter);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseover', handleInteractiveEnter);
    };
  }, [isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <>
      {/* Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full bg-white mix-blend-difference"
        animate={{
          x: mousePosition.x - (isHovered ? 16 : 4),
          y: mousePosition.y - (isHovered ? 16 : 4),
          width: isHovered ? 32 : 8,
          height: isHovered ? 32 : 8,
          opacity: 1,
        }}
        transition={{
          type: "spring",
          damping: 28,
          stiffness: 400,
          mass: 0.2,
        }}
      />
    </>
  );
}
