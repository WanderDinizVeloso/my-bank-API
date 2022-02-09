const { TRANSFERS, ACCOUNTS } = require('../../strings');
const { create, searchById } = require('../../../models')(TRANSFERS);
const { searchByField } = require('../../../models')(ACCOUNTS);
const { setToTwoDecimalPlaces } = require('../../functions');

module.exports = async ({ originData, destinationCpf, value }) => {
  const account = await searchByField({ cpf: destinationCpf });

  if (!account) {
    return null;
  }

  const { _id, fullName, cpf } = account;
  const date = new Date();
  const valueWithDecimalPlaces = setToTwoDecimalPlaces(value);

  const newTransfer = {
    origin: originData,
    destination: { _id, fullName, cpf },
    value: valueWithDecimalPlaces,
    date,
  };

  const { insertedId } = await create(newTransfer);

  const createdTransfer = await searchById(insertedId);

  return createdTransfer;
};
