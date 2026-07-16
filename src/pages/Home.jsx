import Hero from '../components/Hero';
import Intro from '../components/Intro';
import PositionStrip from '../components/PositionStrip';
import ServicesSection from '../components/ServicesSection';
import WorkAccordion from '../components/WorkAccordion';
import ProcessSection from '../components/ProcessSection';
import IndustriesSection from '../components/IndustriesSection';
import TechStackSection from '../components/TechStackSection';
import AboutSection from '../components/AboutSection';
import StatsSection from '../components/StatsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import CTASection from '../components/CTASection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ServicesSection />
      <WorkAccordion />
      <Intro />
      <PositionStrip />
      <ProcessSection />
      <IndustriesSection />
      <TechStackSection />
      <AboutSection />
      <StatsSection />
      <TestimonialsSection />
      <CTASection />
    </main>
  );
}
