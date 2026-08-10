import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import AdvantagesSection from './sections/AdvantagesSection';
import ServicesSection from './sections/ServicesSection';
import QualificationsSection from './sections/QualificationsSection';
import ProjectsSection from './sections/ProjectsSection';
import ServiceSection from './sections/ServiceSection';
import ContactSection from './sections/ContactSection';
import { Toaster } from '@/components/ui/sonner';

export default function HomePage() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <AdvantagesSection />
        <ServicesSection />
        <QualificationsSection />
        <ProjectsSection />
        <ServiceSection />
        <ContactSection />
      </main>
      <Footer />

      {/* 回到顶部按钮 */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-primary text-white shadow-lg shadow-primary/30 flex items-center justify-center hover:bg-primary/90 transition-all duration-300 ${
          showTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        aria-label="回到顶部"
      >
        <ArrowUp className="w-5 h-5" />
      </button>

      <Toaster position="top-right" />
    </div>
  );
}
