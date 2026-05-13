import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

export default function MobileCtaBar() {
  const [visible, setVisible] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    let rafId: number | null = null;
    const onScroll = () => {
      if (rafId !== null) return;
      rafId = requestAnimationFrame(() => {
        setVisible(window.scrollY > 200);
        rafId = null;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, []);

  if (pathname === '/enquire') return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 72 }}
          animate={{ y: 0 }}
          exit={{ y: 72 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-0 left-0 w-full z-[90] md:hidden"
        >
          <Link
            to="/enquire"
            className="flex items-center justify-center w-full bg-teal text-off-white text-[10px] uppercase tracking-[0.5em] hover:bg-mauve transition-colors duration-500 min-h-[56px]"
          >
            Begin Your Journey →
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
