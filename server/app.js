'use strict';

const express = require('express');

const app =  express();

app.get('/hello', (req, res, next) => {
  res.send('Hello world\nOwO');
});

module.exports = app;
