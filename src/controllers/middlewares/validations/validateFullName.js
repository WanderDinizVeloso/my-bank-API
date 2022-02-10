const { fullNameVerify } = require('../../../services/validations');
const { invalidAttribute } = require('../../statusAndMessage');
const { FULL_NAME, STRING } = require('../../../services/strings');

const LENGTH = 6;

module.exports = async (req, _res, next) => {
  const { fullName } = req.body;

  const verifiedFullName = fullNameVerify(fullName);

  if (!verifiedFullName) {
    return next(invalidAttribute(FULL_NAME, STRING, LENGTH));
  }

  return next();
};
