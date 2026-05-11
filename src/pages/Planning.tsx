import FadeIn from '../components/FadeIn';

const tiers = [
  {
    id: 'essential',
    title: 'Essential',
    description: 'For couples who have their vision and venue secured but require a master curator to refine the details and manage the orchestration of the day.',
    bullets: [
      'Comprehensive Wedding Curation & Coordination',
      'Vendor Liaison & Professional Management',
      'Detailed Timeline Development',
      'On-site Execution & Directorship',
      'Cultural Integration Consultancy'
    ],
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'signature',
    title: 'Signature',
    description: 'Our hallmark service. A full-service planning experience where we design, create, and produce every element of your celebration from inception.',
    bullets: [
      'Full-Scale Planning & Creative Direction',
      'International Venue Sourcing',
      'Bespoke Design & Aesthetic Concepting',
      'Contract Negotiation & Management',
      'Multi-Day Event Coordination'
    ],
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop'
  },
  {
    id: 'luxury-elite',
    title: 'Luxury Elite',
    description: 'The pinnacle of RIAH. An ultra-bespoke service for massive-scale celebrations and multi-destination wedding weekends across the globe.',
    bullets: [
      'Concierge-Level Private Management',
      'Global Destination Logistics & Guest Services',
      'Custom Infrastructure & Build Production',
      'High-Security & Privacy Management',
      'Infinite Personal Revisions'
    ],
    image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070&auto=format&fit=crop'
  }
];

export default function Planning() {
  return (
    <div className="pt-40">
      <div className="luxury-container mb-20">
        <FadeIn className="text-center">
          <span className="text-[10px] uppercase tracking-[0.6em] text-mauve font-semibold mb-6 block">The Offerings</span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl text-teal mb-8 leading-[0.9] tracking-tight">Planning <br/> Experiences</h1>
          <p className="text-sm md:text-base text-teal/60 max-w-xl mx-auto font-light leading-relaxed tracking-wide italic">
            We provide tiered levels of engagement, each designed to meet the technical and aesthetic requirements of our discerning clientele.
          </p>
        </FadeIn>
      </div>

      <div className="flex flex-col">
        {tiers.map((tier, i) => (
          <section key={tier.id} className="relative w-full border-t border-teal/5">
            <div className={`grid grid-cols-1 lg:grid-cols-2 ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              {/* Image side */}
              <div className={`relative h-[50vh] lg:h-[80vh] overflow-hidden ${i % 2 !== 0 ? 'lg:order-2' : ''}`}>
                <img 
                  src={tier.image} 
                  alt={tier.title} 
                  className="w-full h-full object-cover grayscale-[20%] image-zoom-slow"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-teal/5" />
                <div className="absolute top-8 left-8 md:top-16 md:left-16">
                  <span className="text-[9px] uppercase tracking-[0.5em] text-off-white backdrop-blur-md px-5 py-2 border border-off-white/20">
                    Tier 0{i + 1}
                  </span>
                </div>
              </div>
              
              {/* Content side */}
              <div className="flex items-center justify-center p-10 md:p-16 lg:p-24 bg-off-white">
                <FadeIn className="max-w-lg">
                  <h3 className="text-3xl sm:text-4xl md:text-5xl text-teal mb-10 leading-tight tracking-tight">{tier.title}</h3>
                  <p className="text-base md:text-lg text-teal/70 mb-12 font-light leading-relaxed tracking-wide italic border-l border-mauve/30 pl-6">
                    {tier.description}
                  </p>
                  
                  <div className="space-y-10">
                    <h4 className="text-[9px] uppercase tracking-[0.4em] text-mauve font-bold">Inclusions</h4>
                    <ul className="space-y-6">
                      {tier.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-4 text-[10px] md:text-[11px] text-teal group">
                          <span className="w-1 h-3 bg-mauve/20 mt-0.5 shrink-0 transition-all group-hover:bg-mauve group-hover:h-4" />
                          <span className="uppercase tracking-[0.15em] font-light leading-snug">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeIn>
              </div>
            </div>

            {/* Spacer imagery or lines */}
            {i < tiers.length - 1 && (
              <div className="h-24 md:h-40 w-full bg-off-white flex items-center justify-center">
                 <div className="w-[1px] h-full bg-teal/5" />
              </div>
            )}
          </section>
        ))}
      </div>

      <section className="section-padding bg-teal text-off-white text-center">
        <FadeIn className="luxury-container">
          <p className="text-[10px] uppercase tracking-[0.6em] mb-12 opacity-60">Engagement</p>
          <a 
            href="/enquire" 
            className="text-2xl sm:text-3xl md:text-5xl font-serif italic border-b border-mauve inline-block pb-4 hover:text-mauve transition-all duration-700 hover:tracking-widest"
          >
            Request Private Consultation →
          </a>
        </FadeIn>
      </section>
    </div>
  );
}
