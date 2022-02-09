const LENGTH = 10;

module.exports = (password) => {
  if (!password || password.length < LENGTH) {
    return null;
  }

  const upperCaseRegex = /[A-Z]+/.test(password);
  const numberRegex = /[0-9]+/.test(password);
  const specialCharacterRegex = /[!$#%_]+/.test(password);

  const characterArray = [upperCaseRegex, numberRegex, specialCharacterRegex];

  const characterNotValid = characterArray.some((character) => !character);

  if (characterNotValid) {
    return null;
  }

  return password;
};