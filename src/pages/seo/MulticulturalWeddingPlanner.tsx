import SeoLandingPage from '../../components/seo/SeoLandingPage';

export default function MulticulturalWeddingPlanner() {
  return (
    <SeoLandingPage
      keyword="Multicultural Wedding Planner UK"
      h1="Multicultural Wedding Planner UK"
      metaDescription="RIAH specialises in multicultural wedding planning across the UK and Europe. Expert cultural advisory, interfaith ceremonies, and luxury planning for diverse couples."
      tagline="Honouring every tradition with equal care. The UK's leading multicultural luxury wedding planning house."
      intro={[
        "Multicultural weddings are among the most beautiful and complex celebrations to plan, requiring a planner who understands not just logistics, but the depth and significance of cultural traditions, the nuances of interfaith ceremonies, and the delicate art of weaving two families' worlds together with grace.",
        'At RIAH, multicultural wedding planning is not a specialism we have added, it is the foundation of everything we do. Founded by Tobi Yusuf, RIAH was created specifically to serve globally connected, culturally rich couples who deserve a planning experience that truly understands them.',
        'From Nigerian Yoruba and Igbo ceremonies to South Asian weddings, Ghanaian, Caribbean, and mixed-heritage celebrations, we bring genuine cultural intelligence, family liaison expertise, and world-class execution to every tradition we honour.',
      ]}
      services={[
        'Multicultural and interfaith wedding planning across the UK and Europe',
        'Cultural advisory and ceremony integration (combining two or more traditions)',
        'Family liaison support for parents, elders, and extended families',
        'Traditional and contemporary ceremony coordination',
        'Multilingual communication and guest management support',
        'Cultural catering, entertainment, and décor sourcing',
        'Attire and styling coordination across multiple cultural looks',
        'Multi-day celebrations incorporating all cultural elements',
      ]}
      destinations={['London', 'United Kingdom', 'Italy', 'France', 'Greece', 'Portugal', 'Global']}
      cultureNote="We work with couples from Nigerian, Ghanaian, South Asian, Caribbean, Middle Eastern, and mixed-heritage backgrounds, among many others. Our cultural depth is not assumed, it is lived, learned, and deeply respected."
      image="https://images.unsplash.com/photo-1523438885200-e635ba2c371e?q=80&w=1974&auto=format&fit=crop"
    />
  );
}
