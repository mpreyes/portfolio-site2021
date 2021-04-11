var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Madelyns portfolio site and other interesting things, i bet.' });
});

module.exports = router;
