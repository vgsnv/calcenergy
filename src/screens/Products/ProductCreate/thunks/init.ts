import { productsAdd } from '../../../../store/db/products'

export default () => async (dispatch, getState) => {
	dispatch(
		productsAdd({
			id: '11',
			title: 'Гречка',
			kk: 70,
			protein: 4,
			fat: 3,
			crbh: 20,
		})
	)
	console.info('INIT SCREEN_02 SCREEN IN MEALLIST')
}
