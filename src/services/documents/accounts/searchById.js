const { ACCOUNTS } = require('../../strings');
const { searchById } = require('../../../models')(ACCOUNTS);

module.exports = async (id) => {
  const account = await searchById(id);

  if (!account) {
    return null;
  }

  const { password, ...accountWithoutPassword } = account;

  return accountWithoutPassword;
};
