# Reddit Hot Pics

![Usage GIF](https://github-readme-screenshots.s3.eu-central-1.amazonaws.com/reddit-hot-pics/Screen+Recording+2018-10-26+at+04.31+PM.gif) ![Infinite scroll GIF](https://github-readme-screenshots.s3.eu-central-1.amazonaws.com/reddit-hot-pics/Screen+Recording+2018-10-26+at+04.32+PM.gif)

## Requirements

To develop locally, [expo-cli](https://github.com/expo/expo-cli) is necessary.

## Getting started

1. Install all necessary packages with `yarn install` or `npm install`.
2. Execute `npm start` or `yarn start` to start the local development server of Expo CLI.
3. You can also run platform specific server by running either `yarn ios` or `yarn android`.

## Technical notes

- bootstrapped using [expo-cli](https://github.com/expo/expo-cli)
- axios is used to create service to call Reddit API - it's easy to extend and catches a lot of errors that native fetch does not
- moment library is used for time (of post creation) formatting
- numbro library is used for number formatting (e.g. post score and number of comments)
- rendering errors are caught using ErrorBoundary HOC
- network errors are caught and displayed using dropdown alert library
- pull to refresh and infinite scroll are implemented using react native's components and APIs (FlatList implements it)
- ESLint is used as a source code styling guide

## Download

Download already built Android app. -> [Link](https://exp-shell-app-assets.s3.us-west-1.amazonaws.com/android/%40chanjman/RedditHotPics-c188eff7b67042da8135e279bdba6f6a-signed.apk)

## Credits

Design was inspired by official Reddit Android app.

## License

MIT
