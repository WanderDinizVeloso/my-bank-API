const express = require('express');
const { json } = require('body-parser');
require('dotenv').config();

const root = require('../controllers/routers/root');

const app = express();

app.use(json());
app.use(root);

module.exports = app;
