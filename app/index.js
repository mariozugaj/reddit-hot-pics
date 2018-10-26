import React from "react";
import { View, StatusBar } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

import ErrorBoundary from "./components/ErrorBoundary";
import Navigator from "./config/routes";
import { AlertProvider } from "./components/Alert";

EStyleSheet.build({
  $primaryColor: "#ff4500",
  $white: "#FFFFFF",
  $lightText: "#797979",
  $darkText: "#343434",
  $underlay: "#e9e8ef",
});

export default class App extends React.Component {
  render() {
    return (
      <AlertProvider>
        <ErrorBoundary>
          <StatusBar translucent={false} barStyle="dark-content" />
          <Navigator />
        </ErrorBoundary>
      </AlertProvider>
    );
  }
}
