const hotels = [
  {
    name: 'Hotel Bella Vista',
    description: 'A charming boutique hotel nestled in the hills with panoramic views of the valley.',
    code: 'VANESSABRIAN25',
    contact: '+39 055 123 4567',
    link: '#',
  },
  {
    name: 'Villa Serena Resort',
    description: 'Elegant countryside estate with lush gardens, a spa, and traditional Italian hospitality.',
    code: 'VBWEDDING',
    contact: '+39 055 765 4321',
    link: '#',
  },
  {
    name: 'Palazzo del Sole',
    description: 'A historic palazzo transformed into a luxury retreat, minutes from the ceremony venue.',
    code: 'LOVE2025',
    contact: '+39 055 987 6543',
    link: '#',
  },
];

const HotelsSection = () => {
  return (
    <section className="relative py-24 lg:py-32 bg-forest overflow-hidden">
      {/* Sage texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{ backgroundImage: `url('/images/bg-cream.jpeg')`, backgroundSize: 'cover' }}
      />
      <div className="relative z-10 max-w-5xl mx-auto px-8">
        <div className="fade-section stagger-children text-center mb-16">
          <p className="section-label mb-4">WHERE TO STAY</p>
          <h2 className="section-heading text-cream" style={{ fontSize: 'clamp(32px, 4vw, 48px)' }}>
            Our Recommendations
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {hotels.map((hotel) => (
            <div
              key={hotel.name}
              className="fade-section p-6 transition-transform duration-300 hover:-translate-y-1"
              style={{
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(201,169,110,0.3)',
              }}
            >
              <h3 className="font-heading text-cream text-base mb-3">{hotel.name}</h3>
              <p className="font-body font-light text-cream/80 text-sm leading-relaxed mb-4">
                {hotel.description}
              </p>
              <div className="border border-dashed border-gold/50 px-3 py-2 mb-4">
                <p className="font-heading text-gold text-[10px] tracking-[0.2em]">
                  USE CODE: {hotel.code}
                </p>
              </div>
              <p className="font-body text-olive-light text-[13px] mb-3">{hotel.contact}</p>
              <a
                href={hotel.link}
                className="font-heading text-dusty-rose text-[11px] tracking-[0.2em] hover:underline"
              >
                BOOK NOW →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HotelsSection;
