import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const principles = [
  {
    id: "01",
    title: "Intentionality",
    text: "Every detail serves a singular purpose. We believe that true luxury is found in the depth of thought behind every choice.",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: "02",
    title: "Emotional Storytelling",
    text: "We build narratives that resonate for a lifetime, focusing on the small, quiet moments that define your journey.",
    image: "https://images.unsplash.com/photo-1544078751-58fee2d8a03b?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: "03",
    title: "Bespoke Experience",
    text: "Your singular vision, executed flawlessly. We design experiences that are as unique as the love stories they celebrate.",
    image: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=2000&auto=format&fit=crop"
  },
];

const AnimatedText = ({ text, className, delay = 0 }: { text: string, className?: string, delay?: number }) => {
  const words = text.split(" ");
  
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: delay },
    },
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      },
    },
    hidden: {
      opacity: 0,
      y: 10,
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className={`flex flex-wrap justify-center ${className}`}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="mr-[0.3em] flex"
        >
          {word.split("").map((char, charIdx) => (
            <motion.span key={charIdx} variants={child}>
              {char}
            </motion.span>
          ))}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default function PhilosophySection() {
  const [[page, direction], setPage] = useState([0, 0]);

  const activeIndex = page;

  const paginate = useCallback((newDirection: number) => {
    setPage(([prevPage]) => {
      const nextIndex = (prevPage + newDirection + principles.length) % principles.length;
      return [nextIndex, newDirection];
    });
  }, []);

  const nextSlide = () => paginate(1);
  const prevSlide = () => paginate(-1);

  // Autoplay
  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 6000);
    return () => clearInterval(timer);
  }, [paginate]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.9
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.9
    })
  };

  return (
    <section className="relative pt-24 md:pt-32 pb-16 bg-off-white overflow-hidden" id="philosophy">
      {/* Premium Dimmed Background Texture */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none mix-blend-multiply">
        <img 
          src="https://images.unsplash.com/photo-1531685250059-7bb7988f6f5a?q=80&w=3000&auto=format&fit=crop" 
          alt="Luxury silk texture" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-teal/[0.02] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(43,64,62,0.03)_100%)] pointer-events-none" />

      <div className="luxury-container h-full flex flex-col relative z-10">
        
        <div className="max-w-4xl mx-auto text-center mb-16 md:mb-24 px-4 overflow-hidden">
          <AnimatedText 
            text="The Philosophy" 
            className="text-[10px] tracking-[0.5em] uppercase text-mauve mb-8 font-medium w-full"
            delay={0.2}
          />
          <AnimatedText 
            text="Restraint is luxury." 
            className="text-4xl md:text-6xl lg:text-7xl font-serif text-teal leading-tight mb-8 tracking-tight w-full"
            delay={0.5}
          />
          <div className="flex flex-col gap-8 max-w-3xl mx-auto">
            <AnimatedText 
              text="We believe that the most impactful celebrations aren’t just seen, they are felt. Our design intelligence is rooted in the intersection of cultural heritage and contemporary minimalism, creating experiences that are emotionally resonant, visually refined, and deeply intentional."
              className="text-base md:text-lg text-teal/70 font-light leading-relaxed italic w-full"
              delay={1.2}
            />
            <AnimatedText 
              text="Every celebration is approached with care, clarity, and an understanding that true luxury is found not in excess, but in meaning. From the quiet details to the grandest moments, we design experiences that honour tradition while embracing contemporary elegance, ensuring each celebration feels timeless, personal, and profoundly unforgettable."
              className="text-base md:text-lg text-teal/70 font-light leading-relaxed italic w-full"
              delay={2.5}
            />
          </div>
        </div>

        {/* SLIDER COMPONENT */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-5xl mx-auto px-4 md:px-0"
        >
          <div className="relative h-[500px] md:h-[650px]">
            {/* Side Previews (Neighbors) - Blurred and Behind */}
            <div className="absolute inset-y-0 -left-[15%] w-full opacity-30 transform scale-[0.85] pointer-events-none z-0 hidden md:block">
               <img 
                  src={principles[(activeIndex - 1 + principles.length) % principles.length].image} 
                  alt="Prev preview"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
            </div>
            <div className="absolute inset-y-0 -right-[15%] w-full opacity-30 transform scale-[0.85] pointer-events-none z-0 hidden md:block">
               <img 
                  src={principles[(activeIndex + 1) % principles.length].image} 
                  alt="Next preview"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
            </div>

            <AnimatePresence mode="popLayout" custom={direction} initial={false}>
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ 
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.5 },
                  scale: { duration: 0.5 }
                }}
                className="absolute inset-0 z-10"
              >
                {/* Active Card */}
                <div className="relative w-full h-full overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.15)] group border border-teal/5">
                  <img 
                    src={principles[activeIndex].image} 
                    alt={principles[activeIndex].title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-teal/40 mix-blend-multiply transition-opacity duration-1000 group-hover:opacity-30" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  
                  {/* Content Overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-20 text-off-white">
                    <span className="text-[10px] md:text-xs tracking-[0.6em] uppercase mb-4 opacity-70 font-medium">
                      {principles[activeIndex].id}
                    </span>
                    <h3 className="text-3xl md:text-5xl lg:text-6xl font-serif mb-6 max-w-xl leading-[1.1]">
                      {principles[activeIndex].title}
                    </h3>
                    <p className="text-sm md:text-base lg:text-lg font-light max-w-md opacity-80 leading-relaxed tracking-wide italic mb-10">
                      {principles[activeIndex].text}
                    </p>

                    <Link 
                      to="/enquire" 
                      className="group/btn relative inline-flex items-center gap-6 bg-white/10 backdrop-blur-md border border-white/20 text-off-white py-3 px-8 self-start transition-all duration-500 hover:bg-white hover:text-black"
                    >
                      <span className="text-[10px] font-sans font-medium uppercase tracking-[0.4em]">
                        Book Your Journey
                      </span>
                      <ArrowRight className="w-4 h-4 transition-transform duration-500 group-hover/btn:translate-x-2" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows (Far Sides) */}
            <button 
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full md:-translate-x-[150%] z-30 group p-3 md:p-5 bg-off-white/90 backdrop-blur-sm border border-teal/5 rounded-full transition-all duration-500 hover:bg-teal hover:border-teal shadow-lg"
              aria-label="Previous principle"
            >
              <ChevronLeft className="w-5 h-5 text-teal group-hover:text-off-white transition-colors" />
            </button>
            
            <button 
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full md:translate-x-[150%] z-30 group p-3 md:p-5 bg-off-white/90 backdrop-blur-sm border border-teal/5 rounded-full transition-all duration-500 hover:bg-teal hover:border-teal shadow-lg"
              aria-label="Next principle"
            >
              <ChevronRight className="w-5 h-5 text-teal group-hover:text-off-white transition-colors" />
            </button>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center gap-4 mt-12">
            {principles.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  const newDirection = i > activeIndex ? 1 : -1;
                  if (i !== activeIndex) {
                    setPage([i, newDirection]);
                  }
                }}
                className={`h-[1px] transition-all duration-700 ${
                  activeIndex === i ? 'w-10 bg-teal' : 'w-4 bg-teal/10 hover:bg-teal/30'
                }`}
                aria-label={`Go to principle ${i + 1}`}
              />
            ))}
          </div>
        </motion.div>

        {/* THEME STATEMENT */}
        <div className="mt-24 md:mt-32 text-center max-w-3xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.3
                }
              }
            }}
          >
            <motion.h3 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-2xl md:text-3xl font-serif text-teal mb-6 tracking-tight uppercase leading-snug"
            >
              Luxury Weddings & Celebrations
            </motion.h3>
            <motion.p 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-base md:text-lg text-teal/80 font-light mb-10 italic leading-relaxed"
            >
              Where culture meets celebration, and every moment becomes timeless.
            </motion.p>
            <motion.div 
              variants={{
                hidden: { scaleX: 0 },
                visible: { scaleX: 1 }
              }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="w-20 h-[1px] bg-mauve/30 mx-auto mb-10 origin-center" 
            />
            <motion.p 
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 }
              }}
              transition={{ duration: 2, ease: "easeOut" }}
              className="text-[10px] md:text-xs text-mauve tracking-[0.4em] uppercase font-medium opacity-80 leading-loose"
            >
              We orchestrate deeply intentional weddings <br/> for discerning couples worldwide.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

