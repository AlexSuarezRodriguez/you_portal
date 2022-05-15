import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { useAuth } from '../../context/authContext';
import Alert from '../../components/Alert';

function Login() {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const [menError, setMenError] = useState();
  const navigate = useNavigate();
  const { login, loginWithGoogle } = useAuth();

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

  const handleGoogleSignIn = async () => {
    try {
      await loginWithGoogle();
      navigate('/');
    } catch (error) {
      setMenError(error.message);
    }
  };

  // eslint-disable-next-line consistent-return
  const handleResetPassword = () => {
    if (!user.email) return setMenError('Por favor ingrese un email');
    console.log('reset');
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
              <div className="mb-4">
                <label htmlFor="password" className="grid text-gray-700 text-sm font-bold mb-2">
                  password
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="*****"
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </label>
              </div>
              <p className="my-4 text-sm flex justify-between px-3">
                ¿Aun no tienes una cuenta?
                <Link to="/register" className="hover:text-blue-800 font-bold">Registrate</Link>
              </p>
              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-2 px-4 rounded focus:outline focus:shadow-outline"
                >
                  Iniciar Sesion
                </button>
                <a
                  href="#!"
                  className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                  onClick={handleResetPassword}
                >
                  Restablecer contraseña
                </a>
              </div>
            </form>
            <button
              type="button"
              onClick={handleGoogleSignIn}
              className="flex items-center justify-center bg-slate-50 hover:bg-slate-200 text-black shadow-md rounded border-2 border-gray-300 py-3 px-4 w-full"
            >
              <div className="px-6 text-2xl ">
                <FcGoogle />
              </div>
              Iniciar con Google
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
