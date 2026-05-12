import { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import FadeIn from '../components/FadeIn';

const CATEGORIES = ['All', 'Cultural Insight', 'Planning Philosophy', 'Destination Guides', 'Real Celebrations', 'The Conversation'];

const articles: {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  image: string;
  featured?: boolean;
  readTime: string;
}[] = [];

export default function Journal() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) setSubscribed(true);
  };

  return (
    <div className="bg-off-white overflow-hidden">

      {/* ── HERO ── */}
      <section ref={heroRef} className="relative h-[65vh] md:h-[80vh] flex items-end overflow-hidden">
        <motion.div style={{ y: heroY }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#0e1b1b]" />
          {/* Ambient diagonal light */}
          <div className="absolute inset-0 bg-gradient-to-br from-mauve/10 via-transparent to-transparent" />
        </motion.div>

        {/* RIAH watermark */}
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
              The Curator
            </span>
            <h1 className="font-serif text-[clamp(48px,8vw,110px)] text-off-white leading-[0.92] tracking-[-0.01em] mb-8">
              The RIAH<br />Journal
            </h1>
            <div className="w-14 h-[1px] bg-mauve/50 mb-8" />
            <p className="text-sm text-off-white/45 font-light leading-relaxed tracking-wide italic max-w-md">
              Insight, inspiration, and intimate reflections on the art of crafting culturally rich celebrations.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* ── CATEGORY FILTER ── */}
      <section className="bg-off-white border-b border-teal/5 sticky top-[72px] z-40">
        <div className="luxury-container">
          <div className="flex gap-x-6 md:gap-x-10 gap-y-0 overflow-x-auto scrollbar-hide py-0">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-[9px] uppercase tracking-[0.4em] font-medium transition-all duration-500 py-5 whitespace-nowrap border-b-[1.5px] min-h-[44px] flex items-center ${
                  activeCategory === cat
                    ? 'text-teal border-mauve'
                    : 'text-teal/35 border-transparent hover:text-teal/70'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── EMPTY STATE ── */}
      <section className="py-40 md:py-56 relative overflow-hidden">
        {/* Background watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-[22vw] font-serif text-teal/[0.03] leading-none tracking-[0.3em] uppercase"
          >
            SOON
          </motion.span>
        </div>

        <FadeIn className="luxury-container relative z-10">
          <div className="max-w-2xl mx-auto text-center">

            {/* Decorative line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="w-[1px] h-20 bg-gradient-to-b from-transparent via-mauve/40 to-transparent mx-auto mb-14"
            />

            <span className="text-[9px] uppercase tracking-[0.7em] text-mauve font-semibold mb-10 block">
              Coming Soon
            </span>

            <h2 className="font-serif text-4xl md:text-6xl text-teal italic leading-[1.05] tracking-tight mb-10">
              The journal is<br />being curated.
            </h2>

            <div className="w-10 h-[1px] bg-mauve/40 mx-auto mb-10" />

            <p className="text-sm text-teal/50 font-light leading-relaxed tracking-wide italic max-w-sm mx-auto mb-16">
              We are preparing a space for considered reflections on culture, celebration, and the art of intentional planning.
            </p>

            {/* Category pills */}
            <div className="flex flex-wrap justify-center gap-3 mb-20">
              {CATEGORIES.slice(1).map((cat, i) => (
                <motion.span
                  key={cat}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="text-[8px] uppercase tracking-[0.4em] text-teal/30 border border-teal/10 px-5 py-2.5"
                >
                  {cat}
                </motion.span>
              ))}
            </div>

            {/* Decorative bottom line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
              className="w-[1px] h-20 bg-gradient-to-b from-transparent via-mauve/40 to-transparent mx-auto"
            />
          </div>
        </FadeIn>
      </section>

      {/* ── EMAIL CAPTURE ── */}
      <section className="border-t border-teal/5 bg-teal relative overflow-hidden">
        {/* Watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <motion.span
            initial={{ opacity: 0, scale: 0.3, y: 100 }}
            whileInView={{ opacity: 0.04, scale: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
            className="text-[30vw] font-serif tracking-[0.2em] uppercase text-off-white leading-none"
          >
            RIAH
          </motion.span>
        </div>

        <div className="luxury-container py-32 md:py-44 relative z-10">
          <FadeIn className="max-w-xl mx-auto text-center">
            <span className="text-[9px] uppercase tracking-[0.6em] text-mauve/80 font-semibold mb-10 block">Stay Close</span>
            <h2 className="font-serif text-3xl md:text-5xl text-off-white italic leading-[1.1] tracking-tight mb-8">
              Stay close to<br />the conversation
            </h2>
            <div className="w-10 h-[1px] bg-mauve/50 mx-auto mb-10" />
            <p className="text-sm text-off-white/45 font-light leading-relaxed tracking-wide italic mb-14 max-w-sm mx-auto">
              Receive considered reflections on culture, celebration, and the art of intentional planning. Occasionally.
            </p>

            {subscribed ? (
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-[11px] uppercase tracking-[0.4em] text-mauve/80"
              >
                Thank you. You'll hear from us soon.
              </motion.p>
            ) : (
              <form onSubmit={handleSubscribe} className="flex w-full max-w-sm mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  className="flex-1 bg-transparent border border-off-white/15 px-6 py-4 text-[11px] text-off-white placeholder:text-off-white/25 tracking-[0.15em] outline-none focus:border-mauve/50 transition-colors duration-300"
                />
                <button
                  type="submit"
                  className="px-7 py-4 bg-off-white/10 text-off-white text-[9px] uppercase tracking-[0.4em] hover:bg-mauve hover:text-off-white transition-all duration-500 whitespace-nowrap border border-off-white/15 border-l-0"
                >
                  Subscribe
                </button>
              </form>
            )}
          </FadeIn>
        </div>
      </section>

    </div>
  );
}
