const express = require('express');

const { wrapper, auth, validateDestinationCpf, validateValue } = require('../middlewares');
const { create } = require('../documents/transfers');

const router = express.Router({ mergeParams: true });

router.post('/', wrapper([
  auth,
  validateDestinationCpf,
  validateValue,
  create,
]));

module.exports = router;
