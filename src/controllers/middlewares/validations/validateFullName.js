const { fullNameVerify } = require('../../../services/validations');
const { invalidAttribute } = require('../../statusAndMessage');
const { FULL_NAME, STRING } = require('../../../services/strings');
const { FULL_NAME_LENGTH } = require('../../../services/magicNumbers');

module.exports = async (req, _res, next) => {
  const { fullName } = req.body;

  const verifiedFullName = fullNameVerify(fullName);

  if (!verifiedFullName) {
    return next(invalidAttribute(FULL_NAME, STRING, FULL_NAME_LENGTH));
  }

  return next();
};
