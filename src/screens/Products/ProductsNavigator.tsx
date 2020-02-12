import React from 'react'

import { ProductCreate } from './ProductCreate'
import { ProductsMainNavigatorStack } from './Main/ProductsMainNavigatorStack'

import { createStackNavigator } from '@react-navigation/stack'

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
