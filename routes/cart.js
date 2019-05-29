var express = require('express');
var router = express.Router();

/* GET contact page. */

var accessProduct = require('../data/index').accessProduct

router.get('/', function(req, res, next) {
    res.render("cart")
});

router.post('/purchase', function(req, res, next) {

});

router.post('/request', function(req, res, next) {

});

module.exports = router;
