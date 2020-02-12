import { ProductEditNavigationProp } from '../index'

export default (nav: ProductEditNavigationProp) => async (dispatch, getState) => {
	console.info('THUNK: CANCEL PRODUCT_CREATE')

	nav.goBack()
}
