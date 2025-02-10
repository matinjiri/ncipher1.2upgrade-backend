const express = require('express')
const router = express.Router();

const CurrencyConversionController = require('../controllers/CurrencyConversionController')

router.get('/', CurrencyConversionController.convertCurrency)

module.exports = router;