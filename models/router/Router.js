var express = require('express');
var app = express();
var router = express.Router();

var mainBackbone = require('../backbone/MainBackbone');

router.get('/',mainBackbone.index);

module.exports = router;
