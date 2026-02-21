import { useState } from 'react';

const faqs = [
  {
    q: 'When and where is the wedding?',
    a: 'The wedding will take place on July 11, 2026, at Le Clos de Faqra in Lebanon. The ceremony starts at 5:30 PM.',
  },
  {
    q: 'What is the dress code?',
    a: 'Formal attire is encouraged — think suits for men and dresses for women. Since the venue is in the mountains and evenings can get cool, we recommend bringing a light jacket or scarf.',
  },
  {
    q: 'Are children welcome?',
    a: 'We love your little ones, but we\'ve planned an adults-only celebration to allow all our guests to relax and enjoy the evening.',
  },
  {
    q: 'How do I RSVP?',
    a: 'Please RSVP through our website\'s RSVP section. We kindly ask that you respond by May 1, 2026.',
  },
  {
    q: 'What hotels do you recommend?',
    a: 'We recommend staying at Terre Brune Hotel, Faqra Club, or InterContinental Mzaar. Each offers special rates using our discount code "VanessaBrian".',
  },
  {
    q: 'Can I bring a plus one?',
    a: 'Due to venue capacity, we can only accommodate guests formally invited on your invitation. Please check your RSVP for details.',
  },
  {
    q: 'Will the ceremony be indoors or outdoors?',
    a: 'The ceremony will take place outdoors in the beautiful mountain setting. We have contingency plans in case of inclement weather.',
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden" style={{ backgroundColor: 'hsl(37, 33%, 92%)' }}>
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `url('/images/bg-cream.jpeg')`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
      <div className="relative z-10 max-w-2xl mx-auto px-8">
        <div className="fade-section stagger-children text-center mb-16">
          <p className="section-label mb-4">QUESTIONS</p>
          <h2 className="section-heading text-ink" style={{ fontSize: 'clamp(32px, 4vw, 48px)' }}>
            Frequently Asked
          </h2>
        </div>

        <div className="space-y-0">
          {faqs.map((faq, idx) => (
            <div key={idx} className="fade-section border-b border-parchment">
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full py-5 flex items-center justify-between text-left group"
              >
                <span className="font-heading text-ink text-[12px] tracking-[0.1em] pr-4">
                  {faq.q.toUpperCase()}
                </span>
                <span className="font-display text-gold text-xl flex-shrink-0 transition-transform duration-300"
                  style={{ transform: openIndex === idx ? 'rotate(45deg)' : 'rotate(0deg)' }}
                >
                  +
                </span>
              </button>
              <div
                className="overflow-hidden transition-all duration-400 ease-in-out"
                style={{
                  maxHeight: openIndex === idx ? '200px' : '0',
                  opacity: openIndex === idx ? 1 : 0,
                }}
              >
                <p className="font-body font-light text-ink/80 text-[14px] leading-relaxed pb-5">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
