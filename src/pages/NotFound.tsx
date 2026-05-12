import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-8 bg-off-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="text-[10px] uppercase tracking-[0.6em] text-mauve font-semibold mb-10 block">404</span>
        <h1 className="text-3xl sm:text-4xl md:text-6xl text-teal font-serif italic mb-8 leading-tight">
          This page seems to<br />have wandered.
        </h1>
        <p className="text-sm text-teal/50 font-light leading-relaxed tracking-wide italic mb-16 max-w-sm mx-auto">
          Let us return to the beginning.
        </p>
        <Link
          to="/"
          className="group text-[10px] uppercase tracking-[0.5em] text-teal border-b border-mauve pb-3 inline-block hover:text-mauve hover:tracking-[0.7em] transition-all duration-700"
        >
          Return Home →
        </Link>
      </motion.div>
    </div>
  );
}
