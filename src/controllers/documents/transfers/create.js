const { CREATED } = require('http-status-codes').StatusCodes;

const { create } = require('../../../services/documents/transfers');
const { createdSuccessfully, notFound } = require('../../statusAndMessage');
const { ACCOUNT, TRANSFER } = require('../../../services/strings');

module.exports = async (req, res, next) => {
  const originData = req.account;
  const { destinationCpf, value } = req.body;

  const newTransfer = await create({ originData, destinationCpf, value });

  if (!newTransfer) {
    return next(notFound(ACCOUNT));
  }

  return res
    .status(CREATED)
    .json({
      message: createdSuccessfully(TRANSFER),
      createdTransfer: newTransfer,
    });
};
