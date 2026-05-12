import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import FadeIn from '../components/FadeIn';

const ARTICLES: Record<string, {
  title: string;
  category: string;
  readTime: string;
  image: string;
  body: string[];
}> = {
  'the-art-of-the-intentional-celebration': {
    title: 'The Art of the Intentional Celebration',
    category: 'Planning Philosophy',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1510076857177-7470076d4098?q=80&w=2072&auto=format&fit=crop',
    body: [
      'The most meaningful weddings are never an accident. They are the result of a hundred small decisions, a choice of fabric, a moment in the timeline, a conversation held three months before the wedding day, each made with care and a deep understanding of what truly matters to the couple at the centre of it all.',
      'Intentionality is not a trend. It is a commitment to meaning. It is the difference between a wedding that looks beautiful in photographs and one that is felt in the body, carried home in the heart, spoken about for decades.',
      'At RIAH, we begin every conversation not with venues and vendors, but with questions. What do you want your guests to feel the moment they arrive? What traditions are sacred to you, and which do you want to reimagine? What does this day say about where you\'ve come from, and the life you\'re choosing to build?',
      'The answers to these questions become the architecture of the celebration. Everything else, the flowers, the lighting, the running order, exists in service of those answers.',
      'This is the art of the intentional celebration. And it is, we believe, the only kind worth creating.',
    ],
  },
  'minimalism-in-lake-como': {
    title: 'Minimalism in Lake Como',
    category: 'Destination Guides',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1974&auto=format&fit=crop',
    body: [
      'There is a particular quality of light at Lake Como in September, soft, golden, arriving at an angle that makes every surface glow. It is, for many of our couples, the first thing they mention when they describe why they chose Italy.',
      'But the landscape of Lake Como demands something specific of a celebration: restraint. The grandeur is already there, in the water, in the mountains, in the historic villas that line the shore. The temptation is to add, to match the scale with spectacle. The mastery lies in resisting that temptation.',
      'A long dinner table with simple linen and a single stem in each glass. A ceremony held without a floral arch, because the view behind you is architecture enough. Music that begins softly and builds only when the moment calls for it.',
      'This is minimalism not as absence, but as clarity. The clearest possible expression of love, in one of the world\'s most beautiful settings.',
    ],
  },
};

export default function JournalArticle() {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? ARTICLES[slug] : undefined;

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-32">
        <p className="text-sm text-teal/50 font-light italic mb-8">This article hasn't been published yet.</p>
        <Link to="/journal" className="text-[10px] uppercase tracking-[0.5em] text-teal border-b border-mauve pb-2 hover:text-mauve transition-colors">
          Return to Journal →
        </Link>
      </div>
    );
  }

  return (
    <article className="pt-0">
      {/* Full-width header image */}
      <div className="relative w-full h-[55vh] sm:h-[65vh] md:h-[80vh] overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover grayscale-[15%]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-teal/80 via-teal/20 to-transparent" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="absolute bottom-0 left-0 p-5 sm:p-10 md:p-16 lg:p-24 max-w-4xl"
        >
          <div className="flex items-center gap-6 mb-6">
            <span className="text-[10px] uppercase tracking-[0.4em] text-mauve">{article.category}</span>
            <span className="text-[10px] text-off-white/40">{article.readTime}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-6xl text-off-white font-serif leading-tight tracking-tight">
            {article.title}
          </h1>
        </motion.div>
      </div>

      {/* Body */}
      <div className="luxury-container py-12 sm:py-20 md:py-32">
        <div className="max-w-2xl mx-auto">
          <FadeIn className="space-y-8 text-base md:text-lg text-teal/75 font-light leading-[1.9] tracking-wide">
            {article.body.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </FadeIn>

          {/* Divider */}
          <div className="w-16 h-[1px] bg-mauve/30 my-20" />

          {/* Closing CTA, soft, never a hard sell */}
          <FadeIn className="text-center">
            <p className="text-sm text-teal/50 font-light italic leading-relaxed mb-10 max-w-sm mx-auto">
              If this resonates with how you imagine your celebration, we would love to hear your story.
            </p>
            <Link
              to="/enquire"
              className="text-[10px] uppercase tracking-[0.5em] text-teal border-b border-mauve pb-2 inline-block hover:text-mauve hover:tracking-[0.7em] transition-all duration-700"
            >
              Begin a Conversation →
            </Link>
          </FadeIn>

          {/* Back to Journal */}
          <div className="mt-24 pt-16 border-t border-teal/5">
            <Link
              to="/journal"
              className="text-[10px] uppercase tracking-[0.4em] text-teal/40 hover:text-teal transition-colors duration-300"
            >
              ← Return to Journal
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
