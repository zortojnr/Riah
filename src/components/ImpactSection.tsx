import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, useSpring, useTransform, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';

function Counter({ value, suffix = "" }: { value: number, suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const spring = useSpring(0, {
    stiffness: 40,
    damping: 20,
    restDelta: 0.001
  });

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, spring, value]);

  const displayValue = useTransform(spring, (latest) => Math.floor(latest));
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const unsubscribe = displayValue.on("change", (latest) => {
      setCurrent(latest);
    });
    return () => unsubscribe();
  }, [displayValue]);

  return (
    <span ref={ref} className="text-6xl md:text-8xl lg:text-[10rem] font-serif leading-none tracking-tighter">
      {current}{suffix}
    </span>
  );
}

const STAT_IMAGES_1 = [
  "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?q=80&w=1200&auto=format&fit=crop"
];

const STAT_IMAGES_2 = [
  "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1510076857177-7443610d4138?q=80&w=1200&auto=format&fit=crop"
];

function StatSlideshow({ images }: { images: string[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative w-full h-full">
      <AnimatePresence mode="wait">
        <motion.img
          key={images[index]}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          src={images[index]}
          alt="Stat highlight"
          className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 transition-all duration-1000"
          referrerPolicy="no-referrer"
        />
      </AnimatePresence>
    </div>
  );
}

export default function ImpactSection() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <section className="bg-[#0E1B1B] text-off-white py-48 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          
          {/* STATS COLUMN */}
          <div className="space-y-32">
             <div className="flex flex-col md:flex-row items-center md:items-end gap-12 group">
                <div className="w-full md:w-64 h-80 overflow-hidden shadow-2xl transition-transform duration-1000 bg-teal/10">
                  <StatSlideshow images={STAT_IMAGES_1} />
                </div>
                <div className="flex flex-col">
                  <Counter value={42} suffix="+" />
                  <span className="text-[10px] md:text-[11px] uppercase tracking-[0.4em] opacity-40 mt-4">
                    Global commissions <br className="hidden md:block"/> uniquely executed
                  </span>
                </div>
             </div>

             <div className="flex flex-col md:flex-row-reverse items-center md:items-end gap-12 group">
                <div className="w-full md:w-64 h-80 overflow-hidden shadow-2xl transition-transform duration-1000 bg-teal/10">
                  <StatSlideshow images={STAT_IMAGES_2} />
                </div>
                <div className="flex flex-col text-center md:text-right">
                  <Counter value={9} />
                  <span className="text-[10px] md:text-[11px] uppercase tracking-[0.4em] opacity-40 mt-4">
                    Destinations <br className="hidden md:block"/> currently managed
                  </span>
                </div>
             </div>
          </div>

          {/* FLIP CARD COLUMN */}
          <div className="flex justify-center perspective-2000 relative z-0">
            <div className="relative w-full max-w-[450px] aspect-[4/5]">
              <motion.div
                initial={false}
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="w-full h-full relative preserve-3d"
              >
                {/* FRONT SIDE */}
                <div 
                  className={`absolute inset-0 backface-hidden bg-[#1e3331] p-16 flex flex-col items-center justify-center border border-white/5 shadow-2xl transition-opacity duration-300 ${isFlipped ? 'opacity-0' : 'opacity-100'}`}
                >
                  <div className="mb-12">
                    <h2 className="text-5xl md:text-6xl font-serif tracking-[0.3em] text-white/20 select-none">RIAH</h2>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsFlipped(true)}
                    className="group flex flex-col items-center gap-4 cursor-pointer"
                  >
                    <div className="w-20 h-20 rounded-full border border-white/20 flex items-center justify-center transition-colors group-hover:bg-off-white group-hover:border-off-white">
                       <span className="text-white group-hover:text-teal transition-colors text-xl">↺</span>
                    </div>
                    <span className="text-[10px] uppercase tracking-[0.6em] font-medium text-off-white/40 group-hover:text-off-white transition-colors">
                      Turn Me
                    </span>
                  </motion.button>
                </div>

                {/* BACK SIDE */}
                <div 
                  style={{ transform: 'rotateY(180deg)' }}
                  className={`absolute inset-0 backface-hidden bg-off-white text-teal p-12 md:p-16 flex flex-col justify-between border border-teal/10 shadow-2xl transition-opacity duration-300 ${isFlipped ? 'opacity-100' : 'opacity-0'}`}
                >
                  <div>
                    <span className="text-[4rem] font-serif leading-none italic opacity-20">“</span>
                    <p className="text-xl md:text-2xl font-serif italic leading-relaxed">
                      RIAH redefined what we thought was possible. They didn&apos;t just plan a wedding; they created an atmosphere that felt like a living memory.
                    </p>
                  </div>
                  
                  <div className="border-t border-teal/10 pt-8 flex justify-between items-end">
                    <div className="flex flex-col gap-4">
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.4em] font-semibold text-mauve">— Private Client</p>
                        <p className="text-[12px] font-serif italic mt-1 opacity-60 text-teal">Lake Como</p>
                      </div>
                      <Link 
                        to="/about"
                        className="text-[10px] uppercase tracking-[0.3em] font-bold text-mauve hover:text-teal transition-colors flex items-center gap-2"
                      >
                        See More <span>→</span>
                      </Link>
                    </div>
                    <button 
                      onClick={() => setIsFlipped(false)}
                      className="text-[10px] uppercase tracking-[0.3em] font-black text-teal/40 hover:text-teal transition-colors"
                    >
                      Back
                    </button>
                  </div>
                </div>
              </motion.div>
              
              {/* Floating Decorative Elements */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-12 -right-12 w-24 h-24 bg-mauve/10 blur-3xl rounded-full"
              />
              <motion.div 
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-12 -left-12 w-32 h-32 bg-white/5 blur-3xl rounded-full"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
