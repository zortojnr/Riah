import { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface Particle {
  id: number;
  x: number;
  y: number;
  color: string;
  size: number;
  rotation: number;
  targetX: number;
  targetY: number;
}

export default function CursorTracker() {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [isTouchDevice] = useState(() => window.matchMedia('(pointer: coarse)').matches);

  if (isTouchDevice) return null;

  useEffect(() => {
    const moveMouse = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      const isClickable = window.getComputedStyle(target).cursor === 'pointer' || 
                         target.tagName === 'BUTTON' || 
                         target.tagName === 'A';
      setIsPointer(isClickable);
    };

    const handleClick = (e: MouseEvent) => {
      const newParticles = Array.from({ length: 24 }).map((_, i) => ({
        id: Date.now() + i,
        x: e.clientX,
        y: e.clientY,
        color: i % 3 === 0 ? '#BF9F6B' : i % 3 === 1 ? '#E5DED4' : '#2B403E', 
        size: Math.random() * 8 + 4,
        rotation: Math.random() * 360,
        targetX: (Math.random() - 0.5) * 400,
        targetY: (Math.random() - 0.5) * 400,
      }));

      setParticles(prev => [...prev.slice(-40), ...newParticles]);
    };

    window.addEventListener('mousemove', moveMouse);
    window.addEventListener('mousedown', handleClick);
    
    return () => {
      window.removeEventListener('mousemove', moveMouse);
      window.removeEventListener('mousedown', handleClick);
    };
  }, []);

  // Remove old particles
  useEffect(() => {
    if (particles.length > 0) {
      const timer = setTimeout(() => {
        setParticles(prev => prev.slice(12));
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [particles]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      {/* Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 rounded-full border-[2px] border-teal/40"
        animate={{
          x: mousePos.x - 20,
          y: mousePos.y - 20,
          scale: isPointer ? 1.3 : 1,
          backgroundColor: isPointer ? 'rgba(43, 64, 62, 0.1)' : 'transparent',
          borderColor: isPointer ? 'rgba(43, 64, 62, 0.8)' : 'rgba(43, 64, 62, 0.3)',
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 300,
          mass: 0.5
        }}
      />

      {/* Inner Dot/Ring */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-mauve/80 shadow-sm"
        animate={{
          x: mousePos.x - 3,
          y: mousePos.y - 3,
          scale: isPointer ? 4 : 1,
          opacity: isPointer ? 0.3 : 0.8
        }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 400,
          mass: 0.2
        }}
      />
      
      {/* Confetti Particles */}
      <AnimatePresence>
        {particles.map((p) => (
          <motion.div
            key={p.id}
            initial={{ 
              x: p.x, 
              y: p.y, 
              opacity: 1, 
              scale: 0.2,
              rotate: 0 
            }}
            animate={{ 
              x: p.x + p.targetX, 
              y: p.y + p.targetY, 
              opacity: 0, 
              scale: 1.5,
              rotate: p.rotation
            }}
            transition={{ 
              duration: 1.4, 
              ease: [0.19, 1, 0.22, 1] 
            }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: p.size * 1.5,
              height: p.size * 1.5,
              backgroundColor: p.color,
              borderRadius: p.id % 4 === 0 ? '50%' : '1px',
              boxShadow: `0 0 15px ${p.color}80`,
              zIndex: 10000
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}
