import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Presentation from '../../components/Presentation';
import About from '../../components/About';
import Services from '../../components/Services';
import Contact from '../../components/Contact';
import { useAuth } from '../../context/authContext';
import { getDocument } from '../../create.collections';

function HomepageUSer() {
  const { loading } = useAuth();
  const params = useParams();
  const [data, setData] = useState([]);
  const {
    name,
    description,
    facebook,
    numberContact,
    github,
    introduction,
    experience,
    proyects,
    jobs,
    desing,
    front,
    back,
    email,
    ubication,
    image,
  } = data;

  if (loading) return <h1>Cargando</h1>;

  useEffect(() => {
    getDocument('informationUser', params.idUser).then((element) => {
      setData(element);
    });
  }, []);

  return (
    <div style={{ heigth: '100vh' }}>
      <Presentation
        name={name}
        description={description}
        facebook={facebook}
        numberContact={numberContact}
        github={github}
        image={image}
      />
      <About
        introduction={introduction}
        experience={experience}
        proyects={proyects}
        jobs={jobs}
        image={image}
      />
      <Services
        desing={desing}
        front={front}
        back={back}
      />
      <Contact
        email={email}
        ubication={ubication}
        facebook={facebook}
        numberContact={numberContact}
      />
    </div>
  );
}

export default HomepageUSer;
