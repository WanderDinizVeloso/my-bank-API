const { TRANSACTIONS_MAXIMUM_VALUE } = require('../magicNumbers');

module.exports = (value) => {
  if (
    !value
    || typeof value !== 'number'
    || value <= 0
    || value > TRANSACTIONS_MAXIMUM_VALUE
  ) {
    return null;
  }

  return value;
};