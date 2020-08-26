require('dotenv').config(); 

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const connection = require('./config/connect.js')
const router = require('./routes')

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(router)

const port = process.env.PORT || 3000

app.listen(port, () => console.log('ruanning and ' + port))
