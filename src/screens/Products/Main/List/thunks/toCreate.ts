import { NavigationActions } from 'react-navigation'

export default (nav, id) => async dispatch => {
	console.info('THUNK: TO_CREATE PRODUCT_LIST')

	nav.dispatch(NavigationActions.navigate({ routeName: 'ProductCreate' }))
}
