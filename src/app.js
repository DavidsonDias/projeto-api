require('dotenv').config();
const express = require('express');
const app = express();
const routes = require('./routes');

app.use(express.json());
app.use('/api/v1', routes); // versionamento na URL

module.exports = app;
