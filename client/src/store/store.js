import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware, combineReducers } from "redux";
import userReducer from "./reducers/userReducer";
import remindsReducer from "./reducers/remindsReducer";
import { rootSaga } from "./sagas/rootSaga";

import { compose } from "redux";

const testMiddleware = store => {
  return function (next) {
    return function (action) {
      console.log("Store", store, "Next", next, "Action", action);
      next(action);
    };
  };
};

const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers({
  user: userReducer,
  reminds: remindsReducer,
});

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(applyMiddleware(testMiddleware, sagaMiddleware)),
);
sagaMiddleware.run(rootSaga);
window.store = store;
export default store;
