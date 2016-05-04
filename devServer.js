const config = require('./webpack.config')
const webpack = require('webpack')
const webpackDevServer = require('webpack-dev-server')

new webpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  stats: {
    colors: true
  }
}).listen(8080, 'localhost', (err) => {
  if (err) {
    console.log(`Webpack dev server error: ${err}`)
    return
  }
  console.log('Webpack dev server listening on port 8080');
})
