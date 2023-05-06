var express = require('express');
const { ensureAuthenticated } = require('../security/provider');
const { DreamService } = require('../service/dreamService');
var router = express.Router();


router.get('/', ensureAuthenticated, DreamService.getDreams);

module.exports = router;