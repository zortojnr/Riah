import { motion } from 'motion/react';
import FadeIn from './FadeIn';

const PORTRAITS = [
  {
    number: '03',
    word: 'Experience',
    description: 'From the first enquiry to the final dance, we create an experience that transcends the ordinary.',
    image: '/assests/experience.webp',
  },
  {
    number: '02',
    word: 'Culture',
    description: 'Deep understanding of heritage, tradition, and the rituals that make a celebration yours.',
    image: '/assests/culture.webp',
  },
  {
    number: '04',
    word: 'Storytelling',
    description: 'Every wedding tells a story. We design yours so it unfolds with intention and beauty.',
    image: '/assests/discretion4.webp',
  },
  {
    number: '05',
    word: 'Intentionality',
    description: 'Nothing is accidental. Every element is chosen with purpose and meaning.',
    image: '/assests/12a.webp',
  },
];

const LANDSCAPE = {
  number: '01',
  word: 'Luxury',
  description: 'Uncompromising attention to detail, refined aesthetics, and world-class execution.',
  image: '/assests/14a.webp',
};

function PortraitCard({ number, word, description, image, delay = 0 }: {
  number: string;
  word: string;
  description: string;
  image: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay }}
      className="relative overflow-hidden aspect-[3/4] border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.4)] group w-full"
    >
      <img
        src={image}
        alt={word}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/5" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_65%,rgba(191,168,187,0.10)_0%,transparent_65%)]" />

      {/* Left accent bar */}
      <div className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-transparent via-mauve/60 to-transparent" />

      {/* Corner brackets */}
      <div className="absolute top-4 left-4 w-6 h-6 border-l border-t border-mauve/30" />
      <div className="absolute bottom-4 right-4 w-6 h-6 border-r border-b border-mauve/30" />

      {/* Number */}
      <div className="absolute top-5 left-7">
        <span className="text-[8px] font-mono tracking-[0.5em] text-off-white/25 uppercase">{number}</span>
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 p-5 sm:p-6">
        <h3 className="text-2xl sm:text-3xl font-serif italic text-off-white/90 leading-none mb-3 tracking-tight">
          {word}
        </h3>
        <div className="w-6 h-[1px] bg-mauve/50 mb-3" />
        <p className="text-[10px] text-off-white/75 font-light leading-relaxed tracking-wide max-w-[180px]">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

