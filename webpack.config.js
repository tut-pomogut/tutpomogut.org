const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')

module.exports = {
  entry: './app.js',
  output: {
    path: path.join(__dirname, '/'),
  },

  module: {
    rules: [{
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        fallback: "style-loader",
        use: [{loader: 'css-loader'}, {loader: 'resolve-url-loader'}, {loader: 'sass-loader'}],
      })
    }, {
      test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
      use: {
        loader: 'url-loader'
      },
    }]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: (getPath) => getPath('bundle/styles.css').replace('bundle', 'css')
    }),
    new BrowserSyncPlugin({
      watch: true,
      host: 'localhost',
      port: 3000,
      server: {baseDir: ['./']}
    })
  ]
};
