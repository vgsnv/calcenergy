import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { ProductsNavigatorStack } from './Products/ProductsNavigator'
import { View, Text } from 'react-native'
import { Img } from './Products/Main/List/Header/stylesComponents'

const Stack = createStackNavigator()

const Tab = createBottomTabNavigator()

const LentaIcon = require('../assets/tabs/products/products.png')
const LentaIconP = require('../assets/tabs/products/products-press.png')
const HomeIcon = require('../assets/tabs/settings/settings.png')
const HomeIconP = require('../assets/tabs/settings/settings-press.png')

function HomeScreen() {
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Text>Home!</Text>
		</View>
	)
}

export const Root = () => {
	return (
		<Tab.Navigator
			initialRouteName="ProductsNavigatorStack"
			screenOptions={({ route, navigation }) => {
				let visible
				if (route.name === 'ProductCreate') {
					visible = false
				} else {
					visible = true
				}
				return {
					tabBarVisible: visible,
					tabBarIcon: ({ focused, color, size }) => {
						let iconName

						// if (route.name === 'Products') {
						// 	iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline'
						// } else if (route.name === 'Settings') {
						// 	iconName = focused ? 'ios-list-box' : 'ios-list'
						// }

						console.log('routeName', route, navigation)

						if (route.name === 'ProductsNavigatorStack') {
							if (focused) {
								iconName = LentaIconP
							} else iconName = LentaIcon
						}

						if (route.name === 'Home') {
							if (focused) {
								iconName = HomeIconP
							} else iconName = HomeIcon
						}

						// You can return any component that you like here!
						// return <Ionicons name={iconName} size={size} color={color} />
						return <Img source={iconName} />
					},
				}
			}}
			tabBarOptions={{
				showLabel: false,
				activeTintColor: 'tomato',
				inactiveTintColor: 'gray',
			}}
		>
			<Tab.Screen name="ProductsNavigatorStack" component={ProductsNavigatorStack} />
			<Tab.Screen name="Home" component={HomeScreen} />
		</Tab.Navigator>
	)
}
