const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const projectDirName = 'ex3';

const baseConfig = require('./webpack.config');

module.exports = {
  ...baseConfig,
  
  entry: `./${projectDirName}/main.js`,
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: `./${projectDirName}/index.html`,
    }),
    new CopyPlugin({
      patterns: [
        {
          from: `${projectDirName}/**/*.(css|png|jpg|jpeg|gif|bmp|tif|tiff)`,
          to({ context, absoluteFilename }) {
            return absoluteFilename.replace(`${path.resolve(__dirname)}/${projectDirName}/`, "");
          },
        }
      ]
    }),
  ],
}
