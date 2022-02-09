const { CREATED } = require('http-status-codes').StatusCodes;

const { create } = require('../../../services/documents/accounts');
const { createdSuccessfully, registered } = require('../../statusAndMessage');
const { CPF, ACCOUNT } = require('../../../services/strings');

module.exports = async (req, res, next) => {
  const { fullName, cpf, password } = req.body;

  const newAccount = await create({ fullName, cpf, password });

  if (!newAccount) {
    return next(registered(CPF));
  }

  return res
    .status(CREATED)
    .json({
      message: createdSuccessfully(ACCOUNT),
      createdAccount: newAccount,
    });
};
