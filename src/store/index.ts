import AsyncStorage from '@react-native-community/async-storage'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import { createLogger } from 'redux-logger'
import { persistReducer, persistStore } from 'redux-persist'
import thunk from 'redux-thunk'
import db, { DbState } from './db'

const persistConfig = {
	key: 'root',
	timeout: 0,
	storage: AsyncStorage,
	blacklist: [],
}

const loggerMiddleware = createLogger()

export interface Store {
	db: DbState
}

export type GetState = () => Store

export default (initialState?: {}) => {
	const store = createStore(
		persistReducer(
			persistConfig,
			combineReducers({
				db,
			})
		),
		initialState,
		applyMiddleware(thunk, loggerMiddleware)
	)

	const persistor = persistStore(store)

	return {
		store,
		persistor,
	}
}
