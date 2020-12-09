const express = require('express');
const publicRouter = require('./public');

const router = express.Router();

router.use('/', publicRouter);

module.exports = router;
