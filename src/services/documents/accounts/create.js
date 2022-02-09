const { hash } = require('bcrypt');

const { BCRYPT_SALT_ROUNDS } = process.env;

const { ACCOUNTS } = require('../../strings');
const { create, searchById, searchByField } = require('../../../models')(ACCOUNTS);
const { stringInNumber, setToTwoDecimalPlaces, protectCpf } = require('../../functions');

const INITIAL_VALUE = 0.00;

module.exports = async ({ fullName, cpf, password }) => {
  const cpfExist = await searchByField({ cpf });

  if (cpfExist) {
    return null;
  }

  const saltRounds = stringInNumber(BCRYPT_SALT_ROUNDS);

  const hashedPassword = await hash(password, saltRounds);

  const value = setToTwoDecimalPlaces(INITIAL_VALUE);

  const accountWithHashedPasswordAndValue = {
    fullName, cpf, value, password: hashedPassword,
  };

  const { insertedId } = await create(accountWithHashedPasswordAndValue);

  const { password: pass, ...newAccountWithoutPassword } = await searchById(insertedId);

  const protectedCpf = protectCpf(cpf);

  const accountData = {
    ...newAccountWithoutPassword,
    cpf: protectedCpf,
  };

  return accountData;
};
