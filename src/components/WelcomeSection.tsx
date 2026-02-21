const WelcomeSection = () => {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden" style={{ backgroundColor: 'hsl(37, 33%, 92%)' }}>
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `url('/images/bg-cream.jpeg')`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
      <div className="relative z-10 max-w-[680px] mx-auto px-8">
        <div className="fade-section stagger-children text-center">
          <p className="section-label mb-4">WELCOME</p>
          <h2 className="section-heading text-ink mb-8" style={{ fontSize: 'clamp(32px, 5vw, 48px)' }}>
            Our Celebration
          </h2>
          <p className="font-body font-light text-ink text-[15px] leading-relaxed mb-6">
            Welcome to Our Wedding Celebration! This moment has been ten years in the making, and we're so grateful
            to finally celebrate it with the people who have supported, encouraged, and loved us along the way.
          </p>
          <p className="font-body font-light text-ink text-[15px] leading-relaxed">
            We can't wait to share this unforgettable day with all of you!
          </p>
          <p className="text-gold text-lg mt-8">✦</p>
        </div>
      </div>

      {/* Offset photo */}
      <div className="relative z-10 max-w-[680px] mx-auto px-8 mt-12">
        <div className="mx-auto" style={{ width: 'min(360px, 80%)', transform: 'rotate(1.5deg)' }}>
          <img
            src="/images/couple2.jpeg"
            alt="Vanessa and Brian"
            className="w-full shadow-lg"
            style={{
              border: '12px solid hsl(37, 27%, 89%)',
              boxShadow: '8px 12px 40px rgba(0,0,0,0.12)',
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
