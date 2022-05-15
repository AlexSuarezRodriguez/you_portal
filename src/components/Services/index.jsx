import React from 'react';
import { VscPreview, VscServer, VscCode } from 'react-icons/vsc';

import {
  ServiceContainer,
  ServiceWrapper,
  ServiceTitle,
  AboutAbility,
  AboutDetails,
  IconCard,
} from './Services.elements';

function Services() {
  return (
    <ServiceContainer id="about">
      <ServiceWrapper>
        <ServiceTitle>
          <p style={{ fontSize: '3rem' }}>Servicios</p>
        </ServiceTitle>
        <AboutAbility>
          <AboutDetails>
            <IconCard>
              <VscPreview />
            </IconCard>
            <p>
              {' '}
              UI/UX
              <br />
              Desing
            </p>
            <br />
            <span>
              mediante logica de programacion y diferentes tecnologias he participado en
              proyectos los cuales han gustado a los usuarios finales ya que es f acil de manejar
              y sencillo de entender
            </span>
          </AboutDetails>
          <AboutDetails>
            <IconCard>
              <VscCode />
            </IconCard>
            <p>
              {' '}
              Front-end
              <br />
              Developer
            </p>
            <br />
            <span>
              he participado en proyectos en los cuales he implementado React, Redux, tailwind y
              como lenguaje de programacion javascript
            </span>
          </AboutDetails>
          <AboutDetails>
            <IconCard>
              <VscServer />
            </IconCard>
            <p>
              {' '}
              Back-end
              <br />
              Developer
            </p>
            <br />
            <span>
              he aplciado tecnoplogias como node.js, express, mongoose y
              como base de datos he hecho uso de MongDB
            </span>
          </AboutDetails>
        </AboutAbility>
      </ServiceWrapper>
    </ServiceContainer>
  );
}

export default Services;
