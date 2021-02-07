var express = require('express');
var router = express.Router();

var usersData = require('./custom-mock-data/users-data');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(usersData);
});

module.exports = router;
