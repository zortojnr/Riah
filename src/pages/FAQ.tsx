import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import FadeIn from '../components/FadeIn';

const FAQS = [
  {
    q: "How far in advance should I enquire about RIAH's planning services?",
    a: 'We recommend enquiring 12–18 months before your intended wedding date, particularly for destination weddings or large cultural celebrations. We accept a limited number of celebrations each year, and our most sought-after dates book well in advance. That said, we occasionally have availability for celebrations within 6–12 months, please enquire and we will let you know.',
  },
  {
    q: 'Do you plan destination weddings outside the UK?',
    a: 'Yes, destination wedding planning is central to what we do. We plan celebrations across Italy, France, Greece, Portugal, and select global destinations. We have trusted on-the-ground networks in each location, and our Signature Guest Experience Concierge™ service ensures your guests feel fully supported wherever in the world they are travelling from.',
  },
  {
    q: 'Do you work with multicultural and interfaith couples?',
    a: 'Absolutely, this is at the heart of our work. RIAH was founded to serve culturally rich, globally connected couples whose celebrations honour multiple traditions, heritages, and family backgrounds. We bring genuine cultural understanding, family liaison expertise, and the creative vision to weave different traditions together beautifully.',
  },
  {
    q: 'What is the Signature Guest Experience Concierge™?',
    a: 'The Signature Guest Experience Concierge™ is our elevated guest management service, included in our Signature and Luxury Elite planning tiers. It covers everything your guests need from the moment they receive their invitation: visa guidance, accommodation coordination, airport transfers, welcome itineraries, and on-the-ground support throughout your celebration weekend.',
  },
  {
    q: 'What level of investment do RIAH weddings typically represent?',
    a: 'RIAH specialises in high-investment celebrations. Our planning services are suited to weddings with an overall investment beginning at £80,000, with many of our celebrations representing £120,000–£350,000+ in total. Our enquiry form includes a section for investment alignment, which helps us ensure we are the right fit for your vision.',
  },
  {
    q: 'How many weddings do you plan each year?',
    a: 'We deliberately limit the number of celebrations we accept each year. This is not a constraint, it is a commitment. Every couple we work with receives the full depth of our attention, creativity, and care. We believe the most meaningful work is done when we are fully present for each celebration.',
  },
  {
    q: 'What is the enquiry process?',
    a: 'You begin by submitting an enquiry through our website. Our team reviews every enquiry personally. If your date, vision, and investment align with our availability, we will invite you to a private consultation, either in person or via video, to explore your celebration in depth. From there, we will share a tailored proposal.',
  },
  {
    q: 'Do you offer day-of coordination only?',
    a: 'RIAH specialises in full-service planning. We do not offer day-of coordination as a standalone service, as we believe the depth of relationship and knowledge built through the full planning process is what allows us to execute your wedding day at the standard our couples expect.',
  },
  {
    q: 'Where are you based?',
    a: 'RIAH is based in London and operates across the United Kingdom, Italy, France, Greece, Portugal, and select international destinations. We are a globally mobile planning house, our home is London, but our work takes us wherever your celebration calls.',
  },
];

function FaqItem({ item, index }: { item: typeof FAQS[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <FadeIn delay={index * 0.04}>
      <div className="border-b border-teal/8">
        <button
          onClick={() => setOpen(!open)}
          className="w-full text-left py-6 flex items-start justify-between gap-6 group min-h-[44px]"
          aria-expanded={open}
        >
          <span className="text-sm md:text-base text-teal font-light leading-relaxed tracking-wide group-hover:text-mauve transition-colors duration-300">
            {item.q}
          </span>
          <span className={`text-mauve text-lg shrink-0 transition-transform duration-500 mt-0.5 ${open ? 'rotate-45' : ''}`}>
            +
          </span>
        </button>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <p className="pb-8 text-sm text-teal/60 font-light leading-relaxed tracking-wide">
                {item.a}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </FadeIn>
  );
}

export default function FAQ() {
  useEffect(() => {
    document.title = 'Frequently Asked Questions | RIAH Weddings & Events';
    const metaEl = document.querySelector('meta[name="description"]');
    if (metaEl) metaEl.setAttribute('content', 'Answers to common questions about RIAH\'s luxury wedding planning services, timelines, destinations, multicultural weddings, and how to begin your enquiry.');

    // Inject FAQ schema
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'faq-schema';
    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: FAQS.map(faq => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: { '@type': 'Answer', text: faq.a },
      })),
    });
    document.head.appendChild(script);

    return () => {
      const existing = document.getElementById('faq-schema');
      if (existing) existing.remove();
    };
  }, []);

  return (
    <div className="pt-24 md:pt-36 pb-20 md:pb-32 bg-off-white">
      <div className="luxury-container max-w-3xl mx-auto">

        <FadeIn className="mb-20">
          <span className="text-[10px] uppercase tracking-[0.6em] text-mauve font-semibold mb-8 block">Questions</span>
          <h1 className="text-4xl sm:text-5xl text-teal mb-6 leading-tight tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-sm text-teal/55 font-light leading-relaxed tracking-wide italic max-w-lg">
            Everything you need to know about working with RIAH. If your question isn't answered here, please reach out directly.
          </p>
          <div className="w-12 h-[1px] bg-mauve/30 mt-10" />
        </FadeIn>

        <div className="space-y-0">
          {FAQS.map((faq, i) => (
            <FaqItem key={i} item={faq} index={i} />
          ))}
        </div>

        <FadeIn className="mt-24 pt-16 border-t border-teal/5 text-center">
          <p className="text-sm text-teal/50 font-light italic leading-relaxed mb-10">
            Still have questions? We would be glad to hear from you.
          </p>
          <Link
            to="/enquire"
            className="text-[10px] uppercase tracking-[0.5em] text-teal border-b border-mauve pb-2 inline-block hover:text-mauve hover:tracking-[0.7em] transition-all duration-700"
          >
            Begin Your Enquiry →
          </Link>
        </FadeIn>
      </div>
    </div>
  );
}
