const { valueVerify } = require('../../../services/validations');
const { invalidValue } = require('../../statusAndMessage');
const { TRANSACTIONS_MAXIMUM_VALUE } = require('../../../services/magicNumbers');

module.exports = async (req, _res, next) => {
  const { value } = req.body;

  const verifiedValue = valueVerify(value);

  if (!verifiedValue) {
    return next(invalidValue(TRANSACTIONS_MAXIMUM_VALUE));
  }

  return next();
};