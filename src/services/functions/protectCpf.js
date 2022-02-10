const { CPF_INITIAL_POSITION, CPF_END_POSITION } = require('../magicNumbers');

module.exports = (cpf) => {
  const cpfFragment = cpf.substring(CPF_INITIAL_POSITION, CPF_END_POSITION);

  const protectedCpf = `***${cpfFragment}**`;

  return protectedCpf;
};
