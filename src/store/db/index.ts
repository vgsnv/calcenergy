import { combineReducers } from 'redux'

import activities, { Activities } from './activities'

export interface DbState {
	activities: Activities
}

const db = combineReducers({
	activities,
})

export default db
