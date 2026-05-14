import { useState, useEffect, type FormEvent, type ChangeEvent } from 'react'; // useEffect used in PrivateGallery
import { motion, AnimatePresence } from 'motion/react';
import FadeIn from '../components/FadeIn';

type CelebrationType = 'wedding' | 'private' | null;

// All images must be .webp — convert any new assets before adding
const GALLERY_IMAGES = [
  '/assests/Stefflon(1).webp',
  '/assests/Stefflon(2).webp',
  '/assests/Stefflon(19).webp',
  '/assests/Stefflon(21).webp',
  '/assests/Stefflon2 (1).jpg',
  '/assests/Steff3.webp',
  '/assests/Stefflon(4).webp',
  '/assests/StefflonDon.webp',
];

// Each slot has a fixed size — images crossfade inside without any layout shift
const SLOTS = [
  { cls: 'col-span-1 overflow-hidden', style: { gridRow: 'span 2', minHeight: '420px' } },
  { cls: 'overflow-hidden', style: { aspectRatio: '4/3' } },
  { cls: 'overflow-hidden', style: { aspectRatio: '4/3' } },
  { cls: 'overflow-hidden', style: { aspectRatio: '4/3' } },
  { cls: 'overflow-hidden', style: { aspectRatio: '4/3' } },
];

