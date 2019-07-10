// const webpack = require('webpack');
const path = require('path');

module.exports = {
  // mode defaults to 'production' if not set
  mode: 'development',

  entry: './src/index.js',
  output: {
    filename: 'main.js',
    chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },

  // add source maps
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          // without additional settings, this will reference the .babelrc
          loader: 'babel-loader',
        },
      },
    ],
  },
  devServer: {
    contentBase: './dist',
  },
};
