import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import FadeIn from '../components/FadeIn';

const FEATURED_IN = [
  { name: 'British Vogue Weddings', desc: 'Editorial feature on luxury multicultural celebrations', year: '2025', logo: '/assests/british-vogue-logo-png_seeklogo-471418.png' },
  { name: 'Tatler', desc: 'Where culture meets refined celebration', year: '2025', logo: '/assests/tatler.jpg' },
  { name: 'Evening Standard', desc: "London's most sought-after wedding planners", year: '2024', logo: '/assests/london-evening-standard-logo-png_seeklogo-345101.png' },
  { name: 'Metro', desc: 'Destination weddings, the new luxury standard', year: '2024', logo: '/assests/metro.jpg' },
  { name: 'The Lane', desc: 'Luxury planning with cultural depth', year: '2023', logo: '/assests/Lane.png' },
];

const SPEAKING = [
  { event: 'ENGAGE! Luxury Wedding Summits', topic: 'Cultural Intelligence in Luxury Planning' },
  { event: 'The Global Luxury Forum', topic: 'Redefining Heritage in High-End Celebrations' },
  { event: 'Designers & Curators Panel 2025', topic: 'Intentionality as a Design Philosophy' },
];

const AWARDS = [
  { title: 'Best Luxury Wedding Planner 2024', body: 'Global Wedding Awards' },
  { title: 'Design Excellence Award', body: 'European Boutique Event House' },
];

const PULL_QUOTE = {
  text: 'RIAH brings a level of cultural intelligence and refined artistry that is simply unmatched in the luxury wedding space.',
  source: 'British Vogue Weddings',
};

