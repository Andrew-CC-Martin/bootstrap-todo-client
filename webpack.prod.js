const merge = require('webpack-merge')
const webpack = require('webpack')

const common = require('./webpack.common.js')

module.exports = (env) => {
  const { API_TARGET } = env

  return merge(
    common,
    {
      mode: 'production',
      plugins: [
        new webpack.DefinePlugin({ 'process.env.API_TARGET': JSON.stringify(API_TARGET) }),
      ],
    },
  )
}
