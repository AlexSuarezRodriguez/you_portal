/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { FcGoogle } from 'react-icons/fc';
import { useAuth } from '../../context/authContext';

function Login() {
  const navigate = useNavigate();
  const { loginWithGoogle, user, login } = useAuth();
  const handleGoogleSignIn = async () => {
    try {
      await loginWithGoogle();
    } catch (error) {
      alert('error.message');
    }
  };
  useEffect(() => {
    if (user && user.uid) {
      navigate(`/youPortal/${user.uid}`);
    }
  }, [user]);

  return (
    <div className="bg-[#171c27] h-screen text-black flex">
      <div className="w-full max-w-xl m-auto">
        <div className="border-4 border-sky-500 rounded">
          <div className="my-6 mx-6 rounded-xl">
            <Formik
              initialValues={{
                email: '',
                password: '',
              }}
              validate={(valores) => {
                // eslint-disable-next-line prefer-const
                let errors = {};
                // validacion email
                if (!valores.email) {
                  errors.email = 'por favor ingrese un email';
                } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.email)) {
                  errors.email = 'veridique el correo ingresado';
                }
                // validacion password
                if (!valores.password) {
                  errors.password = 'por favor ingrese su contraseña';
                } else if (valores.password.length < 8) {
                  errors.password = 'la contraseña debe contener mas de 8 caracteres';
                }
                return errors;
              }}
              onSubmit={async (values) => {
                await login(values.email, values.password);
              }}
            >
              {({ errors }) => (

                <Form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                  <div className="mb-4">
                    <label htmlFor="email" className="grid text-gray-700 text-sm font-bold mb-2">
                      Email
                      <Field
                        type="email"
                        name="email"
                        id="email"
                        placeholder="youremail@company.com"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      />
                    </label>
                    <ErrorMessage name="password" component={() => (<div className="text-red-700">{errors.email}</div>)} />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="password" className="grid text-gray-700 text-sm font-bold mb-2">
                      password
                      <Field
                        type="password"
                        name="password"
                        id="password"
                        placeholder="*****"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      />
                    </label>
                    <ErrorMessage name="password" component={() => (<div className="text-red-700">{errors.password}</div>)} />

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
                    <Link
                      to="/forgorPassword"
                      className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                    >
                      Restablecer contraseña
                    </Link>
                  </div>
                </Form>
              )}
            </Formik>
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
