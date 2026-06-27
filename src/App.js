import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import LandscapeImage from './components/LandscapeImage';
import Specifications from './components/Specifications';
import Testimonial from './components/Testimonial';
import HowTo from './components/HowTo';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Benefits />
      <LandscapeImage />
      <Specifications />
      <Testimonial />
      <HowTo />
      <LandscapeImage variant="green" />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
