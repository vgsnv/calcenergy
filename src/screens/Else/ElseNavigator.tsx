import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { ElseMainNavigatorStack } from './Main/ElseMainNavigatorStack'

export type ElseNavigatorParamList = {
	ElseMainNavigatorParamList: undefined
}

const Stack = createStackNavigator<ElseNavigatorParamList>()

export const ElseNavigatorStack = () => {
	return (
		<Stack.Navigator initialRouteName="ElseMainNavigatorParamList" mode="modal" headerMode="none">
			<Stack.Screen name="ElseMainNavigatorParamList" component={ElseMainNavigatorStack} />
		</Stack.Navigator>
	)
}
