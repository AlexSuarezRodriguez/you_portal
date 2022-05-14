/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';
import { auth } from '../firebase';

export const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) throw new Error('there is not auth provider');
  return context;
};

export function AuthProvider({ children }) {
  const [user, SetUSer] = useState(null);
  const [loading, setLoading] = useState(true);
  const signUp = (email, password) => createUserWithEmailAndPassword(auth, email, password);
  const login = (email, password) => signInWithEmailAndPassword(auth, email, password);
  const logOut = () => signOut(auth);

  useEffect(() => {
    const unSuscribe = onAuthStateChanged(auth, (currentUser) => {
      SetUSer(currentUser);
      setLoading(false);
    });
    return () => unSuscribe();
  }, []);
  return (
    <authContext.Provider value={{ signUp, login, user, logOut, loading }}>
      {children}
    </authContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node,
};
AuthProvider.defaultProps = {
  children: '',
};
