import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';

const DESTINATIONS = [
  {
    country: 'ITALY',
    image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=1200',
    blurb: 'Lakeside villas, rolling Tuscan hills, and centuries-old estates. We craft ceremonies as timeless as the landscape.',
    detail: 'From the shores of Lake Como to the rolling hills of Tuscany, Italy offers a landscape that feels made for celebration. We work with private villas, historic estates, and lakeside venues to craft ceremonies as timeless as the country itself. Every celebration here is shaped by the light, the land, and a deep respect for Italian artisan tradition.',
    delay: 0,
  },
  {
    country: 'FRANCE',
    image: '/assests/france.webp',
    blurb: 'From Provençal châteaux to Parisian salons, we bring an intimate understanding of French elegance to every celebration.',
    detail: 'Whether in a Provençal château surrounded by lavender fields or a refined Parisian salon, France rewards those who understand its rhythm. We bring an intimate knowledge of French elegance and supplier excellence to ensure your celebration feels rooted in the culture rather than imposed upon it.',
    delay: 0.1,
  },
  {
    country: 'UNITED KINGDOM',
    image: '/assests/2a.webp',
    blurb: 'Stately homes, manicured gardens, and private members clubs. Our home ground, curated with unmatched local access.',
    detail: 'The United Kingdom is our home ground. We have unparalleled access to the most distinguished private estates, members clubs, and manicured gardens this country holds. From intimate countryside gatherings to grand London celebrations, we curate every element with the precision and warmth that only true local knowledge provides.',
    delay: 0.2,
  },
  {
    country: 'GREECE',
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1200',
    blurb: 'Clifftop ceremonies above the Aegean, island exclusives, and golden-hour receptions etched into memory forever.',
    detail: 'Greece offers something no other destination can replicate: light that seems to hold still at golden hour, clifftop settings above the Aegean, and a culture that takes celebration seriously. We source island exclusives and private clifftop venues to create receptions that stay in memory long after the night has ended.',
    delay: 0.3,
  },
  {
    country: 'SPAIN',
    image: '/assests/spain.webp',
    blurb: "Andalusian fincas, Balearic coastlines, and Catalonian estates. Spain's passion and elegance woven into every celebration.",
    detail: 'From Andalusian fincas rich with history to Balearic coastlines and Catalonian estates, Spain brings a passion and warmth that elevates every celebration. We work across the most distinctive regions, weaving local tradition and contemporary luxury into experiences that feel entirely your own.',
    delay: 0.4,
  },
];

