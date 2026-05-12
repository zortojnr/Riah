import SeoLandingPage from '../../components/seo/SeoLandingPage';

export default function WeddingPlannerLondon() {
  return (
    <SeoLandingPage
      keyword="Wedding Planner London"
      h1="Wedding Planner London"
      metaDescription="RIAH is London's leading luxury wedding planner. Full-service planning for refined, culturally rich celebrations across London and beyond. Founded by Tobi Yusuf."
      tagline="London's most sought-after luxury wedding planning house, creating deeply intentional celebrations for discerning couples."
      intro={[
        "London is one of the world's great cities for a wedding, rich in history, extraordinary venues, and a cosmopolitan energy that makes every celebration feel singular. At RIAH, we have spent years curating London weddings that are as refined as they are deeply personal.",
        "Whether you are dreaming of a private ceremony in a Mayfair townhouse, an opulent reception at a heritage estate, or an intimate dinner in one of London's most celebrated restaurants, we bring the same depth of care, cultural intelligence, and flawless execution to every celebration.",
        'As a London wedding planner, we work across the full spectrum of luxury, from intimate 30-person ceremonies to multi-day cultural celebrations for 300 guests. Every celebration we plan is built around you: your story, your heritage, your vision.',
      ]}
      services={[
        'Full-service wedding planning from first meeting to final dance',
        'London venue sourcing and negotiation across private estates, hotels, and heritage properties',
        'Supplier management, photographers, florists, caterers, musicians, and more',
        'Multicultural and interfaith ceremony planning and coordination',
        'Guest experience management including accommodation and transport',
        'On-the-day coordination with dedicated planning team',
        'Budget creation, timeline management, and planning tools',
      ]}
      destinations={['Mayfair', 'Kensington', 'Chelsea', 'The City', 'South Bank', 'Hampton Court', 'Home Counties']}
      image="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop"
    />
  );
}
