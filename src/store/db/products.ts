import { fProducts } from '../../fixtures/products'

export type ProductId = string

export interface Product {
	id: ProductId
	title: string
	kk: number
	protein: number
	fat: number
	crbh: number
}

export interface Products {
	[key: string]: Product
}

enum ActionType {
	CATEGORIES_LOAD = 'DB/CATEGORIES_LOAD',
	PRODUCTS_ADD = 'DB/PRODUCTS_ADD',
}

export const categoriesLoad = () => ({
	type: ActionType.CATEGORIES_LOAD,
})

export const productsAdd = (data: Product) => ({
	type: ActionType.PRODUCTS_ADD,
	data,
})

type State = Products

const defaultProducts: State = fProducts

export default (state: Products = defaultProducts, action) => {
	switch (action.type) {
		case ActionType.PRODUCTS_ADD:
			const newProduct = action.data
			const { id } = newProduct
			return {
				...state,
				[id]: newProduct,
			}

		default:
			return state
	}
}
