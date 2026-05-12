import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import FadeIn from './FadeIn';

const SERVICES = [
  {
    tier: '01',
    title: 'Essential',
    tagline: 'Elegant. Refined. Perfectly Supported.',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop',
  },
  {
    tier: '02',
    title: 'Signature',
    tagline: 'A holistic, elevated planning journey with luxury concierge care.',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop',
  },
  {
    tier: '03',
    title: 'Luxury Elite',
    tagline: 'Our most immersive, white-glove planning service.',
    image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070&auto=format&fit=crop',
  },
];

export default function ServicesPreview() {
  return (
    <section className="section-padding bg-teal/[0.03] border-y border-teal/5">
      <div className="luxury-container">
        <FadeIn className="text-center mb-20">
<h2 className="text-3xl md:text-5xl text-teal mb-6 leading-tight tracking-tight">
            Our Signature Planning Experiences
          </h2>
          <p className="text-sm md:text-base text-teal/55 font-light max-w-2xl mx-auto leading-relaxed tracking-wide italic">
            From intimate European ceremonies to multi-day cultural celebrations, our planning journeys are designed with depth, discretion, and seamless care.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="group relative overflow-hidden aspect-[4/5] bg-teal/5 shadow-lg"
            >
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 image-zoom-slow transition-all duration-1000"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal/90 via-teal/30 to-transparent" />
              <div className="absolute inset-0 bg-teal/20 group-hover:bg-transparent transition-colors duration-1000" />

              {/* Tier badge */}
              <div className="absolute top-6 left-6">
                <span className="text-[8px] uppercase tracking-[0.5em] text-off-white/60 font-mono">
                  {service.tier}
                </span>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-2xl md:text-3xl text-off-white font-serif mb-3 leading-tight">
                  {service.title}
                </h3>
                <p className="text-[11px] text-off-white/70 font-light italic leading-relaxed tracking-wide mb-6">
                  {service.tagline}
                </p>
                <div className="h-[1px] w-8 bg-mauve group-hover:w-full transition-all duration-1000" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trusted Luxury Destinations strip */}
        <FadeIn className="text-center mb-16 py-12 border-y border-teal/5">
          <p className="text-[10px] uppercase tracking-[0.4em] text-teal/30 mb-6 font-medium">
            Celebrations curated across some of the world's most refined venues
          </p>
          <p className="text-sm md:text-base text-teal/50 font-light italic leading-relaxed tracking-wide">
            The Dorchester, London&nbsp;·&nbsp;Palazzo Avino, Ravello&nbsp;·&nbsp;The Lanesborough, London&nbsp;·&nbsp;Italian Private Villas&nbsp;·&nbsp;European Heritage Estates
          </p>
        </FadeIn>

        <div className="text-center">
          <Link
            to="/planning"
            className="group inline-flex items-center gap-4 text-[10px] uppercase tracking-[0.4em] text-teal hover:text-mauve transition-colors duration-500 py-3 min-h-[44px]"
          >
            Explore Planning Experiences
            <div className="relative w-12 h-[1px] bg-mauve/40 overflow-hidden">
              <div className="absolute inset-0 bg-mauve translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
