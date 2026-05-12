import SeoLandingPage from '../../components/seo/SeoLandingPage';

export default function DestinationWeddingPlanner() {
  return (
    <SeoLandingPage
      keyword="Destination Wedding Planner UK"
      h1="Destination Wedding Planner UK"
      metaDescription="RIAH plans destination weddings from the UK to Italy, France, Greece, Portugal and beyond. Expert destination wedding planning with cultural depth and luxury precision."
      tagline="Your celebration, without borders. Expert destination wedding planning from a UK base, across Europe and the world."
      intro={[
        'A destination wedding is one of the most extraordinary gifts you can give yourselves and your guests, a celebration in a place of extraordinary beauty, far from the everyday. At RIAH, destination wedding planning is at the heart of what we do.',
        'Based in the UK and operating across Italy, France, Greece, Portugal, and select global destinations, we have the international network, cultural knowledge, and logistical expertise to make your destination wedding feel effortless, however complex the coordination behind the scenes.',
        'Our Signature Guest Experience Concierge™ service ensures that every guest, wherever they are travelling from, feels fully supported from the moment they receive their invitation. Visa guidance, accommodation blocks, airport transfers, welcome itineraries: we manage every detail so you can simply arrive and celebrate.',
      ]}
      services={[
        'End-to-end destination wedding planning from the UK',
        'International venue sourcing across Italy, France, Greece, Portugal, and beyond',
        'Signature Guest Experience Concierge™, guest travel, accommodation, and logistics',
        'On-the-ground planning days and venue walkthroughs',
        'Local supplier networks in every destination',
        'Multi-day celebration planning (welcome dinner, ceremony, reception, brunch)',
        'Visa and travel guidance for international guests',
        'Currency, logistics, and legal documentation support',
      ]}
      destinations={['Italy', 'France', 'Greece', 'Portugal', 'Spain', 'United Kingdom', 'Global']}
      cultureNote="We specialise in destination weddings for UK-based couples travelling abroad, and US or international couples marrying in the UK or Europe, with deep understanding of the logistical and cultural nuances each journey brings."
      image="https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=2070&auto=format&fit=crop"
    />
  );
}
