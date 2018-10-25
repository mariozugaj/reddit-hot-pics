import { StatusBar, Platform } from "react-native";
import { createStackNavigator } from "react-navigation";
import { Constants } from "expo";

import Home from "../screens/Home";

export default createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        header: () => null,
      },
    },
  },
  {
    cardStyle: {
      paddingTop: Constants.statusBarHeight,
    },
  }
);
