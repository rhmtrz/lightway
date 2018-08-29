import { createAction } from "redux-actions";

export const COUNT_UP = "COUNT_UP";
export const countUp = createAction(COUNT_UP);

const initialState = {
  count: 0,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
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
