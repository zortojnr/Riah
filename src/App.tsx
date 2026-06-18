import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import { lazy, Suspense, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MobileCtaBar from './components/MobileCtaBar';
import PageTransition from './components/PageTransition';
import CursorTracker from './components/CursorTracker';
import SmoothScroll from './components/SmoothScroll';
import RouteFallback from './components/RouteFallback';
import { updatePageSEO } from './utils/seo';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Planning = lazy(() => import('./pages/Planning'));
const Journal = lazy(() => import('./pages/Journal'));
const Press = lazy(() => import('./pages/Press'));
const Enquire = lazy(() => import('./pages/Enquire'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Terms = lazy(() => import('./pages/Terms'));
const JournalArticle = lazy(() => import('./pages/JournalArticle'));
const ClientPortal = lazy(() => import('./pages/ClientPortal'));
const FAQ = lazy(() => import('./pages/FAQ'));
const WeddingPlannerLondon = lazy(() => import('./pages/seo/WeddingPlannerLondon'));
const WeddingPlannerUK = lazy(() => import('./pages/seo/WeddingPlannerUK'));
const DestinationWeddingPlanner = lazy(() => import('./pages/seo/DestinationWeddingPlanner'));
const LuxuryWeddingPlanner = lazy(() => import('./pages/seo/LuxuryWeddingPlanner'));
const MulticulturalWeddingPlanner = lazy(() => import('./pages/seo/MulticulturalWeddingPlanner'));
const NigerianWeddingPlanner = lazy(() => import('./pages/seo/NigerianWeddingPlanner'));
const Media = lazy(() => import('./pages/Media'));

const BASE_URL = 'https://www.riahevents.com';

const PAGE_SEO: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'RIAH | Luxury Weddings & Celebrations Worldwide',
    description: "RIAH is London's leading luxury wedding planning house for culturally rich couples. Full-service planning across the UK, Italy, France, Greece & beyond. Founded by Tobi Yusuf.",
  },
  '/about': {
    title: 'About RIAH | Luxury Wedding Planning House, London',
    description: "Meet Tobi Yusuf, founder of RIAH — London's luxury wedding planning house. Discover our philosophy of intentionality, cultural depth, and discretion that defines every celebration we create.",
  },
  '/planning': {
    title: 'Wedding Planning Experiences | RIAH Weddings & Events',
    description: "Explore RIAH's full-service wedding planning tiers — Essential, Signature, and Luxury Elite. Bespoke planning for UK, European, and destination weddings starting from £80,000.",
  },
  '/journal': {
    title: 'The RIAH Journal | Wedding Planning Insights & Inspiration',
    description: 'The RIAH Journal: insights on luxury wedding planning, cultural celebrations, destination guides, and the art of curating extraordinary moments.',
  },
  '/press': {
    title: 'Press & Recognition | RIAH Weddings & Events',
    description: 'RIAH has been featured in British Vogue Weddings, Tatler, the Evening Standard, and Metro. Winner of Best Luxury Wedding Planner 2024 at the Global Wedding Awards.',
  },
  '/enquire': {
    title: 'Enquire | Begin Your RIAH Wedding Journey',
    description: 'Start your luxury wedding planning journey with RIAH. Submit an enquiry and our team, led by founder Tobi Yusuf, will review your date, vision, and investment alignment personally.',
  },
  '/faq': {
    title: 'Frequently Asked Questions | RIAH Weddings & Events',
    description: "Answers to common questions about RIAH's luxury wedding planning services, timelines, destinations, multicultural weddings, and how to begin your enquiry.",
  },
  '/media': {
    title: 'Wedding Gallery | RIAH Celebrations — Captured & Curated',
    description: 'A curated gallery of RIAH weddings and celebrations — luxury multicultural events across London, Europe, and international destinations.',
  },
  '/privacy': {
    title: 'Privacy Policy | RIAH Weddings & Events',
    description: 'RIAH Weddings & Events privacy policy. How we collect, use, and protect your personal data in accordance with UK GDPR.',
  },
  '/terms': {
    title: 'Terms & Conditions | RIAH Weddings & Events',
    description: 'Terms and conditions for RIAH Weddings & Events planning services. Please read carefully before engaging our services.',
  },
  '/portal': {
    title: 'Client Portal | RIAH Weddings & Events',
    description: 'Secure client portal for RIAH couples.',
  },
};

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    const seo = PAGE_SEO[pathname];
    if (seo) {
      updatePageSEO({
        title: seo.title,
        description: seo.description,
        canonical: `${BASE_URL}${pathname === '/' ? '' : pathname}`,
      });
    } else {
      document.title = 'RIAH Weddings & Events';
    }
  }, [pathname]);
  return null;
}

function AnimatedRoutes() {
  const location = useLocation();

  // Suspense is inside AnimatePresence so AnimatePresence sees the key change immediately
  // and can start the exit animation while the new chunk loads in the background.
  return (
    <AnimatePresence mode="wait">
      <div key={location.pathname} className="perspective-container">
        <Suspense fallback={<RouteFallback />}>
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
            <Route path="/media" element={<PageTransition><Media /></PageTransition>} />
            <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
          </Routes>
        </Suspense>
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
