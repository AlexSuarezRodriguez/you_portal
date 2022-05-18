import React from 'react';
import PropTypes from 'prop-types';
import { AiOutlineSend } from 'react-icons/ai';
import {
  AboutContainer,
  AboutWrapper,
  AboutTitle,
  AboutDescription,
  AboutImage,
  AboutInformation,
  AboutAbility,
  ButtonContact,
  AboutDetails,
} from './About.elements';

function About({ introduction, experience, proyects, jobs, image }) {
  return (
    <AboutContainer id="about">
      <AboutWrapper>
        <AboutTitle>
          <p style={{ fontSize: '3rem' }}>Quien soy</p>
          <p style={{ fontSize: '1.5rem' }}> mi introduccion</p>
        </AboutTitle>
        <AboutDescription>
          <AboutImage src={image} alt="" />
          <AboutInformation>
            <p style={{ display: 'flex', alignItems: 'center', color: '#ebc08b', fontSize: '1.3rem' }}>
              {introduction}
            </p>
            <AboutAbility>
              <AboutDetails>
                <p>{experience}</p>
                <span>años de experiencia</span>
              </AboutDetails>
              <AboutDetails>
                <p>{proyects}</p>
                <span>proyectos</span>
              </AboutDetails>
              <AboutDetails>
                <p>{jobs}</p>
                <span>compañias </span>
              </AboutDetails>
            </AboutAbility>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <ButtonContact name="button" type="button">
                Contactame
                <AiOutlineSend />
              </ButtonContact>
            </div>
          </AboutInformation>
        </AboutDescription>
      </AboutWrapper>
    </AboutContainer>
  );
}
export default About;

About.propTypes = {
  introduction: PropTypes.string,
  experience: PropTypes.string,
  proyects: PropTypes.string,
  jobs: PropTypes.string,
  image: PropTypes.string,
};

About.defaultProps = {
  introduction: '',
  experience: '',
  proyects: '',
  jobs: '',
  image: '',
};
