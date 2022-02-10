const auth = require('./auth');
const error = require('./error');
const wrapper = require('./wrapper');
const validateCpf = require('./validations/validateCpf');
const validateFullName = require('./validations/validateFullName');
const validatePassword = require('./validations/validatePassword');

module.exports = {
  auth,
  error,
  wrapper,
  validateCpf,
  validateFullName,
  validatePassword,
};