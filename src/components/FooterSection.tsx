const FooterSection = () => {
  return (
    <footer>
      {/* Photo with overlay text */}
      <div className="relative w-full" style={{ height: '60vh' }}>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/images/couple4.jpeg')` }}
        />
        <div
          className="absolute inset-0"
          style={{ boxShadow: 'inset 0 0 120px rgba(0,0,0,0.35)' }}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-12 z-10">
          <p className="font-display italic text-cream text-center" style={{ fontSize: 'clamp(32px, 5vw, 48px)' }}>
            See you there
          </p>
          <p className="font-heading text-gold text-[10px] tracking-[0.35em] mt-3">
            VANESSA & BRIAN · MAY 17, 2025
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
