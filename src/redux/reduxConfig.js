import { combineReducers, createStore, applyMiddleware } from "redux";
import createMiddleware from "redux-saga";
import { watcherSaga } from "./sagas/rootSaga";

import todosReducer from "../redux/ducks/todos";
import draftsReducer from "../redux/ducks/drafts";
import archiveReducer from "../redux/ducks/archive";
import recycleReducer from "../redux/ducks/recycles";
import reminderReducer from "../redux/ducks/reminder";
import profileReducer from "../redux/ducks/profile";
import loaderReducer from "../redux/ducks/loader";

const reducer = combineReducers({
  todos: todosReducer,
  drafts: draftsReducer,
  archives: archiveReducer,
  recycles: recycleReducer,
  reminders: reminderReducer,
  profile: profileReducer,
  loader: loaderReducer,
});

//Initialize Saga middleware
const sagaMiddleware = createMiddleware();

const middlewares = [sagaMiddleware];

const store = createStore(reducer, {}, applyMiddleware(...middlewares));
sagaMiddleware.run(watcherSaga);
export default store;
