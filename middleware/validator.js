const { check, validationResult } = require('express-validator');

exports.RegisterValidator = [
    check('username').not().isEmpty().trim().withMessage('Username is required'),
    check('email').isEmail().normalizeEmail().withMessage('Email is required'),
    check("password")
    .isLength({ min: 8, max: 15 })
    .withMessage("your password should have min and max length between 8-15")
    .matches(/\d/)
    .withMessage("your password should have at least one number")
    .matches(/[!@#$%^&*(),.?":{}|<>]/)
    .withMessage("your password should have at least one sepcial character"),
]

exports.validatorResult = (req, res, next) => {
    const errors = validationResult(req);
    const hasErrors = !errors.isEmpty()
    if (hasErrors) {
        const firstError = results.array()[0].msg;
        return res.status(422).json({ errorMessage: firstError });
    }
    next();
}