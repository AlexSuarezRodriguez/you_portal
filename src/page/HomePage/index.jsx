import React from 'react';
import Presentation from '../../components/Presentation';
import About from '../../components/About';
import Services from '../../components/Services';
import Contact from '../../components/Contact';
import Formation from '../../components/Formation';
import data from './db.json';
import imageDefault from './images/87741454.jpg';
import Loading from '../../components/Loading';

function Homepage() {
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
    formation,
    experienceJob,
  } = data;
  return (
    <div style={{ heigth: '100vh' }}>
      {!data
        ? <Loading />
        : (
          <>
            <Presentation
              name={name}
              description={description}
              facebook={facebook}
              numberContact={numberContact}
              github={github}
              image={imageDefault}
            />
            <About
              introduction={introduction}
              experience={experience}
              proyects={proyects}
              jobs={jobs}
              image={imageDefault}
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
          </>
        )}
    </div>
  );
}

export default Homepage;
