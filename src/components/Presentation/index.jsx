import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookMessenger, FaWhatsapp } from 'react-icons/fa';
import { GoMarkGithub } from 'react-icons/go';
import { AiOutlineSend } from 'react-icons/ai';
import {
  HomeContainer,
  HomeWrapper,
  ImageWrapper,
  InformationWrapper,
  SocialInformation,
  ImageInformation,
  ButtonContact,
} from './Presentation.elements';
import perfil from '../../images/87741454.jpg';

function Presentation() {
  return (
    <HomeContainer id="home">
      <HomeWrapper>
        <ImageWrapper>
          <SocialInformation>
            <a href="https://www.google.com/">
              <FaFacebookMessenger />
            </a>
            <Link to="https://www.google.com/">
              <FaWhatsapp />
            </Link>
            <Link to="https://www.google.com/">
              <GoMarkGithub />
            </Link>
          </SocialInformation>
          <ImageInformation src={perfil} alt="" />
        </ImageWrapper>
        <InformationWrapper>
          <p style={{ fontSize: '3rem' }}>
            Hola mi nombre es Alexander Ruarez R
          </p>
          <div style={{ fontSize: '1.5rem' }}>
            <p>soy un desarrolador Full-stack:</p>
            <p>
              tengo conocimientos en desarrollo de aplicaciones web y movil,
              me apasiona programar
            </p>
          </div>
          <ButtonContact name="button" type="button">
            Contactame
            <AiOutlineSend />
          </ButtonContact>
        </InformationWrapper>
      </HomeWrapper>
    </HomeContainer>
  );
}

export default Presentation;
