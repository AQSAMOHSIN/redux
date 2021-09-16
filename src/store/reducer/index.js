import { OBJ_IDS } from "../actions/index";

const reducer = (state = {}, action) => {
  switch (action.type) {
    case OBJ_IDS:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export default reducer;
