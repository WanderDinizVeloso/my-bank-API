const MAXIMUM_VALUE = 2000;

module.exports = (value) => {
  if (value > MAXIMUM_VALUE) {
    return null;
  }

  return value;
};