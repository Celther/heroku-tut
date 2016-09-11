const path = require('path')
const express = require('express')

module.exports = {
  app() {
    const app = express()
    const indexPath = path.join(__dirname, '/../index.html')
    const buildPath = express.static(path.join(__dirname, '../build'))

    app.use('/build', buildPath)
    app.get('/', function(_, res) { res.sendFile(indexPath) })

    return app
  }
}

//app.listen(process.env.PORT || 8080);
