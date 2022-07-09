import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/HomeScreen";
import WeeklyTarotScreen from "./src/WeeklyTarotScreen";
import DailyTarotScreen from "./src/DailyTarotScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Daily: DailyTarotScreen,
    Weekly: WeeklyTarotScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Daily Tarot",
    },
  }
);

export default createAppContainer(navigator);
