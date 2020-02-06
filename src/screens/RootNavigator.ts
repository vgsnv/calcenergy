import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { ProductsStack } from './Products'

const RootNavigator = createSwitchNavigator(
	{
		Products: ProductsStack,
	},
	{
		initialRouteName: 'Products',
	}
)

export const Root = createAppContainer(RootNavigator)
