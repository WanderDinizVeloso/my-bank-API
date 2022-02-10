const { OK } = require('http-status-codes').StatusCodes;

const { searchById } = require('../../../services/documents/accounts');
const { notFound } = require('../../statusAndMessage');
const { ACCOUNT } = require('../../../services/strings');

module.exports = async (req, res, next) => {
  const { _id: id } = req.account;

  const account = await searchById(id);

  if (!account) {
    return next(notFound(ACCOUNT));
  }

  return res
    .status(OK)
    .json({ account });
};
