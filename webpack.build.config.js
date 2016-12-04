var webpack = require("webpack");
var path = require("path");

module.exports = {
  entry: [
    './src/index.jsx'
  ],
  devtool: 'cheap-module-source-map',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'index.js',
    library: 'react-dipper',
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    modulesDirectories:['node_modules',  './src/modules/']
  },
  externals: {
    'react': 'react',
    'react-dom': 'react-dom'
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
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    })
  ]
};