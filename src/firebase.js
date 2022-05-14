// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAcTTBi2Hd9YbTsN2EYgY5uIcsIkGYTjpc',
  authDomain: 'tu-portal-a4400.firebaseapp.com',
  projectId: 'tu-portal-a4400',
  storageBucket: 'tu-portal-a4400.appspot.com',
  messagingSenderId: '943324473377',
  appId: '1:943324473377:web:3e8d8d5ba2e385fa381b60',
  measurementId: 'G-791BGXPBSC',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);
export const auth = getAuth(app);
