import { useState, useEffect } from 'react';

const HeroSection = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, min: 0, sec: 0 });
  const [imageLoaded, setImageLoaded] = useState(false);
  const [flipped, setFlipped] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const target = new Date('2026-07-11T17:45:00').getTime();
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

  // Preload image, then trigger flip
  useEffect(() => {
    const img = new Image();
    img.src = '/images/couple1.jpeg';
    img.onload = () => setImageLoaded(true);
    // fallback in case onload doesn't fire (cached)
    if (img.complete) setImageLoaded(true);
  }, []);

  useEffect(() => {
    if (!imageLoaded) return;
    const t1 = setTimeout(() => setFlipped(true), 300);
    const t2 = setTimeout(() => setShowContent(true), 1200);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [imageLoaded]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex flex-col lg:flex-row">
      {/* Left panel - photo with envelope-style flip (bottom to top) */}
      <div className="relative w-full lg:w-[60%] min-h-[60vh] lg:min-h-screen overflow-hidden"
        style={{ perspective: '1500px' }}
      >
        <div
          className="absolute inset-0"
          style={{
            transformStyle: 'preserve-3d',
            transition: 'transform 1.4s cubic-bezier(0.4, 0, 0.2, 1)',
            transform: flipped ? 'rotateX(0deg)' : 'rotateX(-90deg)',
            transformOrigin: 'bottom center',
          }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('/images/couple1.jpeg')` }}
          />
          <div className="absolute inset-0 bg-forest/30" />

          {/* Bottom-left text */}
          <div
            className="absolute bottom-8 left-8 z-10 transition-all duration-700 delay-700"
            style={{
              opacity: flipped ? 1 : 0,
              transform: flipped ? 'translateY(0)' : 'translateY(20px)',
            }}
          >
            <p className="font-heading text-cream text-[10px] tracking-[0.35em] uppercase drop-shadow-md">
              Vanessa & Brian
            </p>
            <div className="w-16 h-px bg-parchment my-3" />
            <p className="font-display italic text-cream text-sm drop-shadow-md">July 11, 2026</p>
          </div>
        </div>
      </div>

      {/* Right panel - cream texture */}
      <div
        className="w-full lg:w-[40%] min-h-[80vh] lg:min-h-screen lg:sticky lg:top-0 flex items-center justify-center relative"
        style={{ backgroundColor: 'hsl(37, 33%, 92%)' }}
      >
        <div
          className="absolute inset-0 opacity-20"
          style={{ backgroundImage: `url('/images/bg-cream.jpeg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        <div className="relative z-10 text-center px-8 py-16">
          {/* Vanessa */}
          <h1
            className="font-display italic font-light text-ink transition-all duration-700 ease-out"
            style={{
              fontSize: 'clamp(48px, 8vw, 96px)',
              lineHeight: 1.1,
              opacity: showContent ? 1 : 0,
              transform: showContent ? 'translateY(0)' : 'translateY(30px)',
            }}
          >
            Vanessa
          </h1>
          {/* & Brian */}
          <p
            className="font-display italic font-light text-warm-brown mt-1 transition-all duration-700 ease-out"
            style={{
              fontSize: 'clamp(36px, 6vw, 72px)',
              lineHeight: 1.1,
              opacity: showContent ? 1 : 0,
              transform: showContent ? 'translateY(0)' : 'translateY(30px)',
              transitionDelay: '150ms',
            }}
          >
            & Brian
          </p>
          {/* ARE GETTING MARRIED */}
          <p
            className="cinzel-spaced text-ink text-xs mt-6 transition-all duration-700 ease-out"
            style={{
              opacity: showContent ? 1 : 0,
              transform: showContent ? 'translateY(0)' : 'translateY(30px)',
              transitionDelay: '300ms',
            }}
          >
            ARE GETTING MARRIED
          </p>

          {/* Divider */}
          <div
            className="w-12 h-px bg-parchment mx-auto my-8 transition-all duration-700 ease-out"
            style={{
              opacity: showContent ? 1 : 0,
              transform: showContent ? 'scaleX(1)' : 'scaleX(0)',
              transitionDelay: '450ms',
            }}
          />

          {/* Countdown */}
          <div
            className="flex gap-4 justify-center mb-10 transition-all duration-700 ease-out"
            style={{
              opacity: showContent ? 1 : 0,
              transform: showContent ? 'translateY(0)' : 'translateY(30px)',
              transitionDelay: '550ms',
            }}
          >
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
              className="w-full bg-dusty-rose text-cream font-heading text-xs tracking-[0.2em] uppercase py-3 hover:bg-warm-brown transition-all duration-700 ease-out"
              style={{
                opacity: showContent ? 1 : 0,
                transform: showContent ? 'translateY(0)' : 'translateY(30px)',
                transitionDelay: '700ms',
              }}
            >
              RSVP
            </button>
            <button
              onClick={() => scrollTo('details')}
              className="w-full bg-dusty-rose text-cream font-heading text-xs tracking-[0.2em] uppercase py-3 hover:bg-warm-brown transition-all duration-700 ease-out"
              style={{
                opacity: showContent ? 1 : 0,
                transform: showContent ? 'translateY(0)' : 'translateY(30px)',
                transitionDelay: '850ms',
              }}
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
