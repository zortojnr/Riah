import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';

const links = [
  { name: 'ABOUT', path: '/about' },
  { name: 'PLANNING', path: '/planning' },
  { name: 'JOURNAL', path: '/journal' },
  { name: 'PRESS', path: '/press' },
  { name: 'ENQUIRE', path: '/enquire' },
];

function MenuToggle({ open, setOpen }: { open: boolean; setOpen: (open: boolean) => void }) {
  return (
    <button 
      onClick={() => setOpen(!open)} 
      className="relative w-10 h-8 z-[110] group flex flex-col justify-center items-center gap-2"
      aria-label="Toggle Menu"
    >
      <span className={`h-[1px] w-full bg-teal transition-all duration-700 ease-[0.16, 1, 0.3, 1] ${open ? "rotate-45 translate-y-[4.5px] bg-mauve" : ""}`} />
      <span className={`h-[1px] w-full bg-teal transition-all duration-700 ease-[0.16, 1, 0.3, 1] ${open ? "-rotate-45 -translate-y-[4.5px] bg-mauve" : ""}`} />
    </button>
  );
}

function FullscreenMenu({ open, setOpen }: { open: boolean; setOpen: (open: boolean) => void }) {
  const location = useLocation();

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [open]);

  // Close menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location, setOpen]);

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
          {/* Top Brand Area */}
          <div className="absolute top-12 md:top-16 text-center w-full px-6">
            <h2 className="text-xl md:text-2xl font-serif tracking-[0.4em] text-teal mb-2">RIAH</h2>
            <p className="text-[8px] md:text-[9px] uppercase tracking-[0.6em] text-mauve/60">Where Culture Meets Celebration</p>
          </div>

          {/* Menu Items Grid System */}
          <nav className="flex flex-col gap-6 md:gap-8 mt-24">
            {links.map((link, i) => (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.08, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center gap-6 md:gap-10"
              >
                {/* Numbered Index - Precisely Aligned */}
                <span className="text-[10px] md:text-xs font-light tracking-[0.2em] text-mauve/40 font-mono w-[30px] md:w-[50px] text-right">
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Main Link - Typography Dominant but Refined */}
                <Link
                  to={link.path}
                  className={`text-[clamp(28px,4.5vw,64px)] font-serif text-teal hover:text-mauve transition-all duration-500 tracking-[-0.01em] leading-none ${
                    location.pathname === link.path ? 'text-mauve' : ''
                  } hover:opacity-70`}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Bottom Footer Info */}
          <div className="absolute bottom-12 md:bottom-16 w-full px-8 md:px-12 flex justify-between items-end">
            <div className="hidden lg:block">
              <span className="text-[7px] tracking-[1em] uppercase text-mauve/30">Based in London / Creative Worldwide</span>
            </div>
            <div className="flex gap-8">
              <a href="#" className="text-[8px] uppercase tracking-[0.4em] text-teal/40 hover:text-mauve transition-colors">Instagram</a>
              <a href="#" className="text-[8px] uppercase tracking-[0.4em] text-teal/40 hover:text-mauve transition-colors">Pinterest</a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show only when at the top (scrollY is 0 or very small)
      setIsAtTop(window.scrollY < 10);
    };

    // Check for destination open class
    const observer = new MutationObserver(() => {
      setIsHidden(document.body.classList.contains('is-destination-open'));
    });

    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-[110] transition-all duration-1000 px-8 md:px-12 py-10 bg-transparent ${
          !isAtTop || isHidden ? 'opacity-0 pointer-events-none -translate-y-full' : 'opacity-100 translate-y-0'
        }`}
      >
        <div className="max-w-[1800px] mx-auto flex justify-between items-center">
          <Link to="/" className={`transition-opacity duration-700 ${open ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
            <span className="text-xl font-serif tracking-[0.3em] uppercase text-teal">RIAH</span>
          </Link>

          <MenuToggle open={open} setOpen={setOpen} />
        </div>
      </nav>

      <FullscreenMenu open={open} setOpen={setOpen} />
    </>
  );
}

