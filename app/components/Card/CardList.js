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
  handleLoadMore,
}) => (
  <FlatList
    data={posts}
    renderItem={({ item }) => (
      <Card post={item} onPress={onPress} key={item.id} />
    )}
    keyExtractor={item => item.id}
    onRefresh={() => onRefresh()}
    refreshing={refreshing}
    onEndReached={handleLoadMore}
    onEndReachedThreshold={10}
    ListEmptyComponent={<NotFound text="It's soooo empty in here..." />}
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
      text: PropTypes.string,
    })
  ),
  onPress: PropTypes.func,
  onRefresh: PropTypes.func,
  refreshing: PropTypes.bool,
  handleLoadMore: PropTypes.func,
};

export default CardList;
