const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: "development",
  entry: "./src/main.js",
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
      template: './src/index.html',
    }),
    new CopyPlugin({
      patterns: [
        {
          from: 'src/**/*.(css)',
          to({ context, absoluteFilename }) {
            return absoluteFilename.replace(`${path.resolve(__dirname)}/src/`, "");
          },
        }
      ]
    }),
    new CopyPlugin({
      patterns: [
        {
          from: 'src/**/*.(png|jpg|jpeg|gif|bmp|tif|tiff)',
          to({ context, absoluteFilename }) {
            return absoluteFilename.replace(`${path.resolve(__dirname)}/src/`, "");
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
