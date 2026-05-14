import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import FadeIn from '../components/FadeIn';

const TIERS = [
  {
    id: 'essential',
    number: '01',
    title: 'Essential Full-Service Planning',
    tagline: 'Elegant. Refined. Perfectly Supported.',
    intro: 'For couples who want full wedding planning with all the fundamental elements in place, beautifully organised, thoughtfully handled, and guided by a luxury professional from start to finish.',
    idealFor: [
      'A streamlined, guided planning experience',
      'Professional oversight of suppliers, timelines, and logistics',
      'Expert support without the additional concierge layer',
    ],
    inclusions: [
      'Full wedding planning and design direction',
      'Supplier sourcing, negotiation, and management',
      'Budget creation, planning tools, and timeline curation',
      'Regular planning meetings',
      'One venue walkthrough',
      'Essential guest guidance (accommodation suggestions, transport notes)',
      'Coordination and management on the wedding day',
    ],
    perfectFor: 'UK weddings or intimate destination celebrations that require full planning but minimal guest travel management.',
    images: [
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop',
      '/assests/5a.webp',
      '/assests/14a.webp',
    ],
  },
  {
    id: 'signature',
    number: '02',
    title: 'Signature Full-Service Planning',
    tagline: 'A holistic, elevated planning journey with luxury concierge care.',
    intro: 'Our most sought-after service, created for couples who desire a seamless, stress-free, fully curated wedding experience, especially for destination weddings or events with guests travelling from multiple locations.',
    highlight: 'This is where our Signature Guest Experience Concierge comes to life.',
    idealFor: [
      'Guests to feel fully supported from the moment they receive the invitation',
      'Visa, travel, accommodation, or transport guidance for guests',
      'Cultural integration, family support, and impeccable communication',
      'A refined, high-touch planning experience',
    ],
    inclusions: [
      'Signature Guest Experience Concierge (visa guidance, hotel coordination, guest movement management, itinerary support)',
      'Planning for welcome dinners or rehearsal celebrations',
      'Family liaison support (parents, elders, VIP guests)',
      'Cultural advisory and integration',
      'Priority response times',
      'Multiple venue walkthroughs',
      'Extended planning meetings',
      'Everything included in Essential',
    ],
    perfectFor: 'US couples marrying in the UK or Europe. UK couples with destination weddings. Large, multicultural events with significant guest travel.',
    images: [
      '/assests/8b.webp',
      '/assests/11b.webp',
      '/assests/12b.webp',
    ],
  },
  {
    id: 'luxury-elite',
    number: '03',
    title: 'Luxury Elite Experience',
    tagline: 'Our most immersive, white-glove planning service, curated for world-class celebrations.',
    intro: 'Reserved for couples hosting multi-day weddings, high-profile events, or destination celebrations requiring a full luxury team and complete weekend management.',
    highlight: 'This is the pinnacle of RIAH planning excellence.',
    idealFor: [
      'A fully tailor-made, concierge-level planning experience',
      'Multi-day events (welcome dinner, ceremony, reception, brunch, excursions)',
      'Dedicated planners, assistants, and guest management',
      'On-the-ground planning days for venue scouting and supplier immersion',
      'Cultural depth, luxury precision, and flawless execution',
    ],
    inclusions: [
      'Unlimited concierge access for couple and VIP guests',
      'Full weekend planning (Friday through Sunday)',
      'Two to three planners on site',
      'Pre-wedding destination planning days',
      'Full guest itinerary creation (restaurants, activities, transport)',
      'Chauffeur and transport coordination',
      'Bridal styling logistics and fitting support',
      'VIP family assistant',
      'Pre-wedding shoot coordination',
      'Everything included in Signature',
    ],
    perfectFor: 'Large-scale, luxury, or cultural weddings in Italy, France, Greece, the UK, or across Europe.',
    images: [
      '/assests/6a.webp',
      '/assests/11a.webp',
      '/assests/18a.webp',
    ],
  },
];

function TierImage({ images, tierNumber }: { images: string[]; tierNumber: string }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex(i => (i + 1) % images.length), 3500);
    return () => clearInterval(t);
  }, [images.length]);

  return (
    <div className="relative w-full h-full">
      <AnimatePresence mode="wait">
        <motion.img
          key={index}
          src={images[index]}
          alt=""
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
          className="absolute inset-0 w-full h-full object-cover grayscale-[15%]"
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-teal/5 pointer-events-none" />
      <div className="absolute top-6 left-6 z-10">
        <span className="text-[9px] uppercase tracking-[0.5em] text-off-white backdrop-blur-md px-5 py-2 border border-off-white/20 font-mono">
          Tier {tierNumber}
        </span>
      </div>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`rounded-full transition-all duration-500 ${i === index ? 'w-5 h-[2px] bg-white/80' : 'w-[5px] h-[5px] bg-white/30 hover:bg-white/60'}`}
          />
        ))}
      </div>
    </div>
  );
}

