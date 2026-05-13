import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect, useRef } from 'react';
import FadeIn from '../components/FadeIn';
import IntroCurtain from '../components/IntroCurtain';
import RiahDifferenceSection from '../components/RiahDifferenceSection';
import ExperienceSection from '../components/ExperienceSection';
import DestinationsSection from '../components/DestinationsSection';
import TrustSignals from '../components/TrustSignals';
import ImpactSection from '../components/ImpactSection';

const MOTTOS = [
  { line: 'Where Culture Meets Celebration.' },
  { line: 'Every detail, a deliberate act of beauty.' },
  { line: 'Legacy in motion.' },
  { line: 'Intentional. Cultural. Timeless.' },
  { line: 'Your story, told beautifully.' },
];

function VideoInterlude() {
  const [index, setIndex] = useState(0);
  const [videoReady, setVideoReady] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let t: ReturnType<typeof setInterval> | null = null;
    const start = () => { t = setInterval(() => setIndex(i => (i + 1) % MOTTOS.length), 3500); };
    const stop = () => { if (t) { clearInterval(t); t = null; } };
    const onVisibility = () => document.hidden ? stop() : start();
    start();
    document.addEventListener('visibilitychange', onVisibility);
    return () => { stop(); document.removeEventListener('visibilitychange', onVisibility); };
  }, []);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVideoReady(true);
          observer.disconnect();
        }
      },
      { rootMargin: '400px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#0e1c1b] py-16 sm:py-20 md:py-28 relative overflow-hidden">
      {/* Background RIAH text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="font-serif font-bold text-white opacity-[0.04] leading-none tracking-widest"
          style={{ fontSize: 'clamp(80px, 18vw, 280px)' }}>
          RIAH
        </span>
      </div>

      <div className="max-w-6xl mx-auto px-5 sm:px-8 md:px-12 lg:px-16 flex flex-col md:flex-row items-center gap-10 md:gap-20 relative z-10">

        {/* Left — editorial note */}
        <div className="flex-1 flex flex-col justify-center order-2 md:order-1">
          <span className="text-[8px] uppercase tracking-[0.6em] text-mauve/70 mb-8 block font-sans">
            The RIAH Experience
          </span>
          <p className="font-serif text-white/90 text-2xl md:text-3xl leading-[1.5] tracking-tight mb-10">
            "We don't just plan weddings, we craft the moments your family will recount for generations."
          </p>
          <div className="w-10 h-[1px] bg-white/20 mb-8" />
          <p className="text-white/45 text-sm font-sans font-light leading-relaxed max-w-xs">
            Every celebration we curate is rooted in cultural intelligence, refined taste, and a deep understanding of what makes your story uniquely yours.
          </p>

          {/* Motto slideshow */}
          <div className="mt-14">
            <div className="min-h-[2.5rem] relative">
              <AnimatePresence mode="wait">
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.7, ease: 'easeInOut' }}
                  className="font-serif italic text-mauve/80 text-base md:text-lg tracking-[0.05em]"
                >
                  {MOTTOS[index].line}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Dot indicators */}
            <div className="flex gap-2 mt-4">
              {MOTTOS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={[
                    'rounded-full transition-all duration-500',
                    i === index ? 'w-5 h-[3px] bg-white/60' : 'w-[3px] h-[3px] bg-white/20',
                  ].join(' ')}
                  aria-label={`Motto ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right — portrait video, shifted right via ml-auto */}
        <div className="order-1 md:order-2 w-full md:w-auto flex justify-center md:justify-end">
          <div
            className="relative overflow-hidden rounded-2xl shadow-[0_60px_100px_-20px_rgba(0,0,0,0.8)]"
            style={{ width: 'min(340px, 80vw)', aspectRatio: '9/16' }}
          >
            {videoReady ? (
              <video autoPlay muted loop playsInline className="w-full h-full object-cover">
                <source src="https://res.cloudinary.com/dzr18sd58/video/upload/v1778538684/RIAH_kikenb.mp4" type="video/mp4" />
              </video>
            ) : (
              <div className="w-full h-full bg-[#0e1c1b]" />
            )}
            <div className="absolute inset-0 bg-black/10" />
          </div>
        </div>

      </div>
    </section>
  );
}

const PRESS_QUOTES = [
  { quote: 'Exceptional cultural intelligence, flawless execution.', source: 'Vogue' },
  { quote: 'The most sought-after luxury wedding planners in the UK.', source: "Harper's Bazaar" },
  { quote: 'Where every detail is a deliberate act of beauty.', source: 'Tatler' },
  { quote: 'RIAH transforms celebrations into living legacies.', source: 'The Times' },
];

function PressCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let t: ReturnType<typeof setInterval> | null = null;
    const start = () => { t = setInterval(() => setIndex(i => (i + 1) % PRESS_QUOTES.length), 4000); };
    const stop = () => { if (t) { clearInterval(t); t = null; } };
    const onVisibility = () => document.hidden ? stop() : start();
    start();
    document.addEventListener('visibilitychange', onVisibility);
    return () => { stop(); document.removeEventListener('visibilitychange', onVisibility); };
  }, []);

  return (
    <div className="h-12 relative overflow-hidden w-full max-w-sm">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
          className="absolute inset-0 flex flex-col justify-center"
        >
          <p className="text-off-white/60 text-[10px] italic font-serif leading-snug">
            "{PRESS_QUOTES[index].quote}"
          </p>
          <p className="text-off-white/35 text-[8px] uppercase tracking-[0.4em] mt-1 font-sans">
            {PRESS_QUOTES[index].source}
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col">
      <IntroCurtain />

      {/* HERO */}
      <section className="relative h-screen overflow-hidden">
        {/* Video background */}
        <div className="absolute inset-0 z-0 bg-[#0e1c1b]">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover object-top brightness-[0.65]"
          >
            <source src="https://res.cloudinary.com/dzr18sd58/video/upload/q_auto:best,vc_auto/v1778538684/RIAHS_WEDDING_jgl3j4.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Gradient — heavier at bottom-left to make text legible */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/20 to-black/30" />
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/50 via-transparent to-transparent" />

        {/* Bottom-left editorial copy */}
        <div className="absolute bottom-0 left-0 z-20 px-5 sm:px-8 md:px-12 lg:px-20 pb-12 md:pb-20 max-w-2xl w-full sm:w-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-start gap-5"
          >
            <p className="text-[8px] uppercase tracking-[0.6em] text-mauve/90 font-sans">
              London · Europe · Worldwide
            </p>

            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-off-white leading-[1.05] tracking-[-0.01em]">
              Luxury Weddings &<br />Cultural Celebrations
            </h1>

            <div className="w-12 h-[1px] bg-off-white/30" />

            <PressCarousel />

            <Link
              to="/enquire"
              className="group inline-flex items-center gap-3 text-[9px] uppercase tracking-[0.5em] text-off-white/80 border-b border-off-white/30 pb-1 hover:text-off-white hover:border-off-white/70 transition-all duration-500 mt-2"
            >
              Begin Your Journey
              <span className="group-hover:translate-x-1.5 transition-transform duration-500 inline-block">→</span>
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator — right side vertical */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 2, duration: 1.5 }}
          className="absolute bottom-16 right-5 md:right-12 z-20 hidden sm:flex flex-col items-center gap-3"
        >
          <div className="w-[1px] h-14 bg-off-white/40" />
          <span className="text-[7px] uppercase tracking-[0.5em] text-off-white [writing-mode:vertical-rl]">Scroll</span>
        </motion.div>
      </section>

      {/* THE RIAH DIFFERENCE */}
      <RiahDifferenceSection />

      {/* DESTINATIONS */}
      <DestinationsSection />

      {/* VIDEO INTERLUDE */}
      <VideoInterlude />

      {/* TRUST SIGNALS */}
      <TrustSignals />

      {/* IMPACT */}
      <ImpactSection />

      {/* THE EXPERIENCE */}
      <ExperienceSection />

      {/* CLOSING CTA */}
      <section className="section-padding bg-teal text-off-white text-center">
        <FadeIn className="luxury-container">
          <p className="text-[10px] uppercase tracking-[0.6em] mb-8 opacity-50">A Limited Commission</p>
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-serif mb-8 leading-tight">
            Begin Your RIAH Experience
          </h2>
          <p className="text-sm text-off-white/60 font-light max-w-lg mx-auto leading-relaxed tracking-wide italic mb-12">
            We accept a limited number of celebrations each year to preserve the intimacy, artistry, and care our clients deserve.
          </p>
          <Link
            to="/enquire"
            className="group inline-flex items-center gap-4 text-[9px] uppercase tracking-[0.5em] text-off-white border border-off-white/30 px-10 py-5 hover:bg-off-white/10 hover:border-off-white/60 transition-all duration-700"
          >
            Submit Enquiry
            <span className="group-hover:translate-x-2 transition-transform duration-700 inline-block">→</span>
          </Link>
        </FadeIn>
      </section>
    </div>
  );
}
