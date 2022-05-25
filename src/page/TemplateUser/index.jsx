import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Presentation from '../../components/Presentation';
import About from '../../components/About';
import Services from '../../components/Services';
import Contact from '../../components/Contact';
import Formation from '../../components/Formation';
import { getDocument } from '../../create.collections';

function HomepageUSer() {
  const params = useParams();
  const [data, setData] = useState({});
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
    formation,
    experienceJob,
  } = data;

  const setUSerData = async () => {
    try {
      const userData = await getDocument('informationUser', params.idUser);
      setData(userData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setUSerData();
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
      <Formation
        formation={formation}
        experienceJob={experienceJob}
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
