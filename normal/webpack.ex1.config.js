const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const projectDirName = 'ex1';

module.exports = {
  mode: "development",
  entry: `./${projectDirName}/main.js`,
  output: {
    filename: "main.js",
    path: path.join(__dirname, "dist")
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: `./${projectDirName}/index.html`,
    }),
    new CopyPlugin({
      patterns: [
        {
          from: `${projectDirName}/**/*.(css)`,
          to({ context, absoluteFilename }) {
            return absoluteFilename.replace(`${path.resolve(__dirname)}/${projectDirName}/`, "");
          },
        }
      ]
    }),
    new CopyPlugin({
      patterns: [
        {
          from: `${projectDirName}/**/*.(png|jpg|jpeg|gif|bmp|tif|tiff)`,
          to({ context, absoluteFilename }) {
            return absoluteFilename.replace(`${path.resolve(__dirname)}/${projectDirName}/`, "");
          },
        }
      ]
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    open: true,
  }
};
