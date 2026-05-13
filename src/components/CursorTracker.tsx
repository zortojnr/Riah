import { useEffect, useState, useRef } from 'react';
import { motion } from 'motion/react';

export default function CursorTracker() {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isTouchDevice] = useState(() => window.matchMedia('(pointer: coarse)').matches);
  const rafRef = useRef<number | null>(null);
  const pendingPos = useRef({ x: -100, y: -100 });
  const pendingPointer = useRef(false);
  const particleContainerRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useRef(window.matchMedia('(prefers-reduced-motion: reduce)').matches);

  if (isTouchDevice) return null;

  useEffect(() => {
    const moveMouse = (e: MouseEvent) => {
      pendingPos.current = { x: e.clientX, y: e.clientY };
      const target = e.target as HTMLElement;
      pendingPointer.current =
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName === 'BUTTON' ||
        target.tagName === 'A';

      if (rafRef.current === null) {
        rafRef.current = requestAnimationFrame(() => {
          setMousePos({ ...pendingPos.current });
          setIsPointer(pendingPointer.current);
          rafRef.current = null;
        });
      }
    };

    const handleClick = (e: MouseEvent) => {
      if (reducedMotion.current || !particleContainerRef.current) return;
      const container = particleContainerRef.current;
      const COLORS = ['#BF9F6B', '#E5DED4', '#2B403E'];
      for (let i = 0; i < 12; i++) {
        const size = (Math.random() * 8 + 4) * 1.5;
        const color = COLORS[i % 3];
        const targetX = (Math.random() - 0.5) * 300;
        const targetY = (Math.random() - 0.5) * 300;
        const rotation = Math.random() * 360;
        const el = document.createElement('div');
        el.style.cssText = `position:fixed;top:0;left:0;width:${size}px;height:${size}px;background:${color};border-radius:${i % 4 === 0 ? '50%' : '1px'};z-index:10000;pointer-events:none`;
        container.appendChild(el);
        const anim = el.animate(
          [
            { transform: `translate(${e.clientX}px,${e.clientY}px) scale(0.2) rotate(0deg)`, opacity: '1' },
            { transform: `translate(${e.clientX + targetX}px,${e.clientY + targetY}px) scale(1.5) rotate(${rotation}deg)`, opacity: '0' },
          ],
          { duration: 1000, easing: 'cubic-bezier(0.19,1,0.22,1)', fill: 'forwards' }
        );
        anim.onfinish = () => { if (el.isConnected) el.remove(); };
      }
    };

    window.addEventListener('mousemove', moveMouse);
    window.addEventListener('mousedown', handleClick);

    return () => {
      window.removeEventListener('mousemove', moveMouse);
      window.removeEventListener('mousedown', handleClick);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div ref={particleContainerRef} className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 rounded-full border-[2px] border-teal/40"
        animate={{
          x: mousePos.x - 20,
          y: mousePos.y - 20,
          scale: isPointer ? 1.3 : 1,
          backgroundColor: isPointer ? 'rgba(43, 64, 62, 0.1)' : 'transparent',
          borderColor: isPointer ? 'rgba(43, 64, 62, 0.8)' : 'rgba(43, 64, 62, 0.3)',
        }}
        transition={{ type: "spring", damping: 30, stiffness: 300, mass: 0.5 }}
      />

      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-mauve/80 shadow-sm"
        animate={{
          x: mousePos.x - 3,
          y: mousePos.y - 3,
          scale: isPointer ? 4 : 1,
          opacity: isPointer ? 0.3 : 0.8
        }}
        transition={{ type: "spring", damping: 20, stiffness: 400, mass: 0.2 }}
      />
    </div>
  );
}
