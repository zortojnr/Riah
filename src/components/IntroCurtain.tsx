import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';

const RIAH_LETTERS = ['R', 'I', 'A', 'H'];

export default function IntroCurtain() {
  const alreadyDone = typeof sessionStorage !== 'undefined' && sessionStorage.getItem('curtainDone') === 'true';
  const [isVisible, setIsVisible] = useState(!alreadyDone);
  const [revealing, setRevealing] = useState(false);
  const hasRevealed = useRef(false);

  useEffect(() => {
    if (!isVisible) return;

    const reveal = () => {
      if (hasRevealed.current) return;
      hasRevealed.current = true;
      setRevealing(true);
      setTimeout(() => {
        setIsVisible(false);
        sessionStorage.setItem('curtainDone', 'true');
      }, 1200);
    };

    // Auto-lift after 2.5s — logo is visible immediately, RIAH writes in by ~0.8s
    const autoReveal = setTimeout(reveal, 2500);
    window.addEventListener('scroll', reveal, { once: true, passive: true });
    return () => {
      window.removeEventListener('scroll', reveal);
      clearTimeout(autoReveal);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Curtain panel */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: revealing ? '-100%' : 0 }}
        transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1] }}
        className="fixed inset-0 z-[200] bg-[#0e1c1b] pointer-events-auto"
      />

      {/* Content layer */}
      <motion.div
        animate={{ opacity: revealing ? 0 : 1 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-[201] flex flex-col items-center justify-center pointer-events-none select-none"
      >
        {/* Logo — visible immediately */}
        <motion.img
          src="/assests/logo.png"
          alt="RIAH"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0, ease: [0.16, 1, 0.3, 1] }}
          className="h-16 md:h-24 w-auto brightness-0 invert mb-6"
        />

        {/* RIAH letter-by-letter write-on */}
        <div className="flex gap-[0.12em] mb-6">
          {RIAH_LETTERS.map((letter, i) => (
            <motion.span
              key={letter}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.3 + i * 0.1, ease: 'easeOut' }}
              className="font-serif text-white text-2xl md:text-3xl tracking-[0.3em]"
            >
              {letter}
            </motion.span>
          ))}
        </div>

        {/* Thin rule */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 0.25 }}
          transition={{ duration: 0.7, delay: 0.8, ease: 'easeOut' }}
          style={{ originX: 0.5 }}
          className="w-20 h-[1px] bg-white mb-6"
        />

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 0.7, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1, ease: 'easeOut' }}
          className="font-serif italic text-white text-sm md:text-lg tracking-[0.15em] text-center px-6"
        >
          Where Culture Meets Celebration
        </motion.p>
      </motion.div>
    </>
  );
}
