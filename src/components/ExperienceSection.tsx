import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus } from 'lucide-react';

const experiences = [
  {
    title: "Refined & Intentional",
    description: "Every decision is made with clarity, purpose, and a deep understanding of what truly matters. We believe that luxury is the result of rigorous editing, where every element exists only because it contributes to a greater, singular narrative that speaks to the essence of your journey."
  },
  {
    title: "Culturally Attuned",
    description: "We approach every celebration with respect, ensuring heritage is honoured with authenticity and elegance. Our design intelligence bridges the gap between cherished tradition and contemporary sophistication, creating a dialogue that resonates across generations while maintaining a modern aesthetic."
  },
  {
    title: "Calm & Assured",
    description: "Our process is seamless and composed, allowing you to experience every moment with ease and confidence. We serve as the steady hand behind the scenes, managing complex logistics with an effortless grace that permits you to remain fully present in your celebration as it unfolds."
  },
  {
    title: "Discreet & Personal",
    description: "We work with quiet precision, ensuring your celebration remains intimate, considered, and entirely yours. Your story is a private masterpiece. We shape environments that protect the sanctity of your most precious moments while reflecting the unique nuance of your bond with absolute fidelity."
  }
];

export default function ExperienceSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 md:py-24 bg-off-white overflow-hidden">
      <div className="luxury-container">
        <div className="max-w-[900px] mx-auto">
          {/* Header */}
          <div className="mb-12 md:mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-5xl font-serif text-teal tracking-tight"
            >
              The Experience
            </motion.h2>
          </div>

          {/* List */}
          <div className="border-t border-teal/5">
            {experiences.map((item, index) => (
              <motion.div 
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="border-b border-teal/5"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full py-8 md:py-10 flex justify-between items-center text-left group"
                >
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-serif text-teal tracking-tight transition-colors duration-500 group-hover:text-mauve">
                    {item.title}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 45 : 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="p-2"
                  >
                    <Plus className="w-5 h-5 md:w-6 md:h-6 text-teal/40 transition-colors group-hover:text-teal" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                      className="pb-10 md:pb-12 max-w-2xl"
                    >
                      <p className="text-sm md:text-base text-teal/65 font-light leading-relaxed tracking-wide">
                        {item.description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
