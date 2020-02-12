import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { ProductsNavigatorStack } from './Products/ProductsNavigator'

const Stack = createStackNavigator()

export const Root = () => {
	return (
		<Stack.Navigator initialRouteName="ProductsNavigatorStack" headerMode="none">
			<Stack.Screen name="ProductsNavigatorStack" component={ProductsNavigatorStack} />
		</Stack.Navigator>
	)
}
