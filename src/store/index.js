import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
// import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "../reducers";

const configueStore = (initialState = {}) => {
  const middlewares = [logger, thunk];

  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middlewares)
  );
};

export default configueStore;
