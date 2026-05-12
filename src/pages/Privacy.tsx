import FadeIn from '../components/FadeIn';

const SECTIONS = [
  {
    title: '1. Who We Are',
    content: 'RIAH Weddings & Events ("RIAH", "we", "us", or "our") is a luxury wedding and events planning company. Our principal place of business is London, United Kingdom. Our website address is: https://riahevents.com. For privacy-related enquiries, contact us at: tobi@riahevents.com.',
  },
  {
    title: '2. What Personal Data We Collect',
    content: 'We collect information you voluntarily provide when completing our enquiry form, subscribing to our journal, or contacting us directly. This may include: your full name and your partner\'s full name, email address and telephone number, information about your planned celebration (location, date, guest count), how you heard about us, and any additional details you choose to share. We do not collect payment information directly, all payments are handled by third-party processors.',
  },
  {
    title: '3. How We Use Your Data',
    content: 'We use your personal data to: respond to enquiry submissions and assess whether we are able to support your celebration; communicate with you throughout the planning process; send occasional journal and editorial communications (only with your explicit consent); and fulfil our contractual obligations where we enter into a planning agreement.',
  },
  {
    title: '4. Legal Basis for Processing',
    content: 'We process your personal data on the following legal bases under the UK GDPR: Legitimate interests, to respond to enquiries and assess suitability; Contractual necessity, where we have a planning agreement in place; Consent, for optional email communications such as the journal newsletter.',
  },
  {
    title: '5. Data Sharing',
    content: 'We do not sell or rent your personal data to third parties. We may share your data with trusted service providers strictly necessary for delivery of our services (e.g. form submission platforms such as Tally, and email platforms such as Kit/ConvertKit). All third-party processors are required to maintain appropriate security standards.',
  },
  {
    title: '6. Data Retention',
    content: 'We retain enquiry data for up to 24 months following an initial enquiry. Where a planning agreement is entered into, we retain relevant records for up to 7 years in compliance with UK tax and legal obligations. You may request deletion of your data at any time (subject to legal retention requirements).',
  },
  {
    title: '7. Cookies',
    content: 'Our website uses essential cookies required for site functionality. We do not use tracking or advertising cookies. No personal data is shared with advertising networks.',
  },
  {
    title: '8. Your Rights',
    content: 'Under UK GDPR, you have the right to: access the personal data we hold about you; request correction of inaccurate data; request erasure of your data (right to be forgotten); withdraw consent for marketing communications at any time; lodge a complaint with the Information Commissioner\'s Office (ICO) at ico.org.uk.',
  },
  {
    title: '9. Security',
    content: 'We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, disclosure, alteration, or destruction.',
  },
  {
    title: '10. Contact',
    content: 'For any privacy-related requests or questions, please contact: tobi@riahevents.com. We will respond within 30 days of receiving your request.',
  },
];

export default function Privacy() {
  return (
    <div className="pt-24 md:pt-36 pb-20 md:pb-32">
      <div className="luxury-container max-w-3xl mx-auto">
        <FadeIn className="mb-20">
          <span className="text-[10px] uppercase tracking-[0.6em] text-mauve font-semibold mb-8 block">Legal</span>
          <h1 className="text-4xl sm:text-5xl text-teal mb-6 leading-tight tracking-tight">Privacy Policy</h1>
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
