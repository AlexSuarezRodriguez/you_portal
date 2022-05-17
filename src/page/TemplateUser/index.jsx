import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Presentation from '../../components/Presentation';
import About from '../../components/About';
import Services from '../../components/Services';
import Contact from '../../components/Contact';
import { useAuth } from '../../context/authContext';
import { getCollection } from '../../create.collections';

function HomepageUSer() {
  // eslint-disable-next-line no-unused-vars
  const { user, loading } = useAuth();
  // eslint-disable-next-line no-unused-vars
  const params = useParams();

  if (loading) return <h1>Cargando</h1>;
  const [data, setData] = useState([]);
  console.log(data);
  useEffect(() => {
    getCollection('informationUser').then((element) => {
      setData(element);
    });
  }, []);
  return (
    <div style={{ heigth: '100vh' }}>
      <Presentation />
      <About />
      <Services />
      <Contact />
      {/* {user && (
        <>
          {
          data.map((element) => <p key={element.id}>{element.name}</p>)
        }
        </>
      )} */}
    </div>

  );
}

export default HomepageUSer;
