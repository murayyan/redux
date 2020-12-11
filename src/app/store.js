import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import gridReducer from "../features/Grid/reducer";

let rootReducers = combineReducers({
  grid: gridReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //<- composeEnhancers untuk keperluan redux-tools

let store = createStore(rootReducers, composeEnhancers(applyMiddleware(thunk))); // <- apply thunk buat ngembaliin nilai state skrg, composeEnhancers untuk keperluan redux-tools

export default store;
