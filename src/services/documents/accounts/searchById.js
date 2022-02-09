const { ACCOUNTS } = require('../../strings');
const { searchById } = require('../../../models')(ACCOUNTS);
const { protectAccountData } = require('../../functions');

module.exports = async (id) => {
  const account = await searchById(id);

  if (!account) {
    return null;
  }

  const { password, ...accountWithoutPassword } = account;

  return protectAccountData(account.cpf, accountWithoutPassword);
};
