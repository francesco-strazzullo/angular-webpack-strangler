const express = require('express')
const cors = require('cors')
const tweets = require('./tweets')
const app = express()

app.use(cors())

const fixturePath = process.argv[2]

app.get('/api/tweet', function (req, res) {
  const list = fixturePath ? require(fixturePath) : tweets.list()
  res.send(list)
})

app.post('/api/tweet', function (req, res) {
  res.send()
})

app.post('/api/login', function (req, res) {
  res.send()
})

module.exports = app
