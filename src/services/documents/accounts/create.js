const { hash } = require('bcrypt');

const { ACCOUNTS } = require('../../strings');
const { create, searchById, searchByField } = require('../../../models')(ACCOUNTS);

const SALT_ROUNDS = 10;

module.exports = async ({ fullName, cpf, password }) => {
  const verifiedAccount = await searchByField({ cpf });

  if (verifiedAccount) {
    return null;
  }

  const hashedPassword = await hash(password, SALT_ROUNDS);

  const accountWithHashedPassword = {
    fullName, cpf, password: hashedPassword,
  };

  const { insertedId } = await create(accountWithHashedPassword);

  const { password: pass, ...newAccountWithoutPassword } = await searchById(insertedId);

  return newAccountWithoutPassword;
};
