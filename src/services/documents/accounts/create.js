const { hash } = require('bcrypt');

const { BCRYPT_SALT_ROUNDS } = process.env;

const { ACCOUNTS } = require('../../strings');
const { create, searchById, searchByField } = require('../../../models')(ACCOUNTS);
const { stringInNumber, setToTwoDecimalPlaces, protectAccountData } = require('../../functions');
const { ACCOUNT_INITIAL_VALUE } = require('../../magicNumbers');

module.exports = async ({ fullName, cpf, password }) => {
  const cpfExist = await searchByField({ cpf });

  if (cpfExist) {
    return null;
  }

  const saltRounds = stringInNumber(BCRYPT_SALT_ROUNDS);

  const hashedPassword = await hash(password, saltRounds);

  const value = setToTwoDecimalPlaces(ACCOUNT_INITIAL_VALUE);

  const { insertedId } = await create({
    fullName, cpf, value, password: hashedPassword,
  });

  const { password: pass, ...newAccountWithoutPassword } = await searchById(insertedId);

  return protectAccountData(cpf, newAccountWithoutPassword);
};
