const express = require('express');

const accounts = require('./accounts');
const login = require('./login');

const root = express.Router({ mergeParams: true });

root.use('/accounts', accounts);
root.use('/login', login);

module.exports = root;
