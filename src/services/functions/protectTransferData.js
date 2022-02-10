const protectCpf = require('./protectCpf');

module.exports = (originCpf, destinationCpf, data) => {
  const originCpfProtected = protectCpf(originCpf);
  const destinationCpfProtected = protectCpf(destinationCpf);

  const transferData = {
    ...data,
    origin: { ...data.origin, cpf: originCpfProtected },
    destination: { ...data.destination, cpf: destinationCpfProtected },
  };

  return transferData;
};