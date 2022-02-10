const { cpfVerify } = require('../../../services/validations');
const { invalidCpf } = require('../../statusAndMessage');

module.exports = async (req, _res, next) => {
  const { cpf } = req.body;

  const verifiedCpf = cpfVerify(cpf);

  if (!verifiedCpf) {
    return next(invalidCpf());
  }

  return next();
};
