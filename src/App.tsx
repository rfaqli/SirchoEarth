import React, { useEffect } from 'react';
import { useAtom } from 'jotai';
import { currentPageAtom } from './data';
import { Header, Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { ProductSection } from './components/ProductSection';
import { AboutUsSection } from './components/AboutUsSection';
import { ContactSection } from './components/ContactSection';
import { PertanianBeluntasSection } from './components/PertanianBeluntasSection';
import { NityaShopSection } from './components/NityaShopSection';
import { ProfilSection } from './components/ProfilSection';
import { GameSection } from './components/GameSection';
import { Footer } from './components/Footer';

export default function App() {
  const [currentPage] = useAtom(currentPageAtom);

  // Guarantee backdrop-filter is applied even if CSS minifier strips it
  React.useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      .glass-panel, .glass-card, .glass-nav {
        backdrop-filter: blur(12px) !important;
        -webkit-backdrop-filter: blur(12px) !important;
      }
      .glass-input, .glass-button {
        backdrop-filter: blur(4px) !important;
        -webkit-backdrop-filter: blur(4px) !important;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 flex flex-col">
        {currentPage === 'hero' && <HeroSection />}
        {currentPage === 'product' && <ProductSection />}
        {currentPage === 'about' && <AboutUsSection />}
        {currentPage === 'contact' && <ContactSection />}
        {currentPage === 'pertanian' && <PertanianBeluntasSection />}
        {currentPage === 'shop' && <NityaShopSection />}
        {currentPage === 'profil' && <ProfilSection />}
        {currentPage === 'game' && <GameSection />}
      </main>

      <Footer />
      <Navigation />
    </div>
  );
}

