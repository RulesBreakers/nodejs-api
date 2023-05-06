var express = require('express');
const { ensureAuthenticated } = require('../security/provider');
const { UserService } = require('../service/userService');
var router = express.Router();

router.get('/', ensureAuthenticated,  UserService.getUsers);


module.exports = router;