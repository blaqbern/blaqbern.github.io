const webpack = require('webpack')
const path = require('path')
const sassLintPlugin = require('sasslint-webpack-plugin')

module.exports = {
  devtool: 'eval',
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './index.js',
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/build/',
  },
  module: {
    preLoaders: [
      { test: /\.js$/, loaders: ['eslint'], exclude: /node_modules/ }
    ],
    loaders: [
      { test: /\.js$/, loaders: ['babel'], exclude: /node_modules/ },
      {
        test: /\.s?css$/,
        loaders: [
          'style',
          'css?modules&importLoaders=1&localIndentName=[name]__[local]__[hash:base64:5]',
          'sass'
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.otf$/,
        loaders: ['url?limit=10000&mimetype=font/opentype'],
        include: path.join(__dirname, 'assets', 'fonts'),
      },
    ],
  },
  eslint: {
    configFile: './.eslintrc.js',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new sassLintPlugin({
      configFile: './.sass-lint.yml',
      context: './assets/scss/',
      quiet: false,
    }),
  ],
}
