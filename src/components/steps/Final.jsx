import { useNavigate } from 'react-router-dom';
import { useStepperContext } from '../../context/StepperContext';
import { setDocument } from '../../create.collections';
import { useAuth } from '../../context/authContext';

// eslint-disable-next-line react/prop-types
export default function StepperControl({ handleClick, currentStep }) {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { userData } = useStepperContext();
  const newData = { ...userData, uid: user.uid };
  function handleSubmitInformation() {
    setDocument('informationUser', newData);
    navigate(`/youPortal/${user.uid}`);
  }
  return (
    <div className="container mt-4 mb-8 flex justify-around">
      <button
        type="button"
        onClick={() => handleClick()}
        className={`cursor-pointer rounded-xl border-2 border-slate-300 bg-white py-2 px-4 font-semibold uppercase text-slate-400 transition duration-200 ease-in-out hover:bg-slate-700 hover:text-white  ${
          currentStep === 1 ? ' cursor-not-allowed opacity-50 ' : ''
        }`}
      >
        Back
      </button>

      <button
        type="button"
        onClick={handleSubmitInformation}
        className="cursor-pointer rounded-lg bg-green-500 py-2 px-4 font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-slate-700 hover:text-white"
      >
        Enviar
      </button>
    </div>
  );
}
