const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    index: [
      './src/index.js'
    ]
  },

  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/dist/'
  },


  postcss: [
    require('autoprefixer')
  ],


  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loaders: ['babel-loader']
    }, {
      test: /\.less$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader!less-loader')
    }, {
      test: /\.(png|jpg|jpeg|gif|svg)$/,
      loader: ['url?limit=8192']
    }]
  },
  
  plugins: [
      new ExtractTextPlugin("style.css")
  ],
}
