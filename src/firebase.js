import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import { initializeApp } from '@firebase/app';
import { getStorage } from '@firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBCYB4SIQjkc31VZe4G-4p-kmqkYK55p6o',
  authDomain: 'instagram-clone-react-ebd65.firebaseapp.com',
  projectId: 'instagram-clone-react-ebd65',
  storageBucket: 'instagram-clone-react-ebd65.appspot.com',
  messagingSenderId: '499198160171',
  appId: '1:499198160171:web:93ee6c75d7ec3df916e96e',
  measurementId: 'G-Z1JKFMSD7G',
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyBCYB4SIQjkc31VZe4G-4p-kmqkYK55p6o',
  authDomain: 'instagram-clone-react-ebd65.firebaseapp.com',
  projectId: 'instagram-clone-react-ebd65',
  storageBucket: 'instagram-clone-react-ebd65.appspot.com',
  messagingSenderId: '499198160171',
  appId: '1:499198160171:web:93ee6c75d7ec3df916e96e',
  measurementId: 'G-Z1JKFMSD7G',
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
// const storage = firebase.storage();

export { db, auth };
