const { TRANSFERS, ACCOUNTS, ADDITION, SUBTRACTION, INSUFFICIENT_FUNDS } = require('../../strings');
const { create, searchById } = require('../../../models')(TRANSFERS);
const { searchByField, searchById: searchAccountById } = require('../../../models')(ACCOUNTS);
const {
  setToTwoDecimalPlaces, protectTransferData, updateAccountValue,
} = require('../../functions');

module.exports = async ({ originData, destinationCpf, value }) => {
  const { _id: id } = originData;

  const destinationAccount = await searchByField({ cpf: destinationCpf });
  const originAccount = await searchAccountById(id);

  if (!destinationAccount) { return null; }
  if (originAccount.value < value) { return INSUFFICIENT_FUNDS; }

  const { _id, fullName, cpf } = destinationAccount;

  await updateAccountValue(originAccount, value, SUBTRACTION);
  await updateAccountValue(destinationAccount, value, ADDITION);

  const { insertedId } = await create({
    origin: originData,
    destination: { _id, fullName, cpf },
    value: setToTwoDecimalPlaces(value),
    date: new Date(),
  });

  const createdTransfer = await searchById(insertedId);

  return protectTransferData(originData.cpf, destinationCpf, createdTransfer);
};
