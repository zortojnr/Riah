import React from 'react';
import { motion } from 'motion/react';

const BRANDS = [
  { name: 'Vogue Weddings' },
  { name: 'Tatler' },
  { name: 'Brides' },
  { name: 'The Times' },
  { name: 'Evening Standard' },
  { name: 'Harper\'s Bazaar' },
];

export default function PressSection() {
  const duplicatedBrands = [...BRANDS, ...BRANDS];

  return (
    <section className="bg-off-white pt-10 pb-16 md:pb-24 border-y border-teal/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 mb-12 text-center">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[10px] uppercase tracking-[0.6em] text-mauve font-medium block"
        >
          Press & Recognition
        </motion.span>
      </div>

      <div className="relative flex whitespace-nowrap group">
        {/* First Marquee Set */}
        <motion.div 
          animate={{ x: [0, "-50%"] }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ willChange: 'transform' }}
          className="flex gap-12 sm:gap-20 md:gap-32 items-center pr-12 sm:pr-20 md:pr-32"
        >
          {duplicatedBrands.map((brand, i) => (
            <span
              key={`${brand.name}-${i}`}
              className="text-xl md:text-3xl font-serif italic tracking-[0.2em] text-teal/40 hover:text-teal transition-all duration-700 cursor-default uppercase"
            >
              {brand.name}
            </span>
          ))}
        </motion.div>
        
        {/* Second Marquee Set (Shadow copy for seamless loop) */}
        <motion.div 
          animate={{ x: [0, "-50%"] }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ willChange: 'transform' }}
          className="flex gap-12 sm:gap-20 md:gap-32 items-center pr-12 sm:pr-20 md:pr-32 pointer-events-none"
          aria-hidden="true"
        >
          {duplicatedBrands.map((brand, i) => (
            <span
              key={`shadow-${brand.name}-${i}`}
              className="text-xl md:text-3xl font-serif italic tracking-[0.2em] text-teal/40 uppercase"
            >
              {brand.name}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
