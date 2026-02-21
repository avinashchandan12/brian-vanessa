import { useState } from 'react';

const RSVPSection = () => {
  const [attending, setAttending] = useState<'yes' | 'no' | null>(null);
  const [guestCount, setGuestCount] = useState(0);
  const [guestNames, setGuestNames] = useState<string[]>([]);
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
        <div className="absolute inset-0 bg-forest/60" />
        <h2
          className="relative z-10 font-display italic font-light text-cream text-center px-8 drop-shadow-lg"
          style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}
        >
          Will you<br />join us?
        </h2>
      </div>

      {/* Right - form */}
      <div className="w-full lg:w-[50%] relative" style={{ backgroundColor: 'hsl(37, 33%, 92%)' }}>
        <div className="absolute inset-0 opacity-15" style={{ backgroundImage: `url('/images/bg-cream.jpeg')`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="relative z-10 max-w-md mx-auto px-8 py-16 lg:py-24">
          {submitted ? (
            <div className="text-center fade-section visible">
              <p className="font-display italic text-forest" style={{ fontSize: 32 }}>
                We can't wait to celebrate with you
              </p>
              <p className="text-gold text-xl mt-4">✦</p>
            </div>
          ) : (
            <div className="stagger-children visible">
              <h3 className="font-heading text-forest text-2xl tracking-[0.15em] text-center mb-2">RSVP</h3>
              <p className="font-body font-light text-forest/80 text-[13px] text-center mb-4 leading-relaxed max-w-sm mx-auto">
                We would be honored to celebrate with you. Please let us know if you can attend by filling
                out the form below. Your presence would mean the world to us as we begin this new chapter together.
              </p>
              <p className="font-body font-light text-forest/50 text-[12px] text-center mb-4 italic">
                Please submit a separate form for each guest who will be attending.
              </p>
              <p className="font-heading text-gold text-[10px] tracking-[0.2em] text-center mb-10">
                KINDLY RESPOND BY MAY 1, 2026
              </p>

              {/* Attendance */}
              <div className="mb-8">
                <p className="font-heading text-forest text-[12px] tracking-[0.15em] text-center mb-4">
                  WILL YOU BE ATTENDING?
                </p>
                <div className="flex gap-3">
                  <button
                    onClick={() => setAttending('yes')}
                    className={`flex-1 py-3 font-heading text-[11px] tracking-[0.15em] border-2 transition-colors ${
                      attending === 'yes'
                        ? 'bg-sage text-cream border-sage'
                        : 'border-parchment text-forest hover:border-sage'
                    }`}
                  >
                    JOYFULLY ACCEPTS
                  </button>
                  <button
                    onClick={() => { setAttending('no'); setGuestCount(0); setGuestNames([]); }}
                    className={`flex-1 py-3 font-heading text-[11px] tracking-[0.15em] border-2 transition-colors ${
                      attending === 'no'
                        ? 'bg-sage text-cream border-sage'
                        : 'border-parchment text-forest hover:border-sage'
                    }`}
                  >
                    REGRETFULLY DECLINES
                  </button>
                </div>
              </div>

              {/* Contact fields */}
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

                  {/* Additional guests - only if joyfully accepts */}
                  {attending === 'yes' && (
                    <div className="mb-8">
                      <label className="wedding-input-label">ADDITIONAL GUESTS (UP TO 4)</label>
                      <select
                        className="wedding-input mb-6"
                        value={guestCount}
                        onChange={(e) => handleGuestCountChange(Number(e.target.value))}
                      >
                        <option value={0}>No additional guests</option>
                        <option value={1}>1 additional guest</option>
                        <option value={2}>2 additional guests</option>
                        <option value={3}>3 additional guests</option>
                        <option value={4}>4 additional guests</option>
                      </select>

                      {guestCount > 0 && (
                        <div className="space-y-4">
                          {guestNames.map((name, i) => (
                            <div key={i}>
                              <label className="wedding-input-label">GUEST {i + 1} NAME</label>
                              <input
                                className="wedding-input"
                                placeholder={`Guest ${i + 1} full name`}
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
                    SUBMIT RSVP
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
