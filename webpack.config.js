const path = require('path');
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

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: 'babel',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
}
