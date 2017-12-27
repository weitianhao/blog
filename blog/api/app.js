const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express()
const back = require('./back/backstage')
app.use('/back',back)