const express = require('express');

const {
  wrapper, auth, validateCpf, validateFullName, validatePassword,
} = require('../middlewares');

const { create, searchById } = require('../documents/accounts');

const router = express.Router({ mergeParams: true });

router.get('/', wrapper([
  auth,
  searchById,
]));

router.post('/', wrapper([
  validateFullName,
  validateCpf,
  validatePassword,
  create,
]));

module.exports = router;
