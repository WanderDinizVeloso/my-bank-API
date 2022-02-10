const protectCpf = require('./protectCpf');

module.exports = (data) => {
  const { destination: { cpf } } = data;

  const destinationCpfProtected = protectCpf(cpf);

  const depositData = {
    ...data,
    destination: { ...data.destination, cpf: destinationCpfProtected },
  };

  return depositData;
};