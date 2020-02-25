import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { Settings } from './Settings'

export type ElseMainNavigatorParamList = {
	Settings: undefined
}

const Stack = createStackNavigator<ElseMainNavigatorParamList>()

export const ElseMainNavigatorStack = () => {
	return (
		<Stack.Navigator initialRouteName="Settings" headerMode="none">
			<Stack.Screen name="Settings" component={Settings} />
		</Stack.Navigator>
	)
}
