import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';

const links = [
  { name: 'ABOUT', path: '/about' },
  { name: 'PLANNING', path: '/planning' },
  { name: 'JOURNAL', path: '/journal' },
  { name: 'PRESS', path: '/press' },
];

function MenuToggle({ open, setOpen, light }: { open: boolean; setOpen: (v: boolean) => void; light?: boolean }) {
  return (
    <button
      onClick={() => setOpen(!open)}
      className="relative w-11 h-11 z-[110] flex flex-col justify-center items-center gap-[7px]"
      aria-label="Toggle Menu"
    >
      <span className={`h-[1px] w-full transition-all duration-700 ${open ? 'rotate-45 translate-y-[4px] bg-mauve' : light ? 'bg-off-white' : 'bg-teal'}`} />
      <span className={`h-[1px] w-full transition-all duration-700 ${open ? '-rotate-45 -translate-y-[4px] bg-mauve' : light ? 'bg-off-white' : 'bg-teal'}`} />
    </button>
  );
}

function FullscreenMenu({ open, setOpen }: { open: boolean; setOpen: (v: boolean) => void }) {
  const location = useLocation();

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  useEffect(() => { setOpen(false); }, [location.pathname, setOpen]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 bg-off-white z-[100] flex flex-col items-center justify-center p-6"
        >
          {/* Brand */}
          <div className="absolute top-12 md:top-16 text-center w-full px-6">
            <img src="/assests/logo.png" alt="RIAH" className="h-10 w-auto mx-auto mb-2" />
            <p className="text-[8px] md:text-[9px] uppercase tracking-[0.6em] text-mauve/60">Where Culture Meets Celebration</p>
          </div>

          {/* Links */}
          <nav className="flex flex-col gap-6 md:gap-8 mt-24">
            {[...links, { name: 'ENQUIRE', path: '/enquire' }].map((link, i) => (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.08, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center gap-6 md:gap-10"
              >
                <span className="text-[10px] md:text-xs font-light tracking-[0.2em] text-mauve/40 font-mono w-[30px] md:w-[50px] text-right">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <Link
                  to={link.path}
                  className={`text-[clamp(28px,4.5vw,64px)] font-serif leading-none tracking-[-0.01em] transition-all duration-500 hover:opacity-70 ${
                    link.name === 'ENQUIRE'
                      ? location.pathname === link.path ? 'text-mauve' : 'text-mauve/80 hover:text-mauve'
                      : location.pathname === link.path ? 'text-mauve' : 'text-teal hover:text-mauve'
                  }`}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Bottom */}
          <div className="absolute bottom-8 md:bottom-16 w-full px-6 md:px-12 flex justify-between items-end">
            <span className="hidden lg:block text-[7px] tracking-[1em] uppercase text-mauve/30">Based in London · Operating Worldwide</span>
            <div className="flex gap-8">
              <a href="https://instagram.com/riahweddings" target="_blank" rel="noopener noreferrer" className="text-[8px] uppercase tracking-[0.4em] text-teal/40 hover:text-mauve transition-colors">Instagram</a>
              <a href="https://pinterest.com/riahweddings" target="_blank" rel="noopener noreferrer" className="text-[8px] uppercase tracking-[0.4em] text-teal/40 hover:text-mauve transition-colors">Pinterest</a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}


export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const [curtainActive, setCurtainActive] = useState(() => {
    return isHome && sessionStorage.getItem('curtainDone') !== 'true';
  });

  useEffect(() => {
    if (!curtainActive) return;
    const onScroll = () => setCurtainActive(false);
    const autoReveal = setTimeout(() => setCurtainActive(false), 2500);
    window.addEventListener('scroll', onScroll, { once: true, passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      clearTimeout(autoReveal);
    };
  }, [curtainActive]);

  if (curtainActive) return null;

  // On home: white logo + light hamburger (over dark hero video)
  // On other pages: dark logo + dark hamburger
  const light = isHome;

  return (
    <>
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="fixed top-0 left-0 w-full z-[110] px-5 md:px-12 py-6 md:py-10 bg-transparent"
      >
        <div className="max-w-[1800px] mx-auto flex justify-between items-center">
          <Link
            to="/"
            className={`py-3 transition-opacity duration-500 ${open ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
          >
            <img
              src="/assests/logo.png"
              alt="RIAH"
              className={`h-10 w-auto drop-shadow-sm transition-all duration-500 ${light ? 'brightness-0 invert' : ''}`}
            />
          </Link>
          <MenuToggle open={open} setOpen={setOpen} light={light} />
        </div>
      </motion.nav>

      <FullscreenMenu open={open} setOpen={setOpen} />
    </>
  );
}
