import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const NAV_LINKS = [
  { name: 'About', path: '/about' },
  { name: 'Planning Experiences', path: '/planning' },
  { name: 'The Journal', path: '/journal' },
  { name: 'Press', path: '/press' },
  { name: 'Enquire', path: '/enquire' },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) setSubscribed(true);
  };

  return (
    <footer className="sticky bottom-0 z-10 bg-teal text-off-white overflow-hidden">
      {/* Background watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <motion.span
          initial={{ opacity: 0, scale: 0.3, y: 100 }}
          whileInView={{ opacity: 0.06, scale: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
          className="text-[35vw] font-serif tracking-[0.2em] uppercase text-off-white leading-none"
        >
          RIAH
        </motion.span>
      </div>

      <motion.div
        className="luxury-container py-16 md:py-24 lg:py-32 relative z-20 w-full"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.15 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-12 lg:gap-16 mb-12 md:mb-20">

          {/* Column 1, Brand */}
          <div>
            <img src="/assests/logo.png" alt="RIAH" className="h-10 w-auto mb-6 brightness-0 invert" />
            <p className="text-[11px] uppercase tracking-[0.25em] text-mauve/70 mb-8 font-light">
              Where Culture Meets Celebration
            </p>
            <p className="text-xs text-off-white/40 font-light leading-relaxed tracking-wide italic max-w-xs">
              A globally mobile luxury wedding planning house for discerning couples across the UK, Europe, and beyond.
            </p>
          </div>

          {/* Column 2, Navigation */}
          <div>
            <h4 className="text-[9px] uppercase tracking-[0.4em] font-semibold mb-8 text-off-white/30">Navigation</h4>
            <ul className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-[10px] uppercase tracking-[0.3em] text-off-white/60 hover:text-mauve transition-colors duration-400 py-3 min-h-[44px] flex items-center"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/portal"
                  className="text-[10px] uppercase tracking-[0.3em] text-off-white/25 hover:text-off-white/50 transition-colors duration-400 py-3 min-h-[44px] flex items-center"
                >
                  Client Portal
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3, Connect */}
          <div>
            <h4 className="text-[9px] uppercase tracking-[0.4em] font-semibold mb-8 text-off-white/30">Connect</h4>
            <div className="flex flex-col gap-1 mb-12">
              <a
                href="https://instagram.com/riahweddings"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] uppercase tracking-[0.3em] text-off-white/60 hover:text-mauve transition-colors duration-400 py-3 min-h-[44px] flex items-center"
              >
                Instagram
              </a>
              <a
                href="mailto:press@riah.co.uk"
                className="text-[10px] uppercase tracking-[0.3em] text-off-white/60 hover:text-mauve transition-colors duration-400 py-3 min-h-[44px] flex items-center"
              >
                press@riah.co.uk
              </a>
              <Link
                to="/enquire"
                className="text-[10px] uppercase tracking-[0.3em] text-mauve/80 hover:text-mauve transition-colors duration-400 py-3 min-h-[44px] flex items-center"
              >
                Begin Your Journey →
              </Link>
            </div>

            {/* Email Subscribe */}
            {subscribed ? (
              <p className="text-[10px] uppercase tracking-[0.3em] text-mauve/70">Thank you, we'll be in touch.</p>
            ) : (
              <form onSubmit={handleSubscribe} className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Email address"
                  required
                  className="flex-1 min-w-0 bg-transparent border border-off-white/10 px-4 py-3 text-[10px] text-off-white placeholder:text-off-white/25 tracking-[0.1em] outline-none focus:border-mauve/40 transition-colors"
                />
                <button
                  type="submit"
                  className="px-6 py-3 min-h-[44px] bg-off-white/10 text-[9px] uppercase tracking-[0.3em] text-off-white/70 hover:bg-mauve hover:text-off-white transition-all duration-500 whitespace-nowrap"
                >
                  Join
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-off-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
          <p className="text-[9px] uppercase tracking-[0.25em] text-off-white/25">
            © {new Date().getFullYear()} RIAH. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link
              to="/privacy"
              className="text-[9px] uppercase tracking-[0.25em] text-off-white/25 hover:text-off-white/50 transition-colors py-3 min-h-[44px] flex items-center"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-[9px] uppercase tracking-[0.25em] text-off-white/25 hover:text-off-white/50 transition-colors py-3 min-h-[44px] flex items-center"
            >
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
