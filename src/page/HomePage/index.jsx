import React from 'react';
import Presentation from '../../components/Presentation';
import About from '../../components/About';

function Homepage() {
  return (
    <div style={{ heigth: '100vh' }}>
      <Presentation />
      <About />
    </div>

  );
}

export default Homepage;
