const express = require('express');
const { json } = require('body-parser');
require('dotenv').config();

const app = express();

app.use(json());

module.exports = app;
