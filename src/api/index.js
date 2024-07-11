import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getDatabase} from 'firebase/database';
// import {getFirestore, initializeFirestore} from 'firebase/firestore';

import firebaseConfig from '../services/firebase/firebaseConfig';

const app = initializeApp(firebaseConfig);

// initializeFirestore(app, {
//   useFetchStraems: false,
//   experimentalForceLongPolling: true,
// });

export const auth = getAuth(app);
export const firebaseDatabase = getDatabase(app);
// export const firestore = getFirestore(app);
export const db = app.firestore();
