import { useState, useEffect } from 'react';

const EnvelopeAnimation = ({ onComplete }: { onComplete: () => void }) => {
  const [phase, setPhase] = useState<'closed' | 'opening' | 'card' | 'fading'>('closed');

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('opening'), 800);
    const t2 = setTimeout(() => setPhase('card'), 2000);
    const t3 = setTimeout(() => setPhase('fading'), 3500);
    const t4 = setTimeout(() => onComplete(), 4200);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-forest transition-opacity duration-700 ${phase === 'fading' ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E")`,
      }}
    >
      {/* Envelope */}
      <div className="relative" style={{ width: 320, height: 220 }}>
        {/* Envelope body */}
        <div className="absolute inset-0 bg-cream rounded-sm shadow-2xl" />

        {/* Flap */}
        <div
          className="absolute top-0 left-0 w-full origin-top"
          style={{
            height: 110,
            animation: phase === 'opening' || phase === 'card' || phase === 'fading'
              ? 'flap-open 1.2s ease-in-out forwards'
              : 'none',
            transformStyle: 'preserve-3d',
            perspective: 800,
            zIndex: 10,
          }}
        >
          <div
            className="w-full h-full bg-ivory"
            style={{
              clipPath: 'polygon(0 0, 50% 100%, 100% 0)',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            }}
          />
        </div>

        {/* Card sliding out */}
        <div
          className="absolute left-1/2 -translate-x-1/2 w-[280px] bg-cream border border-parchment flex flex-col items-center justify-center py-8 px-6 text-center"
          style={{
            bottom: 20,
            height: 180,
            animation: phase === 'card' || phase === 'fading'
              ? 'card-slide 1s ease-out forwards'
              : 'none',
            opacity: phase === 'card' || phase === 'fading' ? undefined : 0,
            zIndex: 5,
          }}
        >
          <p className="font-display italic text-warm-brown" style={{ fontSize: 'clamp(28px, 5vw, 40px)' }}>
            Vanessa & Brian
          </p>
          <p className="text-gold my-2 text-lg">✦</p>
          <p className="cinzel-spaced text-ink text-xs">May 17, 2025</p>
        </div>
      </div>

      {/* Skip button */}
      <button
        onClick={onComplete}
        className="fixed bottom-8 right-8 font-heading text-gold text-[10px] tracking-[0.35em] uppercase hover:opacity-70 transition-opacity"
      >
        Skip
      </button>
    </div>
  );
};

export default EnvelopeAnimation;
