import { Link } from 'react-router-dom';
import FadeIn from '../components/FadeIn';

const MEDIA_IMAGES = [
  '/assests/3a.webp',
  '/assests/4a.webp',
  '/assests/5a.webp',
  '/assests/6a.webp',
  '/assests/7a.webp',
  '/assests/9a.webp',
  '/assests/10a.webp',
  '/assests/11a.webp',
  '/assests/12a.webp',
  '/assests/13a.webp',
  '/assests/14a.webp',
  '/assests/1b.webp',
  '/assests/8b.webp',
  '/assests/9b.webp',
  '/assests/10b.webp',
  '/assests/11b.webp',
  '/assests/12b.webp',
  '/assests/Steff3.webp',
  '/assests/StefflonDon.webp',
];

export default function Media() {
  return (
    <div>
      {/* Dark cinematic hero */}
      <div className="bg-[#0E1B1B] pt-36 md:pt-48 pb-20 md:pb-28 relative overflow-hidden">
        <span className="absolute inset-0 flex items-center justify-center text-[clamp(80px,20vw,260px)] font-serif text-off-white opacity-[0.03] leading-none pointer-events-none select-none uppercase tracking-tighter">
          Moments
        </span>
        <FadeIn className="luxury-container text-center relative z-10">
          <span className="text-[10px] uppercase tracking-[0.6em] text-mauve font-semibold mb-8 block">Our Work</span>
          <h1 className="text-5xl sm:text-6xl md:text-8xl text-off-white leading-none tracking-tighter font-serif mb-8">
            Captured.<br />Curated.<br />Unforgettable.
          </h1>
          <p className="text-sm md:text-base text-off-white/50 font-light italic max-w-xl mx-auto leading-relaxed">
            A glimpse into the celebrations we have had the honour of curating.
          </p>
        </FadeIn>
      </div>

      {/* Masonry grid */}
      <div className="bg-[#FAF9F6] py-16 md:py-24">
        <div className="luxury-container">
          <div className="columns-2 md:columns-3 lg:columns-4 gap-3 md:gap-4">
            {MEDIA_IMAGES.map((src, i) => (
              <div key={src} className="break-inside-avoid mb-3 md:mb-4 overflow-hidden">
                <img
                  src={src}
                  alt=""
                  loading={i < 8 ? 'eager' : 'lazy'}
                  className="w-full object-cover hover:scale-105 transition-transform duration-[2s] ease-out"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured CTA */}
      <div className="bg-[#0E1B1B] py-24 md:py-36 text-center relative overflow-hidden">
        <span className="absolute inset-0 flex items-center justify-center text-[clamp(60px,15vw,200px)] font-serif text-off-white opacity-[0.025] leading-none pointer-events-none select-none uppercase tracking-tighter">
          RIAH
        </span>
        <FadeIn className="luxury-container relative z-10">
          <span className="text-[10px] uppercase tracking-[0.6em] text-mauve font-semibold mb-8 block">
            Be Part of Our Story
          </span>
          <p className="text-3xl sm:text-4xl md:text-6xl font-serif text-off-white italic leading-tight tracking-tight mb-10 max-w-3xl mx-auto">
            Could your celebration<br />belong here?
          </p>
          <p className="text-sm text-off-white/40 font-light italic max-w-md mx-auto mb-12 leading-relaxed">
            We curate a select number of commissions each year. If you are planning something extraordinary, we would love to hear from you.
          </p>
          <Link
            to="/enquire"
            className="inline-block text-[10px] uppercase tracking-[0.6em] border border-mauve text-mauve px-10 py-5 hover:bg-mauve hover:text-off-white transition-all duration-700"
          >
            Enquire About Your Celebration
          </Link>
        </FadeIn>
      </div>
    </div>
  );
}
