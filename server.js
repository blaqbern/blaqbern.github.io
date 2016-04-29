const path = require('path')
const app = require('express')()

if (process.env.NODE_ENV !== 'production') {
  require('./webpack/devServer')()
}

app
  .get('*', (req, res) => res.sendFile(path.join(__dirname, 'index.html')))
  .listen(3000)
