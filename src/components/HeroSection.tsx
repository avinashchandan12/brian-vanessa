import { useState, useEffect } from 'react';

const HeroSection = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, min: 0, sec: 0 });
  const [revealed, setRevealed] = useState(false);
  const [flipDone, setFlipDone] = useState(false);

  useEffect(() => {
    const target = new Date('2026-07-11T17:30:00').getTime();
    const update = () => {
      const now = Date.now();
      const diff = Math.max(0, target - now);
      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        min: Math.floor((diff % 3600000) / 60000),
        sec: Math.floor((diff % 60000) / 1000),
      });
    };
    update();
    const i = setInterval(update, 1000);
    return () => clearInterval(i);
  }, []);

  useEffect(() => {
    const t1 = setTimeout(() => setRevealed(true), 400);
    const t2 = setTimeout(() => setFlipDone(true), 1900); // after 1.4s animation + buffer
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex flex-col lg:flex-row">
      {/* Left panel - photo with envelope flip reveal */}
      <div className="relative w-full lg:w-[60%] min-h-[60vh] lg:min-h-screen overflow-hidden">
        {/* The photo — always there underneath */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('/images/couple1.jpeg')` }}
          />
          <div className="absolute inset-0 bg-forest/30" />

          {/* Bottom-left text — fades in after flip */}
          <div
            className="absolute bottom-8 left-8 z-10 transition-all duration-700"
            style={{
              opacity: flipDone ? 1 : 0,
              transform: flipDone ? 'translateY(0)' : 'translateY(20px)',
            }}
          >
            <p className="font-heading text-cream text-[10px] tracking-[0.35em] uppercase drop-shadow-md">
              Vanessa & Brian
            </p>
            <div className="w-16 h-px bg-parchment my-3" />
            <p className="font-display italic text-cream text-sm drop-shadow-md">July 11, 2026</p>
          </div>
        </div>

        {/* Forest green cover that slides/flips away */}
        {!flipDone && (
          <div
            className="absolute inset-0 bg-forest"
            style={{
              zIndex: 5,
              transformOrigin: 'right center',
              transition: 'transform 1.4s cubic-bezier(0.4, 0, 0.2, 1)',
              transform: revealed ? 'translateX(-100%)' : 'translateX(0)',
            }}
          >
            <div className="absolute inset-0 opacity-20" style={{
              backgroundImage: `url('/images/bg-sage.jpeg')`,
              backgroundSize: 'cover',
            }} />
            {/* V&B monogram */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 rounded-full border-2 border-gold/40 flex items-center justify-center">
                <span className="font-display text-cream text-2xl italic">V & B</span>
              </div>
            </div>
          </div>
        )}

        {/* Second half — a flap that folds open like an envelope */}
        {!flipDone && (
          <div
            className="absolute inset-y-0 right-0 w-1/2 bg-forest"
            style={{
              zIndex: 6,
              transformOrigin: 'left center',
              perspective: '1200px',
              transition: 'transform 1.2s cubic-bezier(0.4, 0, 0.2, 1) 0.2s',
              transform: revealed ? 'rotateY(-180deg)' : 'rotateY(0deg)',
              backfaceVisibility: 'hidden',
            }}
          >
            <div className="absolute inset-0 opacity-15" style={{
              backgroundImage: `url('/images/bg-sage.jpeg')`,
              backgroundSize: 'cover',
            }} />
          </div>
        )}
      </div>

      {/* Right panel - cream texture */}
      <div
        className="w-full lg:w-[40%] min-h-[80vh] lg:min-h-screen lg:sticky lg:top-0 flex items-center justify-center relative"
        style={{ backgroundColor: 'hsl(37, 33%, 92%)' }}
      >
        <div
          className="absolute inset-0 opacity-30"
          style={{ backgroundImage: `url('/images/bg-cream.jpeg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        <div className="relative z-10 text-center px-8 py-16 stagger-children visible">
          <h1
            className="font-display italic font-light text-ink"
            style={{ fontSize: 'clamp(48px, 8vw, 96px)', lineHeight: 1.1 }}
          >
            Vanessa
          </h1>
          <p
            className="font-display italic font-light text-warm-brown mt-1"
            style={{ fontSize: 'clamp(36px, 6vw, 72px)', lineHeight: 1.1 }}
          >
            & Brian
          </p>
          <p className="cinzel-spaced text-ink text-xs mt-6">ARE GETTING MARRIED</p>

          <div className="w-12 h-px bg-parchment mx-auto my-8" />

          {/* Countdown */}
          <div className="flex gap-4 justify-center mb-10">
            {Object.entries(timeLeft).map(([label, val]) => (
              <div
                key={label}
                className="border border-parchment w-16 py-3 flex flex-col items-center"
                style={{ backgroundColor: 'hsla(37, 27%, 89%, 0.6)' }}
              >
                <span className="font-display text-2xl text-ink">{val}</span>
                <span className="font-heading text-[9px] tracking-[0.2em] uppercase text-gold mt-1">
                  {label}
                </span>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-col items-center gap-2 w-[200px] mx-auto">
            <button
              onClick={() => scrollTo('rsvp')}
              className="w-full bg-dusty-rose text-cream font-heading text-xs tracking-[0.2em] uppercase py-3 hover:bg-warm-brown transition-colors"
            >
              RSVP
            </button>
            <button
              onClick={() => scrollTo('details')}
              className="w-full bg-dusty-rose text-cream font-heading text-xs tracking-[0.2em] uppercase py-3 hover:bg-warm-brown transition-colors"
            >
              Details
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
