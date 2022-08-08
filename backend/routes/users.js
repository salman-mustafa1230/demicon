var express = require('express');
var router = express.Router();
const userController = require("../controllers/user")
const {validateGetUserByCountry, validate} = require("./../middleware/validation")

/* GET all users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/*  random user */
// link to save random user in database if we are using third party like cloudwatch or codefresh as cron job
router.post('/random',  userController.saveRandomUser);
router.post('/by-country', validateGetUserByCountry(), validate, userController.getUserByCountryPostCode);

module.exports = router;
