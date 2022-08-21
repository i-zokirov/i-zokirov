import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Footer from './components/Footer';
import Navbar from './components/Navbar';

import HomePage from './pages/HomePage';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
