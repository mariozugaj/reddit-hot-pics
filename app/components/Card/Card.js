import PropTypes from "prop-types";
import React, { Fragment } from "react";
import { TouchableHighlight, View, Image, Text, Platform } from "react-native";
import moment from "moment";
import numbro from "numbro";
import { Foundation, Entypo } from "@expo/vector-icons";

import styles from "./styles";

const ICON_COLOR = "#343434";
const ICON_COLOR_ACCENT = "#46de77";
const ICON_SIZE_BIG = 20;
const ICON_SIZE_SMALL = 13;

const Card = ({ post, onPress }) => {
  const postHeaderInfo = `u/${post.author} | ${moment(
    post.createdAt * 1000
  ).fromNow()}`;
  const postScore = numbro(post.score).format({ average: true });
  const postNumComments = numbro(post.numComments).format({ average: true });

  return (
    <View style={styles.container}>
      <TouchableHighlight
        onPress={() => onPress(post.permalink)}
        underlayColor={styles.$underlayColor}
        style={styles.touchable}
      >
        <Fragment>
          <View style={styles.header}>
            <Image
              source={require("./images/icon.png")}
              style={styles.avatar}
              resizeMode="contain"
            />
            <Text style={styles.metaText}>{postHeaderInfo}</Text>
            {post.stickied && (
              <Entypo
                style={styles.pinIcon}
                name="pin"
                size={ICON_SIZE_SMALL}
                color={ICON_COLOR_ACCENT}
              />
            )}
          </View>
          <Text style={styles.title}>{post.title}</Text>
          {post.previewImageUrl !== "" && (
            <Image
              source={{ uri: post.previewImageUrl }}
              style={styles.image}
              resizeMode="cover"
            />
          )}
          <View style={styles.footer}>
            <View style={styles.footerGroup}>
              <Foundation
                name="arrow-up"
                size={ICON_SIZE_BIG}
                color={ICON_COLOR}
              />
              <Foundation
                name="arrow-down"
                size={ICON_SIZE_BIG}
                color={ICON_COLOR}
              />
              <Text style={styles.footerText}>{postScore}</Text>
            </View>
            <View style={styles.footerGroup}>
              <Foundation
                name="comment"
                size={ICON_SIZE_BIG}
                color={ICON_COLOR}
              />
              <Text style={styles.footerText}>{postNumComments}</Text>
            </View>
          </View>
        </Fragment>
      </TouchableHighlight>
    </View>
  );
};

Card.propTypes = {
  post: PropTypes.shape({
    permalink: PropTypes.string,
    author: PropTypes.string,
    createdAt: PropTypes.number,
    score: PropTypes.number,
    numComments: PropTypes.number,
    previewImageUrl: PropTypes.string,
    stickied: PropTypes.bool,
  }),
  onPress: PropTypes.func,
};

export default Card;
