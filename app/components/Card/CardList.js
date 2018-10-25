import PropTypes from "prop-types";
import React from "react";
import { ScrollView } from "react-native";

import Card from "./Card";

import styles from "./styles";

const CardList = ({ posts, onPress }) => {
  const postsMapped = posts.map(post => (
    <Card post={post} onPress={onPress} key={post.id} />
  ));

  return <ScrollView>{postsMapped}</ScrollView>;
};

CardList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object),
  onPress: PropTypes.func,
};

export default CardList;
