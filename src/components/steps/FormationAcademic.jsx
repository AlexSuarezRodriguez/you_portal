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
    // eslint-disable-next-line no-alert
    alert('se a agregado una formacion academica');
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
            id="institute"
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
            id="achievements"
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
  const [schools, setSchools] = useState([]);
  const [formulario, setFormulario] = useState(1);
  const characters = Array.from({ length: formulario }, (_, i) => (i));
  const handleSubmit = (school) => {
    const data = [...schools, school];
    setSchools(data);
  };
  useEffect(() => {
    setUserData({ ...userData, formation: schools });
  }, [schools]);
  return (
    <div>
      {
        characters.map(() => (
          <FormSchool onHandleSubmit={handleSubmit} />

        ))
      }
      <div className="flex items-center justify-between">
        <button
          data-cy="button-addEducation"
          type="button"
          onClick={() => setFormulario(formulario + 1)}
          className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-2 px-4 rounded focus:outline focus:shadow-outline"
        >
          Añadir institucion
        </button>
        {/* <button
          type="button"
          onClick={() => setFormulario(formulario - 1)}
          className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold
          py-2 px-4 rounded focus:outline focus:shadow-outline"
        >
          Borrar campo
        </button> */}
      </div>
    </div>
  );
}

// import React from "react";

// const inputSchema = {
//   label: "skills",
//   Type: "input",
//   placeholder: "dime tu skill",
//   onChange: (e, key) => console.log("string from", key, e.target.value)
// };

// const initialSchema = [inputSchema];

// const Form = () => {
//   const [schema, setSchema] = React.useState(initialSchema);
//   const handleAddMoreSkills = () => setSchema([...schema, inputSchema]);
//   return (
//     <>
//       <form>
//         {schema.map(({ label, Type, placeholder, onChange }, key) => {
//           return (
//             <div {...key}>
//               <h2>{label}</h2>
//               <Type
//                 placeholder={placeholder}
//                 onChange={(e) => onChange(e, key)}
//               />
//             </div>
//           );
//         })}
//       </form>
//       <button onClick={handleAddMoreSkills}>add more skills</button>
//     </>
//   );
// };

// export default Form;
