import { productsAdd } from '../../../../store/db/products'
import { ProductCreateNavigationProp } from '../index'

export default (nav: ProductCreateNavigationProp, newProduct) => async (dispatch, getState) => {
	console.info('THUNK: DONE PRODUCT_CREATE', newProduct)

	dispatch(
		productsAdd({
			...newProduct,
		})
	)

	nav.goBack()
}
