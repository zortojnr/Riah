import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import FadeIn from '../FadeIn';

interface SeoLandingPageProps {
  keyword: string;
  h1: string;
  metaDescription: string;
  tagline: string;
  intro: string[];
  services: string[];
  destinations?: string[];
  cultureNote?: string;
  image: string;
}

const WHY_RIAH = [
  {
    title: 'Intentionality',
    desc: 'Every decision is purposeful. Every detail chosen with care and meaning.',
  },
  {
    title: 'Cultural Depth',
    desc: 'We honour heritage, tradition, and the rituals that make your celebration uniquely yours.',
  },
  {
    title: 'Discretion',
    desc: "Luxury is private. We protect our couples' experience with the care it deserves.",
  },
];

export default function SeoLandingPage({
  keyword,
  h1,
  metaDescription,
  tagline,
  intro,
  services,
  destinations,
  cultureNote,
  image,
}: SeoLandingPageProps) {
  useEffect(() => {
    document.title = `${keyword} | RIAH Weddings & Events`;
    const metaEl = document.querySelector('meta[name="description"]');
    if (metaEl) metaEl.setAttribute('content', metaDescription);
  }, [keyword, metaDescription]);

  return (
    <div className="bg-off-white">

      {/* Hero */}
      <section
        className="relative min-h-[75vh] flex items-end pb-20 md:pb-32 overflow-hidden"
        style={{ backgroundImage: `url('${image}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-teal/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-teal/80 via-teal/30 to-transparent" />

        <div className="relative z-10 luxury-container w-full">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            <span className="text-[10px] uppercase tracking-[0.6em] text-mauve font-semibold mb-6 block">
              {keyword}
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-off-white font-serif leading-tight tracking-tight mb-6 max-w-4xl">
              {h1}
            </h1>
            <p className="text-sm md:text-base text-off-white/70 font-light italic leading-relaxed tracking-wide max-w-xl mb-10">
              {tagline}
            </p>
            <Link
              to="/enquire"
              className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.5em] text-off-white border border-off-white/30 px-8 py-4 hover:bg-off-white/10 hover:border-off-white/60 transition-all duration-700 min-h-[44px]"
            >
              Request Private Consultation →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Intro Copy */}
      <section className="section-padding">
        <div className="luxury-container max-w-3xl">
          <FadeIn className="space-y-6 text-base md:text-lg text-teal/75 font-light leading-[1.9] tracking-wide">
            {intro.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </FadeIn>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-teal/[0.03] border-y border-teal/5">
        <div className="luxury-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <FadeIn>
              <span className="text-[10px] uppercase tracking-[0.6em] text-mauve font-semibold mb-6 block">
                What We Offer
              </span>
              <h2 className="text-3xl md:text-4xl text-teal leading-tight tracking-tight mb-4">
                Our Services
              </h2>
              {cultureNote && (
                <p className="text-sm text-teal/60 font-light leading-relaxed tracking-wide italic mt-6">
                  {cultureNote}
                </p>
              )}
            </FadeIn>

            <FadeIn delay={0.15}>
              <ul className="space-y-5">
                {services.map((service, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.08 }}
                    className="flex items-start gap-4 text-sm text-teal/70 font-light leading-relaxed"
                  >
                    <span className="w-1 h-3 bg-mauve/40 mt-1.5 shrink-0" />
                    {service}
                  </motion.li>
                ))}
              </ul>

              {destinations && destinations.length > 0 && (
                <div className="mt-10 pt-8 border-t border-teal/5">
                  <span className="text-[10px] uppercase tracking-[0.4em] text-teal/40 mb-4 block">
                    Destinations
                  </span>
                  <div className="flex flex-wrap gap-x-6 gap-y-3">
                    {destinations.map((dest) => (
                      <span key={dest} className="text-sm text-teal font-serif border-b border-mauve/20 pb-0.5">
                        {dest}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Why RIAH */}
      <section className="section-padding">
        <div className="luxury-container">
          <FadeIn className="text-center mb-16 max-w-xl mx-auto">
            <span className="text-[10px] uppercase tracking-[0.6em] text-mauve font-semibold mb-6 block">
              Why RIAH
            </span>
            <h2 className="text-3xl md:text-4xl text-teal leading-tight tracking-tight">
              Planning with Depth & Precision
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {WHY_RIAH.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.12} className="text-center">
                <div className="w-8 h-[1px] bg-mauve/40 mx-auto mb-8" />
                <h3 className="text-lg text-teal font-serif italic mb-4">{item.title}</h3>
                <p className="text-sm text-teal/60 font-light leading-relaxed tracking-wide">
                  {item.desc}
                </p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Planning link */}
      <FadeIn className="luxury-container pb-12 text-center">
        <Link
          to="/planning"
          className="text-[10px] uppercase tracking-[0.4em] text-teal/50 hover:text-teal transition-colors duration-300 min-h-[44px] inline-flex items-center"
        >
          Explore Our Planning Experiences →
        </Link>
      </FadeIn>

      {/* Closing CTA */}
      <section className="section-padding bg-teal text-off-white text-center">
        <FadeIn className="luxury-container">
          <p className="text-[10px] uppercase tracking-[0.6em] mb-10 opacity-50">Begin Your Journey</p>
          <Link
            to="/enquire"
            className="group text-2xl sm:text-3xl md:text-5xl font-serif italic border-b border-mauve inline-block pb-4 hover:text-mauve transition-all duration-700 hover:tracking-widest"
          >
            Request Private Consultation →
          </Link>
          <p className="text-xs text-off-white/40 font-light mt-10 leading-relaxed max-w-md mx-auto">
            We accept a limited number of celebrations each year. Enquiries are reviewed personally by Tobi Yusuf.
          </p>
        </FadeIn>
      </section>
    </div>
  );
}
