import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

import HomePage from './pages/HomePage';
import Contact from './pages/Contact';
import SingleProject from './pages/SingleProject';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/contact" exact element={<Contact />} />
        <Route path="/projects/:projectId" exact element={<SingleProject />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
