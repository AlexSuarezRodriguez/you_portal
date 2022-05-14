import React from 'react';
import Presentation from '../../components/Presentation';
import About from '../../components/About';
import Services from '../../components/Services';
import Contact from '../../components/Contact';

function Homepage() {
  return (
    <div style={{ heigth: '100vh' }}>
      <Presentation />
      <About />
      <Services />
      <Contact />
    </div>

  );
}

export default Homepage;
