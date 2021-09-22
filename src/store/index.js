import { createStore, applyMiddleware } from "redux";
import reducer from "./reducer/index";
import { composeWithDevTools } from "redux-devtools-extension";
import reduxThunk from "redux-thunk";
const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(reduxThunk))
);

export default store;
