import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import FadeIn from '../components/FadeIn';
import IntroCurtain from '../components/IntroCurtain';
import PhilosophySection from '../components/PhilosophySection';
import ExperienceSection from '../components/ExperienceSection';
import DestinationsSection from '../components/DestinationsSection';
import PressSection from '../components/PressSection';
import ImpactSection from '../components/ImpactSection';

const HERO_SLIDES = [
  {
    headline: "Where Culture Meets Celebration",
    subtext: "Every detail is shaped with intention, honouring your heritage while delivering a refined, seamless experience."
  },
  {
    headline: "Luxury Weddings, Designed Around You",
    subtext: "We design celebrations that reflect who you are with depth, precision, and an uncompromising attention to detail."
  },
  {
    headline: "Celebrations Rooted in Culture, Elevated with Intention",
    subtext: "From tradition to modern elegance, every element is thoughtfully designed to feel authentic and extraordinary."
  },
  {
    headline: "A Refined Approach to Culturally Rich Celebrations",
    subtext: "Blending editorial beauty with cultural understanding, we create experiences that are both timeless and deeply personal."
  },
  {
    headline: "Your Story, Beautifully Honoured and Expertly Curated",
    subtext: "We bring together meaning, elegance, and emotion to craft a celebration that stays with you long after the day ends."
  }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col">
      <IntroCurtain />
      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-10 bg-teal/20" />
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1541250848049-b4f7141dca3f?q=80&w=2400&auto=format&fit=crop" 
            alt="Luxury wedding table setup"
            className="w-full h-full object-cover grayscale-[30%] brightness-[0.8] scale-105"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 z-20" />
        
        {/* Animated Hero Text - Repositioned to the Right on Desktop, Bottom on Mobile */}
        <div className="absolute bottom-[12vh] md:bottom-auto md:top-1/2 md:-translate-y-1/2 left-0 md:left-auto md:right-12 lg:right-24 z-30 w-full md:w-auto max-w-2xl px-6 text-center md:text-right flex flex-col items-center md:items-end">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center md:items-end"
            >
              <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-off-white font-serif mb-6 leading-[1.1] tracking-tight">
                {HERO_SLIDES[currentSlide].headline}
              </h1>
              <p className="text-xs md:text-sm lg:text-base text-off-white/70 font-light max-w-lg leading-relaxed tracking-wide italic">
                {HERO_SLIDES[currentSlide].subtext}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Branding Overlay (Centered Logo) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-center pointer-events-none">
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
            className="flex flex-col items-center"
          >
            <h2 className="text-6xl md:text-8xl lg:text-[120px] font-serif tracking-[0.2em] text-off-white/10 uppercase select-none">RIAH</h2>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-4"
        >
          {/* Using a relative style for vertical text since vertical-rl is sometimes unpredictable in all browsers without explicit heights */}
          <span className="text-[7px] uppercase tracking-[0.5em] [writing-mode:vertical-rl]">Scroll</span>
          <div className="w-[1px] h-12 bg-teal/40" />
        </motion.div>
      </section>

      {/* PHILOSOPHY SECTION */}
      <PhilosophySection />

      {/* DESTINATIONS (EDITORIAL STACKED SCROLL) */}
      <DestinationsSection />

      {/* RECOGNITION (PRESS) */}
      <PressSection />

      {/* THE IMPACT SECTION */}
      <ImpactSection />

      {/* THE EXPERIENCE SECTION */}
      <ExperienceSection />

    </div>
  );
}
