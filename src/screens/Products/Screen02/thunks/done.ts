import { NavigationActions } from 'react-navigation'

export default nav => async (dispatch, getState) => {
	console.info('DONE SCREEN_02 SCREEN IN MEALLIST')
	nav.dispatch(NavigationActions.back())
}
