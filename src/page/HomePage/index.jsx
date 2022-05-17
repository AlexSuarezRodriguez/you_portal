import React from 'react';
import { useNavigate } from 'react-router-dom';
import Presentation from '../../components/Presentation';
import About from '../../components/About';
import Services from '../../components/Services';
import Contact from '../../components/Contact';
import { useAuth } from '../../context/authContext';

function Homepage() {
  const navigate = useNavigate();
  const { user, loading } = useAuth();
  const handleNavigate = () => {
    navigate(`/youPortal/${user.uid}`);
  };
  if (loading) return <h1>Cargando</h1>;
  return (
    <div style={{ heigth: '100vh' }}>
      <Presentation />
      <About />
      <Services />
      <Contact />
      {user && (
        <>
          <h1>
            welcome
            {' '}
            {user.uid}
          </h1>
          <button
            type="button"
            onClick={handleNavigate}
          >
            Cerrar Sesion
          </button>
        </>
      )}
    </div>

  );
}

export default Homepage;
