import React from 'react';
import HomeHero from '../components/HomeHero';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import RecentProjects from '../components/RecentProjects';
import Contact from '../components/Contact';
import ModalWindow from '../components/Modal';

const HomePage = () => {
  return (
    <>
      <ModalWindow />
      <HomeHero />
      <AboutSection />
      <ServicesSection />
      <RecentProjects />
      <Contact />
    </>
  );
};

export default HomePage;
