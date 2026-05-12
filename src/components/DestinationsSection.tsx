import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

const DESTINATIONS = [
  {
    country: 'ITALY',
    image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=1200',
    blurb: 'Lakeside villas, rolling Tuscan hills, and centuries-old estates. We craft ceremonies as timeless as the landscape.',
    delay: 0,
  },
  {
    country: 'FRANCE',
    image: '/assests/france.jpg',
    blurb: 'From Provençal châteaux to Parisian salons, we bring an intimate understanding of French elegance to every celebration.',
    delay: 0.1,
  },
  {
    country: 'UNITED KINGDOM',
    image: '/assests/2a.jpg',
    blurb: 'Stately homes, manicured gardens, and private members clubs. Our home ground, curated with unmatched local access.',
    delay: 0.2,
  },
  {
    country: 'GREECE',
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1200',
    blurb: 'Clifftop ceremonies above the Aegean, island exclusives, and golden-hour receptions etched into memory forever.',
    delay: 0.3,
  },
  {
    country: 'PORTUGAL',
    image: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?q=80&w=1200',
    blurb: "Sun-drenched quintas, coastal retreats, and heritage palaces. Portugal's warmth reflected in every detail we place.",
    delay: 0.4,
  },
];

export default function DestinationsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const stripY   = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
  const headingY = useTransform(scrollYProgress, [0, 1], ['0%', '-10%']);

  return (
    <section ref={containerRef} id="destinations" className="bg-[#FAF9F6] py-16 sm:py-24 md:py-40 relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-multiply">
        <img src="https://www.transparenttextures.com/patterns/natural-paper.png" alt="" className="w-full h-full object-repeat" />
      </div>

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

          {/* Section label */}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="text-[10px] uppercase tracking-[0.6em] text-mauve font-medium mb-12 block"
          >
            WEDDINGS & CELEBRATIONS ACROSS THE GLOBE
          </motion.span>

          {/* Heading */}
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

            {/* Pillar Cards — horizontal scroll on mobile, flex row on md+ */}
            <div className="flex gap-3 md:gap-5 items-end mt-20 md:mt-24 pt-4 overflow-x-auto pb-2 md:overflow-visible md:pb-0 snap-x snap-mandatory md:snap-none no-scrollbar">
              {DESTINATIONS.map((dest) => (
                <div key={dest.country} className="flex-none w-[52vw] sm:w-[38vw] md:flex-1 md:min-w-0 md:w-auto flex flex-col items-center snap-start">

                  {/* Clip wrapper — hides the card while it's below its resting position */}
                  <div className="w-full overflow-hidden">
                  {/* Card — animates up on scroll */}
                  <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0, margin: "0px 0px -80px 0px" }}
                    transition={{ duration: 1.6, delay: dest.delay, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full h-[52vw] sm:h-[380px] md:h-[480px] lg:h-[560px] relative overflow-hidden group"
                  >
                    {/* Image */}
                    <img
                      src={dest.image}
                      alt={dest.country}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />

                    {/* Gradient — covers bottom half for legibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

                    {/* Blurb inside card — bottom, centered */}
                    <motion.div
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0, margin: "0px 0px -80px 0px" }}
                      transition={{ duration: 0.9, delay: dest.delay + 0.45, ease: 'easeOut' }}
                      className="absolute inset-x-0 bottom-0 px-4 md:px-5 pb-6 md:pb-8 flex flex-col items-center text-center"
                    >
                      {/* Thin rule */}
                      <div className="w-6 h-[1px] bg-white/40 mb-3" />
                      <p className="text-white/70 font-serif italic text-[9px] sm:text-[10px] md:text-xs leading-relaxed">
                        {dest.blurb}
                      </p>
                    </motion.div>
                  </motion.div>
                  </div>{/* end clip wrapper */}

                  {/* Country name — below card, centered, luxury */}
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

          </div>
        </div>
      </div>
    </section>
  );
}
