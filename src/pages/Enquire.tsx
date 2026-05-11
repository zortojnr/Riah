import { useState, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import FadeIn from '../components/FadeIn';

type CelebrationType = 'wedding' | 'private' | null;

export default function Enquire() {
  const [celebrationType, setCelebrationType] = useState<CelebrationType>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSelectType = (type: CelebrationType) => {
    setCelebrationType(type);
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="pt-32 min-h-screen flex items-center justify-center px-[24px]">
        <FadeIn className="text-center max-w-xl">
          <h1 className="text-4xl md:text-5xl text-teal mb-[40px]">Thank You</h1>
          <p className="text-base text-teal/60 font-light leading-relaxed tracking-wide italic mb-[40px]">
            Your enquiry has been received by our private consultation team. We select a limited number of commissions each season and will be in touch within 48 hours.
          </p>
          <div className="w-12 h-[1px] bg-mauve mx-auto" />
        </FadeIn>
      </div>
    );
  }

  return (
    <div className="pt-40 pb-40">
      <div className="max-w-[1200px] mx-auto px-[24px]">
        <AnimatePresence mode="wait">
          {!celebrationType ? (
            <motion.div 
              key="gateway"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="min-h-[70vh] flex flex-col justify-center items-center"
            >
              <FadeIn className="text-center mb-24">
                <span className="text-[10px] uppercase tracking-[0.6em] text-mauve font-semibold mb-8 block">The Gateway</span>
                <h1 className="text-4xl sm:text-5xl md:text-7xl text-teal mt-8 leading-none">Begin Your <br className="hidden md:block"/> Experience</h1>
              </FadeIn>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-5xl">
                <div 
                  onClick={() => handleSelectType('wedding')}
                  className="group relative h-[350px] md:h-[500px] overflow-hidden cursor-pointer bg-slate/10 flex items-center justify-center border border-teal/5 transition-all duration-700 hover:border-mauve shadow-xl"
                >
                  <img src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069" className="absolute inset-0 w-full h-full object-cover grayscale-[60%] group-hover:grayscale-0 transition-all duration-1000 opacity-30 group-hover:opacity-50 group-hover:scale-105" alt="Wedding" referrerPolicy="no-referrer" />
                  <div className="relative z-10 text-center px-12">
                    <span className="text-[9px] uppercase tracking-[0.4em] text-mauve mb-4 block opacity-0 group-hover:opacity-100 transition-all duration-700 -translate-y-4 group-hover:translate-y-0">Commission</span>
                    <h3 className="text-2xl md:text-4xl text-teal font-serif group-hover:text-mauve transition-colors">Wedding <br/> Celebration</h3>
                    <div className="h-[1px] w-8 bg-mauve mx-auto mt-8 group-hover:w-full transition-all duration-1000" />
                  </div>
                </div>

                <div 
                  onClick={() => handleSelectType('private')}
                  className="group relative h-[350px] md:h-[500px] overflow-hidden cursor-pointer bg-slate/10 flex items-center justify-center border border-teal/5 transition-all duration-700 hover:border-mauve shadow-xl"
                >
                  <img src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070" className="absolute inset-0 w-full h-full object-cover grayscale-[60%] group-hover:grayscale-0 transition-all duration-1000 opacity-30 group-hover:opacity-50 group-hover:scale-105" alt="Private" referrerPolicy="no-referrer" />
                  <div className="relative z-10 text-center px-12">
                    <span className="text-[9px] uppercase tracking-[0.4em] text-mauve mb-4 block opacity-0 group-hover:opacity-100 transition-all duration-700 -translate-y-4 group-hover:translate-y-0">Bespoke</span>
                    <h3 className="text-2xl md:text-4xl text-teal font-serif group-hover:text-mauve transition-colors">Private <br/> Celebration</h3>
                    <div className="h-[1px] w-8 bg-mauve mx-auto mt-8 group-hover:w-full transition-all duration-1000" />
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div 
              key="form"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="max-w-2xl mx-auto"
            >
              <div className="flex items-center gap-4 mb-16 md:mb-24 group cursor-pointer" onClick={() => { setCelebrationType(null); }}>
                <span className="text-[10px] tracking-[0.4em] opacity-40 uppercase group-hover:opacity-100 transition-all duration-500 group-hover:translate-x-[-10px]">← Back to selection</span>
              </div>

              <span className="text-[10px] uppercase tracking-[0.5em] text-mauve font-semibold mb-8 block">Project Brief</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl text-teal mb-16 md:mb-24 leading-none tracking-tight">
                {celebrationType === 'wedding' ? 'The Wedding Enquiry' : 'Private Enquiry'}
              </h2>

              <form onSubmit={handleFormSubmit} className="space-y-12 md:space-y-16">
                <div className="space-y-8 md:space-y-12">
                  <div className="relative group">
                    <input type="text" placeholder="Full Name" className="w-full bg-transparent border-b border-teal/10 py-4 md:py-6 outline-none focus:border-mauve text-teal font-light placeholder:text-teal/20 transition-all duration-700 md:text-lg" required />
                  </div>
                  {celebrationType === 'wedding' && (
                    <div className="relative group">
                      <input type="text" placeholder="Partner's Name" className="w-full bg-transparent border-b border-teal/10 py-4 md:py-6 outline-none focus:border-mauve text-teal font-light placeholder:text-teal/20 transition-all duration-700 md:text-lg" required />
                    </div>
                  )}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    <input type="email" placeholder="Email Address" className="w-full bg-transparent border-b border-teal/10 py-4 md:py-6 outline-none focus:border-mauve text-teal font-light placeholder:text-teal/20 transition-all duration-700 md:text-lg" required />
                    <input type="tel" placeholder="Phone Number" className="w-full bg-transparent border-b border-teal/10 py-4 md:py-6 outline-none focus:border-mauve text-teal font-light placeholder:text-teal/20 transition-all duration-700 md:text-lg" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    <input type="text" placeholder="Location" className="w-full bg-transparent border-b border-teal/10 py-4 md:py-6 outline-none focus:border-mauve text-teal font-light placeholder:text-teal/20 transition-all duration-700 md:text-lg" required={celebrationType === 'wedding'} />
                    <input type="text" placeholder="Proposed Date" className="w-full bg-transparent border-b border-teal/10 py-4 md:py-6 outline-none focus:border-mauve text-teal font-light placeholder:text-teal/20 transition-all duration-700 md:text-lg" />
                  </div>
                  {celebrationType === 'wedding' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                      <input type="number" placeholder="Guest Count" className="w-full bg-transparent border-b border-teal/10 py-4 md:py-6 outline-none focus:border-mauve text-teal font-light placeholder:text-teal/20 transition-all duration-700 md:text-lg" />
                      <select defaultValue="" className="w-full bg-transparent border-b border-teal/10 py-4 md:py-6 outline-none focus:border-mauve text-teal font-light appearance-none cursor-pointer md:text-lg">
                        <option value="" disabled>Budget Range</option>
                        <option value="50-100k">£50,000 - £100,000</option>
                        <option value="100k+">£100,000+</option>
                        <option value="private">Disclosed Privately</option>
                      </select>
                    </div>
                  )}
                  <textarea placeholder="Tell us about your celebration narrative..." rows={4} className="w-full bg-transparent border-b border-teal/10 py-4 md:py-6 outline-none focus:border-mauve text-teal font-light placeholder:text-teal/20 transition-all duration-700 resize-none md:text-lg leading-relaxed" />
                </div>

                <div className="pt-8 md:pt-16">
                  <button type="submit" className="w-full bg-teal text-off-white py-5 md:py-8 uppercase tracking-[0.6em] text-[10px] hover:bg-mauve transition-all duration-1000 group">
                    Submit Enquiry <span className="inline-block group-hover:translate-x-4 transition-transform duration-700">→</span>
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
