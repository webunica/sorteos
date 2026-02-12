import { useState } from 'react';
import './index.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Packages from './components/Packages';
import HowItWorks from './components/HowItWorks';
import Benefits from './components/Benefits';
import Trust from './components/Trust';
import PromoBanners from './components/PromoBanners';
import Testimonials from './components/Testimonials';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import Modal from './components/Modal';

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<{ name: string; price: string } | null>(null);

  const handleBuy = (pkg: { name: string; price: string }) => {
    setSelectedPackage(pkg);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedPackage(null);
  };

  const scrollToSorteos = () => {
    const element = document.getElementById('sorteos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Header onComprarClick={scrollToSorteos} />
      <Hero onVerPaquetesClick={scrollToSorteos} />
      <Packages onBuy={handleBuy} />
      <HowItWorks />
      <Benefits />
      <Trust onCtaClick={scrollToSorteos} />
      <PromoBanners />
      <Testimonials />
      <FinalCTA onVerPaquetesClick={scrollToSorteos} />
      <Footer />

      {selectedPackage && (
        <Modal
          isOpen={modalOpen}
          onClose={handleCloseModal}
          packageName={selectedPackage.name}
          packagePrice={selectedPackage.price}
        />
      )}
    </>
  );
}

export default App;
