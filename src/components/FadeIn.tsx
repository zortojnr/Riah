import { motion } from 'motion/react';
import type { ReactNode } from 'react';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: 'up' | 'down' | 'none';
  key?: string | number | null;
}

export default function FadeIn({ children, delay = 0, className = '', direction = 'up' }: FadeInProps) {
  const yOffset = direction === 'up' ? 20 : direction === 'down' ? -20 : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
