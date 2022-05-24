import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { HiOutlineMail, HiLocationMarker } from 'react-icons/hi';
import { FaFacebook, FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';
import {
  ContactContainer,
  ContactWrapper,
  ContactTitle,
  ContactTaget,
  ContactInformation,
  ContactDescription,
  IconCard,
  TextContact,
} from './Contact.elements';

function Contact({ email, ubication, facebook, numberContact }) {
  const [form, setForm] = useState({});
  const handleChange = (event) => {
    const { value, name } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // eslint-disable-next-line no-alert
    alert('dentro de poco seras contactado');
  };
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
          <form onSubmit={handleSubmit} className="bg-[#171c27] shadow-md rounded px-2 py-2 mb-4">
            <div className="flex items-center justify-between">
              <div className="mb-4 pr-1">
                <label htmlFor="email" className="grid text-neutral-50 text-sm font-bold mb-2">
                  Nombre
                  <input
                    type="text"
                    name="nameClient"
                    placeholder="ingrese su nombre"
                    onChange={handleChange}
                    className="bg-[#171c27] shadow appearance-none border rounded w-full py-2 px-3 text-gray-100 leading-tight focus:outline-offset-2 focus:shadow-outline"
                  />
                </label>
              </div>
              <div className="mb-4 pl-1">
                <label htmlFor="email" className="grid text-neutral-50 text-sm font-bold mb-2">
                  Email
                  <input
                    type="email"
                    name="email"
                    placeholder="youremail@company.com"
                    onChange={handleChange}
                    className="bg-[#171c27] shadow appearance-none border rounded w-full py-2 px-3 text-gray-100 leading-tight focus:outline-offset-2 focus:shadow-outline"
                  />
                </label>
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="grid text-neutral-50 text-sm font-bold mb-2">
                titulo
                <input
                  type="text"
                  name="title"
                  id="title"
                  onChange={handleChange}
                  className="bg-[#171c27] shadow appearance-none border rounded w-full py-2 px-3 text-gray-100 leading-tight focus:outline-offset-2 focus:shadow-outline"
                />
              </label>
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="grid text-neutral-50 text-sm font-bold mb-2">
                Mensaje
                <textarea
                  onChange={handleChange}
                  name="desing"
                  id="desing"
                  type="text"
                  maxLength="250"
                  className=" bg-[#171c27] w-full h-40 shadow appearance-none border rounded w-full py-2 px-3 text-gray-100 leading-tight focus:outline-offset-2 focus:shadow-outline "
                />
              </label>
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-2 px-4 rounded focus:outline focus:shadow-outline"
              >
                Enviar mensaje
              </button>
            </div>
          </form>
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
