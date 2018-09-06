import * as firebase from 'firebase';
import Expo from 'expo';

import * as pageDataReducer from '../reducer/pageDataReducer';

import 'firebase/firestore';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyC7q-HFlm8htUGUxzfzp-klFVjdWx4ZiSA",
  authDomain: "lightway-71163.firebaseapp.com",
  databaseURL: "https://lightway-71163.firebaseio.com",
  projectId: "lightway-71163",
  storageBucket: "lightway-71163.appspot.com",
  messagingSenderId: "847060893270"
};


let db = null;
let collection = null;

async function loginWithFacebook() {
  const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync(
    '1120426761438088', {
      permissions: ['public_profile', 'email'],
      behavior: 'web',
    });

  return {
    type, token,
  };
}

const loader = store => next => (action) => {
  next(action);
  if (action.type === pageDataReducer.INITIALIZE_FIREBASE) {
    firebase.initializeApp(firebaseConfig);
    db = firebase.firestore();
    db.settings({
      timestampsInSnapshots: true,
    });
    collection = db.collection('posts');
    console.log("fire", firebase);
  }

  if (action.type === pageDataReducer.REQUEST_FB_LOGIN) {
    loginWithFacebook()
      .then((resolve) => {
        const { type, token } = resolve;
        if (type === 'success') {
          const credential = firebase.auth.FacebookAuthProvider.credential(token);
          firebase.auth().signInAndRetrieveDataWithCredential(credential)
            .then((res) => {
              // eslint-disable-next-line no-console
              console.log(res);
              //store.dispatch(pageDataReducer.successToFbLogin(res));
            })
            // .catch((err) => {
            //   // eslint-disable-next-line no-console
            //   console.log(err);
            //   store.dispatch(pageDataAction.failedToFbLogin(err));
            // });
        }
      })
      .catch((err) => {
        //store.dispatch(pageDataAction.failedToFbLogin(err));
      });
  }

};

export default loader;
