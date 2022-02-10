const protectCpf = require('./protectCpf');

module.exports = (data) => {
  const {
    origin: { cpf: originCpf },
    destination: { cpf: destinationCpf },
  } = data;

  const originCpfProtected = protectCpf(originCpf);
  const destinationCpfProtected = protectCpf(destinationCpf);

  const transferData = {
    ...data,
    origin: { ...data.origin, cpf: originCpfProtected },
    destination: { ...data.destination, cpf: destinationCpfProtected },
  };

  return transferData;
};