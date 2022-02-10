const { NUMBERS_DECIMAL_PLACES } = require('../magicNumbers');

module.exports = (number) => (number).toFixed(NUMBERS_DECIMAL_PLACES);