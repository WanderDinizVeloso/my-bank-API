const protectCpf = require('./protectCpf');

module.exports = (destinationCpf, data) => {
  const destinationCpfProtected = protectCpf(destinationCpf);

  const DepositData = {
    ...data,
    destination: { ...data.destination, cpf: destinationCpfProtected },
  };

  return DepositData;
};