import dogMartini from '@/assets/dog-martini.png';

const FooterSection = () => {
  return (
    <footer>
      {/* Dog illustration section */}
      <div className="relative py-20 flex flex-col items-center justify-center" style={{ backgroundColor: 'hsl(37, 33%, 92%)' }}>
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `url('/images/bg-cream.jpeg')`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="relative z-10 flex flex-col items-center">
          <img
            src={dogMartini}
            alt="Dog in a martini glass"
            className="w-[280px] md:w-[340px] mb-8"
          />
          <p className="font-display italic text-ink text-center" style={{ fontSize: 'clamp(28px, 4vw, 42px)' }}>
            See you there
          </p>
          <p className="font-heading text-gold text-[10px] tracking-[0.35em] mt-3">
            VANESSA & BRIAN · JULY 11, 2026
          </p>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="bg-forest py-6 text-center">
        <p className="font-body font-light text-cream text-xs">Made with love ✦</p>
      </div>
    </footer>
  );
};

export default FooterSection;
