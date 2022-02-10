const { PARSE_INT_RADIX } = require('../magicNumbers');

module.exports = (string) => parseInt(string, PARSE_INT_RADIX);