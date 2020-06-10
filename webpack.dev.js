const merge = require('webpack-merge')
const webpack = require('webpack')

const common = require('./webpack.common.js')

module.exports = (env) => {
  const { API_TARGET } = env

  return merge(
    common,
    {
      mode: 'development',
      // show proper code lines for errors
      devtool: 'inline-source-map',
      plugins: [
        new webpack.DefinePlugin({ 'process.env.API_TARGET': JSON.stringify(API_TARGET) }),
      ],
    },
  )
}
