import React from 'react';
import PropTypes from 'prop-types';
import { VscPreview, VscServer, VscCode } from 'react-icons/vsc';
import {
  ServiceContainer,
  ServiceWrapper,
  ServiceTitle,
  AboutAbility,
  AboutDetails,
  IconCard,
} from './Services.elements';

function Services({ desing, front, back }) {
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
              {desing}
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
              {front}
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
              {back}
            </span>
          </AboutDetails>
        </AboutAbility>
      </ServiceWrapper>
    </ServiceContainer>
  );
}

export default Services;

Services.propTypes = {
  desing: PropTypes.string,
  front: PropTypes.string,
  back: PropTypes.string,
};

Services.defaultProps = {
  desing: '',
  front: '',
  back: '',
};
