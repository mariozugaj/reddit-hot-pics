import React, { Component } from "react";

import { Container } from "./Container";
import { NotFound } from "./NotFound";

class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error(error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <Container centered>
          <NotFound text="Something went wrong. Try refreshing?" />
        </Container>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
