'use strict';

module.exports = {
  entry: {
    index: ['./src/index.js']
  },
  output: {
    path: './dist',
    filename: 'index.js'
  }
  module: {
    loaders: [{
      test: /\.js?/,
      loaders: ['babel']
    }]
  }
}
