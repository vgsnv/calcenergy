import { createStackNavigator } from 'react-navigation-stack'
import { ProductList } from './List'
import { ProductEdit } from './Edit'

export const ProductsMainStack = createStackNavigator(
	{
		ProductList: {
			screen: ProductList,
		},
		ProductEdit: {
			screen: ProductEdit,
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
