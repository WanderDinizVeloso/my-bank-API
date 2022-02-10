const { cpfVerify } = require('../../../services/validations');
const { invalidCpf } = require('../../statusAndMessage');
const { DESTINATION_CPF } = require('../../../services/strings');

module.exports = async (req, _res, next) => {
  const { destinationCpf } = req.body;

  const verifiedCpf = cpfVerify(destinationCpf);

  if (!verifiedCpf) {
    return next(invalidCpf(DESTINATION_CPF));
  }

  return next();
};
