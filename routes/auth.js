const express = require('express');
const { RegisterController, SignInController } = require('../controllers/auth');
const { RegisterValidator, SignInValidator, validatorResult } = require('../middleware/validator');
const router = express.Router();


router.post('/register', RegisterValidator, validatorResult, RegisterController);
router.post('/signin', SignInValidator, validatorResult, SignInController);






module.exports = router;

//npm run dev