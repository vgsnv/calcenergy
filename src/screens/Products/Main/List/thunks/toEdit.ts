import { NavigationActions } from 'react-navigation'

export default (nav, id) => async dispatch => {
	console.info('STEP_03 GO NEXT')

	nav.dispatch(NavigationActions.navigate({ routeName: 'ProductEdit' }))
}
