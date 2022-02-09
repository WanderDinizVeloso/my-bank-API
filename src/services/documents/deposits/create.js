const { DEPOSITS } = require('../../strings');
const { create, searchById, searchByField } = require('../../../models')(DEPOSITS);

const DECIMAL_PLACES = 2;

module.exports = async ({ destinationCpf, value }) => {
  const account = await searchByField({ cpf: destinationCpf });

  if (!account) {
    return null;
  }

  const { _id, fullName, cpf } = account;
  const date = new Date();
  const valueWithDecimalPlaces = (value).toFixed(DECIMAL_PLACES);

  const newDeposit = {
    destination: { _id, fullName, cpf },
    value: valueWithDecimalPlaces,
    date,
  };

  const { insertedId } = await create(newDeposit);

  const createdDeposit = await searchById(insertedId);

  return createdDeposit;
};