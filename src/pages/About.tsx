import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'motion/react';
import FadeIn from '../components/FadeIn';

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <div className="pt-40">
      <section className="min-h-[140vh] md:min-h-screen grid grid-cols-1 md:grid-cols-2 bg-off-white overflow-hidden relative">
        {/* Left: Dual Portrait Editorial Composition */}
        <div className="relative flex items-center justify-center p-8 md:p-16 lg:p-32 bg-off-white min-h-[80vh] md:min-h-screen">
          {/* Abstract Luxury Decorative Accent */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, delay: 1 }}
            className="absolute top-[20%] left-[10%] w-[60%] h-[40%] border-l border-t border-teal/30 pointer-events-none"
          />
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, delay: 1.2 }}
            className="absolute bottom-[10%] right-[5%] w-[40%] h-[30%] border-r border-b border-teal/30 pointer-events-none"
          />

          <div className="relative w-full max-w-[650px] aspect-[4/5]">
            {/* 1. Larger Dominant Portrait (Main) */}
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 2.5, 
                ease: [0.16, 1, 0.3, 1], // Cinematic weighted easing
                delay: 0.6
              }}
              className="absolute left-0 top-0 w-[85%] h-[90%] overflow-hidden grayscale-[15%]"
            >
              <img 
                src="https://images.unsplash.com/photo-1544923246-77307dd654ca?q=80&w=1974&auto=format&fit=crop" 
                alt="Founder portrait main"
                className="w-full h-full object-cover transition-transform duration-[4000ms] ease-out hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-teal/5" />
            </motion.div>

            {/* 2. Elevated Portrait Card (Overlapping) */}
            <motion.div 
              initial={{ y: -180, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 2.8, 
                ease: [0.16, 1, 0.3, 1], // Smooth weighted descent
                delay: 0.2
              }}
              className="absolute right-0 bottom-0 w-[55%] h-[65%] z-20 overflow-hidden shadow-[20px_40px_80px_-15px_rgba(14,27,27,0.25)] ring-1 ring-white/20 bg-white p-2"
            >
              <div className="w-full h-full overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop" 
                  alt="Founder editorial portrait"
                  className="w-full h-full object-cover grayscale-[10%] transition-transform duration-[3000ms] hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-mauve/5 mix-blend-overlay" />
                
                {/* Thin elegant internal frame */}
                <div className="absolute inset-4 border border-white/30 pointer-events-none" />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right: Content */}
        <div className="flex flex-col justify-center px-12 md:px-24 py-32">
          <FadeIn className="max-w-xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl text-teal mb-16 leading-[0.9] tracking-tight">Who <br/> We Are</h1>
            
            <div className="space-y-10 text-teal/80 font-light leading-relaxed tracking-wide text-base md:text-lg">
              <p>
                RIAH is a globally mobile luxury wedding planning house for couples whose celebrations are shaped by culture. We hold particular depth in African, Caribbean, and diaspora traditions, and we welcome every couple who values cultural intentionality as a cornerstone of their wedding day.
              </p>
              <p>
                With over a decade of experience orchestrating celebrations across the UK, Europe, the UAE, and internationally, RIAH operates at the intersection of luxury planning and cultural fluency. We do not ask couples to choose between elegance and heritage. We deliver both, seamlessly.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* The RIAH Philosophy - Cinematic Editorial Section */}
      <section ref={sectionRef} className="relative py-48 md:py-64 overflow-hidden min-h-screen flex flex-col justify-center">
        {/* Cinematic Background Layer */}
        <div className="absolute inset-0 z-0">
          <motion.div 
            style={{ y: backgroundY }}
            className="absolute inset-0 h-[120%] -top-[10%]"
          >
            <img 
              src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop" 
              alt="Luxury wedding backdrop"
              className="w-full h-full object-cover grayscale-[40%]"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-teal/60 mix-blend-multiply opacity-80" />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60" />
          </motion.div>
        </div>

        <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 md:px-12">
          {/* Section Header */}
          <FadeIn className="text-center mb-40 max-w-2xl mx-auto text-white">
            <h2 className="text-4xl md:text-7xl text-white font-serif italic mb-10 tracking-tight leading-none uppercase">The RIAH Philosophy</h2>
            <div className="w-16 h-[1px] bg-white/30 mx-auto mb-10" />
            <p className="text-sm md:text-base text-white/70 font-light uppercase tracking-[0.3em] leading-relaxed max-w-lg mx-auto">
              Our work is rooted in intentionality, cultural depth, and the quiet confidence of true luxury.
            </p>
          </FadeIn>

          {/* Floating Editorial Panels */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 items-start">
            {[
              {
                title: "Intentionality",
                desc: "Every decision is purposeful. Nothing is filler.",
                image: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1200&auto=format&fit=crop",
                yPos: "md:-mt-12"
              },
              {
                title: "Discretion",
                desc: "Luxury is private. We protect our couples’ experience.",
                image: "https://images.unsplash.com/photo-1550005814-230097726581?q=80&w=1200&auto=format&fit=crop",
                yPos: "md:mt-12"
              },
              {
                title: "Excellence",
                desc: "We hold ourselves to a standard with no room for compromise.",
                image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1200&auto=format&fit=crop",
                yPos: "md:-mt-24"
              }
            ].map((value, i) => (
              <FadeIn 
                key={value.title} 
                delay={i * 0.15} 
                direction="up"
                className={`flex flex-col group relative ${value.yPos}`}
              >
                {/* Panel Image */}
                <div className="relative aspect-[4/5] overflow-hidden mb-0 shadow-2xl ring-1 ring-white/10 group">
                  <img 
                    src={value.image} 
                    alt={value.title}
                    className="w-full h-full object-cover grayscale transition-transform duration-[3000ms] ease-out group-hover:scale-110 group-hover:grayscale-0"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-teal/20 group-hover:bg-transparent transition-colors duration-1000" />
                </div>
                
                {/* Overlapping Caption Block */}
                <div className="relative -mt-16 ml-6 mr-6 z-10 bg-off-white/95 backdrop-blur-sm p-6 shadow-xl transition-transform duration-700 group-hover:-translate-y-2">
                  <h3 className="text-xl md:text-2xl text-teal font-serif italic mb-4 tracking-wide leading-tight">
                    {value.title}
                  </h3>
                  <p className="text-[9px] md:text-[10px] text-teal/60 font-light leading-relaxed tracking-[0.15em] uppercase">
                    {value.desc}
                  </p>
                  
                  {/* Subtle editorial line */}
                  <div className="w-8 h-[1px] bg-mauve/30 mt-6" />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>


      {/* Global Presence - Luxury Editorial Section */}
      <section className="relative py-48 md:py-64 bg-off-white overflow-hidden">
        {/* Background Typography */}
        <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none overflow-hidden">
          <motion.h2 
            initial={{ opacity: 0, scale: 1.1 }}
            whileInView={{ opacity: 0.03, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 3, ease: [0.16, 1, 0.3, 1] }}
            className="text-[30vw] md:text-[25vw] font-serif text-teal leading-none uppercase tracking-tighter"
          >
            GLOBAL
          </motion.h2>
        </div>

        <div className="luxury-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-32 items-center">
            {/* Left: Overlapping Image Composition */}
            <div className="relative order-2 lg:order-1">
              {/* Decorative Accent behind Primary Image */}
              <div className="absolute -top-12 -left-12 w-64 h-64 border-l border-t border-mauve/20 pointer-events-none hidden md:block" />
              
              {/* Primary Image - Landscape */}
              <motion.div 
                initial={{ y: 80, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-0 w-full aspect-[16/10] overflow-hidden shadow-2xl"
              >
                <img 
                  src="https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=2070&auto=format&fit=crop" 
                  alt="Destination luxury wedding"
                  className="w-full h-full object-cover transition-transform duration-[4000ms] hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-teal/10 mix-blend-overlay" />
              </motion.div>

              {/* Secondary Image - Portrait Overlapping */}
              <motion.div 
                initial={{ y: -100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="absolute -top-20 -right-8 md:-right-16 w-1/2 aspect-[3/4] z-20 shadow-[-20px_40px_80px_rgba(0,0,0,0.2)] ring-1 ring-white/20 p-2 bg-white"
              >
                <div className="w-full h-full overflow-hidden relative">
                  <img 
                    src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1200&auto=format&fit=crop" 
                    alt="Refined detail"
                    className="w-full h-full object-cover transition-transform duration-[3000ms] hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-mauve/5" />
                  <div className="absolute inset-4 border border-white/30" />
                </div>
              </motion.div>
              
              {/* Decorative Line Accent Layer */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 2, delay: 1 }}
                className="absolute -bottom-16 right-0 w-32 h-32 flex flex-col items-center justify-center opacity-40 pointer-events-none"
              >
                <div className="w-[1px] h-full bg-teal/40" />
                <div className="w-8 h-8 rounded-full border border-teal/40 mt-4" />
              </motion.div>
            </div>

            {/* Right: Content Area */}
            <div className="order-1 lg:order-2">
              <FadeIn direction="up" delay={0.3}>
                <span className="text-[10px] uppercase tracking-[0.6em] text-mauve font-semibold mb-10 block">Global Presence</span>
                <h2 className="text-4xl md:text-6xl text-teal font-serif italic mb-10 leading-[1.1]">Culturally rooted. <br/> Globally designed.</h2>
                
                <div className="space-y-8 text-teal/70 font-light leading-relaxed tracking-wide text-sm md:text-base max-w-lg mb-16">
                  <p>
                    RIAH orchestrates exceptional weddings and celebrations across some of the world’s most sought-after destinations, combining localized cultural expertise with a refined global perspective.
                  </p>
                  <p>
                    From intimate European celebrations to globally attended luxury experiences, every destination is approached with intentionality, discretion, and elevated design sensibility.
                  </p>
                </div>

                <div className="mb-20">
                  <span className="text-[10px] uppercase tracking-[0.4em] text-teal/40 mb-6 block font-medium">Core Destinations</span>
                  <div className="flex flex-wrap gap-x-8 gap-y-4">
                    {['Italy', 'France', 'United Kingdom', 'Greece', 'Portugal'].map((dest, i) => (
                      <span key={dest} className="text-sm md:text-lg text-teal font-serif border-b border-mauve/20 pb-1">
                        {dest}
                      </span>
                    ))}
                  </div>
                </div>

                <Link 
                  to="/planning" 
                  className="group inline-flex items-center gap-6 text-[10px] uppercase tracking-[0.4em] text-teal hover:text-mauve transition-colors duration-500"
                >
                  Explore Our World
                  <div className="relative w-12 h-[1px] bg-mauve/40 overflow-hidden">
                    <div className="absolute inset-0 bg-mauve translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                  </div>
                </Link>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
