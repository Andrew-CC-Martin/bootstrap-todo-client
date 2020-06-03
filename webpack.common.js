const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

/**
 * Notes:
 * - I haven't added a css loader, as I'm planning on just using styled components
 * (though I'm not sure if that will work without a css loader)
 * - Likewise for fonts (I may just add them in the html file, if I even add any)
 * - Images are loaded but not modified. Webpack has a package (image-webpack-loader)
 * which can be used to minify and optimise images
 * Other features to consider adding:
 *   - code splitting
 *   -filename hashing (to ensure code updates result in client's cache being updated)
 * */
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      // loader for image assets
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      },
      // babel-loader: transpile es6 syntax
      {
        test: /\.m?(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
}
