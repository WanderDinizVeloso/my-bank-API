const { FULL_NAME_LENGTH } = require('../magicNumbers');

module.exports = (fullName) => {
  if (
    !fullName
    || typeof fullName !== 'string'
    || fullName.length < FULL_NAME_LENGTH
  ) {
    return null;
  }

  return fullName;
};