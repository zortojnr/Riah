import { Instagram, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export default function Footer() {
  return (
    <footer className="sticky bottom-0 z-10 min-h-[600px] flex items-end bg-teal text-off-white overflow-hidden">
      {/* Background Glowing Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <motion.span 
          initial={{ opacity: 0, scale: 0.3, y: 100 }}
          whileInView={{ opacity: 0.1, scale: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
          className="text-[35vw] font-serif tracking-[0.2em] uppercase text-off-white blur-[2px] leading-none"
          style={{ 
            textShadow: '0 0 120px rgba(229, 222, 212, 0.4)',
            WebkitTextStroke: '1px rgba(229, 222, 212, 0.1)'
          }}
        >
          RIAH
        </motion.span>
      </div>

      <motion.div 
        className="luxury-container py-24 md:py-32 lg:py-40 relative z-20 w-full"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="flex flex-col md:flex-row justify-between items-start gap-16 md:gap-24 mb-20 md:mb-32">
          <div className="max-w-sm">
            <h2 className="text-3xl md:text-4xl font-serif tracking-[0.2em] uppercase mb-10">RIAH</h2>
            <p className="font-light text-xs md:text-sm lg:text-base opacity-40 leading-relaxed tracking-wide italic max-w-xs">
              Where culture meets celebration, and every moment becomes timeless. Curating deeply intentional weddings worldwide.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-12 md:flex md:gap-20">
            <div>
              <h4 className="text-[9px] uppercase tracking-[0.3em] font-semibold mb-6 opacity-30">Client Gateways</h4>
              <ul className="flex flex-col gap-3">
                <li><Link to="/planning" className="text-[10px] uppercase tracking-widest transition-colors hover:text-mauve opacity-70 hover:opacity-100">Planning</Link></li>
                <li><Link to="/about" className="text-[10px] uppercase tracking-widest transition-colors hover:text-mauve opacity-70 hover:opacity-100">Our Story</Link></li>
                <li><Link to="/enquire" className="text-[10px] uppercase tracking-widest transition-colors hover:text-mauve opacity-70 hover:opacity-100">Enquire</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[9px] uppercase tracking-[0.3em] font-semibold mb-6 opacity-30">The Curator</h4>
              <ul className="flex flex-col gap-3">
                <li><Link to="/journal" className="text-[10px] uppercase tracking-widest transition-colors hover:text-mauve opacity-70 hover:opacity-100">Journal</Link></li>
                <li><Link to="/press" className="text-[10px] uppercase tracking-widest transition-colors hover:text-mauve opacity-70 hover:opacity-100">Press</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-off-white/5 flex flex-col md:flex-row justify-between gap-8 items-center">
          <p className="text-[9px] uppercase tracking-[0.3em] opacity-30">© {new Date().getFullYear()} RIAH Weddings. All rights reserved.</p>
          <div className="flex gap-6 items-center">
            <a href="#" className="p-2 -m-2 opacity-40 hover:opacity-100 transition-opacity" aria-label="Instagram">
              <Instagram size={18} strokeWidth={1.5} />
            </a>
            <a href="#" className="p-2 -m-2 opacity-40 hover:opacity-100 transition-opacity" aria-label="LinkedIn">
              <Linkedin size={18} strokeWidth={1.5} />
            </a>
            <a href="#" className="p-2 -m-2 opacity-40 hover:opacity-100 transition-opacity" aria-label="Email">
              <Mail size={18} strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
