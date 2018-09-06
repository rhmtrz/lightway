import * as firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC7q-HFlm8htUGUxzfzp-klFVjdWx4ZiSA",
  authDomain: "lightway-71163.firebaseapp.com",
  databaseURL: "https://lightway-71163.firebaseio.com",
  projectId: "lightway-71163",
  storageBucket: "lightway-71163.appspot.com",
  messagingSenderId: "847060893270"
};

export default !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app()
