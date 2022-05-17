import { useStepperContext } from '../../context/StepperContext';

export default function Final() {
  const { userData } = useStepperContext();
  const array = Object.keys(userData);
  return (
    <div className="container md:mt-10">
      <div className="flex flex-col items-center">
        <div className="wrapper">
          {
          array.map((element) => <p key={element}>{(userData[element])}</p>)
        }
        </div>

        <div className="mt-3 text-xl font-semibold uppercase text-green-500">
          Valida la informacion
        </div>
        <div className="text-lg font-semibold text-gray-500">
          verifica tus datos ya que son de vital importancia para nosotros!
        </div>
      </div>
    </div>
  );
}
