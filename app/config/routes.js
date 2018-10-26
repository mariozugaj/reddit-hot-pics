import { createStackNavigator } from "react-navigation";

import Home from "../screens/Home";
import PostDetails from "../screens/PostDetails";

export default createStackNavigator({
  Home: {
    screen: Home,
  },
  PostDetails: {
    screen: PostDetails,
  },
});
