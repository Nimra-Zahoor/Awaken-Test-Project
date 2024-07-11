import {getAuth} from 'firebase/auth';
import firebase from 'firebase/compat/app';
import {getFirestore, initializeFirestore} from 'firebase/firestore';
import 'firebase/compat/firestore';

export const firebaseConfig = {
  apiKey: 'AIzaSyD1fnDu9dgXarxKARhTLYZRanbobpJBMtw',
  authDomain: 'awaken-1bf1c.firebaseapp.com',
  projectId: 'awaken-1bf1c',
  storageBucket: 'awaken-1bf1c.appspot.com',
  messagingSenderId: '619212754803',
  appId: '1:619212754803:web:db8ec03b0126c18b9d3f06',
  measurementId: 'G-C0TEGMN2EY',
};
let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

initializeFirestore(app, {
  useFetchStraems: false,
  experimentalForceLongPolling: true,
  merge: true,
});

const firestore = getFirestore(app);
const db = app.firestore();

const auth = getAuth(app);

export {auth, db, firestore};
