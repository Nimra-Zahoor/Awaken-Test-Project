import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
// import {collection, getDocs, where, query} from 'firebase/firestore';
import {auth} from '../services/firebase/firebaseConfig';

// const userRef = db.collection('users').doc();

// const saveInDb = async email => {
//   const querySnapshot = await getDocs(
//     query(collection(auth, 'users'), where('email', '==', email)),
//   );
//   const user = querySnapshot.docs.map(doc => ({
//     id: doc.id,
//     ...doc.data(),
//     docId: doc?._key.path.segments[6],
//   }))[0];
//   console.log('user', user);
// };

export const signup = async data => {
  const {name, email, password} = data;

  const {user} = await createUserWithEmailAndPassword(auth, email, password);
  
};

export const login = async ({email, password}) => {
  await signInWithEmailAndPassword(auth, email, password);
};
