import { combineReducers } from 'redux'
import products, { Products } from './products'

export interface DbState {
	products: Products
}

const db = combineReducers({
	products,
})

export default db
