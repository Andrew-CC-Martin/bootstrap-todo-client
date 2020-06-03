const merge = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'development',
  // show proper code lines for errors
  devtool: 'inline-source-map',
})
