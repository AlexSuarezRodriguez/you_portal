/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { useStepperContext } from '../../context/StepperContext';

// eslint-disable-next-line react/prop-types
function FormSchool({ onHandleSubmit }) {
  const [school, setSchool] = useState({});

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setSchool({ ...school, [name]: value });
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    onHandleSubmit(school);
  };

  return (
    <form onSubmit={handelSubmit} className="flex flex-col ">
      <div className="mx-2 w-full flex-1">
        <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
          institucion
        </div>
        <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
          <input
            onChange={handleChange}
            name="institute"
            placeholder="Nombre Completo"
            className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
          />
        </div>
      </div>
      <div className="mx-2 w-full flex-1">
        <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
          ¿ cuentame sobre  tus logros ?
        </div>
        <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
          <textarea
            onChange={handleChange}
            name="achievements"
            placeholder="como te describes"
            type="text"
            maxLength="250"
            className="w-full h-24 appearance-none p-1 px-2 text-gray-800 outline-none flex  wrap"
          />
        </div>
      </div>
      <button type="submit">agregar</button>
    </form>

  );
}

export default function Account() {
  const { userData, setUserData } = useStepperContext();
  const [schools, setSchools] = useState([]);

  const handleSubmit = (school) => {
    const data = [...schools, school];
    console.log(data);
    setSchools(data);
  };

  useEffect(() => {
    setUserData({ ...userData, formation: [schools] });
  }, [schools]);
  return (
    <div>
      {/* Cada vez que le den click al boton agregar metes elc omponente */}
      <FormSchool onHandleSubmit={handleSubmit} userData={userData} />

      {/* sera que requiere un boton */}
      {/* aqui no va el boton */}
    </div>
  );
}