export default function Press() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <div className="bg-off-white overflow-hidden">

      {/* ── HERO ── */}
      <section ref={heroRef} className="relative h-[70vh] md:h-[85vh] flex items-end overflow-hidden">
        <motion.div style={{ y: heroY }} className="absolute inset-0 z-0">
          <img
            src="/assests/11a.webp"
            alt=""
            className="w-full h-full object-cover brightness-[0.45]"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e1b1b]/95 via-[#0e1b1b]/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0e1b1b]/60 to-transparent" />
        </motion.div>

        {/* Ambient RIAH watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3, ease: 'easeOut' }}
            className="text-[28vw] font-serif font-bold text-white/[0.025] tracking-[0.35em] uppercase leading-none"
          >
            RIAH
          </motion.span>
        </div>

        {/* Corner brackets */}
        <div className="absolute top-8 left-8 md:top-12 md:left-14 w-10 h-10 border-l border-t border-mauve/25 z-10" />
        <div className="absolute top-8 right-8 md:top-12 md:right-14 w-10 h-10 border-r border-t border-mauve/25 z-10" />

        <motion.div style={{ opacity: heroOpacity }} className="relative z-10 w-full px-5 sm:px-8 md:px-14 lg:px-20 pb-14 md:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          >
            <span className="text-[9px] uppercase tracking-[0.7em] text-mauve/80 mb-8 block font-sans">
              Acclaim
            </span>
            <h1 className="font-serif text-[clamp(48px,8vw,110px)] text-off-white leading-[0.92] tracking-[-0.01em] mb-8">
              Press &amp;<br />Recognition
            </h1>
            <div className="w-14 h-[1px] bg-mauve/50" />
          </motion.div>
        </motion.div>
      </section>

      {/* ── PULL QUOTE ── */}
      <section className="bg-teal py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span className="text-[20vw] font-serif font-bold text-white/[0.03] leading-none tracking-widest uppercase">
            "
          </span>
        </div>
        <FadeIn className="max-w-4xl mx-auto px-5 sm:px-8 md:px-14 text-center relative z-10">
          <p className="font-serif italic text-off-white/90 text-2xl md:text-3xl lg:text-4xl leading-[1.45] tracking-tight mb-10">
            "{PULL_QUOTE.text}"
          </p>
          <div className="w-8 h-[1px] bg-mauve/60 mx-auto mb-6" />
          <span className="text-[9px] uppercase tracking-[0.6em] text-mauve/70 font-sans">
            {PULL_QUOTE.source}
          </span>
        </FadeIn>
      </section>

      {/* ── FEATURED IN ── */}
      <section className="py-24 md:py-36 relative bg-off-white overflow-hidden">
        {/* Watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span className="text-[20vw] font-serif font-bold text-teal/[0.03] leading-none tracking-[0.3em] uppercase">PRESS</span>
        </div>

        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-14 lg:px-20 relative z-10">

          <FadeIn className="mb-16 md:mb-20">
            <div className="flex items-end justify-between gap-8">
              <div>
                <span className="text-[9px] uppercase tracking-[0.6em] text-mauve font-semibold mb-4 block">Coverage</span>
                <h2 className="text-3xl md:text-5xl font-serif italic text-teal leading-none tracking-tight">As Featured In</h2>
              </div>
              <div className="hidden md:block h-[1px] flex-1 bg-teal/5 mb-3" />
            </div>
          </FadeIn>

          {/* Row 1 — 2 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6 mb-5 md:mb-6">
            {FEATURED_IN.slice(0, 2).map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
                className="group relative bg-white border border-teal/8 hover:border-mauve/30 transition-all duration-700 shadow-sm hover:shadow-xl p-8 md:p-10 flex flex-col justify-between min-h-[220px] md:min-h-[260px] overflow-hidden"
              >
                {/* Corner bracket top-left */}
                <div className="absolute top-4 left-4 w-5 h-5 border-l border-t border-mauve/20 group-hover:border-mauve/50 transition-colors duration-500" />
                {/* Corner bracket bottom-right */}
                <div className="absolute bottom-4 right-4 w-5 h-5 border-r border-b border-mauve/20 group-hover:border-mauve/50 transition-colors duration-500" />

                {/* Top row: logo circle + year */}
                <div className="flex items-start justify-between mb-8">
                  <div className="w-[100px] h-[100px] md:w-[120px] md:h-[120px] overflow-hidden border border-teal/15 group-hover:border-mauve/40 transition-colors duration-700 shadow-md bg-white flex items-center justify-center p-4 shrink-0">
                    <img src={item.logo} alt={item.name} className="w-full h-full object-contain" loading="lazy" />
                  </div>
                  <span className="text-5xl md:text-6xl font-serif italic font-black text-teal/30 group-hover:text-mauve/70 transition-colors duration-700 leading-none">
                    {item.year}
                  </span>
                </div>

                {/* Bottom: name + desc */}
                <div>
                  <div className="w-6 h-[1px] bg-mauve/30 mb-4 group-hover:w-12 transition-all duration-700" />
                  <h3 className="text-xl md:text-2xl font-serif italic text-teal group-hover:text-mauve transition-colors duration-500 leading-tight tracking-tight mb-2">
                    {item.name}
                  </h3>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-teal/60 font-semibold leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Row 2 — 3 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-6">
            {FEATURED_IN.slice(2).map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
                className="group relative bg-white border border-teal/8 hover:border-mauve/30 transition-all duration-700 shadow-sm hover:shadow-xl p-7 md:p-9 flex flex-col justify-between min-h-[200px] md:min-h-[240px] overflow-hidden"
              >
                <div className="absolute top-4 left-4 w-4 h-4 border-l border-t border-mauve/20 group-hover:border-mauve/50 transition-colors duration-500" />
                <div className="absolute bottom-4 right-4 w-4 h-4 border-r border-b border-mauve/20 group-hover:border-mauve/50 transition-colors duration-500" />

                <div className="flex items-start justify-between mb-6">
                  <div className="w-[85px] h-[85px] md:w-[100px] md:h-[100px] overflow-hidden border border-teal/15 group-hover:border-mauve/40 transition-colors duration-700 shadow-md bg-white flex items-center justify-center p-3 shrink-0">
                    <img src={item.logo} alt={item.name} className="w-full h-full object-contain" loading="lazy" />
                  </div>
                  <span className="text-4xl md:text-5xl font-serif italic font-black text-teal/30 group-hover:text-mauve/70 transition-colors duration-700 leading-none">
                    {item.year}
                  </span>
                </div>

                <div>
                  <div className="w-5 h-[1px] bg-mauve/30 mb-3 group-hover:w-10 transition-all duration-700" />
                  <h3 className="text-lg md:text-xl font-serif italic text-teal group-hover:text-mauve transition-colors duration-500 leading-tight tracking-tight mb-2">
                    {item.name}
                  </h3>
                  <p className="text-[9px] uppercase tracking-[0.3em] text-teal/60 font-semibold leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SPEAKING + AWARDS ── */}
      <section className="bg-[#0e1b1b] py-24 md:py-32 overflow-hidden">
        <div className="max-w-[1300px] mx-auto px-5 sm:px-8 md:px-14 lg:px-20">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

            {/* Speaking — image left, text right */}
            <FadeIn>
              <div className="flex items-center gap-6 mb-10">
                <span className="text-[9px] uppercase tracking-[0.6em] text-mauve/80 font-semibold">Speaking</span>
                <div className="flex-1 h-[1px] bg-white/5" />
              </div>
              <div className="flex flex-col sm:flex-row gap-7 md:gap-9 items-start">
                {/* Image */}
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                  className="relative overflow-hidden shrink-0 w-[160px] h-[160px] sm:w-[200px] sm:h-[200px] md:w-[260px] md:h-[260px] rounded-full border-2 border-mauve/40 shadow-[0_0_0_8px_rgba(191,168,187,0.08),0_30px_70px_rgba(0,0,0,0.6)]"
                >
                  <img
                    src="/assests/GSON3031.webp"
                    alt=""
                    className="w-full h-full object-cover transition-transform duration-[2s] ease-out hover:scale-110"
                    loading="lazy"
                  />
                </motion.div>
                {/* Text */}
                <div className="divide-y divide-white/5 flex-1 min-w-0">
                  {SPEAKING.map((item, i) => (
                    <motion.div
                      key={item.event}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
                      className="group py-6"
                    >
                      <p className="text-base md:text-lg font-serif italic text-off-white/90 mb-2 group-hover:text-off-white transition-colors duration-500 leading-snug">
                        {item.event}
                      </p>
                      <p className="text-[9px] uppercase tracking-[0.3em] text-off-white/35 group-hover:text-mauve/70 transition-colors duration-500">
                        {item.topic}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Recognition — text left, image right */}
            <FadeIn delay={0.15}>
              <div className="flex items-center gap-6 mb-10">
                <span className="text-[9px] uppercase tracking-[0.6em] text-mauve/80 font-semibold">Recognition</span>
                <div className="flex-1 h-[1px] bg-white/5" />
              </div>
              <div className="flex flex-col-reverse sm:flex-row gap-7 md:gap-9 items-start">
                {/* Text */}
                <div className="divide-y divide-white/5 flex-1 min-w-0">
                  {AWARDS.map((item, i) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
                      className="group py-6"
                    >
                      <p className="text-base md:text-lg font-serif italic text-off-white/90 mb-2 group-hover:text-off-white transition-colors duration-500 leading-snug">
                        {item.title}
                      </p>
                      <p className="text-[9px] uppercase tracking-[0.3em] text-off-white/35 group-hover:text-mauve/70 transition-colors duration-500">
                        {item.body}
                      </p>
                    </motion.div>
                  ))}
                  <p className="text-[9px] uppercase tracking-[0.3em] text-off-white/15 font-light pt-8 leading-relaxed">
                    This section grows as recognition is received.
                  </p>
                </div>
                {/* Image */}
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
                  className="relative overflow-hidden shrink-0 w-[160px] h-[160px] sm:w-[200px] sm:h-[200px] md:w-[260px] md:h-[260px] rounded-full border-2 border-mauve/40 shadow-[0_0_0_8px_rgba(191,168,187,0.08),0_30px_70px_rgba(0,0,0,0.6)]"
                >
                  <img
                    src="/assests/7b.webp"
                    alt=""
                    className="w-full h-full object-cover transition-transform duration-[2s] ease-out hover:scale-110"
                    loading="lazy"
                  />
                </motion.div>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* ── PRESS ENQUIRIES ── */}
      <section className="py-32 md:py-44 bg-off-white relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 3 }}
            className="text-[18vw] font-serif text-teal/[0.025] leading-none tracking-widest uppercase"
          >
            CONTACT
          </motion.span>
        </div>
        <FadeIn className="max-w-2xl mx-auto px-5 sm:px-8 text-center relative z-10">
          <span className="text-[9px] uppercase tracking-[0.6em] text-mauve font-semibold mb-10 block">Get in Touch</span>
          <h2 className="font-serif text-4xl md:text-6xl text-teal italic leading-[1.05] tracking-tight mb-10">
            Press Enquiries
          </h2>
          <div className="w-10 h-[1px] bg-mauve/40 mx-auto mb-12" />
          <p className="text-sm text-teal/55 font-light italic leading-relaxed tracking-wide mb-16 max-w-sm mx-auto">
            For press, partnerships, or speaking enquiries, please contact us directly.
          </p>
          <a
            href="mailto:tobi@riahevents.com"
            className="group inline-flex flex-col items-center gap-4"
          >
            <span className="text-xl md:text-2xl font-serif italic text-teal group-hover:text-mauve transition-colors duration-700 tracking-wide">
              tobi@riahevents.com
            </span>
            <div className="w-0 h-[1px] bg-mauve group-hover:w-full transition-all duration-1000" />
          </a>
        </FadeIn>
      </section>

    </div>
  );
}
