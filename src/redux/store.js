import {createStore, applyMiddleware} from "redux";
import logger from "redux-logger";
import rootReducer from "./root-reducer";


const Middleware = [logger];

const store = createStore(rootReducer, applyMiddleware(...Middleware));

export default store;