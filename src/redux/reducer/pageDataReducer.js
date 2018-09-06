import { createAction } from "redux-actions";

export const COUNT_UP = "COUNT_UP";
export const countUp = createAction(COUNT_UP);


export const INITIALIZE_FIREBASE = 'INITIALIZE_FIREBASE';
export const initializeFirebase = createAction(INITIALIZE_FIREBASE);

export const REQUEST_FB_LOGIN = 'REQUEST_FB_LOGIN';
export const fbLogin = createAction(REQUEST_FB_LOGIN);

export const FB_LOGIN_SUCCESS = 'FB_LOGIN_SUCCESS';
export const successToFbLogin = createAction(FB_LOGIN_SUCCESS);


const initialState = {
  msg: 'initial state dayo',
  loading: false,
  count: 0,
};

const counterReducer = (state = initialState, action) => {
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

export default counterReducer;
