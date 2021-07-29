const devConfig = require('./webpack.config.js');
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  ...devConfig,
  mode: "development",
  entry: "./sample/main.js",
  output: {
    filename: "main.js",
    path: path.join(__dirname, "dist")
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './sample/index.html',
    }),
    new CopyPlugin({
      patterns: [
        {
          from: 'sample/*.css',
          to: '[name][ext]',
        }
      ]
    })
  ],
};
