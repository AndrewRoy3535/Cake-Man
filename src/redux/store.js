import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
import thunk from "redux-thunk";
import logger from "redux-logger";

const middleWares = [thunk, logger];

const store = createStore(rootReducer, applyMiddleware(...middleWares));

export default store;
