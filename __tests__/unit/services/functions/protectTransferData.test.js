const { protectTransferData } = require('../../../../src/services/functions');

describe('protectAccountData tests', () => {
  it(`should return: 
    "{
      origin: { fullName: "FullNameTest", cpf: "***.456.789-**" },
      destination: { fullName: "FullNameTest", cpf: "***.456.789-**" },
    }", 
    when data is: 
    "{
      origin: { fullName: "FullNameTest", cpf: "123.456.789-00" },
      destination: { fullName: "FullNameTest", cpf: "123.456.789-00" },
    }"`,
    () => {
      const data = {
        origin: {
          fullName: 'FullNameTest',
          cpf: '123.456.789-00',
        },
        destination: {
          fullName: 'FullNameTest',
          cpf: '123.456.789-00',
        },
      };

      const response = {
        origin: {
          fullName: 'FullNameTest',
          cpf: '***.456.789-**',
        },
        destination: {
          fullName: 'FullNameTest',
          cpf: '***.456.789-**',
        },
      };

      expect(protectTransferData(data)).toEqual(response);
    });
});