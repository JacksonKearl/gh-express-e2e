var express = require('express');
var router = express.Router();
var products = require("../data/products.json");

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { products: products });
});

/* GET home page. */
router.get('/saveme', function (req, res, next) {
  res.send('you are saved')
});

module.exports = router;
