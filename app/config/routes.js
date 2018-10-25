import { StatusBar, Platform } from "react-native";
import { createStackNavigator } from "react-navigation";
import { Constants } from "expo";

import Home from "../screens/Home";
import PostDetails from "../screens/PostDetails";

export default createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        header: () => null,
      },
    },
    PostDetails: {
      screen: PostDetails,
      navigationOptions: ({ navigation }) => ({
        headerTitle: navigation.state.params.title,
      }),
    },
  },
  {
    cardStyle: {
      paddingTop: Constants.statusBarHeight,
    },
  }
);
