import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'motion/react';
import FadeIn from './FadeIn';

const PLATFORMS = [
  { logo: '/assests/HITCHED.jpg',                   alt: '' },
  { logo: '/assests/partyslate-social-preview.png', alt: '' },
  { logo: '/assests/R.png',                         alt: '' },
  { logo: '/assests/logo1.jpg',                     alt: '' },
  { logo: '/assests/logo2.jpg',                     alt: '' },
  { logo: '/assests/logo3.png',                     alt: '' },
  { logo: '/assests/logo4.png',                     alt: '' },
  { logo: '/assests/logo5.jpeg',                    alt: '' },
  { logo: '/assests/logo6.jpeg',                    alt: '' },
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
  const marqueeRef = useRef<HTMLDivElement>(null);
  const marqueeInView = useInView(marqueeRef, { once: false, margin: '-80px' });
  const [tabVisible, setTabVisible] = useState(true);

  useEffect(() => {
    const onVisibility = () => setTabVisible(!document.hidden);
    document.addEventListener('visibilitychange', onVisibility);
    return () => document.removeEventListener('visibilitychange', onVisibility);
  }, []);

  // Duplicate for seamless loop
  const DOUBLED = [...PLATFORMS, ...PLATFORMS];

  return (
    <div>
      {/* Platform Badge Bar — marquee */}
      <section className="py-12 border-y border-teal/5 bg-off-white overflow-hidden">
        <FadeIn className="text-center mb-8">
          <span className="text-[11px] uppercase tracking-[0.5em] text-teal/40 font-bold">As Seen On</span>
        </FadeIn>
        <div ref={marqueeRef} className="relative overflow-hidden">
          <motion.div
            animate={marqueeInView && tabVisible ? { x: [0, '-50%'] } : false}
            transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
            style={{ willChange: 'transform', display: 'flex', whiteSpace: 'nowrap' }}
            className="flex items-center gap-8 pr-8"
          >
            {DOUBLED.map((p, i) => (
              <div key={i} className="w-24 h-24 shrink-0 overflow-hidden flex items-center justify-center">
                <img
                  src={p.logo}
                  alt={p.alt}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </motion.div>
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
