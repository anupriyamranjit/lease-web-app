'use strict';

const express = require('express');
const database = require('./database/database');
const testRouter = require('./api/test');


// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World 7');
});
app.use('/api/test', testRouter)


app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);