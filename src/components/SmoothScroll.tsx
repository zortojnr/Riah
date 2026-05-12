import { useEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.8,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    let rafId: number;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    // Watch for destination open class to stop/start Lenis
    const observer = new MutationObserver(() => {
      if (document.body.classList.contains('is-destination-open')) {
        lenis.stop();
      } else {
        lenis.start();
      }
    });

    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });

    // Synchronize scroll on navigation
    const handleScrollToTop = () => {
      lenis.scrollTo(0, { immediate: true });
    };

    window.addEventListener('popstate', handleScrollToTop);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      observer.disconnect();
      window.removeEventListener('popstate', handleScrollToTop);
    };
  }, []);

  return null;
}
