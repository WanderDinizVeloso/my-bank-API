const auth = require('./auth');
const error = require('./error');
const wrapper = require('./wrapper');
const validateCpf = require('./validations/validateCpf');
const validateFullName = require('./validations/validateFullName');
const validatePassword = require('./validations/validatePassword');
const validateDestinationCpf = require('./validations/validateDestinationCpf');
const validateValue = require('./validations/validateValue');

module.exports = {
  auth,
  error,
  wrapper,
  validateCpf,
  validateFullName,
  validatePassword,
  validateDestinationCpf,
  validateValue,
};