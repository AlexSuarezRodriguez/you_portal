/*eslint-disable*/
import { useStepperContext } from '../../context/StepperContext';
import {createDocument} from '../../create.collections.js';
export default function StepperControl({ handleClick, currentStep}) {
  const { userData } = useStepperContext();
  function handleSubmitInformation(){
    createDocument('informationUser', userData);
  }
  return (
    <div className="container mt-4 mb-8 flex justify-around">
      <button
        onClick={() => handleClick()}
        className={`cursor-pointer rounded-xl border-2 border-slate-300 bg-white py-2 px-4 font-semibold uppercase text-slate-400 transition duration-200 ease-in-out hover:bg-slate-700 hover:text-white  ${
          currentStep === 1 ? ' cursor-not-allowed opacity-50 ' : ''
        }`}
      >
        Back
      </button>

      <button
        onClick={handleSubmitInformation}
        className="cursor-pointer rounded-lg bg-green-500 py-2 px-4 font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-slate-700 hover:text-white"
      >
        Enviar
      </button>
    </div>
  );
}