var webpack = require('webpack');
var package = require("./package.json");
var entry = package.entry;
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

// markdown conver to html
var marked = require("marked");
var renderer = new marked.Renderer();

module.exports = {
  entry: entry,
  output: {
    path: __dirname,
    filename: '[name].js' // Template based on keys in entry above
  },
  module: {
    loaders: [{
      test: /\.js(x?)$/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'react']
      }
    }, {
      test: /\.css$/,
      loader: "style!css"
    }, {
      test: /\.less$/,
      loader: "style!css!less"
    }, {
      test: /\.png$/,
      loader: "url-loader?mimetype=image/png"
    }, {
      test: /\.md$/,
      loader: "html!markdown?gfm=false"
    }]
  },
  resolve: {
    extensions: ['', '.js', '.json', '.jsx']
  },
  plugins: [commonsPlugin],
  markdownLoader: {
    renderer: renderer
  }
};
