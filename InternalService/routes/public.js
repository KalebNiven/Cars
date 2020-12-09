const express = require('express');
const router = express.Router();
const carsController = require('../controllers/carsController');
const validate = require('express-validation');
const authValidation = require('../validations/auth')

router.get('/cars', carsController.getCars);
router.get('/cars/:id', carsController.getCarById);

module.exports = router;
