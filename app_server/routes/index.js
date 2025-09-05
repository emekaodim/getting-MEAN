var express = require('express');
var router = express.Router();
var ctrlMain = require('../controller/mainapp');

// Handle HEAD requests for the homepage (prevents double response issues)
router.head('/', (req, res) => {
  res.status(200).end();
});

// GET home page
router.get('/', ctrlMain.index);

module.exports = router;
