const express = require('express');

const { wrapper, validateDestinationCpf, validateValue } = require('../middlewares');
const { create } = require('../documents/deposits');

const router = express.Router({ mergeParams: true });

router.post('/', wrapper([
  validateDestinationCpf,
  validateValue,
  create,
]));

module.exports = router;
