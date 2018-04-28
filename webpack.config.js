const path = require('path')

module.exports = {
  mode: 'development',
  devtool: 'eval-source-map',
  entry: [
    'babel-polyfill',
    'regenerator-runtime',
    '@webcomponents/custom-elements',
    './app/es6/index.js'
  ],
  output: {
    path: path.join(__dirname, 'app'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      }
    ]
  }
}
