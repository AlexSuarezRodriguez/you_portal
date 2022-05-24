import { useStepperContext } from '../../context/StepperContext';

export default function Payment() {
  const { userData, setUserData } = useStepperContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  return (
    <div className="flex flex-col ">
      <div className="mx-2 w-full flex-1">
        <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
          UX/UI Desing
        </div>
        <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
          <textarea
            onChange={handleChange}
            value={userData.desing || ''}
            name="desing"
            id="desing"
            placeholder="¿ Que has realizado de ui/ux desing"
            type="text"
            maxLength="250"
            className="w-full h-24 appearance-none p-1 px-2 text-gray-800 outline-none flex  wrap"
          />
        </div>
      </div>
      <div className="mx-2 w-full flex-1">
        <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
          Front-End Developer
        </div>
        <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
          <textarea
            onChange={handleChange}
            value={userData.front || ''}
            name="front"
            id="front"
            placeholder="¿ Que tecnologias has implementado en el front-end"
            type="text"
            maxLength="250"
            className="w-full h-24 appearance-none p-1 px-2 text-gray-800 outline-none flex  wrap"
          />
        </div>
      </div>
      <div className="mx-2 w-full flex-1">
        <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
          Back-End Developer
        </div>
        <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
          <textarea
            onChange={handleChange}
            value={userData.back || ''}
            name="back"
            id="back"
            placeholder="¿ Que tecnologias has implementado en el back-end"
            type="text"
            maxLength="250"
            className="w-full h-24 appearance-none p-1 px-2 text-gray-800 outline-none flex  wrap"
          />
        </div>
      </div>
    </div>
  );
}
