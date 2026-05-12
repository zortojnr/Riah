import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import FadeIn from './FadeIn';

const PLATFORMS = [
  { name: 'Hitched',     logo: '/assests/HITCHED.jpg' },
  { name: 'PartySlate',  logo: '/assests/partyslate-social-preview.png' },
  { name: 'BrideStory',  logo: '/assests/R.png' },
];

const STATS = [
  { value: '42+', label: 'Celebrations Curated' },
  { value: 'UK · Europe · Global', label: 'Destinations Served' },
  { value: '£80k–£350k+', label: 'Investment Range' },
];

const PROCESS = [
  { num: '01', label: 'Consultation', desc: 'A private conversation about your vision, your story, and your celebration.' },
  { num: '02', label: 'Curation', desc: 'We design, source, and manage every element of your wedding with precision.' },
  { num: '03', label: 'Your Celebration', desc: 'You arrive. We handle everything. You simply experience.' },
];

const TESTIMONIALS = [
  {
    quote: 'The most extraordinary experience, every detail was perfect, every moment felt intentional. RIAH understood exactly who we are.',
    attribution: 'A. & J.', detail: 'London ceremony · Lake Como reception',
  },
  {
    quote: 'RIAH transformed our vision into something beyond what we could have imagined. The care, the precision, the cultural understanding, extraordinary.',
    attribution: 'O. & T.', detail: 'London',
  },
];

export default function TrustSignals() {
  const statsRef = useRef<HTMLDivElement>(null);
  const statsInView = useInView(statsRef, { once: true, margin: '-80px' });

  return (
    <div>
      {/* Platform Badge Bar */}
      <section className="py-16 border-y border-teal/5 bg-off-white">
        <div className="luxury-container">
          <FadeIn className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-20">
            <span className="text-[11px] uppercase tracking-[0.5em] text-teal/40 font-bold w-full text-center mb-4">As Seen On</span>
            {PLATFORMS.map((p) => (
              <div key={p.name} className="flex flex-col items-center gap-4">
                <div className={[
                  'overflow-hidden border border-teal/10 bg-white flex items-center justify-center shadow-sm',
                  p.name === 'PartySlate' ? 'w-24 h-24 rounded-xl' : 'w-24 h-24 rounded-full',
                ].join(' ')}>
                  <img
                    src={p.logo}
                    alt={p.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-[10px] uppercase tracking-[0.4em] text-teal/40 font-medium">{p.name}</span>
              </div>
            ))}
          </FadeIn>
        </div>
      </section>

      {/* Numbers Strip */}
      <section ref={statsRef} className="py-20 md:py-28 bg-teal text-off-white">
        <div className="luxury-container">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-6 text-center">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className="text-3xl md:text-4xl font-serif italic text-mauve mb-3 tracking-wide">
                  {stat.value}
                </p>
                <p className="text-[10px] uppercase tracking-[0.4em] text-off-white/40 font-light">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
