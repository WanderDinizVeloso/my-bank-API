const { DEPOSITS, ACCOUNTS } = require('../../strings');
const { create, searchById } = require('../../../models')(DEPOSITS);
const { searchByField } = require('../../../models')(ACCOUNTS);
const { setToTwoDecimalPlaces, protectCpf } = require('../../functions');

module.exports = async ({ destinationCpf, value }) => {
  const account = await searchByField({ cpf: destinationCpf });

  if (!account) {
    return null;
  }

  const { _id, fullName, cpf } = account;
  const date = new Date();
  const valueWithDecimalPlaces = setToTwoDecimalPlaces(value);

  const newDeposit = {
    destination: { _id, fullName, cpf }, value: valueWithDecimalPlaces, date,
  };
  
  const { insertedId } = await create(newDeposit);  
  const createdDeposit = await searchById(insertedId);
  
  const protectedCpf = protectCpf(cpf);

  const depositData = {
    ...createdDeposit, destination: { ...createdDeposit.destination, cpf: protectedCpf },
  };

  return depositData;
};
