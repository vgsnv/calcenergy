import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { ProductsMainNavigatorStack } from './Main/ProductsMainNavigatorStack'
import { ProductCreate } from './ProductCreate'

export type ProductsNavigatorParamList = {
	ProductCreate: undefined
	ProductsMainNavigatorStack: undefined
}

const Stack = createStackNavigator<ProductsNavigatorParamList>()

export const ProductsNavigatorStack = () => {
	return (
		<Stack.Navigator initialRouteName="ProductsMainNavigatorStack" mode="modal" headerMode="none">
			<Stack.Screen name="ProductCreate" component={ProductCreate} />
			<Stack.Screen name="ProductsMainNavigatorStack" component={ProductsMainNavigatorStack} />
		</Stack.Navigator>
	)
}
