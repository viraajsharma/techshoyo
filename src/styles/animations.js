/**
 * Shared Framer Motion animation variants
 * Consistent cubic-bezier(0.22, 1, 0.36, 1) and 60ms stagger timings
 */

export const transitions = {
  smooth: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  quick: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
  spring: { type: "spring", damping: 25, stiffness: 200 },
};

export const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (custom = {}) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: custom.duration || 0.7,
      delay: custom.delay || 0,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: (custom = {}) => ({
    opacity: 1,
    transition: {
      duration: custom.duration || 0.6,
      delay: custom.delay || 0,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export const staggerContainer = (staggerChildren = 0.06, delayChildren = 0.1) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const wordMaskReveal = {
  hidden: { y: "115%", opacity: 0 },
  visible: (i = 0) => ({
    y: "0%",
    opacity: 1,
    transition: {
      duration: 0.75,
      delay: i * 0.045,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export const monogramDraw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
      opacity: { duration: 0.3 },
    },
  },
};
