import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

import HomePage from './pages/HomePage';
import Contact from './pages/Contact';
import SingleProject from './pages/SingleProject';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/projects/:projectId" exact component={SingleProject} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
