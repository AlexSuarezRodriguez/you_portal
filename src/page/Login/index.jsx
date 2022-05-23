import React from 'react';
import { Formik } from 'formik';

function Login() {
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
              onSubmit={(values, { resetForm }) => {
                resetForm();
                console.log(values);
                console.log('formualrio enviado');
              }}
            >
              {({ values, handleSubmit, handleChange, handleBlur, errors, touched }) => (

                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="email" className="grid text-gray-700 text-sm font-bold mb-2">
                      Email
                      <input
                        type="email"
                        name="email"
                        id="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        placeholder="youremail@company.com"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      />
                    </label>
                    {touched.email && errors.email && <div className="text-red-700">{errors.email}</div>}
                  </div>
                  <div className="mb-4">
                    <label htmlFor="password" className="grid text-gray-700 text-sm font-bold mb-2">
                      password
                      <input
                        type="password"
                        name="password"
                        id="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                        placeholder="*****"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      />
                    </label>
                    {touched.password && errors.password && <div className="text-red-700">{errors.password}</div>}
                  </div>
                  <p className="my-4 text-sm flex justify-between px-3">
                    ¿Aun no tienes una cuenta?
                  </p>
                  <div className="flex items-center justify-between">
                    <button
                      type="submit"
                      className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-2 px-4 rounded focus:outline focus:shadow-outline"
                    >
                      Iniciar Sesion
                    </button>
                  </div>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
