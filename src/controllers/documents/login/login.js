const { OK } = require('http-status-codes').StatusCodes;

const { login } = require('../../../services/documents/login');
const { invalid } = require('../../statusAndMessage');
const { CPF_OR_PASSWORD } = require('../../../services/strings');

module.exports = async (req, res, next) => {
  const { cpf, password } = req.body;

  const token = await login({ cpf, password });

  if (!token) {
    return next(invalid(CPF_OR_PASSWORD));
  }

  return res
    .status(OK)
    .json({ token });
};
