const { TRANSACTIONS_MAXIMUM_VALUE } = require('../magicNumbers');

module.exports = (value) => {
  if (value > TRANSACTIONS_MAXIMUM_VALUE) {
    return null;
  }

  return value;
};