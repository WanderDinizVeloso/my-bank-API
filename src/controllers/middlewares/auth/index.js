const { verifyToken } = require('../../../services/auth');
const { invalid, notFound } = require('../../statusAndMessage');
const { TOKEN } = require('../../../services/strings');

module.exports = (req, _res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return next(notFound(TOKEN));
  }

  const account = verifyToken(authorization);

  if (!account) {
    return next(invalid(TOKEN));
  }

  req.account = account;

  return next();
};
