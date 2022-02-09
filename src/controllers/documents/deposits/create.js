const { CREATED } = require('http-status-codes').StatusCodes;

const { create } = require('../../../services/documents/deposits');
const { createdSuccessfully, notFound } = require('../../statusAndMessage');
const { ACCOUNT, DEPOSIT } = require('../../../services/strings');

module.exports = async (req, res, next) => {
  const { destinationCpf, value } = req.body;

  const newDeposit = await create({ destinationCpf, value });

  if (!newDeposit) {
    return next(notFound(ACCOUNT));
  }

  return res
    .status(CREATED)
    .json({
      message: createdSuccessfully(DEPOSIT),
      createdDeposit: newDeposit,
    });
};
