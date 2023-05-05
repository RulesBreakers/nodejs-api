var express = require('express');
const { UserService } = require('../service/userService');
var router = express.Router();

router.get('/', UserService.getUsers);


module.exports = router;