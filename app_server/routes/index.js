var express = require('express');
var router = express.Router();
var ctrlMain = require('../controller/mainapp')

/* GET home page. */
router.get('/', ctrlMain.index);

module.exports = router;
