const protectCpf = require('./protectCpf');

module.exports = (data) => {
  const destinationCpfProtected = protectCpf(data.cpf);

  const depositData = {
    ...data,
    destination: { ...data.destination, cpf: destinationCpfProtected },
  };

  return depositData;
};