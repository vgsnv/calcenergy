import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import MealListStack from './MealList'

const RootNavigator = createSwitchNavigator(
	{
		MealList: MealListStack,
	},
	{
		initialRouteName: 'MealList',
	}
)

export const Root = createAppContainer(RootNavigator)
