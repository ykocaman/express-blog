var express = require('express');
var router = express.Router();

/* GET Yazı listeleme sayfasına yönlendir */
router.get('/', function(req, res, next) {
  res.redirect('/posts');
});

module.exports = router;
