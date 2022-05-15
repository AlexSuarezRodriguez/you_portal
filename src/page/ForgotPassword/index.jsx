import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/authContext';
import Alert from '../../components/Alert';

function Login() {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const [menError, setMenError] = useState();
  const navigate = useNavigate();
  const { login, resetPassword } = useAuth();

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMenError('');
    try {
      await login(user.email, user.password);
      navigate('/');
    } catch (error) {
      setMenError(error.message);
    }
  };

  // eslint-disable-next-line consistent-return
  const handleResetPassword = async () => {
    if (!user.email) return setMenError('Por favor ingrese un email');
    try {
      await resetPassword(user.email);
      setMenError('revisa tu bandeja de entrada, al correo ingresado se ha enviado un link para recuperar la contraseña');
    } catch (error) {
      setMenError(error.message);
    }
  };

  return (
    <div className="bg-[#171c27] h-screen text-black flex">
      <div className="w-full max-w-xl m-auto">
        {menError && <Alert message={menError} />}
        <div className="border-4 border-sky-500 rounded">
          <div className="my-6 mx-6 rounded-xl">
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <div className="mb-4">
                <label htmlFor="email" className="grid text-gray-700 text-sm font-bold mb-2">
                  Email
                  <input
                    type="email"
                    name="email"
                    placeholder="youremail@company.com"
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </label>
              </div>
              <a
                href="#!"
                className="flex justify-center bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-2 px-4 rounded focus:outline focus:shadow-outline"
                onClick={handleResetPassword}
              >
                Restablecer contraseña
              </a>

              <p className="my-4 text-sm flex justify-center px-3">
                ¿Aun no tienes una cuenta?
                <Link to="/register" className="underline hover:text-blue-800 font-bold">Registrate</Link>
              </p>
              <p className="my-4 text-sm flex justify-center px-3">
                ¿Ya tienes una cuenta?
                <Link to="/login" className="underline hover:text-blue-800 font-bold">Iniciar Sesion</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
