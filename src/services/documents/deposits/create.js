const { DEPOSITS, ACCOUNTS, ADDITION } = require('../../strings');
const { create, searchById } = require('../../../models')(DEPOSITS);
const { searchByField } = require('../../../models')(ACCOUNTS);
const {
  setToTwoDecimalPlaces, protectDepositData, updateAccountValue,
} = require('../../functions');

module.exports = async ({ destinationCpf, value }) => {
  const account = await searchByField({ cpf: destinationCpf });

  if (!account) {
    return null;
  }

  const { _id, fullName, cpf } = account;

  const { insertedId } = await create({
    destination: { _id, fullName, cpf },
    value: setToTwoDecimalPlaces(value),
    date: new Date(),
  });

  const createdDeposit = await searchById(insertedId);

  await updateAccountValue(account, value, ADDITION);
  
  return protectDepositData(destinationCpf, createdDeposit);
};
