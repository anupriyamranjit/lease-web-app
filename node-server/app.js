'use strict';

const express = require('express');
const database = require('./database/database');
const locationRouter = require('./api/location')


// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.use('/api/location', locationRouter);



app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);