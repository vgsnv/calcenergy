import { ProductListNavigationProp } from '../index'

export default (nav: ProductListNavigationProp, id: string) => async dispatch => {
	console.info('THUNK: TO_EDIT PRODUCT_LIST')

	nav.navigate('ProductEdit', { id })
}
