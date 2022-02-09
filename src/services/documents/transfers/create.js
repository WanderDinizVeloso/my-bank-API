const { TRANSFERS, ACCOUNTS } = require('../../strings');
const { create, searchById } = require('../../../models')(TRANSFERS);
const { searchByField } = require('../../../models')(ACCOUNTS);
const { setToTwoDecimalPlaces, protectTransferData } = require('../../functions');

module.exports = async ({ originData, destinationCpf, value }) => {
  const account = await searchByField({ cpf: destinationCpf });

  if (!account) {
    return null;
  }

  const { _id, fullName, cpf } = account;

  const { insertedId } = await create({
    origin: originData,
    destination: { _id, fullName, cpf },
    value: setToTwoDecimalPlaces(value),
    date: new Date(),
  });

  const createdTransfer = await searchById(insertedId);

  return protectTransferData(originData.cpf, destinationCpf, createdTransfer);
};
