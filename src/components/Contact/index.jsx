import React from 'react';

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
} from './Contact.elements';

function Contact() {
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
              <div>
                <p>Email</p>
                <span>alex.suarez@hotmail.com</span>
                <p>Enviar un mensaje</p>
              </div>
            </ContactDescription>
            <ContactDescription>
              <IconCard>
                <FaFacebook />
              </IconCard>
              <div>
                <p>Facebook</p>
                <span>Alex Suarez Rodriguez</span>
                <p>Enviar un mensaje</p>
              </div>
            </ContactDescription>
            <ContactDescription>
              <IconCard>
                <FaWhatsapp />
              </IconCard>
              <div>
                <p>Whatsapp</p>
                <span>+57 3242587573</span>
                <p>Enviar un mensaje</p>
              </div>
            </ContactDescription>
            <ContactDescription>
              <IconCard>
                <FaPhoneAlt />
              </IconCard>
              <div>
                <p>llamar</p>
                <span>+57 3242587573</span>
              </div>
            </ContactDescription>
            <ContactDescription>
              <IconCard>
                <HiLocationMarker />
              </IconCard>
              <div>
                <p>Ubicacion</p>
                <span>+57 3242587573</span>
              </div>
            </ContactDescription>
          </ContactInformation>
          <ContactEmail />
        </ContactTaget>
      </ContactWrapper>
    </ContactContainer>
  );
}

export default Contact;
