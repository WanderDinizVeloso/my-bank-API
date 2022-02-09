const express = require('express');

const accounts = require('./accounts');

const root = express.Router({ mergeParams: true });

root.use('/accounts', accounts);

module.exports = root;
