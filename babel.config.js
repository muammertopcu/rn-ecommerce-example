module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@screens': './src/screens',
          '@components': './src/components',
          '@types': './src/types',
          '@redux': './src/redux',
          '@utils': './src/utils',
        },
      },
    ],
  ],
};
