'use client';

import FullPageSlider from '../components/FullPageSlider';
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import ProductSection from '../components/sections/ProductSection';
import InfraSection from '../components/sections/InfraSection';
import QualitySection from '../components/sections/QualitySection';
import ContactSection from '../components/sections/ContactSection';

export default function Home() {
  const sections = [
    { id: 'hero', content: (active) => <HeroSection active={active} /> },
    { id: 'about', content: (active) => <AboutSection active={active} /> },
    { id: 'products', content: (active) => <ProductSection active={active} /> },
    { id: 'infrastructure', content: (active) => <InfraSection active={active} /> },
    { id: 'quality', content: (active) => <QualitySection active={active} /> },
    { id: 'contact', content: (active) => <ContactSection active={active} /> },
  ];

  return (
    <main style={{ height: '100vh', overflow: 'hidden' }}>
      <FullPageSlider sections={sections} />
    </main>
  );
}
