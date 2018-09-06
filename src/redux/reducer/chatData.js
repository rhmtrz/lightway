import { createAction } from "redux-actions";

export const SAVE_DATA_TO_DB = "SAVE_DATA_TO_DB";
export const onSaveDataToDB = createAction(SAVE_DATA_TO_DB);

const INITIAL_STATE = {
  message: "",
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SAVE_DATA_TO_DB: {
    return {
      ...state,
      message: action.payload,
    };
  }
  default:
    return state;
  }
};
