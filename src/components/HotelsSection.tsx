const hotels = [
  {
    name: 'Terre Brune Hotel Kfardebian',
    description: 'Vanessa and Brian, along with their wedding party, will be staying here. A cozy mountain retreat on the Faqra Road.',
    address: 'Kfardebian - Faqra Road, Kfardebian, Lebanon',
    contact: '+961 (call to book)',
    link: 'https://terre-brune-hotel.beirut-hotel.net',
    rooms: ['Deluxe Room', 'Executive Room', 'Majestic Room', 'Captain Suite', 'Terrebrune Suite'],
  },
  {
    name: 'InterContinental Mzaar',
    description: 'Mountain Resort & Spa by IHG — a premier mountain resort offering full spa facilities and stunning alpine views.',
    address: 'Kfardebian, Lebanon',
    contact: 'Call or book online',
    link: 'https://www.ihg.com',
    rooms: null,
  },
  {
    name: 'Faqra Club Kfardebian',
    description: 'A well-known mountain club offering comfortable accommodation surrounded by nature and historic ruins.',
    address: 'Faqra, Mount Lebanon Governorate, Lebanon',
    contact: 'Call or book online',
    link: 'https://www.faqraclub.com',
    rooms: null,
  },
];

const HotelsSection = () => {
  return (
    <section className="relative py-24 lg:py-32 bg-forest overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{ backgroundImage: `url('/images/bg-cream.jpeg')`, backgroundSize: 'cover' }}
      />
      <div className="relative z-10 max-w-5xl mx-auto px-8">
        <div className="fade-section stagger-children text-center mb-6">
          <p className="section-label mb-4">WHERE TO STAY</p>
          <h2 className="section-heading text-cream" style={{ fontSize: 'clamp(32px, 4vw, 48px)' }}>
            Accommodations
          </h2>
        </div>

        <p className="font-body font-light text-cream/80 text-[15px] leading-relaxed text-center max-w-2xl mx-auto mb-4">
          For guests who would like to stay close to the venue and avoid driving at night,
          we've listed a few hotel options below. Vanessa and Brian, along with their wedding party,
          will be staying at Terre Brune Hotel.
        </p>

        <div className="text-center mb-12">
          <div className="inline-block border border-dashed border-gold/50 px-5 py-2">
            <p className="font-heading text-gold text-[11px] tracking-[0.2em]">
              DISCOUNT CODE FOR ALL HOTELS: VANESSABRIAN
            </p>
          </div>
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
              <h3 className="font-heading text-cream text-sm mb-3 tracking-wider">{hotel.name}</h3>
              <p className="font-body font-light text-cream/80 text-sm leading-relaxed mb-3">
                {hotel.description}
              </p>
              <p className="font-body text-cream/60 text-[13px] mb-2">{hotel.address}</p>
              <p className="font-body text-olive-light text-[13px] mb-3">{hotel.contact}</p>

              {hotel.rooms && (
                <div className="mb-4">
                  <p className="font-heading text-gold text-[9px] tracking-[0.2em] mb-2">ROOM OPTIONS</p>
                  <ul className="space-y-1">
                    {hotel.rooms.map((room) => (
                      <li key={room} className="font-body font-light text-cream/70 text-[12px]">• {room}</li>
                    ))}
                  </ul>
                </div>
              )}

              <a
                href={hotel.link}
                target="_blank"
                rel="noopener noreferrer"
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
