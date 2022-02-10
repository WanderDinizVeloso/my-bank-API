const { setToTwoDecimalPlaces } = require('../../../../src/services/functions');

describe('setToTwoDecimalPlaces tests', () => {
  it('should return "25.00", when number is "25"',
    () => {
      const number = 25
      const response = '25.00';

      expect(setToTwoDecimalPlaces(number)).toBe(response);
    });
});