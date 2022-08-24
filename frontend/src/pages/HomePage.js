import React from 'react';
import HomeHero from '../components/HomeHero';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
// import FeaturedProjects from '../components/FeaturedProjects';
import RecentProjects from '../components/RecentProjects';
import Contact from '../components/Contact';
const HomePage = () => {
  return (
    <>
      <HomeHero />
      <AboutSection />
      <ServicesSection />
      {/* <FeaturedProjects /> */}
      <RecentProjects />
      <Contact />
    </>
  );
};

export default HomePage;
