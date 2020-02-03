import MealListStack from "./MealList";
import { createAppContainer, createSwitchNavigator } from "react-navigation";

const RootNavigator = createSwitchNavigator(
  {
    MealList: MealListStack
  },
  {
    initialRouteName: "MealList"
  }
);

export const Root = createAppContainer(RootNavigator);
