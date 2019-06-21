var express = require('express');
var app = express();
var router = express.Router();

var mainBackbone = require('../backbone/MainBackbone');

router.get('/',mainBackbone.index);
router.get('/about',mainBackbone.about);
router.get('/sitemap',mainBackbone.sitemap);

module.exports = router;
