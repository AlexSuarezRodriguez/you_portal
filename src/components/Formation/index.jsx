/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import Experience from '../Experience';
import Education from '../Education';
import {
  ContactContainer,
  ContactWrapper,
  ContactTitle,
  ContactTaget,
} from './Formation.elements';

function Formation({ formation, experienceJob }) {
  const [view, setView] = useState('Experience');
  return (
    <ContactContainer id="about">
      <ContactWrapper>
        <ContactTitle>
          <p style={{ fontSize: '3rem' }}>Formación</p>
        </ContactTitle>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <h2
            onClick={() => setView('Experience')}
            style={{ color: view === 'Experience' ? '#fff' : '', cursor: 'pointer' }}
          >
            Experience
          </h2>
          <h3
            onClick={() => setView('Education')}
            style={{ color: view === 'Education' ? '#fff' : '', cursor: 'pointer' }}
          >
            Education
          </h3>
        </div>
        <ContactTaget>
          {view === 'Experience' ? <Experience experienceJob={experienceJob} /> : <Education formation={formation} />}

        </ContactTaget>
      </ContactWrapper>
    </ContactContainer>
  );
}

export default Formation;
