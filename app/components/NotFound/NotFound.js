import React from "react";
import { Image, Text, View } from "react-native";

import styles from "./styles";

const NotFound = () => (
  <View style={styles.container}>
    <Image
      source={require("../../../assets/icon.png")}
      resizeMode="contain"
      style={styles.image}
    />
    <Text style={styles.text}>It's sooo empty in here...</Text>
  </View>
);

export default NotFound;
