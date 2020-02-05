import { createStackNavigator } from 'react-navigation-stack'
import { ProductList } from './ProductList'
import { Screen02Screen } from './Screen02'

export default createStackNavigator(
	{
		ProductList: {
			screen: ProductList,
		},
		Screen02: {
			screen: Screen02Screen,
		},
	},
	{
		mode: 'modal',
		headerMode: null,
		navigationOptions: {
			header: null,
		},
	}
)
