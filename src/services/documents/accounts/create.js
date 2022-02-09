const { hash } = require('bcrypt');

const { BCRYPT_SALT_ROUNDS } = process.env;

const { ACCOUNTS } = require('../../strings');
const { create, searchById, searchByField } = require('../../../models')(ACCOUNTS);

const RADIX = 10;
const INITIAL_VALUE = 0.00;
const DECIMAL_PLACES = 2;

module.exports = async ({ fullName, cpf, password }) => {
  const cpfExist = await searchByField({ cpf });

  if (cpfExist) {
    return null;
  }

  const saltRounds = parseInt(BCRYPT_SALT_ROUNDS, RADIX);
  
  const hashedPassword = await hash(password, saltRounds);

  const value = (INITIAL_VALUE).toFixed(DECIMAL_PLACES);

  const accountWithHashedPasswordAndValue = {
    fullName, cpf, value, password: hashedPassword,
  };

  const { insertedId } = await create(accountWithHashedPasswordAndValue);

  const { password: pass, ...newAccountWithoutPassword } = await searchById(insertedId);

  return newAccountWithoutPassword;
};
