module.exports = (handlers) => handlers
  .map((handler) => async (req, res, next) => {
    try {
      return handler(req, res, next);
    } catch (err) {
      return next(err);
    }
  });