function PrivateGallery({ onEnquire, onClose }: { onEnquire: () => void; onClose: () => void }) {
  // Each slot independently tracks which image it shows
  const [slotImages, setSlotImages] = useState([0, 1, 2, 3, 4]);

  useEffect(() => {
    let imgCursor = 5; // next image index to bring in (wraps around GALLERY_IMAGES)
    let slotCursor = 0; // which slot to update next

    const t = setInterval(() => {
      const nextImg = imgCursor % GALLERY_IMAGES.length;
      const targetSlot = slotCursor % 5;
      setSlotImages(prev => {
        const next = [...prev];
        next[targetSlot] = nextImg;
        return next;
      });
      imgCursor++;
      slotCursor++;
    }, 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <motion.div
      key="gallery"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
      className="fixed inset-0 z-[300] bg-[#0b1614] overflow-y-auto"
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="fixed top-6 right-6 md:top-10 md:right-10 z-10 text-off-white/50 hover:text-off-white transition-colors duration-300 text-[9px] uppercase tracking-[0.5em]"
      >
        Close
      </button>

      <div className="max-w-[1400px] mx-auto px-5 md:px-12 py-16 md:py-20">

        {/* Header */}
        <div className="mb-10 md:mb-14 flex flex-col items-center text-center">
          <p className="text-[9px] uppercase tracking-[0.6em] text-mauve/80 mb-3">Private Celebrations</p>
          <h2 className="font-serif italic text-off-white/90 text-3xl md:text-5xl leading-tight mb-8">
            Intimate. Cultural. Utterly bespoke.
          </h2>
          <span className="text-[9px] uppercase tracking-[0.6em] text-off-white/50 block mb-5">Private Celebration</span>
          <button
            onClick={onEnquire}
            className="bg-mauve text-off-white text-[9px] uppercase tracking-[0.5em] px-10 py-4 hover:bg-mauve/80 transition-all duration-500 shadow-lg"
          >
            Begin Your Enquiry →
          </button>
        </div>

        {/* Fixed grid — slot sizes never change, only the image inside crossfades */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {SLOTS.map((slot, slotIdx) => (
            <div key={slotIdx} className={slot.cls} style={slot.style}>
              <AnimatePresence mode="wait">
                <motion.img
                  key={slotImages[slotIdx]}
                  src={GALLERY_IMAGES[slotImages[slotIdx]]}
                  alt=""
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.9, ease: 'easeInOut' }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-12 md:mt-16 border-t border-white/10 pt-10">
          <p className="text-off-white/55 text-sm font-light max-w-sm leading-relaxed font-serif italic text-center md:text-left">
            From milestone gatherings to exclusive cultural ceremonies, every detail curated with depth and discretion.
          </p>
        </div>

      </div>
    </motion.div>
  );
}

const INPUT_CLASS =
  'w-full bg-transparent border-b border-black/20 py-4 md:py-5 outline-none focus:border-mauve text-black font-medium placeholder:text-black/40 transition-all duration-700 text-sm md:text-base tracking-wide';

const SELECT_CLASS =
  'w-full bg-transparent border-b border-black/20 py-4 md:py-5 outline-none focus:border-mauve text-black font-medium appearance-none cursor-pointer text-sm md:text-base tracking-wide';

export default function Enquire() {
  const [celebrationType, setCelebrationType] = useState<CelebrationType>(null);
  const [showPrivateGallery, setShowPrivateGallery] = useState(false);
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [weddingForm, setWeddingForm] = useState({
    fullName: '', partnerName: '', email: '', phone: '', basedIn: '',
    location: '', dateOrSeason: '', guestCount: '', planningStage: '',
    investment: '', howHeard: '',
  });

  const [privateForm, setPrivateForm] = useState({
    name: '', email: '', phone: '', celebrationType: '', location: '',
    dateOrTimeframe: '', guestCount: '', investment: '', howHeard: '',
  });

  const updateWedding = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setWeddingForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const updatePrivate = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setPrivateForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleWeddingSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (step < 3) { setStep(prev => prev + 1); return; }
    setIsLoading(true);
    await new Promise(r => setTimeout(r, 800));
    setIsLoading(false);
    setIsSubmitted(true);
  };

  const handlePrivateSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise(r => setTimeout(r, 800));
    setIsLoading(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="pt-32 min-h-screen flex items-center justify-center px-6">
        <FadeIn className="text-center max-w-xl">
          <span className="text-[10px] uppercase tracking-[0.6em] text-mauve font-semibold mb-10 block">Thank You</span>
          <h1 className="text-4xl md:text-5xl text-teal mb-10 font-serif">Your enquiry has been received.</h1>
          <p className="text-sm text-teal/55 font-light leading-relaxed tracking-wide italic mb-10 max-w-md mx-auto">
            Thank you for considering RIAH to curate your celebration. Our team will be in touch within 48 hours should your date and vision align with our availability.
          </p>
          <div className="w-12 h-[1px] bg-mauve mx-auto" />
        </FadeIn>
      </div>
    );
  }

  return (
    <div className="pt-24 md:pt-36 pb-20 md:pb-32">
      <AnimatePresence>
        {showPrivateGallery && (
          <PrivateGallery
            onClose={() => setShowPrivateGallery(false)}
            onEnquire={() => { setShowPrivateGallery(false); setCelebrationType('private'); }}
          />
        )}
      </AnimatePresence>
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <AnimatePresence mode="wait">

          {/* ── GATEWAY SELECTION ── */}
          {!celebrationType && (
            <motion.div
              key="gateway"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.04 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="min-h-[70vh] flex flex-col justify-center items-center"
            >
              <FadeIn className="text-center mb-20">
                <span className="text-[10px] uppercase tracking-[0.6em] text-mauve font-semibold mb-8 block">Begin Your Journey</span>
                <h1 className="text-4xl sm:text-5xl md:text-7xl text-teal mt-6 leading-none tracking-tight font-serif">
                  You will be invited to a private consultation to explore your celebration in greater depth.
                </h1>
                <div className="mt-10 max-w-2xl mx-auto space-y-4">
                  <p className="text-sm text-teal/55 font-light leading-relaxed tracking-wide">
                    We accept a limited number of celebrations each year in order to preserve the depth, care, and artistry our clients deserve.
                  </p>
                  <p className="text-sm text-teal/55 font-light leading-relaxed tracking-wide">
                    Please share a few details below, and our team will thoughtfully review your enquiry. Selected couples will be invited to a private consultation to explore their celebration in greater depth.
                  </p>
                </div>
              </FadeIn>

              {/* Private Celebration Hero */}
              <div className="relative w-full h-[55vh] overflow-hidden mb-12 bg-[#0b1614]">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="https://res.cloudinary.com/dzr18sd58/video/upload/v1778771723/AFRO_qls22d.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl mb-12">
                {[
                  {
                    type: 'wedding' as const,
                    label: 'Wedding Celebration',
                    badge: 'Commission',
                    desc: 'Full-service planning for refined, culturally meaningful weddings across the UK, Europe, and global destinations.',
                    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069',
                  },
                  {
                    type: 'private' as const,
                    label: 'Private Celebration',
                    badge: 'Bespoke',
                    desc: 'Milestone gatherings, anniversaries, proposals, and intimate cultural celebrations curated with the same depth and discretion as our weddings.',
                    image: '/assests/SteffWireless(271).webp',
                  },
                ].map(card => (
                  <div
                    key={card.type}
                    onClick={() => card.type === 'private' ? setShowPrivateGallery(true) : setCelebrationType(card.type)}
                    className="group relative h-[280px] sm:h-[350px] md:h-[480px] overflow-hidden cursor-pointer bg-slate/10 flex flex-col justify-end border border-teal/5 transition-all duration-700 hover:border-mauve/40 shadow-lg"
                  >
                    <img
                      src={card.image}
                      className="absolute inset-0 w-full h-full object-cover grayscale-[50%] group-hover:grayscale-0 transition-all duration-1000 opacity-35 group-hover:opacity-55 group-hover:scale-105"
                      alt={card.label}
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-teal/80 via-teal/20 to-transparent" />
                    <div className="relative z-10 p-5 sm:p-8 md:p-10">
                      <span className="text-[8px] uppercase tracking-[0.4em] text-mauve mb-3 block opacity-0 group-hover:opacity-100 transition-all duration-700 -translate-y-2 group-hover:translate-y-0">
                        {card.badge}
                      </span>
                      <h3 className="text-2xl md:text-3xl text-off-white font-serif mb-3 group-hover:text-mauve transition-colors duration-500">
                        {card.label}
                      </h3>
                      <p className="text-[11px] text-off-white/60 font-light leading-relaxed tracking-wide mb-5 max-w-xs">
                        {card.desc}
                      </p>
                      <div className="h-[1px] w-8 bg-mauve group-hover:w-full transition-all duration-1000" />
                    </div>
                  </div>
                ))}
              </div>

              {/* Press aside */}
              <p className="text-[10px] text-slate/60 text-center font-light tracking-wide">
                For press, partnerships, or speaking enquiries, please contact{' '}
                <a href="mailto:press@riahevents.com" className="hover:text-mauve transition-colors duration-300 underline underline-offset-4 decoration-slate/20 inline-flex items-center min-h-[44px] px-1">
                  press@riahevents.com
                </a>
              </p>
            </motion.div>
          )}

          {/* ── WEDDING FORM (3-STEP) ── */}
          {celebrationType === 'wedding' && (
            <motion.div
              key="wedding-form"
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="max-w-2xl mx-auto"
            >
              {/* Back */}
              <button
                onClick={() => { setCelebrationType(null); setStep(1); }}
                className="flex items-center gap-2 text-[10px] tracking-[0.4em] uppercase text-black/40 hover:text-black transition-all duration-500 mb-16 group py-3 min-h-[44px] pr-6"
              >
                <span className="group-hover:-translate-x-1 transition-transform duration-500">←</span>
                Back to selection
              </button>

              {/* Step indicator */}
              <div className="flex items-center gap-3 mb-12">
                {[1, 2, 3].map(n => (
                  <div key={n} className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all duration-500 text-[8px] font-mono ${step >= n ? 'border-mauve bg-mauve/10 text-mauve' : 'border-teal/10 text-teal/20'}`}>
                      {n}
                    </div>
                    {n < 3 && <div className={`h-[1px] w-8 transition-all duration-500 ${step > n ? 'bg-mauve/60' : 'bg-teal/10'}`} />}
                  </div>
                ))}
                <span className="text-[9px] uppercase tracking-[0.3em] text-black/60 font-semibold ml-2">
                  {step === 1 ? 'Personal Details' : step === 2 ? 'The Celebration' : 'Investment Alignment'}
                </span>
              </div>

              <span className="text-[10px] uppercase tracking-[0.5em] text-mauve font-semibold mb-6 block">Wedding Enquiry</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl text-black mb-16 leading-none tracking-tight font-serif">
                {step === 1 ? 'About You' : step === 2 ? 'Your Celebration' : 'Investment Alignment'}
              </h2>

              <form onSubmit={handleWeddingSubmit} className="space-y-10">
                <AnimatePresence mode="wait">

                  {/* Step 1 */}
                  {step === 1 && (
                    <motion.div key="s1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.5 }} className="space-y-8">
                      <input name="fullName" value={weddingForm.fullName} onChange={updateWedding} type="text" placeholder="Your full name" className={INPUT_CLASS} required />
                      <input name="partnerName" value={weddingForm.partnerName} onChange={updateWedding} type="text" placeholder="Your partner's full name" className={INPUT_CLASS} required />
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <input name="email" value={weddingForm.email} onChange={updateWedding} type="email" placeholder="Email address" className={INPUT_CLASS} required />
                        <input name="phone" value={weddingForm.phone} onChange={updateWedding} type="tel" placeholder="Phone (with country code)" className={INPUT_CLASS} required autoComplete="tel" />
                      </div>
                      <input name="basedIn" value={weddingForm.basedIn} onChange={updateWedding} type="text" placeholder="Where are you currently based? (city / country)" className={INPUT_CLASS} />
                    </motion.div>
                  )}

                  {/* Step 2 */}
                  {step === 2 && (
                    <motion.div key="s2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.5 }} className="space-y-8">
                      <select name="location" value={weddingForm.location} onChange={updateWedding} className={SELECT_CLASS} required>
                        <option value="" disabled>Desired wedding location</option>
                        <option value="london-uk">London / UK</option>
                        <option value="italy">Italy</option>
                        <option value="france">France</option>
                        <option value="europe-other">Europe, other</option>
                        <option value="undecided">Undecided</option>
                      </select>
                      <input name="dateOrSeason" value={weddingForm.dateOrSeason} onChange={updateWedding} type="text" placeholder="Preferred date or season (approximate is fine)" className={INPUT_CLASS} />
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <select name="guestCount" value={weddingForm.guestCount} onChange={updateWedding} className={SELECT_CLASS} required>
                          <option value="" disabled>Estimated guest count</option>
                          <option value="under-50">Under 50</option>
                          <option value="50-100">50–100</option>
                          <option value="100-150">100–150</option>
                          <option value="150-250">150–250</option>
                          <option value="250+">250+</option>
                        </select>
                        <select name="planningStage" value={weddingForm.planningStage} onChange={updateWedding} className={SELECT_CLASS}>
                          <option value="" disabled>Current planning stage</option>
                          <option value="just-beginning">Just beginning</option>
                          <option value="venue-researching">Venue researching</option>
                          <option value="venue-secured">Venue secured</option>
                          <option value="suppliers-booked">Several suppliers booked</option>
                        </select>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 3 */}
                  {step === 3 && (
                    <motion.div key="s3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.5 }} className="space-y-8">
                      <p className="text-[10px] text-black font-semibold uppercase tracking-[0.3em] -mb-2">
                        Investment ranges are presented to help us ensure we can serve you at the level you deserve.
                      </p>
                      <select name="investment" value={weddingForm.investment} onChange={updateWedding} className={SELECT_CLASS} required>
                        <option value="" disabled>Anticipated overall wedding investment</option>
                        <option value="80-120k">£80,000–£120,000</option>
                        <option value="120-200k">£120,000–£200,000</option>
                        <option value="200-350k">£200,000–£350,000</option>
                        <option value="350k+">£350,000+</option>
                        <option value="private">Prefer to discuss privately</option>
                      </select>
                      <select name="howHeard" value={weddingForm.howHeard} onChange={updateWedding} className={SELECT_CLASS}>
                        <option value="" disabled>How did you hear about RIAH?</option>
                        <option value="instagram">Instagram</option>
                        <option value="referral">Referral</option>
                        <option value="venue">Venue</option>
                        <option value="press">Press / Media</option>
                        <option value="google">Google</option>
                        <option value="other">Other</option>
                      </select>
                      <p className="text-[10px] text-black font-semibold italic leading-relaxed tracking-wide pt-2">
                        Thank you for considering RIAH to curate your celebration. Our team will be in touch within 48 hours should your date and vision align with our availability.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="pt-8 flex items-center gap-6">
                  {step > 1 && (
                    <button
                      type="button"
                      onClick={() => setStep(prev => prev - 1)}
                      className="text-[10px] uppercase tracking-[0.4em] text-black/40 hover:text-black transition-colors duration-500"
                    >
                      ← Previous
                    </button>
                  )}
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="flex-1 bg-teal text-off-white py-5 md:py-7 uppercase tracking-[0.5em] text-[10px] hover:bg-mauve transition-all duration-1000 group disabled:opacity-50"
                  >
                    {isLoading ? 'Sending…' : step < 3 ? `Continue →` : `Submit Enquiry →`}
                  </button>
                </div>
              </form>
            </motion.div>
          )}

          {/* ── PRIVATE CELEBRATION FORM ── */}
          {celebrationType === 'private' && (
            <motion.div
              key="private-form"
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="max-w-2xl mx-auto"
            >
              <button
                onClick={() => setCelebrationType(null)}
                className="flex items-center gap-2 text-[10px] tracking-[0.4em] uppercase text-black/40 hover:text-black transition-all duration-500 mb-16 group py-3 min-h-[44px] pr-6"
              >
                <span className="group-hover:-translate-x-1 transition-transform duration-500">←</span>
                Back to selection
              </button>

              <span className="text-[10px] uppercase tracking-[0.5em] text-mauve font-semibold mb-6 block">Private Enquiry</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl text-black mb-16 leading-none tracking-tight font-serif">
                The Private Enquiry
              </h2>

              <form onSubmit={handlePrivateSubmit} className="space-y-10">
                <div className="space-y-8">
                  <input name="name" value={privateForm.name} onChange={updatePrivate} type="text" placeholder="Name" className={INPUT_CLASS} required />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <input name="email" value={privateForm.email} onChange={updatePrivate} type="email" placeholder="Email address" className={INPUT_CLASS} required />
                    <input name="phone" value={privateForm.phone} onChange={updatePrivate} type="tel" placeholder="Phone (with country code)" className={INPUT_CLASS} required />
                  </div>
                  <select name="celebrationType" value={privateForm.celebrationType} onChange={updatePrivate} className={SELECT_CLASS} required>
                    <option value="" disabled>Type of celebration</option>
                    <option value="birthday">Birthday</option>
                    <option value="anniversary">Anniversary</option>
                    <option value="proposal">Proposal</option>
                    <option value="cultural-ceremony">Cultural ceremony</option>
                    <option value="private-gathering">Private gathering</option>
                  </select>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <input name="location" value={privateForm.location} onChange={updatePrivate} type="text" placeholder="Location (city / country)" className={INPUT_CLASS} />
                    <input name="dateOrTimeframe" value={privateForm.dateOrTimeframe} onChange={updatePrivate} type="text" placeholder="Date or timeframe (approximate)" className={INPUT_CLASS} />
                  </div>
                  <input name="guestCount" value={privateForm.guestCount} onChange={updatePrivate} type="text" placeholder="Estimated guest count" className={INPUT_CLASS} />
                  <select name="investment" value={privateForm.investment} onChange={updatePrivate} className={SELECT_CLASS}>
                    <option value="" disabled>Investment range</option>
                    <option value="20-40k">£20,000–£40,000</option>
                    <option value="40-80k">£40,000–£80,000</option>
                    <option value="80k+">£80,000+</option>
                    <option value="private">Prefer to discuss privately</option>
                  </select>
                  <select name="howHeard" value={privateForm.howHeard} onChange={updatePrivate} className={SELECT_CLASS}>
                    <option value="" disabled>How did you hear about RIAH?</option>
                    <option value="instagram">Instagram</option>
                    <option value="referral">Referral</option>
                    <option value="venue">Venue</option>
                    <option value="press">Press / Media</option>
                    <option value="google">Google</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <p className="text-[10px] text-black font-semibold italic leading-relaxed tracking-wide">
                  Thank you for your enquiry. Our team will review your details and be in touch shortly.
                </p>

                <div className="pt-8">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-teal text-off-white py-5 md:py-7 uppercase tracking-[0.5em] text-[10px] hover:bg-mauve transition-all duration-1000 group disabled:opacity-50"
                  >
                    {isLoading ? 'Sending…' : 'Submit Enquiry →'}
                  </button>
                </div>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
