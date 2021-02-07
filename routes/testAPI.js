var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.send('NEW API is working Properly');
});

module.exports = router;