import { motion } from 'motion/react';
import { ReactNode } from 'react';

const variants = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1],
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: [0.16, 1, 0.3, 1],
    },
  },
  none: {
    opacity: 1,
  },
};

// True on a hard reload (performance.navigation is legacy but widely supported)
function isHardReload() {
  return (
    (performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming)?.type === 'reload' ||
    performance.navigation?.type === 1
  );
}

interface PageTransitionProps {
  children: ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const skipAnimation = isHardReload();

  return (
    <motion.div
      initial={skipAnimation ? 'none' : 'initial'}
      animate="enter"
      exit="exit"
      variants={variants}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}
