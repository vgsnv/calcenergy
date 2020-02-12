import { ProductEditNavigationProp } from '../../Edit'

export default (nav: ProductEditNavigationProp, id) => async dispatch => {
	console.info('THUNK: TO_EDIT PRODUCT_LIST')

	nav.navigate('ProductEdit', { id })
}
