const INITIAL_POSITION = 3;
const END_POSITION = 12;

module.exports = (cpf) => {
  const cpfFragment = cpf.substring(INITIAL_POSITION, END_POSITION);

  const protectedCpf = `***${cpfFragment}**`;

  return protectedCpf;
};
