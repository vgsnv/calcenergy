import { productsAdd } from '../../../../../store/db/products'
import { ProductEditNavigationProp } from '../index'

export default (nav: ProductEditNavigationProp, newProduct) => async (dispatch, getState) => {
	console.info('THUNK: DONE PRODUCT_EDIT', newProduct)

	dispatch(
		productsAdd({
			...newProduct,
		})
	)

	nav.goBack()
}
