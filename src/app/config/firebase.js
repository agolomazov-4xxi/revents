import firebase from 'firebase';
import 'firebase/firestore';

const firestoreConfig = {
  apiKey: 'AIzaSyAPuPu5DzH6t0QgN-19L1UswHTEQ6a96oY',
  authDomain: 'revents-ed3ce.firebaseapp.com',
  databaseURL: 'https://revents-ed3ce.firebaseio.com',
  projectId: 'revents-ed3ce',
  storageBucket: 'revents-ed3ce.appspot.com',
  messagingSenderId: '180172917107',
};

firebase.initializeApp(firestoreConfig);
const firestore = firebase.firestore();

const settings = {
  timestampsInSnapshots: true,
};

firestore.settings(settings);

export default firebase;