export default function RiahDifferenceSection() {
  return (
    <section className="relative py-20 sm:py-28 md:py-36 overflow-hidden bg-[#0E1B1B]">

      {/* Ambient watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden z-0">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 3, ease: 'easeOut' }}
          className="text-[22vw] font-serif font-bold text-off-white/[0.02] tracking-[0.3em] uppercase leading-none"
        >
          RIAH
        </motion.span>
      </div>

      {/* Static glows — no animation, no blur filter (perf) */}
      <div className="absolute top-1/4 -left-24 w-80 h-80 bg-mauve/[0.06] rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-1/3 -right-32 w-96 h-96 bg-teal/[0.08] rounded-full pointer-events-none z-0" />

      <div className="luxury-container relative z-10">

        {/* Section header */}
        <FadeIn className="mb-14 md:mb-20 text-center">
          <span className="text-[10px] uppercase tracking-[0.6em] text-mauve font-semibold mb-6 block">
            The RIAH Difference
          </span>
          <h2 className="text-3xl md:text-5xl text-off-white/90 font-serif leading-[1.05] tracking-tight max-w-2xl mx-auto">
            Every celebration is approached through the lens of:
          </h2>
        </FadeIn>

        {/* ── Desktop: large landscape, portrait cards pinned to its corners ── */}
        <div className="hidden lg:block">
          {/*
            Padding on the outer wrapper = half the portrait card width so the
            absolutely-positioned portraits (centred on each corner) don't get clipped.
            Portrait card width = 280px  →  padding = 140px
          */}
          <div className="relative" style={{ padding: '140px' }}>

            {/* Landscape — fills the padded inner area, full width */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="relative overflow-hidden w-full border border-white/10 shadow-[0_15px_40px_rgba(0,0,0,0.4)] group"
              style={{ aspectRatio: '16/9' }}
            >
              <img
                src={LANDSCAPE.image}
                alt={LANDSCAPE.word}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105"
        loading="lazy"
              />
              <div className="absolute inset-0 bg-teal/35 mix-blend-multiply" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

              {/* Corner brackets */}
              <div className="absolute top-6 left-6 w-10 h-10 border-l border-t border-mauve/30" />
              <div className="absolute bottom-6 right-6 w-10 h-10 border-r border-b border-mauve/30" />

              {/* Number */}
              <div className="absolute top-7 left-10">
                <span className="text-[9px] font-mono tracking-[0.5em] text-off-white/30 uppercase">{LANDSCAPE.number}</span>
              </div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-10">
                <h3 className="text-5xl xl:text-6xl font-serif italic text-off-white/95 leading-none mb-4 tracking-tight">
                  {LANDSCAPE.word}
                </h3>
                <div className="w-10 h-[1px] bg-mauve/70 mb-4 mx-auto" />
                <p className="text-[11px] text-off-white/60 font-light leading-relaxed tracking-wide max-w-[280px]">
                  {LANDSCAPE.description}
                </p>
              </div>
            </motion.div>

            {/* Portrait cards — centred exactly on each corner of the landscape */}
            {/* Top-left */}
            <div className="absolute z-20" style={{ top: '140px', left: '140px', width: '280px', transform: 'translate(-50%, -50%)' }}>
              <PortraitCard {...PORTRAITS[0]} delay={0} />
            </div>
            {/* Top-right */}
            <div className="absolute z-20" style={{ top: '140px', right: '140px', width: '280px', transform: 'translate(50%, -50%)' }}>
              <PortraitCard {...PORTRAITS[1]} delay={0.1} />
            </div>
            {/* Bottom-left */}
            <div className="absolute z-20" style={{ bottom: '140px', left: '140px', width: '280px', transform: 'translate(-50%, 50%)' }}>
              <PortraitCard {...PORTRAITS[2]} delay={0.3} />
            </div>
            {/* Bottom-right */}
            <div className="absolute z-20" style={{ bottom: '140px', right: '140px', width: '280px', transform: 'translate(50%, 50%)' }}>
              <PortraitCard {...PORTRAITS[3]} delay={0.4} />
            </div>

          </div>
        </div>

        {/* ── Mobile / Tablet: stacked ── */}
        <div className="lg:hidden flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-4">
            <PortraitCard {...PORTRAITS[0]} delay={0} />
            <PortraitCard {...PORTRAITS[1]} delay={0.1} />
          </div>

          {/* Landscape horizontal on mobile too */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="relative overflow-hidden border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.35)] group"
            style={{ aspectRatio: '16/9' }}
          >
            <img
              src={LANDSCAPE.image}
              alt={LANDSCAPE.word}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105"
        loading="lazy"
            />
            <div className="absolute inset-0 bg-teal/35 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
            <div className="absolute top-4 left-4 w-6 h-6 border-l border-t border-mauve/30" />
            <div className="absolute bottom-4 right-4 w-6 h-6 border-r border-b border-mauve/30" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
              <h3 className="text-3xl font-serif italic text-off-white/95 leading-none mb-3 tracking-tight">{LANDSCAPE.word}</h3>
              <div className="w-8 h-[1px] bg-mauve/70 mb-3 mx-auto" />
              <p className="text-[10px] text-off-white/60 font-light leading-relaxed tracking-wide max-w-[200px]">{LANDSCAPE.description}</p>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            <PortraitCard {...PORTRAITS[2]} delay={0.3} />
            <PortraitCard {...PORTRAITS[3]} delay={0.4} />
          </div>
        </div>

        {/* Closing quote */}
        <FadeIn delay={0.5} className="mt-24 md:mt-28 pt-12 border-t border-white/5 text-center max-w-3xl mx-auto">
          <p className="text-base md:text-lg text-off-white/35 font-light italic tracking-wide leading-relaxed">
            We believe true luxury is not only seen, it is felt, remembered, and carried through generations.
          </p>
        </FadeIn>

      </div>
    </section>
  );
}
