const express = require('express');
const { RegisterController } = require('../controllers/auth');
const { RegisterValidator, validatorResult } = require('../middleware/validator');
const router = express.Router();


router.post('/register', RegisterValidator, validatorResult, RegisterController);






module.exports = router;

//npm run dev