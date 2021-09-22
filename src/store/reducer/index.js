import entityReducer from "./entityReducer";
import objReducer from "./objReducer";
import { combineReducers } from "redux";

export default combineReducers({
  entity: entityReducer,
  obj: objReducer,
});
