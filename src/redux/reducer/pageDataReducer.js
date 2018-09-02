import { createAction } from "redux-actions";

export const COUNT_UP = "COUNT_UP";
export const countUp = createAction(COUNT_UP);


export const INITIALIZE_FIREBASE = 'INITIALIZE_FIREBASE';
export const initializeFirebase = createAction(INITIALIZE_FIREBASE);

export const SEND_MESSAGE_TO_FIREBASE = 'SEND_MESSAGE_TO_FIREBASE';
export const sendMessageToFirebase = createAction(SEND_MESSAGE_TO_FIREBASE);

export const GET_MESSAGE_FROM_FIREBASE = 'GET_MESSAGE_FROM_FIREBASE';
export const getMessageFromFirebase = createAction(GET_MESSAGE_FROM_FIREBASE);

export const GET_MESSAGE_SUCCESS = 'GET_MESSAGE_SUCCESS';
export const successToGetMessage = createAction(GET_MESSAGE_SUCCESS);

const initialState = {
  msg: 'initial state dayo',
  loading: false,
  count: 0,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZE_FIREBASE: {
      console.log(action);
      
      return {
        ...state,
        msg: 'initializing...',
      };
    }

    case SEND_MESSAGE_TO_FIREBASE: {
      return state;
    }

    case GET_MESSAGE_FROM_FIREBASE: {
      return {
        ...state,
        msg: 'loading msg....',
        loading: true,
      };
    }

    case GET_MESSAGE_SUCCESS: {
      return {
        ...state,
        msg: 'success to get message',
        loading: false,
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
