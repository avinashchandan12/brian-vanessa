import { useState } from 'react';

const RSVPSection = () => {
  const [attending, setAttending] = useState<'yes' | 'no' | null>(null);
  const [bringingGuest, setBringingGuest] = useState<'yes' | 'no' | null>(null);
  const [guestCount, setGuestCount] = useState(1);
  const [guestNames, setGuestNames] = useState<string[]>(['']);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });

  const handleGuestCountChange = (count: number) => {
    setGuestCount(count);
    setGuestNames(Array(count).fill(''));
  };

  const handleSubmit = () => {
    if (!formData.name || !attending) return;
    setSubmitted(true);
  };

  return (
    <section id="rsvp" className="flex flex-col lg:flex-row min-h-screen">
      {/* Left - photo with overlay text */}
      <div className="relative w-full lg:w-[50%] min-h-[40vh] lg:min-h-screen flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/images/couple1.jpeg')` }}
        />
        <div className="absolute inset-0" style={{ background: 'rgba(30,40,25,0.55)' }} />
        <h2
          className="relative z-10 font-display italic font-light text-cream text-center px-8"
          style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}
        >
          Will you<br />join us?
        </h2>
      </div>

      {/* Right - form */}
      <div className="w-full lg:w-[50%] bg-cream-texture noise-overlay relative">
        <div className="relative z-10 max-w-md mx-auto px-8 py-16 lg:py-24">
          {submitted ? (
            <div className="text-center fade-section visible">
              <p className="font-display italic text-ink" style={{ fontSize: 32 }}>
                We can't wait to celebrate with you
              </p>
              <p className="text-gold text-xl mt-4">✦</p>
            </div>
          ) : (
            <div className="stagger-children visible">
              <h3 className="font-heading text-warm-brown text-2xl tracking-[0.15em] text-center mb-2">RSVP</h3>
              <p className="font-body font-light text-ink text-[13px] text-center mb-10">
                Kindly respond by April 1, 2025
              </p>

              {/* Attendance */}
              <div className="mb-8">
                <p className="font-heading text-ink text-[12px] tracking-[0.15em] text-center mb-4">
                  WILL YOU BE ATTENDING?
                </p>
                <div className="flex gap-3">
                  <button
                    onClick={() => setAttending('yes')}
                    className={`flex-1 py-3 font-heading text-[11px] tracking-[0.15em] border-2 transition-colors ${
                      attending === 'yes'
                        ? 'bg-sage text-cream border-sage'
                        : 'border-parchment text-ink hover:border-sage'
                    }`}
                  >
                    JOYFULLY ACCEPTS
                  </button>
                  <button
                    onClick={() => { setAttending('no'); setBringingGuest(null); }}
                    className={`flex-1 py-3 font-heading text-[11px] tracking-[0.15em] border-2 transition-colors ${
                      attending === 'no'
                        ? 'bg-sage text-cream border-sage'
                        : 'border-parchment text-ink hover:border-sage'
                    }`}
                  >
                    REGRETFULLY DECLINES
                  </button>
                </div>
              </div>

              {/* Contact fields - always shown */}
              {attending && (
                <>
                  <div className="space-y-6 mb-8">
                    <div>
                      <label className="wedding-input-label">FULL NAME</label>
                      <input
                        className="wedding-input"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="wedding-input-label">PHONE NUMBER</label>
                      <input
                        className="wedding-input"
                        placeholder="Your phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="wedding-input-label">EMAIL ADDRESS</label>
                      <input
                        className="wedding-input"
                        type="email"
                        placeholder="To receive a confirmation"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="wedding-input-label">MESSAGE FOR THE COUPLE</label>
                      <textarea
                        className="wedding-input resize-none"
                        rows={4}
                        placeholder="Your wishes..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>
                  </div>

                  {/* Guest section - only if attending */}
                  {attending === 'yes' && (
                    <div className="mb-8" style={{ transition: 'max-height 0.4s ease, opacity 0.4s ease' }}>
                      <p className="font-heading text-ink text-[12px] tracking-[0.15em] text-center mb-4">
                        WILL YOU BE BRINGING A GUEST?
                      </p>
                      <div className="flex gap-3 mb-6">
                        <button
                          onClick={() => setBringingGuest('yes')}
                          className={`flex-1 py-3 font-heading text-[11px] tracking-[0.15em] border-2 transition-colors ${
                            bringingGuest === 'yes'
                              ? 'bg-sage text-cream border-sage'
                              : 'border-parchment text-ink hover:border-sage'
                          }`}
                        >
                          YES
                        </button>
                        <button
                          onClick={() => { setBringingGuest('no'); setGuestCount(0); setGuestNames([]); }}
                          className={`flex-1 py-3 font-heading text-[11px] tracking-[0.15em] border-2 transition-colors ${
                            bringingGuest === 'no'
                              ? 'bg-sage text-cream border-sage'
                              : 'border-parchment text-ink hover:border-sage'
                          }`}
                        >
                          NO
                        </button>
                      </div>

                      {bringingGuest === 'yes' && (
                        <div className="space-y-4">
                          <div>
                            <label className="wedding-input-label">NUMBER OF GUESTS</label>
                            <select
                              className="wedding-input"
                              value={guestCount}
                              onChange={(e) => handleGuestCountChange(Number(e.target.value))}
                            >
                              {[1, 2, 3, 4, 5].map((n) => (
                                <option key={n} value={n}>{n}</option>
                              ))}
                            </select>
                          </div>
                          {guestNames.map((name, i) => (
                            <div key={i}>
                              <label className="wedding-input-label">GUEST {i + 1} NAME</label>
                              <input
                                className="wedding-input"
                                placeholder={`Guest ${i + 1}`}
                                value={name}
                                onChange={(e) => {
                                  const updated = [...guestNames];
                                  updated[i] = e.target.value;
                                  setGuestNames(updated);
                                }}
                              />
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                  <button
                    onClick={handleSubmit}
                    className="w-full bg-warm-brown text-cream font-heading text-sm tracking-[0.2em] uppercase py-4 hover:bg-forest transition-colors"
                  >
                    SEND WITH LOVE
                  </button>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default RSVPSection;
