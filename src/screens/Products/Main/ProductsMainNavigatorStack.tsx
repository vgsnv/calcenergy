import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { ProductEdit } from './Edit'
import { ProductList } from './List'
import { BottomTabBar } from '@react-navigation/bottom-tabs'

export type ProductsMainNavigatorParamList = {
	ProductList: undefined
	ProductEdit: { id: string }
}

const Stack = createStackNavigator<ProductsMainNavigatorParamList>()

export const ProductsMainNavigatorStack = () => {
	return (
		<Stack.Navigator initialRouteName="ProductList" headerMode="none">
			<Stack.Screen name="ProductList" component={ProductList} />
			<Stack.Screen name="ProductEdit" component={ProductEdit} />
		</Stack.Navigator>
	)
}
