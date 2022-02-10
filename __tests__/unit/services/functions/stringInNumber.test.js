const { stringInNumber } = require('../../../../src/services/functions');

describe('stringInNumber tests', () => {
  it('should return "25", when string is "25.00"',
    () => {
      const string = '25.00'
      const response = 25;

      expect(stringInNumber(string)).toBe(response);
    });
});