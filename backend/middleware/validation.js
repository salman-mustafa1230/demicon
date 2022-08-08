'use strict';
const minLength = 2;
const maxLength = 100;
const responseHelper = require('../helpers/handle-response.helper');
const { body, check, validationResult } = require('express-validator');

const validateGetUserByCountry = () => {
  // we can add validation when required

  return [
    body('country', 'Country field is required.').notEmpty(),
    body('pageNo', 'pageNo field is required.').notEmpty()
  ]

}
const validate = (req, res, next) => {
  const errors = validationResult(req)
  if (errors.isEmpty()) {
    return next()
  }
  const extractedErrors = []
  errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }))

  return res.status(422).json({
    errors: extractedErrors,
  })
}
module.exports = {
  validateGetUserByCountry,
  validate
}
