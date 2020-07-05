import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import * as reducers from "./reducers";

const { NODE_ENV } = process.env;
const isDevelopment = NODE_ENV === "development";

const slices = combineReducers({ ...reducers });

const composeEnhancers =
  isDevelopment && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        trace: true,
        traceLimit: 25,
      })
    : compose;
applyMiddleware(thunk);

const store = createStore(slices, composeEnhancers());

export default store;
