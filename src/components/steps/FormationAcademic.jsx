import { useState } from 'react';
import { useStepperContext } from '../../context/StepperContext';

export default function Account() {
  const arrayFormation = [];
  const [form, setForm] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const { userData, setUserData } = useStepperContext();

  const handleChange = (formData) => {
    setUserData({ ...userData, formation: [formData] });
  };
  const handleChangeForm = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    handleChange({ form });
  };
  function handleSubmit() {
    console.log('entro');
    arrayFormation.push(form);
    console.log('entro el dato es ', arrayFormation);
    setForm([]);
  }
  console.log('esto es form', form);
  console.log('esto es userData', userData);
  console.log('esto es arrayFormation', arrayFormation);
  return (
    <>
      <div>
        <form className="flex flex-col ">
          <div className="mx-2 w-full flex-1">
            <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
              institucion
            </div>
            <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
              <input
                onChange={handleChangeForm}
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
                onChange={handleChangeForm}
                name="achievements"
                placeholder="como te describes"
                type="text"
                maxLength="250"
                className="w-full h-24 appearance-none p-1 px-2 text-gray-800 outline-none flex  wrap"
              />
            </div>
          </div>

          <button type="button" onClick={handleSubmit}>
            Guardar
          </button>
        </form>
      </div>

      <form className="flex flex-col ">
        <div className="mx-2 w-full flex-1">
          <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
            institucion
          </div>
          <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
            <input
              onChange={handleChangeForm}
              name="institute1"
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
              onChange={handleChangeForm}
              name="achievements1"
              placeholder="como te describes"
              type="text"
              maxLength="250"
              className="w-full h-24 appearance-none p-1 px-2 text-gray-800 outline-none flex  wrap"
            />
          </div>
        </div>
      </form>
    </>
  );
}

// const { userData, setSTapper } = useContenxt()
// const [form, setForm] = useState({})
// const [schools, setChools] = useState([])
// setStapper({ ...userData, formacion: [...schools, form]})
