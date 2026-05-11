import { motion } from 'motion/react';
import { ReactNode } from 'react';

const variants = {
  initial: {
    opacity: 0,
    rotateY: 20,
    rotateX: 5,
    x: 100,
    scale: 0.9,
    filter: 'blur(10px)',
  },
  enter: {
    opacity: 1,
    rotateY: 0,
    rotateX: 0,
    x: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 1.8,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    rotateY: -20,
    rotateX: -5,
    x: -100,
    scale: 0.9,
    filter: 'blur(10px)',
    transition: {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

interface PageTransitionProps {
  children: ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  return (
    <motion.div
      initial="initial"
      animate="enter"
      exit="exit"
      variants={variants}
      className="w-full"
      style={{ 
        transformOrigin: 'center center', 
        perspective: '2500px',
        backfaceVisibility: 'hidden'
      }}
    >
      {children}
    </motion.div>
  );
}
