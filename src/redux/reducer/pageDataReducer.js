import { createAction } from "redux-actions";

export const COUNT_UP = "COUNT_UP";
export const countUp = createAction(COUNT_UP);


export const INITIALIZE_FIREBASE = 'INITIALIZE_FIREBASE';
export const initializeFirebase = createAction(INITIALIZE_FIREBASE);

export const REQUEST_FB_LOGIN = 'REQUEST_FB_LOGIN';
export const fbLogin = createAction(REQUEST_FB_LOGIN);

export const FB_LOGIN_SUCCESS = 'FB_LOGIN_SUCCESS';
export const successToFbLogin = createAction(FB_LOGIN_SUCCESS);

const SAMPLE_PHOTO_URL = require("../../../assets/user.png");

const initialState = {
  msg: 'initial state dayo',
  loading: false,
  displayName: '',
  uid: '',
  photoURL: SAMPLE_PHOTO_URL,
  isUserLoggedIn: false,
  count: 0,
};

const pageData = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZE_FIREBASE: {
      return {
        ...state,
        msg: 'initializing...',
      };
    }

    case REQUEST_FB_LOGIN: {
      return {
        ...state,
        loading: true,
      };
    }

    case FB_LOGIN_SUCCESS: {
      const { user } = action.payload;
      const { displayName, photoURL, uid } = user;
      return {
        ...state,
        loading: false,
        displayName,
        photoURL,
        uid,
        isUserLoggedIn: true,
      };
    }

    case COUNT_UP: {
      const { count } = state;
      return {
        count: count + 1,
      };
    }
    default: {
      return state;
    }
  }
};

export default pageData;
