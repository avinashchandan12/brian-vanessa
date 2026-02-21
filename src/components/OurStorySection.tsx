const OurStorySection = () => {
  return (
    <section className="relative py-24 lg:py-32 bg-cream-texture noise-overlay overflow-hidden">
      <div className="relative z-10 max-w-[680px] mx-auto px-8">
        <div className="fade-section stagger-children">
          <p className="section-label text-center mb-4">OUR STORY</p>
          <h2 className="section-heading text-center text-ink mb-8" style={{ fontSize: 'clamp(36px, 5vw, 52px)' }}>
            How It All Began
          </h2>
          <p className="font-body font-light text-ink text-[15px] leading-relaxed mb-8">
            Some love stories begin with grand gestures. Ours began with a look that lingered a moment too long,
            a conversation that didn't want to end, and a feeling neither of us could shake. From that very first
            meeting, something felt different — like the universe had quietly been arranging things all along.
            What started as stolen glances turned into late-night talks, spontaneous adventures, and a love
            that grows deeper with every passing day.
          </p>
          <p className="font-body font-light text-ink text-[15px] leading-relaxed">
            Now, surrounded by the people we love most, we're ready to begin the next chapter of our story —
            together, forever.
          </p>
        </div>
      </div>

      {/* Offset photo */}
      <div className="relative z-10 max-w-[680px] mx-auto px-8 mt-12">
        <div className="ml-auto" style={{ width: 'min(360px, 80%)', transform: 'translateX(40px) rotate(1.5deg)' }}>
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

export default OurStorySection;
