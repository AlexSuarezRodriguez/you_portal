import { createContext, useContext, useState } from 'react';

const StepperContext = createContext({ userData: '', setUserData: null });

// eslint-disable-next-line react/prop-types
export function UseContextProvider({ children }) {
  const [userData, setUserData] = useState('');

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <StepperContext.Provider value={{ userData, setUserData }}>
      {children}
    </StepperContext.Provider>
  );
}

export function useStepperContext() {
  const { userData, setUserData } = useContext(StepperContext);

  return { userData, setUserData };
}
