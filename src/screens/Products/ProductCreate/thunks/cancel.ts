import { NavigationActions } from 'react-navigation'

export default nav => async (dispatch, getState) => {
	console.info('THUNK: CANCEL PRODUCT_CREATE')
	nav.dispatch(NavigationActions.back())
}
