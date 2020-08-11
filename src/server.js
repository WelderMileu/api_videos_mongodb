const express = require('express')
const app = express()
const config = require('dotenv').config() 
const bodyParser = require('body-parser')

const connection = require('./config/connect.js')
const collection_video = require('./collections/collection_video.js')
const router = require('./routes.js')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(router)

const port = process.env.PORT || 3000

app.listen(port, () => console.log('ruanning and ' + port))
