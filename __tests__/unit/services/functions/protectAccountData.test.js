const { protectAccountData } = require('../../../../src/services/functions');

describe('protectAccountData tests', () => {
  it(`should return:
    "{ fullName: "FullNameTest", cpf: "***.456.789-**" }"
    when data is:
    "{ fullName: "FullNameTest", cpf: "123.456.789-00" }"`,
    () => {
      const data = {
        fullName: 'FullNameTest',
        cpf: '123.456.789-00',
      };

      const response = ({
        fullName: 'FullNameTest',
        cpf: '***.456.789-**',
      })

      expect(protectAccountData(data)).toEqual(response);
    });
});