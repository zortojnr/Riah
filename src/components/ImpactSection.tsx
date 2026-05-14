import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, useSpring, useTransform, AnimatePresence } from 'motion/react';

function Counter({ value, suffix = "" }: { value: number, suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const spring = useSpring(0, { stiffness: 40, damping: 20, restDelta: 0.5 });

  useEffect(() => {
    if (isInView) spring.set(value);
  }, [isInView, spring, value]);

  const rounded = useTransform(spring, (latest) => Math.floor(latest));

  return (
    <span ref={ref} className="text-5xl sm:text-7xl md:text-8xl lg:text-[9rem] font-serif leading-none tracking-tighter">
      <motion.span>{rounded}</motion.span>{suffix}
    </span>
  );
}

// 42+ card — local wedding/event images
const STAT_IMAGES_1 = [
  '/assests/1a.webp',
  '/assests/3a.webp',
  '/assests/8a.webp',
  '/assests/12a.webp',
];

// 5 card — destinations images
const STAT_IMAGES_2 = [
  'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=1200',
  '/assests/france.webp',
  '/assests/2a.webp',
  'https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1200',
  'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?q=80&w=1200',
];

function StatSlideshow({ images }: { images: string[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let timer: ReturnType<typeof setInterval> | null = null;
    const start = () => { timer = setInterval(() => setIndex(prev => (prev + 1) % images.length), 4000); };
    const stop = () => { if (timer) { clearInterval(timer); timer = null; } };
    const onVisibility = () => document.hidden ? stop() : start();
    start();
    document.addEventListener('visibilitychange', onVisibility);
    return () => { stop(); document.removeEventListener('visibilitychange', onVisibility); };
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

// Add your testimonials here when ready.
// Each entry needs: quote, client, location, image (webp in /public/assests/)
const TESTIMONIALS: { quote: string; client: string; location: string; image: string }[] = [
  // Example format — replace with real content:
  // { quote: "...", client: "Private Client", location: "Lake Como", image: "/assests/testimonial-1.webp" },
];

function TestimonialCard() {
  const [index, setIndex] = useState(0);
  const [tabVisible, setTabVisible] = useState(true);

  useEffect(() => {
    const onVisibility = () => setTabVisible(!document.hidden);
    document.addEventListener('visibilitychange', onVisibility);
    return () => document.removeEventListener('visibilitychange', onVisibility);
  }, []);

  useEffect(() => {
    if (TESTIMONIALS.length < 2 || !tabVisible) return;
    const t = setInterval(() => setIndex(i => (i + 1) % TESTIMONIALS.length), 6000);
    return () => clearInterval(t);
  }, [tabVisible]);

  // Nothing to show until testimonials are added
  if (TESTIMONIALS.length === 0) return null;

  const t = TESTIMONIALS[index];

  return (
    <div className="relative w-full max-w-[450px] aspect-[4/5] bg-off-white border border-teal/10 shadow-2xl overflow-hidden">
      {/* Image half */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index + '-img'}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
          className="absolute inset-0 w-full h-[55%]"
        >
          <img src={t.image} alt="" className="w-full h-full object-cover grayscale-[15%]" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-off-white" />
        </motion.div>
      </AnimatePresence>

      {/* Text half */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index + '-text'}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: 'easeInOut', delay: 0.1 }}
          className="absolute bottom-0 left-0 right-0 p-10 md:p-12 flex flex-col justify-end"
        >
          <span className="text-[3rem] font-serif leading-none italic text-teal/15 mb-1">"</span>
          <p className="text-base md:text-lg font-serif italic leading-relaxed text-teal mb-8">
            {t.quote}
          </p>
          <div className="border-t border-teal/10 pt-6">
            <p className="text-[10px] uppercase tracking-[0.4em] font-semibold text-mauve">{t.client}</p>
            <p className="text-[11px] font-serif italic mt-1 opacity-50 text-teal">{t.location}</p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Decorative elements */}
      <div className="absolute -top-12 -right-12 w-24 h-24 bg-mauve/8 rounded-full pointer-events-none" />
      <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-teal/4 rounded-full pointer-events-none" />
    </div>
  );
}

export default function ImpactSection() {
  return (
    <section className="bg-[#0E1B1B] text-off-white py-16 sm:py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24 items-center">

          {/* STATS COLUMN */}
          <div className="space-y-16 md:space-y-20">

            {/* 42+ card — image overlaps number from left */}
            <div className="relative flex items-end">
              <div className="w-32 sm:w-44 md:w-60 h-44 sm:h-56 md:h-72 overflow-hidden shadow-2xl shrink-0 z-10">
                <StatSlideshow images={STAT_IMAGES_1} />
              </div>
              <div className="flex flex-col -ml-4 sm:-ml-6 z-20 min-w-0">
                <Counter value={42} suffix="+" />
                <span className="text-[9px] md:text-[11px] uppercase tracking-[0.3em] md:tracking-[0.4em] opacity-40 mt-3 leading-relaxed">
                  Global commissions<br />uniquely executed
                </span>
              </div>
            </div>

            {/* 5 card — image overlaps number from right */}
            <div className="relative flex items-end justify-end">
              <div className="flex flex-col text-right -mr-4 sm:-mr-6 z-20 min-w-0">
                <Counter value={5} />
                <span className="text-[9px] md:text-[11px] uppercase tracking-[0.3em] md:tracking-[0.4em] opacity-40 mt-3 leading-relaxed">
                  Destinations<br />currently managed
                </span>
              </div>
              <div className="w-32 sm:w-44 md:w-60 h-44 sm:h-56 md:h-72 overflow-hidden shadow-2xl shrink-0 z-10">
                <StatSlideshow images={STAT_IMAGES_2} />
              </div>
            </div>

          </div>

          {/* TESTIMONIAL CARD COLUMN */}
          <div className="flex justify-center relative z-0">
            <TestimonialCard />
          </div>

        </div>
      </div>
    </section>
  );
}
