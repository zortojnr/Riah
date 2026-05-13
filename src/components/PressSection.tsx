import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'motion/react';

const BRANDS = [
  { name: 'Vogue Weddings' },
  { name: 'Tatler' },
  { name: 'Brides' },
  { name: 'The Times' },
  { name: 'Evening Standard' },
  { name: "Harper's Bazaar" },
];

export default function PressSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: '200px' });
  const duplicatedBrands = [...BRANDS, ...BRANDS];
  const [tabVisible, setTabVisible] = useState(true);

  useEffect(() => {
    const onVisibility = () => setTabVisible(!document.hidden);
    document.addEventListener('visibilitychange', onVisibility);
    return () => document.removeEventListener('visibilitychange', onVisibility);
  }, []);

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

      <div ref={ref} className="relative overflow-hidden">
        <motion.div
          animate={isInView && tabVisible ? { x: [0, '-50%'] } : false}
          transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
          style={{ willChange: 'transform', display: 'flex', whiteSpace: 'nowrap' }}
          className="gap-12 sm:gap-20 md:gap-32 items-center pr-12 sm:pr-20 md:pr-32 flex"
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
      </div>
    </section>
  );
}
