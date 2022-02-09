const { ACCOUNTS } = require('../../strings');
const { searchById } = require('../../../models')(ACCOUNTS);
const { protectCpf } = require('../../functions');

module.exports = async (id) => {
  const account = await searchById(id);

  if (!account) {
    return null;
  }

  const { password, ...accountWithoutPassword } = account;

  const protectedCpf = protectCpf(account.cpf);

  const accountData = {
    ...accountWithoutPassword,
    cpf: protectedCpf,
  };

  return accountData;
};
