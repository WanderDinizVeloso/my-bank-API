const { hash } = require('bcrypt');

const { ACCOUNTS } = require('../../strings');
const { create, searchById, searchByField } = require('../../../models')(ACCOUNTS);

const SALT_ROUNDS = 10;
const INITIAL_VALUE = 0.00;
const DECIMAL_PLACES = 2;

module.exports = async ({ fullName, cpf, password }) => {
  const cpfExist = await searchByField({ cpf });

  if (cpfExist) {
    return null;
  }

  const hashedPassword = await hash(password, SALT_ROUNDS);

  const value = (INITIAL_VALUE).toFixed(DECIMAL_PLACES);

  const accountWithHashedPasswordAndValue = {
    fullName, cpf, value, password: hashedPassword,
  };

  const { insertedId } = await create(accountWithHashedPasswordAndValue);

  const { password: pass, ...newAccountWithoutPassword } = await searchById(insertedId);

  return newAccountWithoutPassword;
};
