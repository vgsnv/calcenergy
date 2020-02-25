import { ProductListNavigationProp } from '../index'

export default (nav: ProductListNavigationProp) => async dispatch => {
	console.info('THUNK: TO_CREATE PRODUCT_LIST')

	nav.navigate('ProductCreate')
}
