import {createStore, applyMiddleware} from "redux";
import logger from "redux-logger";
import rootReducer from "./root-reducer";
import {persistStore} from "redux-persist";


const Middleware = [];

if(process.env.NODE_ENV === 'development'){
    Middleware.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...Middleware));

export const persistor = persistStore(store);

export default {store, persistor};