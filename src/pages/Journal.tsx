import FadeIn from '../components/FadeIn';

const articles = [
  {
    title: 'The Art of the Intentional Celebration',
    category: 'Philosophy',
    image: 'https://images.unsplash.com/photo-1510076857177-7470076d4098?q=80&w=2072&auto=format&fit=crop',
    featured: true
  },
  {
    title: 'Minimalism in Lake Como',
    category: 'Destinations',
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1974&auto=format&fit=crop'
  },
  {
    title: 'Cultural Nuance in High-End Design',
    category: 'Design',
    image: 'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?q=80&w=1974&auto=format&fit=crop'
  },
  {
    title: 'A Sunset Seiree in the Cotswolds',
    category: 'Real Weddings',
    image: 'https://images.unsplash.com/photo-1541250848049-b4f7141dca3f?q=80&w=1974&auto=format&fit=crop'
  }
];

export default function Journal() {
  return (
    <div className="pt-40 pb-40">
      <div className="luxury-container">
        <FadeIn className="mb-24">
          <span className="text-[10px] uppercase tracking-[0.6em] text-mauve font-semibold mb-8 block">The Curator</span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl text-teal mb-10 leading-[0.9]">Journal</h1>
          <p className="text-base md:text-lg text-teal/60 max-w-2xl font-light leading-relaxed tracking-wide italic">
            Insights on design, destination intelligence, and the poetry of celebration.
          </p>
        </FadeIn>

        {/* Featured Article */}
        <FadeIn className="mb-24">
          <div className="group cursor-pointer relative overflow-hidden aspect-[16/7] bg-slate/10 shadow-2xl">
            <img 
              src={articles[0].image} 
              alt={articles[0].title} 
              className="absolute inset-0 w-full h-full object-cover grayscale-[20%] image-zoom-slow brightness-75 group-hover:brightness-100"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-teal/90 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-[2000ms]" />
            <div className="absolute bottom-0 left-0 p-12 md:p-24">
              <span className="text-[10px] uppercase tracking-[0.4em] font-medium text-mauve mb-6 block">{articles[0].category}</span>
              <h2 className="text-2xl sm:text-3xl md:text-5xl text-off-white max-w-3xl leading-[1.1] font-serif group-hover:tracking-tight transition-all duration-1000">{articles[0].title}</h2>
              <div className="mt-12 h-[1px] w-12 bg-mauve group-hover:w-full transition-all duration-1000" />
            </div>
          </div>
        </FadeIn>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-12">
          {articles.slice(1).map((article, i) => (
            <FadeIn key={article.title} delay={0.1 * i} className="group cursor-pointer">
              <div className="aspect-[4/5] overflow-hidden mb-10 bg-slate/5 relative">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover grayscale-[40%] image-zoom-slow"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-teal/5 group-hover:bg-transparent transition-colors duration-1000" />
              </div>
              <span className="text-[10px] uppercase tracking-[0.4em] font-semibold text-mauve mb-6 block border-l border-mauve/30 pl-4">{article.category}</span>
              <h3 className="text-2xl text-teal group-hover:text-mauve transition-colors duration-500 font-serif leading-[1.3]">{article.title}</h3>
              <p className="mt-6 text-[10px] uppercase tracking-[0.3em] text-teal/40 group-hover:pl-4 transition-all duration-500">Read Narrative →</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}
