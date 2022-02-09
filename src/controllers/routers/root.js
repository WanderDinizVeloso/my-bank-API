const express = require('express');

const accounts = require('./accounts');
const login = require('./login');
const deposits = require('./deposits');

const root = express.Router({ mergeParams: true });

root.use('/accounts', accounts);
root.use('/login', login);
root.use('/deposits', deposits);

module.exports = root;
