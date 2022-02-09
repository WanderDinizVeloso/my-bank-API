const express = require('express');

const { wrapper, auth } = require('../middlewares');
const { create, searchById } = require('../documents/accounts');

const router = express.Router({ mergeParams: true });

router.get('/', wrapper([
  auth,
  searchById,
]));

router.post('/', wrapper([
  create,
]));

module.exports = router;
