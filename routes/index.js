var express = require('express');
var router = express.Router();
var User = require("../models/users");

router.get('/', function (req, res, next) {
	return res.render('index.ejs');
});

module.exports = router;