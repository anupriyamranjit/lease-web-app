'use strict';

const express = require('express');
const database = require('./database/database');

// Import routes
const testRouter = require('./api/sample');
const locationRouter = require('./api/location')

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.use(express.json());

// app.get('/', (req, res) => {
//   res.send('Hello World 7');
// });

// Use routes
app.use('/api/test', testRouter);
app.use('/api/location', locationRouter);


app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

module.exports = app
