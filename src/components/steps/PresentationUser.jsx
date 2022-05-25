import { useAuth } from '../../context/authContext';
import { useStepperContext } from '../../context/StepperContext';
import { createUrlImage } from '../../create.collections';

export default function Account() {
  const { userData, setUserData } = useStepperContext();
  const { user } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  const handleChangeImage = (e) => {
    const localFile = e.target.files[0];
    createUrlImage(localFile, user.uid).then((element) => {
      setUserData({ ...userData, image: element });
    });
  };
  return (
    <div className="flex flex-col ">
      <div className="mx-2 w-full flex-1">
        <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
          Username
        </div>
        <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
          <input
            onChange={handleChange}
            value={userData.name || ''}
            name="name"
            id="name"
            placeholder="Nombre Completo"
            className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
          />
        </div>
      </div>
      <div className="mx-2 w-full flex-1">
        <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
          Descripcion
        </div>
        <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
          <textarea
            onChange={handleChange}
            value={userData.description || ''}
            name="description"
            placeholder="como te describes"
            type="text"
            id="description"
            maxLength="250"
            className="w-full h-24 appearance-none p-1 px-2 text-gray-800 outline-none flex  wrap"
          />
        </div>
      </div>
      <div className="mx-2 w-full flex-1">
        <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
          imagen
        </div>
        <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
          <input
            type="file"
            name="avatar"
            id="file"
            accept="image/*"
            onChange={handleChangeImage}
            value={userData.avatar || ''}
            className="w-full h-8 appearance-none p-1 px-2 text-gray-800 outline-none flex  wrap"
          />
        </div>
      </div>
    </div>
  );
}
