module.exports = {
  preset: 'react-native',
  haste: { defaultPlatform: 'ios', platforms: ['android', 'ios', 'native'] },
  transform: {
    '^.+\\.(js|ts|tsx)$': 'babel-jest',
    '^.+\\.(bmp|gif|jpg|jpeg|mp4|png|psd|svg|webp|ttf|otf|m4v|mov|mp4|mpeg|mpg|webm|aac|aiff|caf|m4a|mp3|wav|html|pdf|obj)$':
      './node_modules/jest-expo/src/preset/assetFileTransformer.js',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|@react-native-community|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg)',
  ],
  setupFiles: [
    './node_modules/react-native/jest/setup.js',
    './node_modules/jest-expo/src/preset/setup.js',
  ],
  testEnvironment: 'node',
}
