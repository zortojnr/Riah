import SeoLandingPage from '../../components/seo/SeoLandingPage';

export default function LuxuryWeddingPlanner() {
  return (
    <SeoLandingPage
      keyword="Luxury Wedding Planner UK"
      h1="Luxury Wedding Planner UK"
      metaDescription="RIAH is one of the UK's foremost luxury wedding planners. White-glove full-service planning for high-net-worth couples across London, the UK, and European destinations."
      tagline="Where uncompromising luxury meets deeply personal storytelling. The UK's most considered luxury wedding planning experience."
      intro={[
        'Luxury is not a price point. It is a standard of care, in the quality of every supplier, the precision of every timeline, the warmth of every interaction, and the depth of every decision. At RIAH, luxury is simply how we work.',
        'We plan high-investment weddings for couples who understand the difference between a beautiful event and a truly extraordinary celebration. Our clients expect the finest venues, the most talented creative partners, and a planning experience that feels as exceptional as the wedding itself.',
        "As one of the UK's most sought-after luxury wedding planners, RIAH brings a rare combination of editorial sensibility, cultural intelligence, and operational precision to every engagement. Our clients trust us not just to plan a wedding, but to curate a legacy.",
      ]}
      services={[
        'White-glove full-service luxury wedding planning',
        "Access to the UK and Europe's most exclusive venues and suppliers",
        'Bespoke design direction and creative vision development',
        'Luxury guest experience management from invitation to departure',
        'Dedicated planning team including senior planner and assistant',
        'Multi-day celebration planning and management',
        'VIP family and guest liaison',
        'Bridal styling logistics and fitting support coordination',
      ]}
      destinations={['London', 'Cotswolds', 'Italy', 'France', 'Greece', 'Portugal', 'European Estates']}
      cultureNote="Our luxury planning service begins at £80,000 total wedding investment. We accept a limited number of celebrations each year to ensure every couple receives our full attention and care."
      image="https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070&auto=format&fit=crop"
    />
  );
}
