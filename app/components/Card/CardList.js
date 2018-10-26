import PropTypes from "prop-types";
import React from "react";
import { FlatList, Dimensions } from "react-native";

import Card from "./Card";
import { NotFound } from "../NotFound";

import styles from "./styles";

const CardList = ({
  posts,
  onPress,
  onRefresh,
  refreshing,
}) => (
  <FlatList
    data={posts}
    renderItem={({ item }) => (
      <Card post={item} onPress={onPress} key={item.id} />
    )}
    onRefresh={() => onRefresh()}
    refreshing={refreshing}
    ListEmptyComponent={NotFound}
    contentContainerStyle={!posts.length && styles.empty}
  />
);

CardList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      permalink: PropTypes.string,
      author: PropTypes.string,
      createdAt: PropTypes.number,
      score: PropTypes.number,
      numComments: PropTypes.number,
      previewImageUrl: PropTypes.string,
      stickied: PropTypes.bool,
    })
  ),
  onPress: PropTypes.func,
  onRefresh: PropTypes.func,
  refreshing: PropTypes.bool,
};

export default CardList;
