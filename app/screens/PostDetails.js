import PropTypes from "prop-types";
import React from "react";
import { WebView } from "react-native";

import { AlertConsumer } from "../components/Alert";

const PostDetails = props => {
  const { navigation } = props;
  const postURL = navigation.getParam("postURL");

  return <WebView source={{ uri: postURL }} />;
};

PostDetails.propTypes = {
  navigation: PropTypes.object,
  alertWithType: PropTypes.func,
  alert: PropTypes.func,
};

export default PostDetails;
