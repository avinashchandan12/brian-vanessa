import { useState, useEffect, useCallback } from 'react';
import EnvelopeAnimation from '@/components/EnvelopeAnimation';
import HeroSection from '@/components/HeroSection';
import WelcomeSection from '@/components/WelcomeSection';
import DetailsSection from '@/components/DetailsSection';
import ScheduleSection from '@/components/ScheduleSection';
import HotelsSection from '@/components/HotelsSection';
import GalleryBreak from '@/components/GalleryBreak';
import RSVPSection from '@/components/RSVPSection';
import FAQSection from '@/components/FAQSection';
import FooterSection from '@/components/FooterSection';
import MusicPlayer from '@/components/MusicPlayer';

const Index = () => {
  const [showEnvelope, setShowEnvelope] = useState(true);

  const handleEnvelopeComplete = useCallback(() => {
    setShowEnvelope(false);
  }, []);

  // IntersectionObserver for fade-in sections
  useEffect(() => {
    if (showEnvelope) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15 }
    );

    // Small delay to let DOM render
    const timeout = setTimeout(() => {
      const elements = document.querySelectorAll('.fade-section, .stagger-children');
      elements.forEach((el) => observer.observe(el));
    }, 100);

    return () => {
      clearTimeout(timeout);
      observer.disconnect();
    };
  }, [showEnvelope]);

  return (
    <>
      {showEnvelope && <EnvelopeAnimation onComplete={handleEnvelopeComplete} />}

      <main className={showEnvelope ? 'opacity-0' : 'opacity-100 transition-opacity duration-700'}>
        <HeroSection />
        <WelcomeSection />
        <DetailsSection />
        <ScheduleSection />
        <HotelsSection />
        <GalleryBreak />
        <RSVPSection />
        <FAQSection />
        <FooterSection />
        <MusicPlayer />
      </main>
    </>
  );
};

export default Index;
