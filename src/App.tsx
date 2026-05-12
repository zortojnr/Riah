import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MobileCtaBar from './components/MobileCtaBar';
import Home from './pages/Home';
import About from './pages/About';
import Planning from './pages/Planning';
import Journal from './pages/Journal';
import Press from './pages/Press';
import Enquire from './pages/Enquire';
import NotFound from './pages/NotFound';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import JournalArticle from './pages/JournalArticle';
import ClientPortal from './pages/ClientPortal';
import FAQ from './pages/FAQ';
import WeddingPlannerLondon from './pages/seo/WeddingPlannerLondon';
import WeddingPlannerUK from './pages/seo/WeddingPlannerUK';
import DestinationWeddingPlanner from './pages/seo/DestinationWeddingPlanner';
import LuxuryWeddingPlanner from './pages/seo/LuxuryWeddingPlanner';
import MulticulturalWeddingPlanner from './pages/seo/MulticulturalWeddingPlanner';
import NigerianWeddingPlanner from './pages/seo/NigerianWeddingPlanner';
import PageTransition from './components/PageTransition';
import CursorTracker from './components/CursorTracker';
import SmoothScroll from './components/SmoothScroll';

const PAGE_TITLES: Record<string, string> = {
  '/': 'RIAH | Luxury Weddings & Celebrations Worldwide',
  '/about': 'About | RIAH Weddings & Events',
  '/planning': 'Planning Experiences | RIAH Weddings & Events',
  '/journal': 'The Journal | RIAH Weddings & Events',
  '/press': 'Press & Recognition | RIAH Weddings & Events',
  '/enquire': 'Enquire | RIAH Weddings & Events',
  '/privacy': 'Privacy Policy | RIAH Weddings & Events',
  '/terms': 'Terms & Conditions | RIAH Weddings & Events',
  '/portal': 'Client Portal | RIAH Weddings & Events',
  '/faq': 'Frequently Asked Questions | RIAH Weddings & Events',
  '/wedding-planner-london': 'Wedding Planner London | RIAH Weddings & Events',
  '/wedding-planner-uk': 'Wedding Planner UK | RIAH Weddings & Events',
  '/destination-wedding-planner-uk': 'Destination Wedding Planner UK | RIAH Weddings & Events',
  '/luxury-wedding-planner-uk': 'Luxury Wedding Planner UK | RIAH Weddings & Events',
  '/multicultural-wedding-planner-uk': 'Multicultural Wedding Planner UK | RIAH Weddings & Events',
  '/nigerian-wedding-planner-uk': 'Nigerian Wedding Planner UK | RIAH Weddings & Events',
};

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    const title = PAGE_TITLES[pathname] ?? 'RIAH Weddings & Events';
    document.title = title;
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
          <Route path="/journal/:slug" element={<PageTransition><JournalArticle /></PageTransition>} />
          <Route path="/press" element={<PageTransition><Press /></PageTransition>} />
          <Route path="/enquire" element={<PageTransition><Enquire /></PageTransition>} />
          <Route path="/privacy" element={<PageTransition><Privacy /></PageTransition>} />
          <Route path="/terms" element={<PageTransition><Terms /></PageTransition>} />
          <Route path="/portal" element={<PageTransition><ClientPortal /></PageTransition>} />
          <Route path="/faq" element={<PageTransition><FAQ /></PageTransition>} />
          <Route path="/wedding-planner-london" element={<PageTransition><WeddingPlannerLondon /></PageTransition>} />
          <Route path="/wedding-planner-uk" element={<PageTransition><WeddingPlannerUK /></PageTransition>} />
          <Route path="/destination-wedding-planner-uk" element={<PageTransition><DestinationWeddingPlanner /></PageTransition>} />
          <Route path="/luxury-wedding-planner-uk" element={<PageTransition><LuxuryWeddingPlanner /></PageTransition>} />
          <Route path="/multicultural-wedding-planner-uk" element={<PageTransition><MulticulturalWeddingPlanner /></PageTransition>} />
          <Route path="/nigerian-wedding-planner-uk" element={<PageTransition><NigerianWeddingPlanner /></PageTransition>} />
          <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
        </Routes>
      </div>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <CursorTracker />
      <SmoothScroll />
      <div className="relative bg-off-white">
        <ScrollToTop />
        <div className="relative z-20 bg-off-white shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
          <Navbar />
          <main className="min-h-screen">
            <AnimatedRoutes />
          </main>
        </div>
        <Footer />
        <MobileCtaBar />
      </div>
    </BrowserRouter>
  );
}
