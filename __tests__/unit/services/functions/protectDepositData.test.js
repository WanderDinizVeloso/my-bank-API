const { protectDepositData } = require('../../../../src/services/functions');

describe('protectAccountData tests', () => {
  it('should return "{ destination: { fullName: "FullNameTest", cpf: "***.456.789-**" }, }" when data is "{ destination: { fullName: "FullNameTest", cpf: "123.456.789-00" }, }"',
    () => {
      const data = {
        destination: {
          fullName: 'FullNameTest',
          cpf: '123.456.789-00',
        },
      };

      const response = {
        destination: {
          fullName: 'FullNameTest',
          cpf: '***.456.789-**',
        },
      };

      expect(protectDepositData(data)).toEqual(response);
    });
});