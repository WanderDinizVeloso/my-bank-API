const { compare } = require('bcrypt');

const { ACCOUNTS } = require('../../strings');
const { searchByField } = require('../../../models')(ACCOUNTS);
const { getToken } = require('../../auth');

module.exports = async ({ cpf, password }) => {
  const account = await searchByField({ cpf });
  
  if (!account) {
    return null;
  }
  
  const correctPassword = await compare(password, account.password);
 
  if (!correctPassword) {
    return null;
  }

  const { password: pass, value, ...accountWithoutPasswordAndValue } = account;

  const token = getToken(accountWithoutPasswordAndValue);

  return token;
};
