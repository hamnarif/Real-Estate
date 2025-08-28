import { Variants, Transition } from "framer-motion";

export const easeOut: Transition["ease"] = [0.22, 1, 0.36, 1];
// Dramatic slow entrances with more distance (clearly "coming from somewhere")
export function driftFromLeft(delay = 0, duration = 3.2): Variants {
  return { hidden: { opacity: 0, x: -32 }, show: { opacity: 1, x: 0, transition: { delay, duration, ease: easeOut } } };
}

export function driftFromRight(delay = 0, duration = 3.2): Variants {
  return { hidden: { opacity: 0, x: 32 }, show: { opacity: 1, x: 0, transition: { delay, duration, ease: easeOut } } };
}

export function driftFromBottom(delay = 0, duration = 2.8): Variants {
  return { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0, transition: { delay, duration, ease: easeOut } } };
}

export function fromLeft(delay = 0, duration = 2.8): Variants {
  return { hidden: { opacity: 0, x: -20 }, show: { opacity: 1, x: 0, transition: { delay, duration, ease: easeOut } } };
}

export function fromRight(delay = 0, duration = 2.8): Variants {
  return { hidden: { opacity: 0, x: 20 }, show: { opacity: 1, x: 0, transition: { delay, duration, ease: easeOut } } };
}

export function fromBottom(delay = 0, duration = 2.4): Variants {
  return { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { delay, duration, ease: easeOut } } };
}

export function fadeIn(delay = 0, duration = 2.4): Variants {
  return { hidden: { opacity: 0 }, show: { opacity: 1, transition: { delay, duration, ease: easeOut } } };
}

export const staggerSlow: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.28,
      delayChildren: 0.25,
    },
  },
};

// Scroll-triggered gradual reveal effect
export function scrollReveal(duration = 4.0): Variants {
  return {
    hidden: { 
      opacity: 0,
      y: 50
    },
    show: { 
      opacity: 1,
      y: 0,
      transition: { 
        duration, 
        ease: easeOut 
      } 
    }
  };
}

// Very soft fade-only motions for ultra-smooth entrances
export function softFade(delay = 0, duration = 2.6): Variants {
  return { hidden: { opacity: 0 }, show: { opacity: 1, transition: { delay, duration, ease: easeOut } } };
}

export function softFadeUp(delay = 0, duration = 2.6): Variants {
  return { hidden: { opacity: 0, y: 4 }, show: { opacity: 1, y: 0, transition: { delay, duration, ease: easeOut } } };
}

// Continuous scroll-based opacity effect
export function scrollOpacity(): Variants {
  return {
    hidden: { opacity: 0 },
    show: { 
      opacity: 1,
      transition: { 
        duration: 0.1,
        ease: "linear"
      } 
    }
  };
}


