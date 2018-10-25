import React, { Component } from "react";
import { WebView, StatusBar } from "react-native";

import { AlertConsumer } from "../components/Alert";

class PostDetails extends Component {
  render() {
    const { navigation } = this.props;
    const postURL = navigation.getParam("postURL");

    return <WebView source={{ uri: postURL }} />;
  }
}

export default props => (
  <AlertConsumer>
    {context => <PostDetails {...context} {...props} />}
  </AlertConsumer>
);
