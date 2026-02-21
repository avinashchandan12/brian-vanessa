const DetailsSection = () => {
  return (
    <section id="details" className="flex flex-col lg:flex-row min-h-screen">
      {/* Left - content */}
      <div className="w-full lg:w-[55%] bg-cream-texture noise-overlay relative flex items-center">
        <div className="relative z-10 w-full px-8 lg:px-16 py-20">
          <div className="fade-section stagger-children">
            <p className="section-label text-center mb-8">THE CELEBRATION</p>

            <div className="flex flex-col md:flex-row gap-12 md:gap-8 justify-center">
              {/* Ceremony */}
              <div className="flex-1 text-center">
                <p className="font-heading text-gold text-[10px] tracking-[0.35em] mb-3">CEREMONY</p>
                <p className="text-gold text-sm mb-3">— ✦ —</p>
                <h3 className="font-display text-ink text-2xl mb-2">The Chapel</h3>
                <p className="font-body font-light text-ink text-sm leading-relaxed">
                  123 Garden Lane<br />
                  Tuscany, Italy<br />
                  3:00 PM
                </p>
                <a
                  href="#"
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
                <h3 className="font-display text-ink text-2xl mb-2">Villa Rosewood</h3>
                <p className="font-body font-light text-ink text-sm leading-relaxed">
                  456 Olive Grove Road<br />
                  Tuscany, Italy<br />
                  5:30 PM
                </p>
                <a
                  href="#"
                  className="inline-block mt-4 font-heading text-warm-brown text-[11px] tracking-[0.2em] hover:underline"
                >
                  VIEW ON MAP →
                </a>
              </div>
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
        <div className="absolute inset-0" style={{ background: 'rgba(40,50,35,0.3)' }} />
      </div>
    </section>
  );
};

export default DetailsSection;
