var express = require('express');
var router = express.Router();

/* GET product route. */

var accessProduct = require('../data/index').accessProduct
var accessCategory = require('../data/index').accessCategory
var accessBlog = require('../data/index').accessBlog
var accessSection = require('../data/index').accessSection

router.get('/', function(req, res, next) {
    res.render("products")
});

router.get('/:product', function(req, res, next) {
    res.render("product")
});


module.exports = router;
