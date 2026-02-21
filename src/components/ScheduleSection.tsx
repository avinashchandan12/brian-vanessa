import { Church, Wine, UtensilsCrossed, Music, PartyPopper } from 'lucide-react';

const scheduleEvents = [
  { time: '5:45 PM', event: 'Ceremony Begins', description: 'Guests arrive and take their seats under the open sky', icon: Church },
  { time: '6:45 PM', event: 'Cocktail Hour', description: 'Refreshments and mingling in the garden courtyard', icon: Wine },
  { time: '8:00 PM', event: 'Reception Dinner', description: 'A buffet inspired by international cuisine', icon: UtensilsCrossed },
  { time: '9:30 PM', event: 'Dancing & Celebration', description: 'Live music and dancing beneath the stars', icon: Music },
  { time: '1:00 AM', event: 'Afterparty', description: 'Surprise', icon: PartyPopper },
];

const ScheduleSection = () => {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden" style={{ backgroundColor: 'hsl(37, 33%, 92%)' }}>
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `url('/images/bg-cream.jpeg')`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
      <div className="relative z-10 max-w-2xl mx-auto px-8">
        <div className="fade-section stagger-children text-center mb-16">
          <p className="section-label mb-4">THE EVENING</p>
          <h2 className="section-heading text-ink" style={{ fontSize: 'clamp(32px, 4vw, 48px)' }}>
            Schedule
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[60px] md:left-[80px] top-0 bottom-0 w-px bg-parchment" />

          <div className="space-y-10">
            {scheduleEvents.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="fade-section flex gap-5 md:gap-8 items-start">
                  <div className="w-[60px] md:w-[80px] flex-shrink-0 text-right">
                    <span className="font-heading text-gold text-[11px] tracking-[0.1em]">{item.time}</span>
                  </div>
                  {/* Icon on timeline */}
                  <div className="relative flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-ivory border border-parchment flex items-center justify-center -ml-[14px]">
                      <Icon size={18} className="text-sage" strokeWidth={1.5} />
                    </div>
                  </div>
                  <div className="pb-2 pt-2">
                    <h3 className="font-display text-ink text-xl mb-1">{item.event}</h3>
                    <p className="font-body font-light text-ink/70 text-sm">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Evening descriptions */}
        <div className="mt-20 space-y-8 text-center fade-section">
          <div>
            <p className="font-heading text-gold text-[10px] tracking-[0.35em] mb-2">COCKTAIL HOUR</p>
            <p className="font-body font-light text-ink text-[15px] leading-relaxed max-w-lg mx-auto">
              Join us for refreshing drinks and light bites as we gather to celebrate the start of an
              unforgettable evening under the Lebanese mountain sky.
            </p>
          </div>
          <div>
            <p className="font-heading text-gold text-[10px] tracking-[0.35em] mb-2">DINNER</p>
            <p className="font-body font-light text-ink text-[15px] leading-relaxed max-w-lg mx-auto">
              Savor an exquisite feast crafted with the finest local ingredients, served family-style
              amidst the elegance of Le Clos de Faqra.
            </p>
          </div>
          <div>
            <p className="font-heading text-gold text-[10px] tracking-[0.35em] mb-2">DANCING</p>
            <p className="font-body font-light text-ink text-[15px] leading-relaxed max-w-lg mx-auto">
              Let the music move you as we dance the night away surrounded by ancient ruins,
              twinkling lights, and the joy of love and laughter.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
