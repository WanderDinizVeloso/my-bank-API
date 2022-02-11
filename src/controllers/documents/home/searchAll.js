const { OK } = require('http-status-codes').StatusCodes;

const { searchAll } = require('../../../services/documents/home');

module.exports = async (req, res, _next) => {
  const home = searchAll();

  return res
    .status(OK)
    .json(home);
};
