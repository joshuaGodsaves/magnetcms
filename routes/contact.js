var express = require('express');
var router = express.Router();

/* GET contact page. */

var accessProduct = require('../data/index').accessProduct
var accessCategory = require('../data/index').accessCategory
var accessBlog = require('../data/index').accessBlog
var accessSection = require('../data/index').accessSection

router.get('/', function(req, res, next) {
    res.render("contact")
});

module.exports = router;
