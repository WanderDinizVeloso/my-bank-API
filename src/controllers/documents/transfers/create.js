const { CREATED } = require('http-status-codes').StatusCodes;

const { create } = require('../../../services/documents/transfers');
const { createdSuccessfully, notFound, insufficientFunds } = require('../../statusAndMessage');
const { ACCOUNT, TRANSFER, INSUFFICIENT_FUNDS } = require('../../../services/strings');

module.exports = async (req, res, next) => {
  const originData = req.account;
  const { destinationCpf, value } = req.body;

  const newTransfer = await create({ originData, destinationCpf, value });

  if (!newTransfer) {
    return next(notFound(ACCOUNT));
  }

  if (newTransfer === INSUFFICIENT_FUNDS) {
    return next(insufficientFunds());
  }

  return res
    .status(CREATED)
    .json({
      message: createdSuccessfully(TRANSFER),
      createdTransfer: newTransfer,
    });
};
