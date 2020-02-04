import { createStackNavigator } from 'react-navigation-stack'
import { MainScreen } from './Main'
import { Screen02Screen } from './Screen02'

export default createStackNavigator(
	{
		Main: {
			screen: MainScreen,
		},
		Screen02: {
			screen: Screen02Screen,
		},
	},
	{
		mode: 'card',
		headerMode: null,
		navigationOptions: {
			header: null,
		},
	}
)
