module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['module:@react-native/babel-preset'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            // This needs to be mirrored in tsconfig.json
            app: './src/app',
            navigators: './src/navigators',
            screens: './src/screens',
            shared: './src/shared',
            src: '.src',
          },
        },
      ],
    ],
  };
};
