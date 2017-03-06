const path = require('path');

module.exports = {
  entry: './src/index.js',

  output: {
    path: path.resolve(__dirname, 'public/'),
    filename: 'bundle.js',
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: [`babel-loader?${JSON.stringify({
          cacheDirectory: true,
          presets: ['es2015', 'react', 'node6', 'stage-0'],
        })}`],
        exclude: /node_modules/,
      },
    ],
  },
};
