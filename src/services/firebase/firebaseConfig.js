import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyD1fnDu9dgXarxKARhTLYZRanbobpJBMtw',
  authDomain: 'awaken-1bf1c.firebaseapp.com',
  projectId: 'awaken-1bf1c',
  storageBucket: 'awaken-1bf1c.appspot.com',
  messagingSenderId: '619212754803',
  appId: '1:619212754803:web:db8ec03b0126c18b9d3f06',
  measurementId: 'G-C0TEGMN2EY',
};

const FIREBASE_APP = initializeApp(firebaseConfig);
const FIREBASE_AUTH = getAuth(FIREBASE_APP);
const FIREBASE_DB = getFirestore(FIREBASE_APP);

export {FIREBASE_AUTH, FIREBASE_DB};
