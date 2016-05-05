const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: './index.js',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: 'build/',
  },
  module: {
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
  plugins: [
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': "'production'" }),
    new webpack.optimize.UglifyJsPlugin()],
}
