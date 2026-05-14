import { motion } from 'motion/react';
import FadeIn from '../components/FadeIn';

const MEDIA_IMAGES = [
  '/assests/1a.webp',
  '/assests/2a.webp',
  '/assests/3a.webp',
  '/assests/4a.webp',
  '/assests/5a.webp',
  '/assests/6a.webp',
  '/assests/7a.webp',
  '/assests/8a.webp',
  '/assests/9a.webp',
  '/assests/10a.webp',
  '/assests/11a.webp',
  '/assests/12a.webp',
  '/assests/13a.webp',
  '/assests/14a.webp',
  '/assests/1b.webp',
  '/assests/2b.webp',
  '/assests/3b.webp',
  '/assests/4b.webp',
  '/assests/5b.webp',
  '/assests/6b.webp',
  '/assests/7b.webp',
  '/assests/8b.webp',
  '/assests/9b.webp',
  '/assests/10b.webp',
  '/assests/11b.webp',
  '/assests/12b.webp',
  '/assests/GSON3031.webp',
  '/assests/Steff3.webp',
  '/assests/Stefflon(1).webp',
  '/assests/SteffWireless(271).webp',
  '/assests/StefflonDon.webp',
];

export default function Media() {
  return (
    <div className="pt-24 md:pt-36 pb-24">
      {/* Header */}
      <div className="luxury-container mb-16">
        <FadeIn className="text-center">
          <span className="text-[10px] uppercase tracking-[0.6em] text-mauve font-semibold mb-6 block">Our Work</span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl text-teal mb-6 leading-none tracking-tight font-serif">
            Media
          </h1>
          <p className="text-sm text-teal/60 font-light italic max-w-xl mx-auto leading-relaxed">
            A glimpse into the celebrations we have had the honour of curating.
          </p>
        </FadeIn>
      </div>

      {/* Masonry grid */}
      <div className="luxury-container">
        <div className="columns-2 md:columns-3 lg:columns-4 gap-3 md:gap-4">
          {MEDIA_IMAGES.map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 1, delay: (i % 4) * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="break-inside-avoid mb-3 md:mb-4 overflow-hidden"
            >
              <img
                src={src}
                alt=""
                loading="lazy"
                className="w-full object-cover hover:scale-105 transition-transform duration-[2s] ease-out"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
