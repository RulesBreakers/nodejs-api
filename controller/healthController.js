var express = require('express');
const { HealthService } = require('../service/healthService');
var router = express.Router();

router.get('/', HealthService.ping);

module.exports = router;
