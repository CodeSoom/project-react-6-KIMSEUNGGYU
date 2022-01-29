const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src/index.jsx'),
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, ''),
      '@components': path.resolve(__dirname, 'src/components'),
    },
  },
  devServer: {
    historyApiFallback: {
      index: 'index.html',
    },
  },
};