function DestinationModal({ dest, onClose }: { dest: typeof DESTINATIONS[0]; onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-8"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/65 backdrop-blur-sm" />

      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 10 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative bg-off-white w-full max-w-3xl flex flex-col sm:flex-row overflow-hidden shadow-2xl z-10"
        style={{ maxHeight: '90vh' }}
        onClick={e => e.stopPropagation()}
      >
        {/* X close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-5 z-20 text-teal/40 hover:text-teal transition-colors duration-300 text-2xl leading-none"
          aria-label="Close"
        >
          ×
        </button>

        {/* Image */}
        <div className="w-full sm:w-[40%] h-52 sm:h-auto relative shrink-0">
          <img
            src={dest.image}
            alt={dest.country}
            className="absolute inset-0 w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Content */}
        <div className="flex-1 p-8 sm:p-10 overflow-y-auto flex flex-col justify-between">
          <div>
            <span className="text-[9px] uppercase tracking-[0.6em] text-mauve font-semibold block mb-3">Destination</span>
            <h2 className="text-2xl sm:text-3xl font-serif text-teal leading-none tracking-tight mb-4">
              {dest.country}
            </h2>
            <div className="w-8 h-[1px] bg-mauve/40 mb-6" />
            <p className="text-sm text-teal font-serif italic leading-relaxed mb-5">
              {dest.blurb}
            </p>
            <p className="text-[13px] text-teal/80 font-light leading-relaxed tracking-wide">
              {dest.detail}
            </p>
          </div>
          <div className="mt-8 pt-6 border-t border-teal/10">
            <Link
              to="/enquire"
              onClick={onClose}
              className="text-[10px] uppercase tracking-[0.5em] text-teal border border-teal/30 px-8 py-4 inline-block hover:bg-teal hover:text-off-white transition-all duration-500"
            >
              Enquire about this destination
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function DestinationsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeCountry, setActiveCountry] = useState<string | null>(null);
  const activeDest = DESTINATIONS.find(d => d.country === activeCountry) ?? null;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const stripY   = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
  const headingY = useTransform(scrollYProgress, [0, 1], ['0%', '-10%']);

  return (
    <section ref={containerRef} id="destinations" className="bg-[#FAF9F6] py-16 sm:py-24 md:py-40 relative overflow-hidden">

      <AnimatePresence>
        {activeDest && (
          <DestinationModal dest={activeDest} onClose={() => setActiveCountry(null)} />
        )}
      </AnimatePresence>

      {/* Background GLOBAL text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
        <motion.span
          style={{ y: stripY }}
          className="text-[30vw] md:text-[25vw] font-serif text-teal opacity-[0.03] leading-none uppercase tracking-tighter"
        >
          GLOBAL
        </motion.span>
      </div>

      <div className="max-w-[1800px] mx-auto px-5 sm:px-8 md:px-12 relative z-10">
        <div className="flex flex-col items-center">

          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="text-[10px] uppercase tracking-[0.6em] text-mauve font-medium mb-12 block"
          >
            WEDDINGS & CELEBRATIONS ACROSS THE GLOBE
          </motion.span>

          <div className="relative w-full">
            <motion.h2
              style={{ y: headingY }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 40 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(36px,8vw,160px)] font-serif text-teal italic leading-none tracking-tighter absolute -top-12 md:-top-24 left-1/2 -translate-x-1/2 whitespace-nowrap pointer-events-none"
            >
              Destinations
            </motion.h2>

            <div className="flex gap-3 md:gap-5 items-end mt-20 md:mt-24 pt-4 overflow-x-auto pb-2 md:overflow-visible md:pb-0 snap-x snap-mandatory md:snap-none no-scrollbar">
              {DESTINATIONS.map((dest) => (
                <div key={dest.country} className="flex-none w-[52vw] sm:w-[38vw] md:flex-1 md:min-w-0 md:w-auto flex flex-col items-center snap-start">

                  <div className="w-full overflow-hidden">
                    <motion.div
                      initial={{ y: 100, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true, amount: 0, margin: "0px 0px -80px 0px" }}
                      transition={{ duration: 1.6, delay: dest.delay, ease: [0.16, 1, 0.3, 1] }}
                      onClick={() => setActiveCountry(dest.country)}
                      className="w-full h-[52vw] sm:h-[380px] md:h-[480px] lg:h-[560px] relative overflow-hidden group cursor-pointer"
                    >
                      <img
                        src={dest.image}
                        alt={dest.country}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105"
                        referrerPolicy="no-referrer"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

                      {/* Hover discover cue */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <span className="text-[9px] uppercase tracking-[0.5em] text-off-white/90 border border-off-white/40 px-5 py-2 bg-black/20 backdrop-blur-sm">
                          Discover
                        </span>
                      </div>

                      <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0, margin: "0px 0px -80px 0px" }}
                        transition={{ duration: 0.9, delay: dest.delay + 0.45, ease: 'easeOut' }}
                        className="absolute inset-x-0 bottom-0 px-4 md:px-5 pb-6 md:pb-8 flex flex-col items-center text-center"
                      >
                        <div className="w-6 h-[1px] bg-white/40 mb-3" />
                        <p className="text-white/70 font-serif italic text-[9px] sm:text-[10px] md:text-xs leading-relaxed">
                          {dest.blurb}
                        </p>
                      </motion.div>
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0, margin: "0px 0px -80px 0px" }}
                    transition={{ duration: 0.8, delay: dest.delay + 0.6, ease: 'easeOut' }}
                    className="mt-5 flex flex-col items-center gap-2"
                  >
                    <div className="w-8 h-[1px] bg-teal/25" />
                    <p className="font-serif italic text-teal text-sm sm:text-base md:text-lg lg:text-xl tracking-wide font-bold text-center leading-tight">
                      {dest.country}
                    </p>
                  </motion.div>

                </div>
              ))}
            </div>

            <div className="flex md:hidden items-center justify-center gap-2 mt-5 text-teal/40">
              <span className="text-[9px] uppercase tracking-[0.4em]">Swipe</span>
              <motion.span
                animate={{ x: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 1.4, ease: 'easeInOut' }}
                className="text-base leading-none"
              >
                →
              </motion.span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
