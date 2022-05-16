import { useStepperContext } from '../../context/StepperContext';

export default function Details() {
  const { userData, setUserData } = useStepperContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  return (
    <div className="flex flex-col ">
      <div className="mx-2 w-full flex-1">
        <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
          Descripcion
        </div>
        <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
          <textarea
            onChange={handleChange}
            value={userData.introduction || ''}
            name="introduction"
            placeholder="¿Quien eres?"
            type="text"
            maxLength="250"
            className="w-full h-24 appearance-none p-1 px-2 text-gray-800 outline-none flex  wrap"
          />
        </div>
      </div>
      <div className="mx-2 w-full flex-1">
        <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
          Años de experiencia
        </div>
        <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
          <input
            onChange={handleChange}
            value={userData.experience || ''}
            name="experience"
            placeholder="¿Años de experiencia?"
            type="number"
            className="w-full h-6 appearance-none p-1 px-2 text-gray-800 outline-none flex  wrap"
          />
        </div>
      </div>
      <div className="mx-2 w-full flex-1">
        <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
          Proyectos realizados
        </div>
        <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
          <input
            onChange={handleChange}
            value={userData.proyects || ''}
            name="proyects"
            placeholder="Cantidad de proyectos realizados o participado"
            type="number"
            className="w-full h-6 appearance-none p-1 px-2 text-gray-800 outline-none flex  wrap"
          />
        </div>
      </div>
      <div className="mx-2 w-full flex-1">
        <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
          ¿ En cuantas compañias has trabajado ?
        </div>
        <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
          <input
            onChange={handleChange}
            value={userData.jobs || ''}
            name="jobs"
            placeholder="cantidad de empresas donde has participado"
            type="number"
            className="w-full h-6 appearance-none p-1 px-2 text-gray-800 outline-none flex  wrap"
          />
        </div>
      </div>
    </div>
  );
}
