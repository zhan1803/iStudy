var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Main_Page', { title: 'iStudy' });
});

module.exports = router;
