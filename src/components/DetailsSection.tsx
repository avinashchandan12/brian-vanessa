const DetailsSection = () => {
  return (
    <section id="details" className="flex flex-col lg:flex-row min-h-screen">
      {/* Left - content */}
      <div className="w-full lg:w-[55%] relative flex items-center" style={{ backgroundColor: 'hsl(37, 33%, 92%)' }}>
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `url('/images/bg-cream.jpeg')`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="relative z-10 w-full px-8 lg:px-16 py-20">
          <div className="fade-section stagger-children">
            <p className="section-label text-center mb-4">THE CELEBRATION</p>
            <h2 className="section-heading text-center text-ink mb-10" style={{ fontSize: 'clamp(28px, 4vw, 42px)' }}>
              July 11, 2026
            </h2>

            <div className="flex flex-col md:flex-row gap-12 md:gap-8 justify-center">
              {/* Ceremony */}
              <div className="flex-1 text-center">
                <p className="font-heading text-gold text-[10px] tracking-[0.35em] mb-3">CEREMONY</p>
                <p className="text-gold text-sm mb-3">— ✦ —</p>
                <h3 className="font-display text-ink text-2xl mb-2">Le Clos de Faqra</h3>
                <p className="font-body font-light text-ink text-sm leading-relaxed">
                  Kfardebian, Lebanon<br />
                  5:30 PM
                </p>
                <a
                  href="https://maps.google.com/?q=Le+Clos+de+Faqra+Kfardebian+Lebanon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 font-heading text-warm-brown text-[11px] tracking-[0.2em] hover:underline"
                >
                  VIEW ON MAP →
                </a>
              </div>

              {/* Wax seal between */}
              <div className="hidden md:flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-forest border-2 border-gold flex items-center justify-center">
                  <span className="font-display text-cream text-xs italic">V&B</span>
                </div>
              </div>

              {/* Reception */}
              <div className="flex-1 text-center">
                <p className="font-heading text-gold text-[10px] tracking-[0.35em] mb-3">RECEPTION</p>
                <p className="text-gold text-sm mb-3">— ✦ —</p>
                <h3 className="font-display text-ink text-2xl mb-2">Le Clos de Faqra</h3>
                <p className="font-body font-light text-ink text-sm leading-relaxed">
                  Kfardebian, Lebanon<br />
                  8:00 PM
                </p>
                <a
                  href="https://maps.google.com/?q=Le+Clos+de+Faqra+Kfardebian+Lebanon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 font-heading text-warm-brown text-[11px] tracking-[0.2em] hover:underline"
                >
                  VIEW ON MAP →
                </a>
              </div>
            </div>

            {/* Parking note */}
            <div className="mt-12 text-center">
              <p className="text-gold text-sm mb-3">✦</p>
              <p className="font-body font-light text-ink text-sm leading-relaxed max-w-md mx-auto">
                Complimentary Valet Services will be provided at the Venue Entrance. Located midway between
                Les Dunes de Fakra and the Faqra/Faraya Roundabout.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right - photo */}
      <div className="relative w-full lg:w-[45%] min-h-[50vh] lg:min-h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/images/couple3.jpeg')` }}
        />
        <div className="absolute inset-0 bg-forest/30" />
      </div>
    </section>
  );
};

export default DetailsSection;
