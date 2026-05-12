import SeoLandingPage from '../../components/seo/SeoLandingPage';

export default function NigerianWeddingPlanner() {
  return (
    <SeoLandingPage
      keyword="Nigerian Wedding Planner UK"
      h1="Nigerian Wedding Planner UK"
      metaDescription="RIAH plans luxury Nigerian weddings across the UK and Europe. Expert Yoruba and Igbo traditional ceremony planning, luxury receptions, and cultural coordination by Tobi Yusuf."
      tagline="Planning Nigerian celebrations with the depth, colour, and precision they deserve. Luxury Nigerian wedding planning across the UK and beyond."
      intro={[
        "A Nigerian wedding is one of the world's most vibrant and joyful celebrations, rich in tradition, colour, community, and meaning. It deserves a planner who understands it from the inside: the significance of the traditional engagement, the flow of the Yoruba or Igbo ceremony, the energy of the reception, the expectations of family, and the scale of guest experience required.",
        'At RIAH, we plan Nigerian weddings with the same depth of cultural understanding we bring to every celebration, combined with the logistics expertise, luxury supplier network, and creative vision that our high-investment clients expect.',
        'Whether you are planning a traditional introduction ceremony, a full multi-day Nigerian wedding, or a fusion celebration combining Yoruba tradition with a contemporary reception, RIAH brings joy, precision, and deeply personal care to every element.',
      ]}
      services={[
        'Full-service Nigerian wedding planning across the UK and Europe',
        'Traditional ceremony coordination, Yoruba, Igbo, and other Nigerian traditions',
        'Introduction ceremony and engagement planning',
        'Multi-day celebration management (traditional, white wedding, reception)',
        'Nigerian cultural catering, live music, and entertainment sourcing',
        'Aso-ebi coordination and fabric sourcing guidance',
        'Family and community liaison, including elder and VIP guest management',
        'UK and destination Nigerian wedding planning',
      ]}
      destinations={['London', 'Manchester', 'Birmingham', 'United Kingdom', 'Italy', 'France', 'Greece']}
      cultureNote="RIAH was founded by Tobi Yusuf, bringing lived cultural understanding to Nigerian wedding planning. We understand the family dynamics, the ceremony rhythms, and the community expectations, and we plan around them with both precision and warmth."
      image="https://images.unsplash.com/photo-1541250848049-b4f7141dca3f?q=80&w=1974&auto=format&fit=crop"
    />
  );
}
