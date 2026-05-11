import React, { useState, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { X, ArrowRight } from 'lucide-react';

const DESTINATIONS = [
  {
    id: 'italy',
    name: 'Italy',
    location: 'Lake Como & Amalfi Coast',
    image: 'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?q=80&w=2400&auto=format&fit=crop',
    description: 'Historic coastlines, intimate villas, and timeless celebrations layered with effortless elegance. From the refined tranquility of Como to the dramatic cliffs of the Amalfi coast, Italy remains the ultimate canvas for grand yet personal storytelling.',
    copy: 'Timeless elegance meets historic coastline.',
    style: { top: '10%', left: '4%', width: '420px', height: '560px', rotate: '-1.5deg' }
  },
  {
    id: 'france',
    name: 'France',
    location: 'Provence & French Riviera',
    image: 'https://images.unsplash.com/photo-1544923246-77307dd654ca?q=80&w=2400&auto=format&fit=crop',
    description: 'Sun drenched lavender fields and azure waters provide the backdrop for poetic, light filled romance. Whether in the heart of a Provençal estate or overlooking the Mediterranean at a Cap Ferrat villa, the feeling is one of effortless chic.',
    copy: 'Poetic romance under the southern sun.',
    style: { top: '5%', right: '4%', width: '380px', height: '520px', rotate: '2deg' }
  },
  {
    id: 'uk',
    name: 'United Kingdom',
    location: 'Cotswolds & London',
    image: 'https://images.unsplash.com/photo-1510076857177-7470076d4098?q=80&w=2400&auto=format&fit=crop',
    description: 'Stately manors and refined city grandeur, where heritage meets a modern, sophisticated edge. Our UK celebrations bridge the gap between historic tradition and contemporary luxury, set against rolling hills or iconic urban backdrops.',
    copy: 'Heritage grandeur with a modern edge.',
    style: { bottom: '10%', left: '8%', width: '400px', height: '540px', rotate: '1deg' }
  },
  {
    id: 'greece',
    name: 'Greece',
    location: 'Santorini & Mykonos',
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=2400&auto=format&fit=crop',
    description: 'Aegean blues and white washed horizons, capturing the raw, sculptural beauty of Mediterranean light. Greece offers an immersive sensory experience where the elements of earth, sky, and sea create an unforgettable atmosphere for union.',
    copy: 'Sculptural beauty on the Aegean horizon.',
    style: { bottom: '5%', right: '8%', width: '440px', height: '580px', rotate: '-2deg' }
  },
  {
    id: 'portugal',
    name: 'Portugal',
    location: 'Douro Valley & Algarve',
    image: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?q=80&w=2400&auto=format&fit=crop',
    description: 'Golden cliffs and terraced vineyards offering a soulful, authentic approach to modern luxury. Portugal represents the new frontier of European prestige undiscovered, authentic, and breathtakingly beautiful.',
    copy: 'Soulful luxury at Europe’s frontier.',
    style: { top: '42%', left: '40%', width: '360px', height: '480px', rotate: '1.5deg' }
  }
];

export default function DestinationsSection() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selectedDest = DESTINATIONS.find(d => d.id === selectedId);

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const stripY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const headingY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  // Lock body scroll and toggle state class when a destination is selected
  React.useEffect(() => {
    if (selectedId) {
      document.body.style.overflow = 'hidden';
      document.body.classList.add('is-destination-open');
    } else {
      document.body.style.overflow = 'unset';
      document.body.classList.remove('is-destination-open');
    }
    return () => {
      document.body.style.overflow = 'unset';
      document.body.classList.remove('is-destination-open');
    };
  }, [selectedId]);

  return (
    <section ref={containerRef} id="destinations" className="bg-[#FAF9F6] py-32 md:py-48 relative overflow-hidden min-h-screen">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-multiply">
        <img 
          src="https://www.transparenttextures.com/patterns/natural-paper.png" 
          alt="" 
          className="w-full h-full object-repeat"
        />
      </div>

      {/* Massive Background Typography: GLOBAL */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
        <motion.span 
          style={{ y: stripY }}
          className="text-[30vw] md:text-[25vw] font-serif text-teal opacity-[0.03] leading-none uppercase tracking-tighter"
        >
          GLOBAL
        </motion.span>
      </div>

      <div className="max-w-[1800px] mx-auto px-6 relative h-full z-10">
        {/* New Editorial Destination Strip Section */}
        <div className="mb-48 md:mb-64">
          <div className="flex flex-col items-center mb-16">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="text-[10px] uppercase tracking-[0.6em] text-mauve font-medium mb-12 block"
            >
              WEDDINGS & CELEBRATIONS ACROSS THE GLOBE
            </motion.span>
            
            <div className="relative">
              <motion.h2 
                style={{ y: headingY }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 40 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                className="text-7xl md:text-[12vw] font-serif text-teal italic leading-none tracking-tighter opacity-100 z-10 absolute -top-24 left-1/2 -translate-x-1/2 whitespace-nowrap pointer-events-none"
              >
                Destinations
              </motion.h2>
              
              {/* Editorial Image Strip */}
              <div className="flex flex-nowrap gap-4 md:gap-8 overflow-hidden items-end pt-24">
                {[
                  { url: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=1200', aspect: 'aspect-[3/4]', width: 'w-48 md:w-80', delay: 0.1 },
                  { url: 'https://images.unsplash.com/photo-1543833077-7443610d4138?q=80&w=1200', aspect: 'aspect-[4/5]', width: 'w-40 md:w-64', delay: 0.3 },
                  { url: 'https://images.unsplash.com/photo-1533105082372-2d174aca4a4a?q=80&w=1200', aspect: 'aspect-square', width: 'w-56 md:w-96', delay: 0.2 },
                  { url: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1200', aspect: 'aspect-[3/4]', width: 'w-44 md:w-72', delay: 0.4 },
                  { url: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?q=80&w=1200', aspect: 'aspect-[4/5]', width: 'w-48 md:w-80', delay: 0.5 }
                ].map((img, i) => (
                  <motion.div
                    key={i}
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, delay: img.delay, ease: [0.16, 1, 0.3, 1] }}
                    className={`${img.width} ${img.aspect} overflow-hidden flex-shrink-0 shadow-2xl skew-y-1`}
                  >
                    <motion.img 
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 1.5 }}
                      src={img.url} 
                      alt="Editorial destination"
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Destination Labels */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, delay: 0.8 }}
              className="flex flex-wrap justify-center gap-x-12 gap-y-4 mt-16"
            >
              {['ITALY', 'FRANCE', 'UNITED KINGDOM', 'GREECE', 'PORTUGAL'].map((label) => (
                <span key={label} className="text-[10px] md:text-xs uppercase tracking-[0.6em] text-teal/40 font-medium">
                  {label}
                </span>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Existing Header - Always visible unless detail is open */}
        <motion.div 
          animate={{ opacity: selectedId ? 0 : 1, y: selectedId ? -20 : 0 }}
          className="text-center max-w-3xl mx-auto mb-20 relative z-10"
        >
          <span className="text-[10px] uppercase tracking-[0.6em] text-mauve font-medium mb-6 block">
            DESTINATION INTELLIGENCE
          </span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif text-teal leading-[1.1] mb-8 tracking-tight">
            Bespoke Expertise. <br /> Global Perspective.
          </h2>
          <p className="text-mauve/70 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
            We orchestrate exceptional celebrations across some of the world’s most iconic destinations combining local cultural understanding with refined global execution.
          </p>
        </motion.div>

        {/* Floating Cards Canvas */}
        <div className="relative h-[1200px] md:h-[1000px] w-full">
          {DESTINATIONS.map((dest, index) => (
            <motion.div
              key={dest.id}
              onClick={() => setSelectedId(dest.id)}
              variants={{
                initial: { opacity: 0, scale: 0.9 },
                entrance: { 
                  opacity: 1, 
                  scale: 1,
                  transition: { 
                    duration: 1.2, 
                    delay: index * 0.1,
                    opacity: { duration: 1 },
                    scale: { duration: 1 }
                  }
                },
                active: {
                  y: [0, -15, 0],
                  opacity: selectedId && selectedId !== dest.id ? 0.2 : 1,
                  scale: selectedId && selectedId !== dest.id ? 0.95 : 1,
                  filter: selectedId && selectedId !== dest.id ? 'blur(4px)' : 'blur(0px)',
                  transition: {
                    y: {
                      duration: 6 + index,
                      repeat: Infinity,
                      ease: "easeInOut"
                    },
                    opacity: { duration: 0.6 },
                    scale: { duration: 0.6 },
                    filter: { duration: 0.6 }
                  }
                }
              }}
              initial="initial"
              whileInView="entrance"
              animate="active"
              viewport={{ once: true }}
              className="absolute cursor-pointer group z-20 hidden md:block"
              style={{
                top: dest.style.top,
                left: dest.style.left,
                right: dest.style.right,
                bottom: dest.style.bottom,
                width: dest.style.width,
                height: dest.style.height,
                rotate: dest.style.rotate,
                pointerEvents: selectedId ? 'none' : 'auto'
              }}
            >
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,0.3)] bg-white transition-all duration-700 group-hover:shadow-[0_60px_120px_-25px_rgba(0,0,0,0.4)] group-hover:-translate-y-3 group-hover:scale-[1.02]">
                <img 
                  src={dest.image} 
                  alt={dest.name} 
                  className="w-full h-full object-cover brightness-[0.85] transition-transform duration-[2000ms] group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className={`absolute inset-0 bg-gradient-to-${(dest.id === 'italy' || dest.id === 'france') ? 'b' : 't'} from-black/80 via-black/20 to-transparent opacity-40 group-hover:opacity-100 transition-opacity duration-700`} />
                
                {/* Inner Border Glow */}
                <div className="absolute inset-0 border border-white/10 rounded-2xl pointer-events-none" />
                
                <div className={`absolute ${(dest.id === 'italy' || dest.id === 'france') ? 'top-0' : 'bottom-0'} ${dest.id === 'greece' ? 'right-0 text-right' : 'left-0'} p-10 w-full transform ${(dest.id === 'italy' || dest.id === 'france') ? '-translate-y-2' : 'translate-y-2'} group-hover:translate-y-0 transition-transform duration-700`}>
                  <span className="text-[9px] uppercase tracking-[0.5em] text-white/60 block mb-3 font-medium">
                    {dest.location}
                  </span>
                  <h3 className="text-4xl font-serif text-white tracking-[0.15em] uppercase mb-4 leading-tight transition-all duration-700 group-hover:tracking-[0.25em]">
                    {dest.name}
                  </h3>
                  <div className={`flex items-center gap-4 ${dest.id === 'greece' ? 'flex-row-reverse' : ''}`}>
                    <div className="w-12 h-[1px] bg-white/20 group-hover:w-20 group-hover:bg-white transition-all duration-[1000ms] ease-out-expo" />
                    <span className="text-[9px] uppercase tracking-[0.5em] text-white/40 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100 italic">
                      Discover
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Mobile Grid Fallback */}
          <div className="grid grid-cols-1 gap-12 md:hidden">
            {DESTINATIONS.map((dest) => (
              <div 
                key={dest.id}
                onClick={() => setSelectedId(dest.id)}
                className="relative aspect-[4/5] rounded-[1.5rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] bg-white"
              >
                <img 
                  src={dest.image} 
                  alt={dest.name}
                  className="w-full h-full object-cover brightness-[0.8]"
                  referrerPolicy="no-referrer"
                />
                <div className={`absolute inset-0 bg-gradient-to-${(dest.id === 'italy' || dest.id === 'france') ? 'b' : 't'} from-black/80 via-transparent to-transparent`} />
                <div className={`absolute ${(dest.id === 'italy' || dest.id === 'france') ? 'top-0' : 'bottom-0'} ${dest.id === 'greece' ? 'right-0 text-right' : 'left-0'} p-10`}>
                  <span className="text-[8px] uppercase tracking-[0.5em] text-white/50 block mb-3">
                    {dest.location}
                  </span>
                  <h3 className="text-3xl font-serif text-white uppercase tracking-widest leading-none">
                    {dest.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Immersive Detail Reveal - Portaled to bypass parent transforms */}
      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {selectedId && selectedDest && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[1000] flex items-center justify-center p-4 md:p-12 overflow-hidden"
              style={{ perspective: '2000px' }}
            >
              {/* Backdrop - purely centered focus */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedId(null)}
                className="absolute inset-0 bg-[#0E1B1B]/98 backdrop-blur-2xl"
              />

              {/* Content Container - Anchored and centered */}
              <motion.div 
                initial={{ scale: 0.9, opacity: 0, y: 100, rotateX: 10 }}
                animate={{ scale: 1, opacity: 1, y: 0, rotateX: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 100, rotateX: -10 }}
                transition={{ 
                  duration: 1.2, 
                  ease: [0.16, 1, 0.3, 1],
                  opacity: { duration: 0.8 }
                }}
                className="relative w-full max-w-7xl mx-4 bg-white rounded-[2rem] overflow-hidden shadow-[0_100px_200px_-40px_rgba(0,0,0,0.8)] flex flex-col md:flex-row h-[90vh] md:h-[80vh] z-[1010]"
              >
                <button 
                  onClick={() => setSelectedId(null)}
                  className="fixed md:absolute top-6 right-6 md:top-10 md:right-10 z-[1050] w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-off-white/90 backdrop-blur-md text-teal shadow-2xl hover:bg-teal hover:text-white transition-all duration-700 group"
                >
                  <X size={24} className="md:w-7 md:h-7 group-hover:rotate-90 transition-transform duration-700" />
                </button>

                {/* Cinematic Image Side */}
                <div className="w-full md:w-[50%] h-[40%] md:h-full relative overflow-hidden">
                  <motion.img 
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 3, ease: "easeOut" }}
                    src={selectedDest.image} 
                    alt={selectedDest.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent mix-blend-overlay" />
                </div>

                {/* Editorial Text Side */}
                <div className="w-full md:w-[50%] p-8 md:p-16 lg:px-24 pt-20 pb-12 md:py-24 flex flex-col justify-start md:justify-center bg-white overflow-y-auto custom-scrollbar">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="max-w-md mx-auto w-full pb-8"
                  >
                    <span className="text-[10px] uppercase tracking-[0.8em] text-mauve font-medium mb-12 block opacity-40">
                      {selectedDest.location}
                    </span>
                    <h2 className="text-5xl md:text-7xl font-serif text-teal mb-8 tracking-tighter leading-[0.85] uppercase">
                      {selectedDest.name}
                    </h2>
                    <div className="w-16 h-[1px] bg-teal/10 mb-12" />
                    <p className="text-teal/80 text-xl md:text-2xl font-serif italic mb-10 leading-relaxed font-light">
                      “{selectedDest.copy}”
                    </p>
                    <p className="text-mauve/70 text-base md:text-lg leading-relaxed font-light mb-16">
                      {selectedDest.description}
                    </p>
                    
                    <motion.button 
                      whileHover={{ x: 10 }}
                      className="flex items-center gap-8 text-teal uppercase tracking-[0.4em] text-[10px] font-bold group"
                    >
                      <span className="relative">
                        Explore Portfolio
                        <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-teal/20" />
                      </span>
                      <div className="w-12 h-[1px] bg-teal/20 transition-all duration-700 group-hover:w-24 group-hover:bg-teal" />
                    </motion.button>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </section>
  );
}
