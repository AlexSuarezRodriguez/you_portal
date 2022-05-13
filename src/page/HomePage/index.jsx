import React from 'react';
import Presentation from '../../components/Presentation';
import About from '../../components/About';
import Serices from '../../components/Services';

function Homepage() {
  return (
    <div style={{ heigth: '100vh' }}>
      <Presentation />
      <About />
      <Serices />
    </div>

  );
}

export default Homepage;
