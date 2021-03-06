import firebase from 'firebase';

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
const storage = firebase.storage();

export { db, auth, storage };
