import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function IntroCurtain() {
  const [isVisible, setIsVisible] = useState(true);
  const [step, setStep] = useState<'logo' | 'tagline' | 'reveal' | 'none'>('logo');

  useEffect(() => {
    // Sequence timing for a luxurious, but faster reveal (all within 6s)
    const timerTagline = setTimeout(() => {
      setStep('tagline');
    }, 1200); 

    const timerReveal = setTimeout(() => {
      setStep('reveal');
    }, 4200); // Start moving up at 4.2s

    const timerDone = setTimeout(() => {
      setIsVisible(false);
    }, 6000); // Fully done by 6s

    return () => {
      clearTimeout(timerTagline);
      clearTimeout(timerReveal);
      clearTimeout(timerDone);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: step === 'reveal' ? '-100%' : 0 }}
      transition={{ duration: 1.5, ease: [0.77, 0, 0.175, 1] }}
      className="fixed inset-0 z-[200] bg-[#1a2b29] flex flex-col items-center justify-center pointer-events-auto overflow-hidden"
    >
      {/* Background Texture - kept very subtle */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_80%)]" />
      </div>

      <div className="relative flex flex-col items-center z-20">
        {/* Animated RIAH Logo */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ 
            opacity: 1, 
            y: 0,
            transition: { duration: 2.5, ease: [0.16, 1, 0.3, 1] }
          }}
          className="flex items-center mb-12"
        >
          <span className="text-white/30 text-4xl md:text-5xl font-light tracking-tighter mr-8">@</span>
          <h1 className="text-white font-serif text-7xl md:text-9xl font-light tracking-[0.25em]">
            RIAH
          </h1>
          <span className="text-white/30 text-4xl md:text-5xl font-light tracking-tighter ml-8">@</span>
        </motion.div>

        {/* Tagline Animation */}
        <div className="h-16 flex items-center justify-center translate-y-2">
          <AnimatePresence mode="wait">
            {(step === 'tagline' || step === 'reveal') && (
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2, ease: "easeOut" }}
                className="text-white/95 font-serif italic text-xl md:text-3xl tracking-[0.1em] text-center"
              >
                Where Culture Meets Celebration
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* Decorative Line */}
        <motion.div 
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: '200px', opacity: 1 }}
          transition={{ delay: 1.5, duration: 2 }}
          className="h-[1px] bg-white/25 mt-20"
        />
      </div>
    </motion.div>
  );
}
