module.exports = (value) => {
  if (
    !value
    || typeof value !== 'number'
    || value <= 0
  ) {
    return null;
  }

  return value;
};