import React, { Component } from "react";
import { View, StatusBar, Text, Dimensions, ActivityIndicator } from "react-native";

import { Container } from "../components/Container";
import SubredditService from "../shared/services/api/subreddit";
import constants from "../shared/constants";

export default class Home extends Component {
  state = {
    isLoading: true,
    posts: [],
    currentSubreddit: "pics",
  };

  mapResponseToData = response => {
    const { width } = Dimensions.get("window");

    return response.data.children.map(({ data }) => {
      const preview = data.preview;
      let imageResolutionUrl = "";
      if (preview != null && preview.images != null) {
        const resolutions = preview.images[0].resolutions;
        imageResolutionUrl = resolutions.filter(resolution => resolution.width > width)[0].url;
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
        previewImage: imageResolutionUrl,
      };
    });
  };

  fetchPosts = (subreddit, sorting, params) => {
    SubredditService.get({ subreddit, sorting, params }).then(response =>
      this.setState({
        posts: this.mapResponseToData(response),
        isLoading: false,
      })
    );
  };

  componentDidMount() {
    const { isLoading, posts, currentSubreddit } = this.state;

    if (!posts.length) {
      this.fetchPosts(currentSubreddit, "hot", {});
    }
  }

  render() {
    const { isLoading } = this.state;

    if (isLoading) {
      return (
        <Container centered>
          <ActivityIndicator size="large" color={constants.primaryColor} />
        </Container>
      );
    }
    return (
      <Container>
        <StatusBar translucent={false} barStyle="dark-content" />
      </Container>
    );
  }
}
