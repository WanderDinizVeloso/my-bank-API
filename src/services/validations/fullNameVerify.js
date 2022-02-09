const LENGTH = 6;

module.exports = (fullName) => {
  if (
    !fullName
    || typeof fullName !== 'string'
    || fullName.length < LENGTH
  ) {
    return null;
  }

  return fullName;
};