let path = require('path');
let webpack = require('webpack');

module.exports = {
  watch: true,
  entry: {
    'mobile-nav': './src/js/mobile-nav.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist/js'),
    filename: '[name].min.js'
  }
};