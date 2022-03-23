'use strict';

const express = require('express');
const database = require('./database/database');
const locationRouter = require('./api/location')
const adminRouter = require('./api/admin')
const bodyParser = require('body-parser')


// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.use(bodyParser.json())
app.use('/api/location', locationRouter);
app.use('/api/admin', adminRouter);




app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);