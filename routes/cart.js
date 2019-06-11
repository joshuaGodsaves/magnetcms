var express = require('express');
var router = express.Router();

/* GET contact page. */

var accessProduct = require('../data/index').accessProduct

router.get('/', function(req, res, next) {
    // returns items in cart

    res.render("cart")
});

router.post('/add', function(req, res, next) {
    //Add item to cart

});

router.post('/purchase', function(req, res, next) {
    //It payment method added, make purchase of items

});

router.post('/request', function(req, res, next) {
    // Generate receipt for items in cart
});

module.exports = router;
