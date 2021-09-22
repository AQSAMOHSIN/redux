// const entity = { articles: {} };

import { OBJ_ARRAY_TO_OBJECT, CHANGE_NAME } from "../actions/index";

const entityReducer = (state = {}, action) => {
  switch (action.type) {
    case OBJ_ARRAY_TO_OBJECT:
      return { ...state, data: action.payload };
    case CHANGE_NAME:
      console.log(state, "state");
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
export default entityReducer;
