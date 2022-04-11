// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: 'AIzaSyBwAJYfJJn5m-x7fm568ZzjOCJFn47XpYo',
  authDomain: 'acciona-staging.firebaseapp.com',
  projectId: 'acciona-staging',
  storageBucket: 'acciona-staging.appspot.com',
  messagingSenderId: '771765205757',
  appId: '1:771765205757:web:229ac2df2bf0accca55c94',
  measurementId: 'G-99FMKBJN7G',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
