const { BAD_REQUEST, NOT_FOUND } = require('http-status-codes').StatusCodes;

const invalid = (param) => ({
  status: BAD_REQUEST,
  message: `The invalid '${param}' field.`,
});

const notFound = (param) => ({
  status: NOT_FOUND,
  message: `'${param}' not found.`,
});

const internalError = () =>
  'sorry, internal error.';

module.exports = {
  invalid,
  notFound,
  internalError,
};
