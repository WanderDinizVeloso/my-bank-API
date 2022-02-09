const { verifyToken } = require('../../../services/auth');
const { invalid, notFound } = require('../../statusAndMessage');
const { TOKEN } = require('../../../services/strings');

module.exports = (req, _res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return next(notFound(TOKEN));
  }

  const user = verifyToken(authorization);

  if (!user) {
    return next(invalid(TOKEN));
  }

  req.user = user;

  return next();
};
