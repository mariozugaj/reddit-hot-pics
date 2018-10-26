import React from "react";
import { Image, Text, View } from "react-native";

import styles from "./styles";

const NotFound = ({ text }) => (
  <View style={styles.container}>
    <Image
      source={require("../../../assets/icon.png")}
      resizeMode="contain"
      style={styles.image}
    />
    <Text style={styles.text}>{text}</Text>
  </View>
);

export default NotFound;
