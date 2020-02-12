import { ProductCreateNavigationProp } from '../index'

export default (nav: ProductCreateNavigationProp) => async (dispatch, getState) => {
	console.info('THUNK: CANCEL PRODUCT_CREATE')

	nav.goBack()
}
