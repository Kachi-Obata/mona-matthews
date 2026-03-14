import type { Variants } from 'framer-motion';

export const ANIMATION = {
  duration: {
    fast: 0.15,
    normal: 0.3,
    slow: 0.5,
    slower: 0.6,
  },
  easing: {
    standard: [0.4, 0, 0.2, 1] as const,
    entrance: [0, 0, 0.2, 1] as const,
    exit: [0.4, 0, 1, 1] as const,
  },
  stagger: 0.1,
};

// Framer Motion Variants
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      duration: ANIMATION.duration.slower,
      ease: ANIMATION.easing.standard as unknown as [number, number, number, number],
    }
  },
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: ANIMATION.duration.slower,
      ease: ANIMATION.easing.standard as unknown as [number, number, number, number],
    }
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: ANIMATION.stagger,
      delayChildren: 0.2,
    },
  },
};

export const slideInFromLeft: Variants = {
  hidden: { x: '-100%' },
  visible: { 
    x: 0,
    transition: {
      duration: ANIMATION.duration.normal,
      ease: ANIMATION.easing.exit as unknown as [number, number, number, number],
    }
  },
  exit: {
    x: '-100%',
    transition: {
      duration: ANIMATION.duration.normal,
      ease: ANIMATION.easing.entrance as unknown as [number, number, number, number],
    }
  },
};

export const scaleIn: Variants = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1,
    transition: {
      duration: ANIMATION.duration.slow,
      ease: ANIMATION.easing.standard as unknown as [number, number, number, number],
    }
  },
};
