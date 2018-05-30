const express = require('express')
const path = require('path')

var app = express()

app.use(express.static(path.join(__dirname, '../client/public')))

app.use('/connect4', express.static(path.join(__dirname, '../client/connect4')))

app.use('/keyword-tags', express.static(path.join(__dirname, '../client/keyword-tags')))

const port = process.argv[2] ? process.argv[2] : 8080
const server = app.listen(port, function() {})
