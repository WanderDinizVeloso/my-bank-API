const protectCpf = require('./protectCpf');

module.exports = (data) => {
  const cpfProtected = protectCpf(data.cpf);

  const accountData = {
    ...data,
    cpf: cpfProtected,
  };

  return accountData;
};