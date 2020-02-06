import { NavigationActions } from 'react-navigation'
import { productsAdd } from '../../../../store/db/products'
const uuidv1 = require('uuid/v1')

export default (nav, newProduct) => async (dispatch, getState) => {
	console.info('THUNK: DONE PRODUCT_CREATE', newProduct)

	const id = uuidv1()
	dispatch(
		productsAdd({
			id,
			...newProduct,
		})
	)

	nav.dispatch(NavigationActions.back())
}
