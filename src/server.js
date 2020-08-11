const express = require('express')
const app = express()
const config = require('dotenv').config() 
const connection = require('./config/connect.js')

const port = process.env.PORT || 3000

app.listen(port, () => console.log('ruanning and ' + port))
