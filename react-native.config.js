/**
 * React Native configuration
 * https://github.com/react-native-community/cli/blob/main/docs/configuration.md
 */

module.exports = {
  project: {
    ios: {},
    android: {},
  },
  assets: ['./src/assets/fonts/'],
  dependencies: {
    'react-native-vector-icons': {
      platforms: {
        ios: null,
        android: null,
      },
    },
  },
  // Custom configurations for different environments
  env: {
    development: {
      enableHermes: true,
      enableFlipper: true,
    },
    production: {
      enableHermes: true,
      enableFlipper: false,
    },
  },
};
