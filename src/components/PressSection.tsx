import React from 'react';
import { motion } from 'motion/react';

const BRANDS = [
  { name: 'VOGUE', type: 'editorial' },
  { name: 'BRIDES', type: 'editorial' },
  { name: 'TATLER', type: 'editorial' },
  { name: 'THE LANE', type: 'editorial' },
  { name: 'KINFOLK', type: 'editorial' },
  { name: 'HARPERS', type: 'editorial' }
];

export default function PressSection() {
  const duplicatedBrands = [...BRANDS, ...BRANDS, ...BRANDS];

  return (
    <section className="bg-off-white pt-10 pb-32 border-y border-teal/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[10px] uppercase tracking-[0.6em] text-mauve font-medium block"
        >
          AS FEATURED IN
        </motion.span>
      </div>

      <div className="relative flex whitespace-nowrap group">
        {/* First Marquee Set */}
        <motion.div 
          animate={{ x: [0, "-33.333%"] }}
          transition={{ 
            duration: 35, 
            repeat: Infinity, 
            ease: "linear",
          }}
          className="flex gap-24 md:gap-40 items-center pr-24 md:pr-40"
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
          animate={{ x: [0, "-33.333%"] }}
          transition={{ 
            duration: 35, 
            repeat: Infinity, 
            ease: "linear",
          }}
          className="flex gap-24 md:gap-40 items-center pr-24 md:pr-40 pointer-events-none"
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
