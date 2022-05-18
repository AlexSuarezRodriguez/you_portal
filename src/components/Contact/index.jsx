import React from 'react';
import PropTypes from 'prop-types';
import { HiOutlineMail, HiLocationMarker } from 'react-icons/hi';
import { FaFacebook, FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';
import {
  ContactContainer,
  ContactWrapper,
  ContactTitle,
  ContactTaget,
  ContactInformation,
  ContactEmail,
  ContactDescription,
  IconCard,
  TextContact,
} from './Contact.elements';

function Contact({ email, ubication, facebook, numberContact }) {
  return (
    <ContactContainer id="about">
      <ContactWrapper>
        <ContactTitle>
          <p style={{ fontSize: '3rem' }}>contacto</p>
        </ContactTitle>
        <ContactTaget>
          <ContactInformation>
            <ContactDescription>
              <IconCard>
                <HiOutlineMail />
              </IconCard>
              <TextContact>
                <p>Email</p>
                <span>{email}</span>
                <p>Enviar un mensaje</p>
              </TextContact>
            </ContactDescription>
            <ContactDescription>
              <IconCard>
                <FaFacebook />
              </IconCard>
              <TextContact>
                <p>Facebook</p>
                <span>{facebook}</span>
                <p>Enviar un mensaje</p>
              </TextContact>
            </ContactDescription>
            <ContactDescription>
              <IconCard>
                <FaWhatsapp />
              </IconCard>
              <TextContact>
                <p>Whatsapp</p>
                <span>{numberContact}</span>
                <p>Enviar un mensaje</p>
              </TextContact>
            </ContactDescription>
            <ContactDescription>
              <IconCard>
                <FaPhoneAlt />
              </IconCard>
              <TextContact>
                <p>llamar</p>
                <span>{numberContact}</span>
              </TextContact>
            </ContactDescription>
            <ContactDescription>
              <IconCard>
                <HiLocationMarker />
              </IconCard>
              <TextContact>
                <p>Ubicacion</p>
                <span>{ubication}</span>
              </TextContact>
            </ContactDescription>
          </ContactInformation>
          <ContactEmail />
        </ContactTaget>
      </ContactWrapper>
    </ContactContainer>
  );
}

export default Contact;

Contact.propTypes = {
  email: PropTypes.string,
  ubication: PropTypes.string,
  facebook: PropTypes.string,
  numberContact: PropTypes.string,
};

Contact.defaultProps = {
  email: '',
  ubication: '',
  facebook: '',
  numberContact: '',
};
