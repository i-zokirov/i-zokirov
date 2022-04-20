import React from 'react';
import { Container } from '@chakra-ui/react';
import HomeHero from '../components/HomeHero';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';

const HomePage = () => {
  return (
    <>
      <HomeHero />
      <AboutSection />
      <ServicesSection />
    </>
  );
};

export default HomePage;
