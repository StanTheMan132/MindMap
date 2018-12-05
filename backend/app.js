const express = require('express');
const api = require('./api/api');

const app = express();

app.use('/api', api);

//  if no route is hit
app.use((req, res, next) => {
    res.status(404).json({
      status: 404,
      message: 'Resource not found',
    });
});


module.exports = app;

