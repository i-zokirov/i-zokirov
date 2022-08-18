import React from 'react';
import HomeHero from '../components/HomeHero';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import FeaturedProjects from '../components/FeaturedProjects';
import OtherProjects from '../components/OtherProjects';
const HomePage = () => {
  return (
    <>
      <HomeHero />
      <AboutSection />
      <ServicesSection />
      <FeaturedProjects />
      <OtherProjects />
    </>
  );
};

export default HomePage;
