import FadeIn from '../components/FadeIn';

export default function Press() {
  const sections = [
    {
      title: 'Featured In',
      items: ['Vogue Weddings', 'Kinfolk', 'Tatler', 'The Lane', 'Brides', 'Over The Moon']
    },
    {
      title: 'Speaking',
      items: ['ENGAGE! Luxury Wedding Summits', 'The Global Luxury Forum', 'Designers & Curators Panel 2025']
    },
    {
      title: 'Awards',
      items: ['Best Luxury Wedding Planner 2024 - Global Awards', 'Design Excellence Award - European Boutique Event House']
    }
  ];

  return (
    <div className="pt-40 pb-40">
      <div className="luxury-container">
        <FadeIn className="mb-32 text-center">
          <span className="text-[10px] uppercase tracking-[0.6em] text-mauve font-semibold mb-8 block">Acclaim</span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl text-teal mb-10 leading-[0.9]">Press & <br/> Recognition</h1>
          <div className="w-12 h-[1px] bg-mauve mx-auto mt-12" />
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-32 gap-x-24">
          {sections.map((section, idx) => (
            <FadeIn key={section.title} delay={idx * 0.1} className="relative">
              <h2 className="text-[10px] uppercase tracking-[0.4em] text-mauve font-bold mb-10 border-b border-teal/5 pb-6">{section.title}</h2>
              <ul className="space-y-8">
                {section.items.map((item) => (
                  <li key={item} className="text-lg md:text-2xl text-teal/80 font-serif italic tracking-wide group flex items-start gap-4">
                    <span className="w-1 h-4 bg-mauve/20 mt-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="group-hover:translate-x-2 transition-transform duration-500">{item}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-32 border-t border-teal/5 pt-32 text-center">
          <h3 className="text-xl italic font-serif text-teal/40 mb-10">For all press commissions and editorial enquiries:</h3>
          <p className="text-[11px] uppercase tracking-[0.5em] text-teal border-b border-mauve inline-block pb-3 hover:tracking-[0.7em] transition-all duration-700">press@riahweddings.com</p>
        </FadeIn>
      </div>
    </div>
  );
}
