import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'motion/react';
import FadeIn from '../components/FadeIn';

const VALUES = [
  {
    title: 'Intentionality',
    desc: 'Every decision is purposeful. Nothing is filler.',
    image: '/assests/7a.webp',
    yPos: 'md:-mt-12',
  },
  {
    title: 'Discretion',
    desc: "Luxury is private. We protect our couples' experience with care.",
    image: '/assests/15a.webp',
    yPos: 'md:mt-12',
  },
  {
    title: 'Excellence',
    desc: 'We hold ourselves to a standard that leaves no room for compromise.',
    image: '/assests/13a.webp',
    yPos: 'md:-mt-24',
  },
];

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  return (
    <div className="pt-24 md:pt-36">

      {/* FOUNDER SECTION */}
      <section className="grid grid-cols-1 md:grid-cols-2 bg-off-white overflow-hidden relative">
        {/* Left: Dual Portrait Editorial */}
        <div className="relative flex items-center justify-center p-6 sm:p-10 md:p-16 lg:p-24 bg-off-white min-h-[60vw] sm:min-h-[500px] md:min-h-screen">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, delay: 1 }}
            className="absolute top-[20%] left-[10%] w-[60%] h-[40%] border-l border-t border-teal/30 pointer-events-none"
          />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, delay: 1.2 }}
            className="absolute bottom-[10%] right-[5%] w-[40%] h-[30%] border-r border-b border-teal/30 pointer-events-none"
          />

          <div className="relative w-full max-w-[650px] aspect-[4/5]">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
              className="absolute left-0 top-0 w-[85%] h-[90%] overflow-hidden grayscale-[15%]"
            >
              <img
                src="/assests/2b.webp"
                alt="Tobi Yusuf, Founder of RIAH"
                className="w-full h-full object-cover object-top transition-transform duration-[4000ms] ease-out hover:scale-105"
              />
              <div className="absolute inset-0 bg-teal/5" />
            </motion.div>

            <motion.div
              initial={{ y: -180, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="absolute right-0 bottom-0 w-[55%] h-[65%] z-20 overflow-hidden shadow-[20px_40px_80px_-15px_rgba(14,27,27,0.25)] ring-1 ring-white/20 bg-white p-2"
            >
              <div className="w-full h-full overflow-hidden relative">
                <img
                  src="/assests/4b.webp"
                  alt="Tobi Yusuf, Founder of RIAH"
                  className="w-full h-full object-cover object-top grayscale-[10%] transition-transform duration-[3000ms] hover:scale-110"
                />
                <div className="absolute inset-0 bg-mauve/5 mix-blend-overlay" />
                <div className="absolute inset-4 border border-white/30 pointer-events-none" />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right: Founder Story */}
        <div className="flex flex-col justify-center px-6 sm:px-10 md:px-16 lg:px-20 py-12 md:py-24">
          <FadeIn className="max-w-xl">
            <span className="text-[10px] uppercase tracking-[0.6em] text-mauve font-semibold mb-8 block">The Founder</span>
            <h1 className="text-3xl sm:text-5xl md:text-6xl text-teal mb-10 md:mb-16 leading-[0.95] tracking-tight">
              Founded by<br />Tobi Yusuf
            </h1>

            <div className="space-y-8 text-teal/80 font-light leading-relaxed tracking-wide text-base md:text-lg">
              <p>
                RIAH was created from a vision to redefine how weddings are experienced, particularly for multicultural, globally connected couples seeking celebrations that feel both refined and deeply personal.
              </p>
              <p>
                With a background spanning luxury planning, cultural storytelling, and relational experience design, Tobi leads RIAH with emotional intelligence, artistic precision, and an unwavering commitment to excellence.
              </p>
              <p>
                Today, RIAH serves clients across London, Italy, France, and international destinations, curating celebrations that live far beyond the wedding day.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* PHILOSOPHY SECTION */}
      <section ref={sectionRef} className="relative py-20 sm:py-32 md:py-48 overflow-hidden flex flex-col justify-center">
        <div className="absolute inset-0 z-0">
          <motion.div
            style={{ y: backgroundY }}
            className="absolute inset-0 h-[120%] -top-[10%]"
          >
            <img
              src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop"
              alt="Luxury wedding backdrop"
              className="w-full h-full object-cover grayscale-[40%]"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-teal/60 mix-blend-multiply opacity-80" />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60" />
          </motion.div>
        </div>

        <div className="relative z-10 w-full max-w-[1600px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16">
          <FadeIn className="text-center mb-24 max-w-3xl mx-auto text-white">
            <h2 className="text-4xl md:text-7xl text-white font-serif italic mb-10 tracking-tight leading-none uppercase">
              Philosophy
            </h2>
            <div className="w-16 h-[1px] bg-white/30 mx-auto mb-10" />
            <div className="space-y-6 text-white/75 font-light leading-relaxed tracking-wide text-base md:text-lg max-w-2xl mx-auto">
              <p>
                Our work sits at the intersection of editorial beauty and human depth, honouring heritage while crafting moments of extraordinary elegance. We believe a wedding is not a logistics exercise, it is one of the most meaningful expressions of who a couple is, where they come from, and the life they are choosing to build.
              </p>
              <p>
                RIAH exists because culturally rich couples deserve a planning experience that understands the depth, rhythm, and beauty of their traditions, and can execute them with world-class luxury.
              </p>
            </div>
          </FadeIn>

          {/* Values */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 items-start">
            {VALUES.map((value, i) => (
              <FadeIn
                key={value.title}
                delay={i * 0.15}
                direction="up"
                className={`flex flex-col group relative ${value.yPos}`}
              >
                <div className="relative aspect-[4/5] overflow-hidden mb-0 shadow-2xl ring-1 ring-white/10 group">
                  <img
                    src={value.image}
                    alt={value.title}
                    className="w-full h-full object-cover grayscale transition-all duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-teal/20 group-hover:bg-transparent transition-colors duration-1000" />
                </div>

                <div className="relative -mt-16 ml-6 mr-6 z-10 bg-off-white/95 backdrop-blur-sm p-6 shadow-xl transition-transform duration-700 group-hover:-translate-y-2">
                  <h3 className="text-xl md:text-2xl text-teal font-serif italic mb-4 tracking-wide leading-tight">
                    {value.title}
                  </h3>
                  <p className="text-[9px] md:text-[10px] text-teal/60 font-light leading-relaxed tracking-[0.15em] uppercase">
                    {value.desc}
                  </p>
                  <div className="w-8 h-[1px] bg-mauve/30 mt-6" />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* GLOBAL PRESENCE */}
      <section className="relative py-20 sm:py-32 md:py-48 bg-off-white overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none overflow-hidden">
          <motion.h2
            initial={{ opacity: 0, scale: 1.1 }}
            whileInView={{ opacity: 0.03, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 3, ease: [0.16, 1, 0.3, 1] }}
            className="text-[40vw] sm:text-[30vw] md:text-[22vw] font-serif text-teal leading-none uppercase tracking-tighter"
          >
            GLOBAL
          </motion.h2>
        </div>

        <div className="luxury-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-32 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="absolute -top-8 -left-8 w-40 h-40 md:-top-12 md:-left-12 md:w-64 md:h-64 border-l border-t border-mauve/20 pointer-events-none hidden md:block" />

              <motion.div
                initial={{ y: 80, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-0 w-full aspect-[16/10] overflow-hidden shadow-2xl"
              >
                <img
                  src="/assests/15b.webp"
                  alt="Destination luxury wedding"
                  className="w-full h-full object-cover transition-transform duration-[4000ms] hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-teal/10 mix-blend-overlay" />
              </motion.div>

              <motion.div
                initial={{ y: -100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="absolute -top-6 -right-2 sm:-top-10 sm:-right-4 md:-top-20 md:-right-8 lg:-right-16 w-[38%] sm:w-[45%] aspect-[3/4] z-20 shadow-[-20px_40px_80px_rgba(0,0,0,0.2)] ring-1 ring-white/20 p-1 sm:p-2 bg-white"
              >
                <div className="w-full h-full overflow-hidden relative">
                  <img
                    src="/assests/18a.webp"
                    alt="Refined detail"
                    className="w-full h-full object-cover transition-transform duration-[3000ms] hover:scale-110"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-mauve/5" />
                  <div className="absolute inset-4 border border-white/30" />
                </div>
              </motion.div>
            </div>

            <div className="order-1 lg:order-2">
              <FadeIn direction="up" delay={0.3}>
                <span className="text-[10px] uppercase tracking-[0.6em] text-mauve font-semibold mb-10 block">Global Presence</span>
                <h2 className="text-4xl md:text-6xl text-teal font-serif italic mb-10 leading-[1.1]">
                  Culturally rooted.<br /> Globally designed.
                </h2>

                <div className="space-y-6 text-teal/70 font-light leading-relaxed tracking-wide text-sm md:text-base max-w-lg mb-16">
                  <p>
                    RIAH plans and delivers celebrations across London, the United Kingdom, Italy, France, and select international destinations. Our network of trusted collaborators in each location ensures seamless execution, local expertise, and the cultural sensitivity that makes every celebration feel at home, wherever home is that weekend.
                  </p>
                </div>

                <div className="mb-16">
                  <span className="text-[10px] uppercase tracking-[0.4em] text-teal/40 mb-6 block font-medium">Core Destinations</span>
                  <div className="flex flex-wrap gap-x-8 gap-y-4">
                    {['Italy', 'France', 'United Kingdom', 'Greece', 'Portugal'].map((dest) => (
                      <span key={dest} className="text-sm md:text-lg text-teal font-serif border-b border-mauve/20 pb-1">
                        {dest}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  to="/planning"
                  className="group inline-flex items-center gap-6 text-[10px] uppercase tracking-[0.4em] text-teal hover:text-mauve transition-colors duration-500 py-3 min-h-[44px]"
                >
                  Explore Our Planning Experiences
                  <div className="relative w-12 h-[1px] bg-mauve/40 overflow-hidden">
                    <div className="absolute inset-0 bg-mauve translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                  </div>
                </Link>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
