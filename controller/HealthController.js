var express = require('express');
const { HealthService } = require('../service/healthService');
var router = express.Router();

router.get('/ping', HealthService.ping);
router.get('/', function(req, res) {
    res.send('Welcome to our Webcup App');
  });

module.exports = router;
