'use strict';

const express = require('express');
const database = require('./database/database');
const locationRouter = require('./api/location')
const adminRouter = require('./api/admin')
const bodyParser = require('body-parser')


// Constants
const PORT = process.env.PORT || 8080;

// App
const app = express();
app.use(bodyParser.json())
app.use('/api/location', locationRouter);
app.use('/api/admin', adminRouter);

app.listen(PORT);