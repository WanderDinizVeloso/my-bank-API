const protectCpf = require('../../../../src/services/functions/protectCpf');

describe('protectCpf tests', () => {
  it('should return "***.456.789-**" when Cpf is "123.456.789-00"',
    () => {
      const cpf = '123.456.789-00';
      const response = '***.456.789-**';

      expect(protectCpf(cpf)).toBe(response)
    });
});