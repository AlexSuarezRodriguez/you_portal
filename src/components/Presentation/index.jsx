import React from 'react';
import PropTypes from 'prop-types';
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

function Presentation({ name, description, facebook, numberContact, github, image }) {
  return (
    <HomeContainer id="home">
      <HomeWrapper>
        <ImageWrapper>
          <SocialInformation>
            <a href={facebook}>
              <FaFacebookMessenger />
            </a>
            <a href={`https://wa.me/${numberContact}`}>
              <FaWhatsapp />
            </a>
            <a href={github}>
              <GoMarkGithub />
            </a>
          </SocialInformation>
          <ImageInformation src={image} alt="" />
        </ImageWrapper>
        <InformationWrapper>
          <p style={{ fontSize: '2.5rem' }}>
            Hola soy
            {' '}
            {name}
          </p>
          <div style={{ fontSize: '1.2rem' }}>
            <p>{description}</p>
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

Presentation.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  facebook: PropTypes.string,
  numberContact: PropTypes.string,
  github: PropTypes.string,
  image: PropTypes.string,
};

Presentation.defaultProps = {
  name: '',
  description: '',
  facebook: '',
  numberContact: '',
  github: '',
  image: PropTypes.string,
};
