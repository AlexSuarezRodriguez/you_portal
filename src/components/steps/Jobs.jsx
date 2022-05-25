/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { useStepperContext } from '../../context/StepperContext';

// eslint-disable-next-line react/prop-types
function FormJob({ onHandleSubmit }) {
  const [bussines, setBussines] = useState({});

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setBussines({ ...bussines, [name]: value });
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    // eslint-disable-next-line no-alert
    alert('se a agregado una experiencia laboral');
    onHandleSubmit(bussines);
  };

  return (
    <form onSubmit={handelSubmit} className="flex flex-col ">
      <div className="mx-2 w-full flex-1">
        <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
          Empresa
        </div>
        <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
          <input
            onChange={handleChange}
            name="business"
            id="business"
            placeholder="Nombre Completo"
            className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
          />
        </div>
      </div>
      <div className="mx-2 w-full flex-1">
        <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
          ¿ cuentame sobre  tus actividades o funciones realizadas ?
        </div>
        <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
          <textarea
            onChange={handleChange}
            name="descriptionJob"
            id="descriptionJob"
            placeholder="como te describes"
            type="text"
            maxLength="250"
            className="w-full h-24 appearance-none p-1 px-2 text-gray-800 outline-none flex  wrap"
          />
        </div>
      </div>
      <div className="flex justify-end">
        <button
          data-cy="button-saveAcademic"
          type="submit"
          className="cursor-pointer rounded-lg bg-green-500 py-0.5 px-2 font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-slate-700 hover:text-white"
        >
          GUARDAR
        </button>

      </div>
    </form>

  );
}

export default function Account() {
  const { userData, setUserData } = useStepperContext();
  const [companys, setSchools] = useState([]);
  const [formulario, setFormulario] = useState(1);
  const characters = Array.from({ length: formulario }, (_, i) => (i));
  const handleSubmit = (bussines) => {
    const data = [...companys, bussines];
    setSchools(data);
  };
  useEffect(() => {
    setUserData({ ...userData, experienceJob: companys });
  }, [companys]);
  return (
    <div>
      {
        characters.map(() => (
          <FormJob onHandleSubmit={handleSubmit} />

        ))
      }
      <br />
      <hr />
      <br />
      <div className="flex items-center justify-between">
        <button
          data-cy="button-addEducation"
          type="button"
          onClick={() => setFormulario(formulario + 1)}
          className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-2 px-4 rounded focus:outline focus:shadow-outline"
        >
          Añadir experiencia labaral
        </button>
        {/* <button
          type="button"
          onClick={() => setFormulario(formulario - 1)}
          className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold
          py-2 px-4 rounded focus:outline focus:shadow-outline"
        >
          eliminar Trabajo
        </button> */}
      </div>
    </div>
  );
}
