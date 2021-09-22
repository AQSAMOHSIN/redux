import { OBJ_IDS } from "../actions";
const objReducer = (state = {}, action) => {
  switch (action.type) {
    case OBJ_IDS:
      return { ...state, dataId: action.payload };
    default:
      return state;
  }
};

export default objReducer;
