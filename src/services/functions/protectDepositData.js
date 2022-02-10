const protectCpf = require('./protectCpf');

module.exports = (destinationCpf, data) => {
  const destinationCpfProtected = protectCpf(destinationCpf);

  const depositData = {
    ...data,
    destination: { ...data.destination, cpf: destinationCpfProtected },
  };

  return depositData;
};