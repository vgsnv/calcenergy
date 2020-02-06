import { createStackNavigator } from 'react-navigation-stack'
import { ProductCreate } from './ProductCreate'
import { ProductsMainStack } from './Main'

export const ProductsStack = createStackNavigator(
	{
		ProductsMain: ProductsMainStack,
		ProductCreate: {
			screen: ProductCreate,
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
