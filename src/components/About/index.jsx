import React from 'react';

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
import perfil from '../../images/87741454.jpg';

function About() {
  return (
    <AboutContainer id="about">
      <AboutWrapper>
        <AboutTitle>
          <p style={{ fontSize: '3rem' }}>Quien soy</p>
          <p style={{ fontSize: '1.5rem' }}> mi introduccion</p>
        </AboutTitle>
        <AboutDescription>
          <AboutImage src={perfil} alt="" />
          <AboutInformation>
            <p style={{ display: 'flex', alignItems: 'center', color: '#ebc08b', fontSize: '1.5rem' }}>
              mis habilidades tecnicas y blandas me han permitido crecer profesionalmente,
              como persona soy alguien que busca estar en constante aprendizaje,
              por lo cual me considero una persona capaza de afrontar nuevos retos
            </p>
            <AboutAbility>
              <AboutDetails>
                <p>01</p>
                <span>años de experiencia</span>
              </AboutDetails>
              <AboutDetails>
                <p>02</p>
                <span>proyectos</span>
              </AboutDetails>
              <AboutDetails>
                <p>0</p>
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
