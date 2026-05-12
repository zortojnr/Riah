import SeoLandingPage from '../../components/seo/SeoLandingPage';

export default function WeddingPlannerUK() {
  return (
    <SeoLandingPage
      keyword="Wedding Planner UK"
      h1="Wedding Planner UK"
      metaDescription="RIAH plans luxury weddings across the United Kingdom, from London to the Scottish Highlands, the Cotswolds to coastal estates. Full-service planning by Tobi Yusuf."
      tagline="Nationally trusted, globally connected. Luxury wedding planning across the length and breadth of the United Kingdom."
      intro={[
        'The United Kingdom offers an extraordinary canvas for a wedding, rolling countryside, historic castles, coastal estates, and world-class city venues. At RIAH, we plan celebrations across England, Scotland, Wales, and Northern Ireland with the same meticulous care and cultural sensitivity we bring to every engagement.',
        'Our UK wedding planning service covers everything from initial vision to the final moment of your reception. We work with a trusted network of venue partners, suppliers, and creatives across every region, meaning you benefit from genuine local knowledge paired with luxury planning expertise.',
        'Whether your celebration is a grand country house affair, a contemporary city wedding, or an intimate coastal gathering, RIAH brings depth, discretion, and world-class execution to every detail.',
      ]}
      services={[
        'Full-service wedding planning across England, Scotland, Wales, and Northern Ireland',
        'Venue sourcing from country estates, castles, coastal properties, and city venues',
        'Comprehensive supplier sourcing and management',
        'Multicultural and destination wedding planning within the UK',
        'Guest travel and accommodation coordination',
        'Budget and timeline management',
        'Full on-the-day coordination team',
      ]}
      destinations={['London', 'Cotswolds', 'Lake District', 'Scottish Highlands', 'Cornwall', 'Yorkshire', 'Surrey']}
      image="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop"
    />
  );
}
