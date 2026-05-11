/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Planning from './pages/Planning';
import Journal from './pages/Journal';
import Press from './pages/Press';
import Enquire from './pages/Enquire';
import { useEffect } from 'react';
import PageTransition from './components/PageTransition';
import CursorTracker from './components/CursorTracker';
import IntroCurtain from './components/IntroCurtain';

import SmoothScroll from './components/SmoothScroll';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <div key={location.pathname} className="perspective-container">
        <Routes location={location}>
          <Route path="/" element={<PageTransition><Home /></PageTransition>} />
          <Route path="/about" element={<PageTransition><About /></PageTransition>} />
          <Route path="/planning" element={<PageTransition><Planning /></PageTransition>} />
          <Route path="/journal" element={<PageTransition><Journal /></PageTransition>} />
          <Route path="/press" element={<PageTransition><Press /></PageTransition>} />
          <Route path="/enquire" element={<PageTransition><Enquire /></PageTransition>} />
        </Routes>
      </div>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <IntroCurtain />
      <CursorTracker />
      <SmoothScroll />
      <div className="relative bg-off-white">
        <ScrollToTop />
        
        {/* Content Layer */}
        <div className="relative z-20 bg-off-white shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
          <Navbar />
          <main className="min-h-screen">
            <AnimatedRoutes />
          </main>
        </div>

        {/* Footer Layer (Sticky Behind) */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}
