module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ['module-resolver', {
        root: ["./src"],
        alias: {
          "@screens": './screens',
          "@utils": './utils',
          "@assets": './assets',
          "@components": './components',
        }
      }]
    ],
  };
};
