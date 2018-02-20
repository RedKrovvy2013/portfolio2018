var webpack = require('webpack')
var path = require('path')

module.exports = {
  entry: [
    './client/app.js'
  ],
  devServer: {
    contentBase: './client/public',
    historyApiFallback: true
  },
  output: {
    path: path.resolve(__dirname, "client/public"),
    publicPath: "/assets/",
    filename: "bundle.js"
  },
  plugins: [
    new webpack.ProvidePlugin({
      'window.jQuery': 'jquery'
    })
  ],
  module: {
    rules: [
    {
        test: /\.html$/,
        loader: 'raw-loader'
    }],
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'stage-0']
        },
        exclude: /(node_modules|bower_components)/
      }
    ]
  }
}
