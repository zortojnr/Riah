import FadeIn from '../components/FadeIn';

const SECTIONS = [
  {
    title: '1. Agreement',
    content: 'These Terms & Conditions ("Terms") govern your use of the RIAH Weddings & Events website (riahevents.com) and any planning services provided by RIAH Weddings & Events ("RIAH", "we", "us"). By accessing our website or engaging our services, you agree to be bound by these Terms.',
  },
  {
    title: '2. Services',
    content: 'RIAH provides luxury wedding and event planning services as described on our website. All planning engagements are subject to a separate Client Agreement, which governs the specific scope of services, fees, and obligations for each celebration.',
  },
  {
    title: '3. Enquiries & Consultations',
    content: 'Submitting an enquiry through our website does not constitute a booking or create a contractual relationship. RIAH reserves the right to accept or decline any enquiry at its sole discretion. We accept a limited number of celebrations each year.',
  },
  {
    title: '4. Intellectual Property',
    content: 'All content on this website, including text, design, images, and branding, is the intellectual property of RIAH Weddings & Events and may not be reproduced, distributed, or used without prior written consent.',
  },
  {
    title: '5. Limitation of Liability',
    content: 'To the maximum extent permitted by law, RIAH shall not be liable for any indirect, incidental, or consequential damages arising from use of this website. Our liability in connection with any planning services is governed exclusively by the Client Agreement.',
  },
  {
    title: '6. Privacy',
    content: 'Your use of this website and our services is also governed by our Privacy Policy, which is incorporated into these Terms by reference.',
  },
  {
    title: '7. Third-Party Links',
    content: 'Our website may contain links to third-party websites. We are not responsible for the content or privacy practices of those sites.',
  },
  {
    title: '8. Governing Law',
    content: 'These Terms are governed by the laws of England and Wales. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts of England and Wales.',
  },
  {
    title: '9. Changes',
    content: 'We may update these Terms from time to time. Continued use of our website following any update constitutes acceptance of the revised Terms.',
  },
  {
    title: '10. Contact',
    content: 'For any questions regarding these Terms, please contact us at: tobi@riahevents.com.',
  },
];

export default function Terms() {
  return (
    <div className="pt-24 md:pt-36 pb-20 md:pb-32">
      <div className="luxury-container max-w-3xl mx-auto">
        <FadeIn className="mb-20">
          <span className="text-[10px] uppercase tracking-[0.6em] text-mauve font-semibold mb-8 block">Legal</span>
          <h1 className="text-4xl sm:text-5xl text-teal mb-6 leading-tight tracking-tight">Terms &amp; Conditions</h1>
          <p className="text-sm text-teal/40 font-light">Last updated: January 2026</p>
          <div className="w-12 h-[1px] bg-mauve/30 mt-10" />
        </FadeIn>

        <div className="space-y-16">
          {SECTIONS.map((section, i) => (
            <FadeIn key={i} delay={i * 0.04}>
              <h2 className="text-base text-teal font-medium tracking-wide mb-4">{section.title}</h2>
              <p className="text-sm text-teal/65 font-light leading-relaxed tracking-wide">{section.content}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}
