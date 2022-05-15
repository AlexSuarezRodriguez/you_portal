import React from 'react';

import Presentation from '../../components/Presentation';
import About from '../../components/About';
import Services from '../../components/Services';
import Contact from '../../components/Contact';
import { useAuth } from '../../context/authContext';

function Homepage() {
  const { user, logOut, loading } = useAuth();
  const handleLogout = async () => {
    await logOut();
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
            {user.email}
          </h1>
          <button
            type="button"
            onClick={handleLogout}
          >
            Cerrar Sesion
          </button>
        </>
      )}
    </div>

  );
}

export default Homepage;
