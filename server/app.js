'use strict';

const express = require('express');

const app =  express();

app.get('/hello', (req, res, next) => {
  res.send('Hello world\nOwO');
});

app.get('/data', (req, res, next) => {
  res.send('Welcome the data route my dude.');
});

module.exports = app;
