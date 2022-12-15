import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import HomeScreen from "../Screens/HomeScreen";
import DriverScreen from "../Screens/DriverScreen";
import StudentScreen from "../Screens/StudentScreen";

const screens = {
  HomeScreen: {
    screen: HomeScreen,
  },
  DriverScreen: {
    screen: DriverScreen,
  },
  StudentScreen: {
    screen: StudentScreen,
  },
};

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "#fff",
    headerStyle: {
      backgroundColor: "#22223B",
    },
  },
});

export default createAppContainer(HomeStack);
