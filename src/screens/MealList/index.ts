import { createStackNavigator } from 'react-navigation-stack'

import { MainScreen } from './Main'

export default createStackNavigator(
	{
		Main: {
			screen: MainScreen,
		},
	},
	{
		mode: 'card',
		headerMode: 'float',
	}
)
