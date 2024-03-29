var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('dragonEggs', { title: 'Search Results - Dragon Eggs' });
});

module.exports = router;
