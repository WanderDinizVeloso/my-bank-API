const { ACCOUNTS, ADDITION, SUBTRACTION } = require('../strings');
const { update } = require('../../models')(ACCOUNTS);

const setToTwoDecimalPlaces = require('./setToTwoDecimalPlaces');
const stringInNumber = require('./stringInNumber');

module.exports = async (accountData, value, operator) => {
  let newValue = 0;

  if (operator === ADDITION) {
    newValue = stringInNumber(accountData.value) + stringInNumber(value);
  } else if (operator === SUBTRACTION) {
    newValue = stringInNumber(accountData.value) - stringInNumber(value);
  }

  return update({
    ...accountData,
    value: setToTwoDecimalPlaces(newValue),
  });
};