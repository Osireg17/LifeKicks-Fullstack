const express = require('express');
const { RegisterValidator, validatorResult } = require('../middleware/validator');
const router = express.Router();


router.post('/register', RegisterValidator, validatorResult);






module.exports = router;