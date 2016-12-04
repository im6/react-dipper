var webpack = require("webpack");
var path = require("path");

const HOST = "127.0.0.1",
  PORT = "3000";

module.exports = {
  entry: [
    'webpack-dev-server/client?http://' + HOST + ':' + PORT,
    'webpack/hot/only-dev-server',
    './demo/index.jsx'
  ],
  output: {
    path: path.join(__dirname, 'demo'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    modulesDirectories:['node_modules',  './src/modules/']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: "babel",
        exclude: /node_modules/,
        query: {
          presets: ['es2015','react', "stage-0"]
        }
      }
    ]
  },
  devServer: {
    contentBase: "./demo",
    noInfo: true,
    hot: true,
    inline: true,
    historyApiFallback: true,
    port: PORT,
    host: HOST
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};