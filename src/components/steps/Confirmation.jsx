import { useStepperContext } from '../../context/StepperContext';

export default function Final() {
  const { userData } = useStepperContext();
  console.log('userData', userData);
  function formation(objerDormation) {
    // const arrayFormation= object.keys()
    return objerDormation.map((element) => (
      <>
        {Object.keys(element).map((infAcadenmic, key) => (
          // eslint-disable-next-line react/jsx-props-no-spreading
          <p {...key}>
            <strong>{infAcadenmic}</strong>
            :
            {' '}
            {(element[infAcadenmic])}
          </p>
        ))}
      </>
    ));
  }
  return (
    <div className="container md:mt-10">
      <div className="flex flex-col">
        <div>
          <div className="flex flex-col items-start">
            {
            Object.keys(userData).map((element) => (element === 'formation'
              ? formation(userData[element])
              : (
                <p key={element}>
                  <strong>{element}</strong>
                  :
                  {' '}
                  {(userData[element])}
                </p>
              )))
          }
          </div>

        </div>
        <hr />
        <br />
        <div clasName="flex items-center">
          <div className="mt-3 text-xl flex items-center font-semibold uppercase text-green-500">
            Valida la informacion
          </div>
        </div>
        <div className="text-lg font-semibold text-gray-500">
          verifica tus datos ya que son de vital importancia para nosotros!
        </div>
      </div>
    </div>
  );
}
