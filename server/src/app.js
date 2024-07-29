require('dotenv').config();
const express = require('express');
const urlRouter = require('./routes/url.routes');

const app = express();

app.use(express.json());
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.use('/', urlRouter);

module.exports = app;