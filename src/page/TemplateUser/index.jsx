import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Presentation from '../../components/Presentation';
import About from '../../components/About';
import Services from '../../components/Services';
import Contact from '../../components/Contact';
import { useAuth } from '../../context/authContext';
import { getDocument } from '../../create.collections';

function HomepageUSer() {
  // eslint-disable-next-line no-unused-vars
  const { user, loading } = useAuth();
  const params = useParams();
  if (loading) return <h1>Cargando</h1>;
  // eslint-disable-next-line no-unused-vars
  const [data, setData] = useState([]);
  useEffect(() => {
    getDocument('informationUser', params.idUser).then((element) => {
      setData(element);
    });
  }, []);
  return (
    <div style={{ heigth: '100vh' }}>
      <Presentation />
      <About />
      <Services />
      <Contact />
    </div>

  );
}

export default HomepageUSer;
