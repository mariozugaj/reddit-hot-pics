import React from "react";
import { View } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

import Navigator from "./config/routes";

EStyleSheet.build({
  $primaryColor: "#ff4500",
  $white: "#FFFFFF",
  $lightText: "#797979",
  $darkText: "#343434",
});

export default class App extends React.Component {
  render() {
    return <Navigator />;
  }
}
