const express = require('express');
const app = express();
const config = require('dotenv').config(); 
const bodyParser = require('body-parser');
const cors = require('cors');

const connection = require('./config/connect.js')
const collection_video = require('./collections/collection_video.js')
const router = require('./routes.js')

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(router)

const port = process.env.PORT || 3000

app.listen(port, () => console.log('ruanning and ' + port))
