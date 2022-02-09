const protectCpf = require('./protectCpf');

module.exports = (cpf, data) => {
  const cpfProtected = protectCpf(cpf);

  const accountData = {
    ...data,
    cpf: cpfProtected,
  };

  return accountData;
};