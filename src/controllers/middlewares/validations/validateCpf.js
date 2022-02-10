const { cpfVerify } = require('../../../services/validations');
const { invalidCpf } = require('../../statusAndMessage');
const { CPF } = require('../../../services/strings');

module.exports = async (req, _res, next) => {
  const { cpf } = req.body;

  const verifiedCpf = cpfVerify(cpf);

  if (!verifiedCpf) {
    return next(invalidCpf(CPF));
  }

  return next();
};
