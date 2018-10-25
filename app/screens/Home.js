import React, { Component } from "react";
import {
  View,
  StatusBar,
  Text,
  Dimensions,
  ActivityIndicator,
  Image,
} from "react-native";

import { Container } from "../components/Container";
import { AlertConsumer } from "../components/Alert";
import { CardList } from "../components/Card";

import SubredditService from "../shared/services/api/subreddit";
import constants from "../shared/constants";

const DEFAULT_SUBREDDIT = "pics";

class Home extends Component {
  state = {
    isLoading: true,
    posts: null,
    currentSubreddit: DEFAULT_SUBREDDIT,
  };

  mapResponseToData = response => {
    const { width } = Dimensions.get("window");

    return response.data.children.map(({ data }) => {
      const preview = data.preview;
      let previewImageUrl = "";
      if (preview != null && preview.images != null) {
        const resolutions = preview.images[0].resolutions;
        filteredImageResolution = resolutions.filter(
          resolution => resolution.width > width
        );
        previewImageUrl = filteredImageResolution.filter(Boolean).length
          ? filteredImageResolution[0].url
          : "";
      }

      return {
        author: data.author,
        stickied: data.stickied,
        numComments: data.num_comments,
        score: data.score,
        createdAt: data.created_utc,
        title: data.title,
        id: data.id,
        permalink: data.permalink,
        thumbnail: data.thumbnail,
        previewImageUrl,
      };
    });
  };

  stopLoading = () => {
    this.setState({
      isLoading: false,
    });
  };

  fetchSuccess = response => {
    if (!response.data.children.length) {
      this.stopLoading();
      return this.props.alertWithType(
        "error",
        "Error",
        "Sorry, no such subreddit exists."
      );
    }

    this.setState({
      posts: this.mapResponseToData(response),
      isLoading: false,
    });
  };

  fetchFailure = error => {
    this.props.alertWithType("error", "Error", error);
    this.stopLoading();
  };

  fetchPosts = (subreddit, sorting, params) => {
    SubredditService.get({ subreddit, sorting, params })
      .then(response => this.fetchSuccess(response))
      .catch(error => this.fetchFailure(error));
  };

  onPress = postURL => {
  };

  componentDidMount() {
    const { isLoading, posts, currentSubreddit } = this.state;

    if (!posts) {
      this.fetchPosts(currentSubreddit, "hot", {});
    }
  }

  render() {
    const { isLoading, posts } = this.state;

    if (isLoading) {
      return (
        <Container centered>
          <ActivityIndicator size="large" color={constants.primaryColor} />
        </Container>
      );
    }

    if (!posts) {
      let { width } = Dimensions.get("window");
      width = width / 3;

      return (
        <Container centered>
          <Image
            source={require("../../assets/icon.png")}
            resizeMode="contain"
            style={{ width, height: width }}
          />
          <Text style={{ paddingTop: 10 }}>It's sooo empty in here...</Text>
        </Container>
      );
    }

    return (
      <Container>
        <StatusBar translucent={false} barStyle="dark-content" />
        <CardList posts={posts} onPress={this.onPress} />
      </Container>
    );
  }
}

export default props => (
  <AlertConsumer>{context => <Home {...context} {...props} />}</AlertConsumer>
);