function TierContent({ tier }: { tier: typeof TIERS[0] }) {
  return (
    <FadeIn className="w-full h-full overflow-y-auto py-14 px-10 lg:px-16">
      <h3 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl text-teal mb-4 leading-tight tracking-tight">
        {tier.title}
      </h3>
      <p className="text-sm md:text-base text-teal italic mb-8 font-light leading-relaxed tracking-wide border-l border-mauve/50 pl-5">
        {tier.tagline}
      </p>
      <p className="text-sm md:text-base text-teal mb-8 font-light leading-relaxed tracking-wide">
        {tier.intro}
      </p>

      {tier.highlight && (
        <p className="text-sm md:text-base text-teal font-semibold mb-8 leading-relaxed">
          {tier.highlight}
        </p>
      )}

      <div className="mb-8">
        <h4 className="text-[9px] uppercase tracking-[0.4em] text-mauve font-bold mb-5">Ideal for couples who want</h4>
        <ul className="space-y-3">
          {tier.idealFor.map((item) => (
            <li key={item} className="flex items-start gap-3 text-[11px] text-teal">
              <span className="w-1 h-3 bg-mauve/50 mt-0.5 shrink-0" />
              <span className="uppercase tracking-[0.12em] font-light leading-snug">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-8">
        <h4 className="text-[9px] uppercase tracking-[0.4em] text-mauve font-bold mb-5">What's Included</h4>
        <ul className="space-y-3">
          {tier.inclusions.map((item) => (
            <li key={item} className="flex items-start gap-3 text-[11px] text-teal group">
              <span className="w-1 h-3 bg-mauve/40 mt-0.5 shrink-0 transition-all group-hover:bg-mauve group-hover:h-4" />
              <span className="uppercase tracking-[0.12em] font-light leading-snug">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="pt-8 border-t border-teal/10">
        <h4 className="text-[9px] uppercase tracking-[0.4em] text-mauve font-bold mb-3">Perfect For</h4>
        <p className="text-[11px] text-teal font-light leading-relaxed tracking-wide">
          {tier.perfectFor}
        </p>
        <p className="text-[10px] text-teal/70 italic mt-4 font-light">
          Minimum fee applies. Percentage of total wedding investment also applies.
        </p>
      </div>
    </FadeIn>
  );
}

const ENHANCEMENTS = [
  'Signature Guest Experience Concierge',
  'Multi-day celebration planning',
  'Cultural and family liaison support',
  'Destination venue scouting',
  'Pre-wedding events and experiences',
];


export default function Planning() {
  return (
    <div className="pt-24 md:pt-36">
      {/* Page Intro */}
      <div className="luxury-container mb-20">
        <FadeIn className="text-center max-w-3xl mx-auto">
          <span className="text-[10px] uppercase tracking-[0.6em] text-mauve font-semibold mb-6 block">The Offerings</span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl text-teal mb-10 leading-[0.9] tracking-tight">
            Our Signature<br />Planning Experiences
          </h1>
          <div className="space-y-5 text-sm md:text-base text-teal/80 font-light leading-relaxed tracking-wide italic max-w-2xl mx-auto">
            <p>
              Where luxury, culture, and intentional storytelling meet. Every celebration we curate is approached with depth, artistry, and emotional intelligence, honouring your story, your culture, and your vision.
            </p>
            <p>
              Our service structure is designed to give you the flexibility to choose the level of support and experience that feels right, while ensuring exceptional care at every stage.
            </p>
          </div>
          <div className="mt-10">
            <Link
              to="/media"
              className="inline-block text-[10px] uppercase tracking-[0.5em] border border-teal/30 text-teal px-8 py-4 hover:bg-teal hover:text-off-white transition-all duration-500"
            >
              Media
            </Link>
          </div>
        </FadeIn>
      </div>

      {/* Tier sections */}
      <div className="flex flex-col">
        {TIERS.map((tier, i) => (
          <section key={tier.id} className="relative w-full border-t border-teal/5">
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-stretch">
              <div className={`relative p-4 md:p-8 lg:p-10 bg-off-white ${i % 2 !== 0 ? 'lg:order-2' : ''}`}>
                <div className="relative h-[40vh] sm:h-[55vh] md:h-[65vh] lg:h-full min-h-[500px] overflow-hidden">
                  <TierImage images={tier.images} tierNumber={tier.number} />
                </div>
              </div>

              <div className={`flex items-start justify-center p-6 sm:p-10 md:p-12 lg:p-16 bg-off-white self-stretch ${i % 2 !== 0 ? 'lg:order-1' : ''}`}>
                <TierContent tier={tier} />
              </div>
            </div>

            {i < TIERS.length - 1 && (
              <div className="h-16 md:h-24 w-full bg-off-white flex items-center justify-center">
                <div className="w-[1px] h-full bg-teal/5" />
              </div>
            )}
          </section>
        ))}
      </div>

      {/* Optional Enhancements */}
      <section className="section-padding bg-teal/[0.03] border-y border-teal/5">
        <div className="luxury-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
            <FadeIn>
              <span className="text-[10px] uppercase tracking-[0.6em] text-mauve font-semibold mb-6 block">Optional Enhancements</span>
              <h2 className="text-3xl md:text-4xl text-teal mb-8 leading-tight tracking-tight">
                Beyond the Experience
              </h2>
              <p className="text-sm md:text-base text-teal/80 font-light leading-relaxed tracking-wide mb-8">
                For couples desiring an even more immersive celebration, a selection of bespoke concierge and guest-experience services is available upon request.
              </p>
              <p className="text-sm text-teal/60 font-light italic leading-relaxed tracking-wide">
                A full enhancement menu is shared privately during your consultation.
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <ul className="space-y-6">
                {ENHANCEMENTS.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    className="flex items-start gap-4 text-sm text-teal/80 font-light leading-relaxed"
                  >
                    <span className="w-1 h-3 bg-mauve/40 mt-1.5 shrink-0" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-teal text-off-white text-center">
        <FadeIn className="luxury-container">
          <p className="text-[10px] uppercase tracking-[0.6em] mb-10 opacity-50">Begin Your Journey</p>
          <Link
            to="/enquire"
            className="group text-2xl sm:text-3xl md:text-5xl font-serif italic border-b border-mauve inline-block pb-4 hover:text-mauve transition-all duration-700 hover:tracking-widest"
          >
            Request Private Consultation
          </Link>
        </FadeIn>
      </section>
    </div>
  );
}
