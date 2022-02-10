module.exports = (cpf) => {
  const cpfVerifyRegex = /^[0-9]{3,3}\.[0-9]{3,3}\.[0-9]{3,3}-[0-9]{2,2}$/.test(cpf);
  
  if (!cpfVerifyRegex) {
    return null;
  }

  return cpf;  
};
