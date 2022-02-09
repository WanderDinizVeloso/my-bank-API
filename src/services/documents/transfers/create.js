const { TRANSFERS, ACCOUNTS } = require('../../strings');
const { create, searchById } = require('../../../models')(TRANSFERS);
const { searchByField } = require('../../../models')(ACCOUNTS);
const { setToTwoDecimalPlaces, protectCpf } = require('../../functions');

const protectData = (originCpf, destinationCpf, data) => {
  const originCpfProtected = protectCpf(originCpf);
  const destinationCpfProtected = protectCpf(destinationCpf);

  const transferData = {
    ...data,
    origin: { ...data.origin, cpf: originCpfProtected },
    destination: { ...data.destination, cpf: destinationCpfProtected },
  };

  return transferData;
};

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

  const protectedSensitiveData = protectData(originData.cpf, destinationCpf, createdTransfer);

  return protectedSensitiveData;
};
