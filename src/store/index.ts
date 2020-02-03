import { applyMiddleware, createStore, combineReducers } from "redux";
import AsyncStorage from "@react-native-community/async-storage";

import db, { DbState } from "./db";

import thunk from "redux-thunk";

import { createLogger } from "redux-logger";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "root",
  timeout: 0,
  storage: AsyncStorage,
  blacklist: []
};

const loggerMiddleware = createLogger();

export interface Store {
  db: DbState;
}

export type GetState = () => Store;

export default (initialState?: {}) => {
  const store = createStore(
    persistReducer(
      persistConfig,
      combineReducers({
        db
      })
    ),
    initialState,
    applyMiddleware(thunk, loggerMiddleware)
  );

  const persistor = persistStore(store);

  return {
    store,
    persistor
  };
};
