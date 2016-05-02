var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require("copy-webpack-plugin");
var path = require("path");

module.exports = {
  entry: ["./src/js/app.js", "./src/css/app.scss"],
  output: {
    path: "build/",
    filename: "js/app.js"
  },
  devtool: "source-map",
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel",
      query: {
        presets: ["es2015"]
      }
    }, {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract("style-loader", "css-loader?sourceMap-url!sass-loader?sourceMap=true")
    }]
  },
  resolve: {
    modulesDirectories: [
      __dirname + "/src/js",
      __dirname + "/node_modules/bootstrap/scss",
      __dirname + "/node_modules/bootstrap/dist/js",
      __dirname + "/node_modules/bootstrap/dist/js/umd"
    ],
    alias: {}
  },
  externals: {},
  sassLoader: {
    includePaths: [path.resolve(__dirname, "./node_modules/bootstrap/scss/")],
    sourceMap: true,
    outputStyle: "expanded"
  },
  plugins: [
    new ExtractTextPlugin("css/app.css"),
    new CopyWebpackPlugin([{ from: "./src/static" }])
  ]
};
