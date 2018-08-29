import { createAction } from "redux-actions";

export const TOGGLE_USER_PROFILE_TAB = "TOGGLE_USER_PROFILE_TAB";
export const onClickedUserProfileTab = createAction(TOGGLE_USER_PROFILE_TAB);

const INITIAL_STATE = {
  toggleTab: "liked",
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case TOGGLE_USER_PROFILE_TAB: {
    return {
      ...state,
      toggleTab: action.payload,
    };
  }
  default:
    return state;
  }
};
