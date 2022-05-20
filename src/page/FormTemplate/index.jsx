/* eslint-disable no-plusplus */
/* eslint-disable no-unused-expressions */
import { useState } from 'react';
import Stepper from '../../components/Stepper';
import StepperControl from '../../components/StepperControl';
import { UseContextProvider } from '../../context/StepperContext';

import PresentationUser from '../../components/steps/PresentationUser';
import About from '../../components/steps/About';
import Service from '../../components/steps/Service';
import Confirmation from '../../components/steps/Confirmation';
import Contact from '../../components/steps/Contact';
import Final from '../../components/steps/Final';
import FormationAcademic from '../../components/steps/FormationAcademic';

function App() {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    'Presentacion',
    'Quien eres',
    'Servicios',
    'Formacion Academica',
    'Contacto',
    'Complete',
    'final',
  ];

  // eslint-disable-next-line consistent-return
  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <PresentationUser />;
      case 2:
        return <About />;
      case 3:
        return <Service />;
      case 4:
        return <FormationAcademic />;
      case 5:
        return <Contact />;
      case 6:
        return <Confirmation />;
      case 7:
        return <Final />;
      default:
    }
  };

  const handleClick = (direction) => {
    let newStep = currentStep;

    direction === 'next' ? newStep++ : newStep--;
    // check if steps are within bounds
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };

  return (
    <div className="bg-[#171c27] h-auto text-black flex">
      <div className="mx-auto rounded-2xl bg-[#f4f6f7] pb-2 shadow-xl md:w-1/2 h-auto">
        {/* Stepper */}
        <div className="horizontal container mt-5 ">
          <Stepper steps={steps} currentStep={currentStep} />

          <div className="my-10 p-10 ">
            <UseContextProvider>{displayStep(currentStep)}</UseContextProvider>
          </div>
        </div>

        {currentStep !== steps.length && (
          <StepperControl
            handleClick={handleClick}
            currentStep={currentStep}
            steps={steps}
          />
        )}
      </div>
    </div>
  );
}

export default App;
