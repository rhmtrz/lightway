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

  if (action.type === pageDataReducer.SEND_MESSAGE_TO_FIREBASE) {
    collection.add({
      message: 'hello SEND_MESSAGE_TO_FIREBASE action',
    });

    loginWithFacebook();
  }

  if (action.type === pageDataReducer.GET_MESSAGE_FROM_FIREBASE) {
    collection.get()
      .then((snapshot) => {
        store.dispatch(pageDataAction.successToGetMessage());
        snapshot.forEach((doc) => {
          // eslint-disable-next-line no-console
          console.log(doc.data());
        });
      });
  }
/*
  if (action.type === pageDataAction.REQUEST_FB_LOGIN) {
    loginWithFacebook()
      .then((resolve) => {
        const { type, token } = resolve;
        if (type === 'success') {
          const credential = firebase.auth.FacebookAuthProvider.credential(token);
          firebase.auth().signInAndRetrieveDataWithCredential(credential)
            .then((res) => {
              // eslint-disable-next-line no-console
              console.log(res);
              store.dispatch(pageDataAction.successToFbLogin(res));
            })
            .catch((err) => {
              // eslint-disable-next-line no-console
              console.log(err);
              store.dispatch(pageDataAction.failedToFbLogin(err));
            });
        }
      })
      .catch((err) => {
        store.dispatch(pageDataAction.failedToFbLogin(err));
      });
  }

  if (action.type === pageDataAction.REQUEST_FB_LOGOUT) {
    firebase.auth().signOut()
      .then((res) => {
        store.dispatch(pageDataAction.successToFbLogout(res));
      })
      .catch((err) => {
        store.dispatch(pageDataAction.failedToFbLogout(err));
      });
  }

  if (action.type === pinDataAction.UPLOAD_PHOTO) {
    const {
      uid, pinLat, pinLng, comment,
    } = action.payload;
    const localPhotoPath = action.payload.photoUrl;

    const uploadImage = async (path, imageName) => {
      const response = await fetch(path);
      const blob = await response.blob();
      const randomNum = Math.floor(Math.random() * 100001);

      const ref = firebase.storage().ref().child(`images/${imageName}-${randomNum}`);
      const uploadTask = ref.put(blob);
      uploadTask.on('state_changed', (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        store.dispatch(pinDataAction.uploadingPhoto(Math.ceil(progress)));
      }, (err) => {
        store.dispatch(pinDataAction.failedToUploadPhoto(err));
      }, () => {
        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
          store.dispatch(pinDataAction.successToUploadPhoto(downloadURL));
          collection.add({
            uid,
            photoUrl: downloadURL,
            pinLat,
            pinLng,
            comment,
          });
        });
      });
    };

    uploadImage(localPhotoPath, 'photo');
  }

  if (action.type === pinDataAction.LOAD_PINNED_POSTS) {
    const {
      lat, latDelta,
    } = action.payload;
    const minLat = calculateMinData(lat, latDelta);
    const maxLat = calculateMaxData(lat, latDelta);

    collection = db.collection('posts');
    collection
      .where('pinLat', '>', minLat)
      .where('pinLat', '<', maxLat)
      .get()
      .then((res) => {
        store.dispatch(pinDataAction.successToLoadPosts(res));
      });
  }
  */
};

export default loader;
