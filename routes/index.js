var express = require('express');
var router = express.Router();
var accessProduct = require('../data/index').accessProduct
var accessCategory = require('../data/index').accessCategory
var accessBlog = require('../data/index').accessBlog
var accessSection = require('../data/index').accessSection
/* GET home page. */
router.get('', async function(req, res, next) {
  let productsBucket = await accessProduct
  let blogBucket = await accessBlog
  let categoryBucket = await accessCategory
  let sectionBucket = await accessSection
  res.render('index.ejs', {page:'Home', menuId:'home'})
});

module.exports = router;
