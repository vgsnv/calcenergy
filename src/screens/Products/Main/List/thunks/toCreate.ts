import { ProductCreateNavigationProp } from '../../../ProductCreate'

export default (nav: ProductCreateNavigationProp) => async dispatch => {
	console.info('THUNK: TO_CREATE PRODUCT_LIST')

	nav.navigate('ProductCreate')
}
