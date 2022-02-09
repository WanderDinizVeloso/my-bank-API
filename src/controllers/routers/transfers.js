const express = require('express');

const { wrapper, auth } = require('../middlewares');
const { create } = require('../documents/transfers');

const router = express.Router({ mergeParams: true });

router.post('/', wrapper([
  auth,
  create,
]));

module.exports = router;
