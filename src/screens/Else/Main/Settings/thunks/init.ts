import { productsAdd } from '../../../../../store/db/products'

export default () => async (dispatch, getState) => {
	console.info('THUNK: INIT PRODUCT_LIST')
	try {
		dispatch(
			productsAdd({
				id: '88',
				title: 'Hello',
				kk: 800,
				protein: 234,
				fat: 244,
				crbh: 234,
			})
		)
	} catch (error) {
		console.log('ERROR bro', error)
	}
}
