const { BAD_REQUEST, NOT_FOUND, CONFLICT } = require('http-status-codes').StatusCodes;

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

const createdSuccessfully = (param) =>
`'${param}' created successfully.`;

const registered = (param) => ({
  status: CONFLICT,
  message: `'${param}' is already.`,
});

const invalidAttribute = (param, type, length) => ({
  status: BAD_REQUEST,
  message: `The ${param} must meet the following requirements:`
  + '- Is required;'
  + `- Must be a ${type};`
  + `- Must contain at least ${length} characters.`,
});

module.exports = {
  invalid,
  notFound,
  internalError,
  createdSuccessfully,
  registered,
  invalidAttribute,
};
