const express = require('express');

const accounts = require('./accounts');
const login = require('./login');
const deposits = require('./deposits');
const transfers = require('./transfers');
const home = require('./home');

const root = express.Router({ mergeParams: true });

root.use('/accounts', accounts);
root.use('/login', login);
root.use('/deposits', deposits);
root.use('/transfers', transfers);
root.use('/', home);

module.exports = root;
