import { NavigationActions } from 'react-navigation'
import { productsAdd } from '../../../../../store/db/products'

export default (nav, newProduct) => async (dispatch, getState) => {
	console.info('THUNK: DONE PRODUCT_EDIT', newProduct)

	dispatch(
		productsAdd({
			...newProduct,
		})
	)

	nav.dispatch(NavigationActions.back())
}
