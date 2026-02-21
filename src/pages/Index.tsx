import { useEffect } from 'react';
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
  useEffect(() => {
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

    const timeout = setTimeout(() => {
      const elements = document.querySelectorAll('.fade-section, .stagger-children');
      elements.forEach((el) => observer.observe(el));
    }, 100);

    return () => {
      clearTimeout(timeout);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <main>
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
